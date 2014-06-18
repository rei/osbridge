var fs          = require( 'fs' );
var util        = require( 'util' );
var _           = require( 'lodash' );
var gulp        = require( 'gulp' );
var gutil       = require( 'gulp-util' );
var livereload  = require( 'gulp-livereload' );
var yaml        = require( 'js-yaml' );
var marked      = require( 'marked' );
var nunjucks    = require( 'nunjucks' );

// Config
// ----------------------------------------------------------------------------
var SLIDES_PATH     = './content/slides.md';
var TMPL_PATH       = './templates/base.html';
var CONFIG_PATH     = './slide_config.js';
var OUT_PATH        = './index.html';
var SLIDE_DELIMITER = '\n---\n';

// Render slides
// ----------------------------------------------------------------------------
var renderSlides = function ( opts ) {

    // Gather opts
    var livereload = opts.livereload || false;

    // Parse slide content
    var slides = [];
    var rawSlides = fs.readFileSync( SLIDES_PATH ).toString().split( SLIDE_DELIMITER );

    rawSlides.forEach( function ( slide, idx ) {
        var SECTION_DELIMITER = '\n\n';
        var sections    = slide.split( SECTION_DELIMITER );
        var metadata    = yaml.safeLoad( sections[ 0 ] );
        var notes       = metadata.notes ? marked( metadata.notes ) : null;
        var html        = marked( sections.slice( 1 ).join( SECTION_DELIMITER ), {
                              sanitize: false
                          } );

        // Post-process lists to build/fade if enabled
        if ( metadata.build_lists || metadata.build_fade_lists ) {
            var classes = 'build';
            if ( metadata.build_fade_lists ) {
                classes += ' fade';
            }
            [ 'ul', 'ol' ].forEach( function ( listEl ) {
                html = html.replace(
                    new RegExp( '<' + listEl + '>', 'g' ),
                    '<' + listEl + ' class="' + classes + '">'
                );
            } );
        }

        // Build the slide context for the template
        slides.push( _.assign( {}, metadata, {
            content: html,
            notes: notes,
            is_segue_slide: ( metadata.class || '' ).indexOf( 'segue' ) > -1
        } ) );
    } );

    // Render slide template
    var html = nunjucks.render( TMPL_PATH, {
        slides:     slides,
        livereload: livereload
    } );
    fs.writeFileSync( OUT_PATH, html );

    console.log( util.format(
        'Wrote %d slides%sfrom %s -> %s -> %s',
        slides.length,
        livereload ? ' (with ' + gutil.colors.bold( 'livereload' ) + ' support) ' : ' ',
        gutil.colors.grey( SLIDES_PATH ),
        gutil.colors.grey( TMPL_PATH ),
        gutil.colors.magenta( OUT_PATH )
    ) );
}

gulp.task( 'render-slides', renderSlides );

// Watch
// ----------------------------------------------------------------------------
var WATCH_GLOBS = [
    SLIDES_PATH,
    TMPL_PATH,
    CONFIG_PATH
];

gulp.task( 'watch', function ( cb ) {

    // Die gracefully on ctrl+c
    process.on( 'SIGINT', function () {
        console.log( '\nExiting...' );
        cb();
        process.exit( 0 );
    });

    // Start the livereload server, render slides with livereload
    livereload.listen();
    renderSlides( { livereload: true } );

    // On slide changes, re-render slides with lr support, trigger lr change
    gulp.watch( WATCH_GLOBS )
        .on( 'change', function ( event ) {
            renderSlides( { livereload: true } );
            livereload.changed( event );
        } );
} )

// Default
// ----------------------------------------------------------------------------
gulp.task( 'default', [ 'render-slides' ] );
