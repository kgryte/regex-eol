'use strict';

var re = require( './../lib' );

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
