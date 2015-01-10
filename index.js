'use strict';

var http = require( 'https' );

var ShorteSt = function ( apiKey ) {

    this.key = apiKey;
    this.host = 'api.shorte.st';
    this.path = '/v1/data/url';

};

ShorteSt.prototype.link = function ( link, callback ) {

    var postData = 'urlToShorten=' + link;

    var options = {
        host    : this.host,
        port    : 443,
        path    : this.path,
        method  : 'PUT',
        headers : {
            accept             : '*/*',
            'public-api-token' : this.key,
            'Content-Type'     : 'application/x-www-form-urlencoded',
            'Content-Length'   : postData.length
        }
    };

    var req = http.request( options, function ( res ) {
        res.setEncoding( 'utf8' );
        res.on( 'data', function ( chunk ) {
            try {
                var data = JSON.parse( chunk );
                if ( !data || data.status !== 'ok' || !data.shortenedUrl ) {
                    return callback( new Error( 'Invalid Shorte.st response' ) );
                }
                callback( null, data.shortenedUrl );
            } catch ( ex ) {
                callback( new Error( ex ) );
            }
        } );
    } );

    req.on( 'error', function ( e ) {
        callback( new Error( e.message ) );
    } );

    req.write( postData );
    req.end();
};

module.exports = ShorteSt;