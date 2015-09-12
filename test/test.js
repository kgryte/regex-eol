/* global require, describe, it */
'use strict';

// MODULES //

var chai = require( 'chai' ),
	re = require( './../lib' );


// VARIABLES //

var assert = chai.assert;


// TESTS //

describe( 'regex-eol', function tests() {

	it( 'should export a regular expression', function test() {
		assert.isTrue( re instanceof RegExp );
	});

	it( 'should match newline character sequences', function test() {
		var values,
			i;

		values = [
			'\r\n',
			'\n'
		];

		for ( i = 0; i < values.length; i++ ) {
			assert.isTrue( re.test( values[ i ] ) );
		}
	});

	it( 'should not match escaped sequences or non-matching strings', function test() {
		var values,
			i;

		values = [
			'\\r\\n',
			'\\n',
			'beep'
		];

		for ( i = 0; i < values.length; i++ ) {
			assert.isFalse( re.test( values[ i ] ) );
		}
	});

});
