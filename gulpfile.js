var fs          = require( 'fs' );
var _           = require( 'lodash' );
var gulp        = require( 'gulp' );
var yaml        = require( 'js-yaml' );
var marked      = require( 'marked' );
var nunjucks    = require( 'nunjucks' );

var SLIDES_PATH     = './content/slides.md';
var TMPL_PATH       = './templates/base.html';
var OUT_PATH        = './index2.html';
var SLIDE_DELIMITER = '\n---\n';

gulp.task( 'render-slides', function () {

    // Parse slide content
    var slides = [];
    var rawSlides = fs.readFileSync( SLIDES_PATH ).toString().split( SLIDE_DELIMITER );
    rawSlides.forEach( function ( slide, idx ) {
        var SECTION_DELIMITER = '\n\n';
        var sections = slide.split( SECTION_DELIMITER );
        var metadata = yaml.safeLoad( sections[ 0 ] );
        var content  = marked( sections.slice( 1 ).join( SECTION_DELIMITER ) );
        slides.push( _.assign( {}, metadata, {
            content: content,
            is_segue_slide: ( metadata.class || '' ).indexOf( 'segue' ) > -1
        } ) );
    } );

    // Render slide template
    fs.writeFileSync( OUT_PATH, nunjucks.render( TMPL_PATH, { slides: slides } ) );
} );

gulp.task( 'default', [ 'render-slides' ] );
