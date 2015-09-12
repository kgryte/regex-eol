Newline
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][codecov-image]][codecov-url] [![Dependencies][dependencies-image]][dependencies-url]

> [Regular expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) to split a [newline](https://en.wikipedia.org/wiki/Newline) delimited string.


## Installation

``` bash
$ npm install regex-eol
```


## Usage

``` javascript
var re = require( 'regex-eol' );
```

#### re

[Regular expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) to split a [newline](https://en.wikipedia.org/wiki/Newline) delimited `string`. 

``` javascript
var bool = re.test( '\n' );
// returns true

bool = re.test( '\r\n' );
// returns true

bool = re.test( '\\r\\n' );
// returns false
```


## Examples

``` javascript
var re = require( 'regex-eol' );

var str;

console.log( re.test( '\r\n' ) );
// returns true

console.log( re.test( '\n' ) );
// returns true

console.log( re.test( '\r' ) );
// returns false

console.log( re.test( '\\r\\n' ) );
// returns false

console.log( re.test( 'beep' ) );
// returns false

str = 'This is\na newline\r\ndelimited string.';
console.log( str.split( re ) ); 
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org/) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2015. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/regex-eol.svg
[npm-url]: https://npmjs.org/package/regex-eol

[travis-image]: http://img.shields.io/travis/kgryte/regex-eol/master.svg
[travis-url]: https://travis-ci.org/kgryte/regex-eol

[codecov-image]: https://img.shields.io/codecov/c/github/kgryte/regex-eol/master.svg
[codecov-url]: https://codecov.io/github/kgryte/regex-eol?branch=master

[dependencies-image]: http://img.shields.io/david/kgryte/regex-eol.svg
[dependencies-url]: https://david-dm.org/kgryte/regex-eol

[dev-dependencies-image]: http://img.shields.io/david/dev/kgryte/regex-eol.svg
[dev-dependencies-url]: https://david-dm.org/dev/kgryte/regex-eol

[github-issues-image]: http://img.shields.io/github/issues/kgryte/regex-eol.svg
[github-issues-url]: https://github.com/kgryte/regex-eol/issues
