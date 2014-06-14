# REI HTML5 Slide Framework

> Based on [Google I/O 2012 HTML5 Slides](https://code.google.com/p/io-2012-slides/)

This slide framework is customized to be REI-themed, along with various
improvements to scripts and project structure.

See `template.html` for a walkthrough of this presentation framework's
abilities. (It's the original template for Google I/O, so don't let the Google
theme throw ya.)

## Creating a new presentation

To create a new presentation, **create a new branch**, and modify it to your
heart's content.

## Configuring the slides

Much of the deck is customized by changing the settings in `slide_config.js`.
Some of the customizations include the title, Analytics tracking ID, speaker
information (name, social urls, blog), web fonts to load, themes, and other
general behavior.

Configuration changes are loaded at runtime via JavaScript. There's no need to
re-render the slides on changes.

## Editing the Slides

Slide content is stored in `scripts/md/slides.md`. Each slide is separated by a
`---`.

To render the slides, run `render.sh`. This will run the slide contents through
the `scripts/md/base.html` template and update `index.html`, which can be
accessed directly as a file, or served with `serve.sh`. (See "Running the
slides" below.)

Please note that Python2, jinja2, and markdown are required for rendering. The
easiest way to install these is:

1. Install [Python2](https://www.python.org/downloads/)
2. Install [pip](https://pip.pypa.io/en/latest/installing.html)
3. Install jinja2 and markdown with pip

## Editing the Styles

[Compass](http://compass-style.org/install/) is a CSS preprocessor used to
compile SCSS/SASS into CSS. We chose SCSS for the new slide deck for
maintainability, easier browser compatibility, and because...it's the future!

That said, if not comfortable working with SCSS or don't want to learn
something new, not a problem. The generated .css files can already be found in
(see [`/theme/css`](theme/css)). You can just edit those and bypass SCSS
altogether. However, our recommendation is to use Compass. It's super easy to
install and use.

### Installing Compass and making changes

1. Install Ruby
2. gem install compass

    sudo gem update --system
    sudo gem install compass

Next, you'll want to watch for changes to the exiting .scss files in
[`/theme/scss`](theme/scss) and any new ones you add:

    $ compass watch

This command automatically recompiles the .scss file when you make a change.
Its corresponding .css file is output to [`/theme/css`](theme/css). Slick.

By default, [`config.rb`](config.rb) in the main project folder outputs
`minified.css`. It's a best practice after all! However, if you want unminified
files, run watch with the style output flag:

    compass watch -s expanded

*Note:* You should *not* need to edit [`_base.scss`](theme/scss/_base.scss).

## Running the slides

The slides can be run locally from `file://` making development easy :)

### Running from a web server

If at some point you should need a web server, run [`serve.sh`](serve.sh), and
access
[`http://localhost:8000/template.html`](http://localhost:8000/template.html).

You can also specify a custom port:

    $ ./serve.sh 8080

### Presenter mode

The slides contain a presenter mode feature (beta) to view + control the slides
from a popup window.

To enable presenter mode, add `presentme=true` to the URL: [http://localhost:8000/template.html?presentme=true](http://localhost:8000/template.html?presentme=true)

To disable presenter mode, hit [http://localhost:8000/template.html?presentme=false](http://localhost:8000/template.html?presentme=false)

Presenter mode is sticky, so refreshing the page will persist your settings.

### Other runtime options

- Pressing 'h' highlights code snippets
- Pressing 'p' toggles speaker notes (if they're on the current slide)
- Pressing 'f' toggles fullscreen viewing
- Pressing 'w' toggles widescreen
- Pressing 'o' toggles overview mode
- Pressing 'ESC' toggles off these goodies

Run through [template.html](template.html) for more info.

---

That's all she wrote!
