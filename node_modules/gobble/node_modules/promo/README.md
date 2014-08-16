# promo.js

Convert node-style callback-based functions into promise-based equivalents for easier composition.


## Installation

```
$ npm i promo
```


## Usage

```js
var promo = require( 'promo' );

// Take a standard function...
var standard = function ( arg1, arg2, arg3, callback ) {
  // callback is eventually called with two arguments - an error
  // (if applicable) and the result;
};

// ...and create a promise-returning equivalent
var promisified = promo( standard );

// Then, instead of doing this...
standard( a, b, c, function ( err, result ) {
	if ( err ) {
		return handleError( err );
	}

	handleResult( result );
});

// ...do this:
promisified( a, b, c ).then( handleResult, handleError );
```

Real-world example:

```js
var readFile = promo( require( 'fs' ).readFile ),
    writeFile = promo( require( 'fs' ).writeFile ),
    glob = promo( require( 'glob' ) ),
    mkdirp = promo( require( 'mkdirp' ) );
```

If necessary, you can pass in the context as a second argument:

```js
var someModule = {
  someMethod: function ( callback ) {
    // because this method uses `this`, we need to
    // pass in a context
    this.doSomething( callback );
  }
};

var promisified = promo( someModule.someMethod, someModule );
```

If you convert a function that references `this`, and don't pass in a context, promo will warn you about it.


## Credits

This module uses [es6-promise](https://github.com/jakearchibald/es6-promise) by Jake Archibald.


## License

MIT.
