# scenery

> REI's HTML5 Slide Framework based on [Google I/O 2012 HTML5 Slides](https://code.google.com/p/io-2012-slides/)

This is REI's HTML5 slide framework that:

- Is REI-themed
- Renders markdown -> HTML renderer by default
- Includes watch & livereload

See `tutorial.html` for a walkthrough of this presentation framework's
abilities. (It's the original template for Google I/O, so don't let the Google
theme throw ya.)

## Quick start

1. Clone this repo and `cd` into it

        git clone git@github.com:reidev/scenery.git
        cd scenery

1. Create a new branch for your presentation,

        git branch -b my-presentation

1. Install render dependencies

        npm install

1. Modify slide config `slide_config.js` and slides in `content/slides.md` as needed

1. Render slides

        npm render

Read the sections below for more details.

## Creating a New Presentation

To create a new presentation, **create a new branch**, and modify it to your
heart's content.

## Configuration

Much of the deck is customized by changing the settings in `slide_config.js`.
Some of the customizations include the title, speaker information,
web fonts to load, themes, and other general behavior.

Configuration changes are loaded at runtime via JavaScript. There's no need to
re-render the slides on config changes.

## Editing the Slides

Slide content is stored in `content/slides.md`. Each slide is separated by a
`---`. Go through the examples to learn how to write them.

The slide template is stored in `templates/base.html`.

After any change to the slides or the template, you must **render** the slides.
To do so, first assure [Node.js](http://nodejs.org) is installed on your system,
and run the following from the project root:

    npm install

Once the render dependencies are installed, you may run the following to render
the slides:

    gulp

This will run the slide contents through the `templtes/base.html` template and
update `index.html`, which can be accessed directly as a file, or served with
`npm start`. (See "Running the slides" below.)

You may also enable watch and livereload to rerender and reload the slides
after every change to the template or the slide content file:

    gulp watch

## Running the Slides

The slides can be run locally by opening `index.html` in a web browser after
rendering.

You may also start a dev server by running `npm start`, and accessing
[`http://localhost:8000/template.html`](http://localhost:8000/template.html).

### Presenter Mode

The slides contain a presenter mode feature (beta) to view + control the slides
from a popup window.

To enable presenter mode, add `presentme=true` to the URL, e.g., [http://localhost:8000/template.html?presentme=true](http://localhost:8000/template.html?presentme=true)

To disable presenter mode, hit [http://localhost:8000/template.html?presentme=false](http://localhost:8000/template.html?presentme=false)

Presenter mode is sticky, so refreshing the page will persist your settings.

### Other Runtime Options

- Pressing 'h' highlights code snippets
- Pressing 'p' toggles speaker notes (if they're on the current slide)
- Pressing 'f' toggles fullscreen viewing
- Pressing 'w' toggles widescreen
- Pressing 'o' toggles overview mode
- Pressing 'ESC' toggles off these goodies

Run through `tutorial.html` for more info.

## Editing the Styles

You should not need to edit the default slide styles, but if you really want
to, read on.

[Compass](http://compass-style.org/install/) is a CSS preprocessor used to
compile SCSS/SASS into CSS. We chose SCSS for the new slide deck for
maintainability, easier browser compatibility, and because...it's the future!

That said, if not comfortable working with SCSS or don't want to learn
something new, not a problem. The generated .css files can already be found in
(see [`/theme/css`](theme/css)). You can just edit those and bypass SCSS
altogether. However, our recommendation is to use Compass. It's super easy to
install and use.

### Installing Compass and Making Changes

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

---

That's all she wrote!
