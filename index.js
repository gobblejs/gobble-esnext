module.exports = esnext;

function esnext ( code, options ) {
	return require( 'esnext' ).compile( code );
}

esnext.defaults = {
	accept: '.js'
};
