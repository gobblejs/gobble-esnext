var Promise = require( 'es6-promise' ).Promise;

promo.Promise = Promise;
module.exports = promo;

function promo ( fn, context ) {
    var result, key;

    if ( context === undefined && /this/.test( fn.toString() ) ) {
        console.warn( 'Function appears to reference `this` - you should pass in a context as the second argument' );
    }

    result = function () {
        var args = toArray( arguments );

        return new Promise( function ( fulfil, reject ) {
            var callback = function ( err ) {
                var args;

                if ( err ) return reject( err );

                args = toArray( arguments );
                fulfil.apply( null, args.slice( 1 ) );
            };

            args.push( callback );
            fn.apply( context, args );
        });
    };

    for ( key in fn ) {
        if ( fn.hasOwnProperty( key ) ) {
            result[ key ] = fn[ key ];
        }
    }

    return result;
};

function toArray ( arrayLike ) {
    var arr = [], i = arrayLike.length;

    while ( i-- ) {
        arr[i] = arrayLike[i];
    }

    return arr;
}
