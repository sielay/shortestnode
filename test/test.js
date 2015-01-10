'use strict';

var assert = require( 'assert' );
var Shortest = require( __dirname + '/../index.js' );

describe( 'ShorteSt', function () {
    describe( 'link', function () {
        it( 'It should get me shortened link', function ( done ) {
            // you need to put here your API key
            var shortest = new Shortest( '...' );
            shortest.link( 'https://github.com/sielay/shortestnode', function ( error, link ) {
                assert.equal( error, null );
                assert.notEqual( link, null );
                done();
            } );
        } )
    } )
} )