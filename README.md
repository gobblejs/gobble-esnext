# gobble-coffee

Compile ES6 files with gobble and [esnext](https://github.com/esnext/esnext).

## Installation

First, you need to have gobble installed - see the [gobble readme](https://github.com/gobblejs/gobble) for details. Then,

```bash
npm i -D gobble-esnext
```

## Usage

**gobblefile.js**

```js
var gobble = require( 'gobble' );
module.exports = gobble( 'js' ).map( 'esnext' );
```

## Source code

```js
module.exports = esnext;

function esnext ( code, options ) {
  return require( 'esnext' ).compile( code );
}

esnext.defaults = {
  accept: '.js'
};
```


## License

MIT. Copyright 2014 Rich Harris
