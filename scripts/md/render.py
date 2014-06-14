#!/usr/bin/env python
'''
Render slide content stored in `slides.md` through `base.html`. Slides are
separated by '---'.

Note about line endings: Additional '\r's were added to line-ending splits to
support Windows line endings. If you get only one slide compiling, it's likely
related to that.
'''

import codecs
import re
import jinja2
import markdown

SLIDE_TMPL_PATH = './base.html'
SLIDE_MD_PATH   = './slides.md'
OUT_PATH        = '../../index.html'
RENDER_WARNING  = '''<!--
GENERATED FILE WARNING
======================

This file RE-WRITTEN every time slides are rendered. Do not edit this
file directly, rather edit the content and template and re-render instead.

Slide content: %s
Template file: %s
-->
''' % ( SLIDE_TMPL_PATH, SLIDE_MD_PATH )

def process_slides():
  with codecs.open(OUT_PATH, 'w', encoding='utf8') as outfile:
    md = codecs.open(SLIDE_MD_PATH, encoding='utf8').read()
    md_slides = re.split(r'\r?\n---\r?\n',md)
    print 'Compiled %s slides.' % len(md_slides)

    slides = []
    # Process each slide separately.
    for md_slide in md_slides:
      slide = {}
      sections = re.split(r'\r?\n\r?\n', md_slide)
      # Extract metadata at the beginning of the slide (look for key: value)
      # pairs.
      metadata_section = sections[0]
      metadata = parse_metadata(metadata_section)
      slide.update(metadata)
      remainder_index = metadata and 1 or 0
      # Get the content from the rest of the slide.
      content_section = '\n\n'.join(sections[remainder_index:])
      html = markdown.markdown(content_section)
      slide['content'] = postprocess_html(html, metadata)

      slides.append(slide)

    template = jinja2.Template(open(SLIDE_TMPL_PATH).read())

    outfile.write( RENDER_WARNING + template.render( locals() ) )

def parse_metadata(section):
  """Given the first part of a slide, returns metadata associated with it."""
  metadata = {}
  metadata_lines = re.split(r'\r?\n', section)
  for line in metadata_lines:
    colon_index = line.find(':')
    if colon_index != -1:
      key = line[:colon_index].strip()
      val = line[colon_index + 1:].strip()
      metadata[key] = val

  return metadata

def postprocess_html(html, metadata):
  """Returns processed HTML to fit into the slide template format."""
  if metadata.get('build_lists') and metadata['build_lists'] == 'true':
    html = html.replace('<ul>', '<ul class="build">')
    html = html.replace('<ol>', '<ol class="build">')
  return html

if __name__ == '__main__':
  process_slides()
