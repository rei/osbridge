var fs          = require( 'fs' );
var _           = require( 'lodash' );
var gulp        = require( 'gulp' );
var yaml        = require( 'js-yaml' );
var marked      = require( 'marked' );
var nunjucks    = require( 'nunjucks' );

// Config
// ----------------------------------------------------------------------------
var SLIDES_PATH     = './content/slides.md';
var TMPL_PATH       = './templates/base.html';
var OUT_PATH        = './index2.html';
var SLIDE_DELIMITER = '\n---\n';

// Render slides
// ----------------------------------------------------------------------------
gulp.task( 'render-slides', function () {

    // Parse slide content
    var slides = [];
    var rawSlides = fs.readFileSync( SLIDES_PATH ).toString().split( SLIDE_DELIMITER );

    rawSlides.forEach( function ( slide, idx ) {
        var SECTION_DELIMITER = '\n\n';
        var sections    = slide.split( SECTION_DELIMITER );
        var metadata    = yaml.safeLoad( sections[ 0 ] );
        var html        = marked( sections.slice( 1 ).join( SECTION_DELIMITER ) );

        // Post-process lists to build if enabled
        if ( metadata.build_lists ) {
            html = html.replace( '<ul>', '<ul class="build">' );
            html = html.replace( '<ol>', '<ol class="build">' );
        }

        // Build the slide context for the template
        slides.push( _.assign( {}, metadata, {
            content: html,
            is_segue_slide: ( metadata.class || '' ).indexOf( 'segue' ) > -1
        } ) );
    } );

    // Render slide template
    fs.writeFileSync( OUT_PATH, nunjucks.render( TMPL_PATH, { slides: slides } ) );
} );

// Watch
// ----------------------------------------------------------------------------
gulp.task( 'watch', [ 'render-slides' ], function ( cb ) {
    gulp.watch( SLIDES_PATH, [ 'render-slides' ] );
} )

// Default
// ----------------------------------------------------------------------------
gulp.task( 'default', [ 'render-slides' ] );
