#!/usr/bin/env python

'''
' Line Endings:
' I converted the split characters to '\r\n' to match Windows line endings.
' If you get only one slide compiling, there's a chance you're using Linux
' line endings and that's breaking the match here.
'''

import codecs
import re
import jinja2
import markdown

def process_slides():
  with codecs.open('../../presentation-output.html', 'w', encoding='utf8') as outfile:
    md = codecs.open('./slides.md', encoding='utf8').read()
    md_slides = md.split('\r\n---\r\n')
    print 'Compiled %s slides.' % len(md_slides)

    slides = []
    # Process each slide separately.
    for md_slide in md_slides:
      slide = {}
      sections = md_slide.split('\r\n\r\n')
      # Extract metadata at the beginning of the slide (look for key: value)
      # pairs.
      metadata_section = sections[0]
      metadata = parse_metadata(metadata_section)
      slide.update(metadata)
      remainder_index = metadata and 1 or 0
      # Get the content from the rest of the slide.
      content_section = '\r\n\r\n'.join(sections[remainder_index:])
      html = markdown.markdown(content_section)
      slide['content'] = postprocess_html(html, metadata)

      slides.append(slide)

    template = jinja2.Template(open('base.html').read())

    outfile.write(template.render(locals()))

def parse_metadata(section):
  """Given the first part of a slide, returns metadata associated with it."""
  metadata = {}
  metadata_lines = section.split('\r\n')
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
