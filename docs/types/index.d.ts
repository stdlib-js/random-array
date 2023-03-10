/*
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

// TypeScript Version: 2.0

/* tslint:disable:max-line-length */
/* tslint:disable:max-file-line-count */

import arcsine = require( '@stdlib/random-array-arcsine' );
import beta = require( '@stdlib/random-array-beta' );
import betaprime = require( '@stdlib/random-array-betaprime' );
import cosine = require( '@stdlib/random-array-cosine' );
import discreteUniform = require( '@stdlib/random-array-discrete-uniform' );
import exponential = require( '@stdlib/random-array-exponential' );
import gamma = require( '@stdlib/random-array-gamma' );
import invgamma = require( '@stdlib/random-array-invgamma' );
import lognormal = require( '@stdlib/random-array-lognormal' );
import minstd = require( '@stdlib/random-array-minstd' );
import minstdShuffle = require( '@stdlib/random-array-minstd-shuffle' );
import mt19937 = require( '@stdlib/random-array-mt19937' );
import normal = require( '@stdlib/random-array-normal' );
import randu = require( '@stdlib/random-array-randu' );
import uniform = require( '@stdlib/random-array-uniform' );

/**
* Interface describing the `array` namespace.
*/
interface Namespace {
	/**
	* Returns an array containing pseudorandom numbers drawn from an arcsine distribution with minimum support `a` and maximum support `b`.
	*
	* @param len - array length
	* @param a - minimum support
	* @param b - maximum support
	* @param options - function options
	* @returns output array
	*
	* @example
	* var out = ns.arcsine( 10, 2.0, 5.0 );
	* // returns <Float64Array>
	*
	* @example
	* var random = ns.arcsine.factory( 2.0, 5.0 );
	*
	* var out = random( 10 );
	* // returns <Float64Array>
	*/
	arcsine: typeof arcsine;

	/**
	* Returns an array containing pseudorandom numbers drawn from a beta distribution with parameters `alpha` (first shape parameter) and `beta` (second shape parameter).
	*
	* @param len - array length
	* @param alpha - first shape parameter
	* @param beta - second shape parameter
	* @param options - function options
	* @returns output array
	*
	* @example
	* var out = ns.beta( 10, 2.0, 5.0 );
	* // returns <Float64Array>
	*
	* @example
	* var random = ns.beta.factory( 2.0, 5.0 );
	*
	* var out = random( 10 );
	* // returns <Float64Array>
	*/
	beta: typeof beta;

	/**
	* Returns an array containing pseudorandom numbers drawn from a beta prime distribution with parameters `alpha` (first shape parameter) and `beta` (second shape parameter).
	*
	* @param len - array length
	* @param alpha - first shape parameter
	* @param beta - second shape parameter
	* @param options - function options
	* @returns output array
	*
	* @example
	* var out = ns.betaprime( 10, 2.0, 5.0 );
	* // returns <Float64Array>
	*
	* @example
	* var random = ns.betaprime.factory( 2.0, 5.0 );
	*
	* var out = random( 10 );
	* // returns <Float64Array>
	*/
	betaprime: typeof betaprime;

	/**
	* Returns an array containing pseudorandom numbers drawn from a raised cosine distribution with parameters `mu` (mean) and `s` (scale parameter).
	*
	* @param len - array length
	* @param mu - mean
	* @param s - scale parameter
	* @param options - function options
	* @returns output array
	*
	* @example
	* var out = ns.cosine( 10, 2.0, 5.0 );
	* // returns <Float64Array>
	*
	* @example
	* var random = ns.cosine.factory( 2.0, 5.0 );
	*
	* var out = random( 10 );
	* // returns <Float64Array>
	*/
	cosine: typeof cosine;

	/**
	* Returns an array containing pseudorandom numbers drawn from a discrete uniform distribution with minimum support `a` and maximum support `b`.
	*
	* @param len - array length
	* @param a - minimum support
	* @param b - maximum support
	* @param options - function options
	* @returns output array
	*
	* @example
	* var out = ns.discreteUniform( 10, -10, 10 );
	* // returns <Float64Array>
	*
	* @example
	* var random = ns.discreteUniform.factory( -10, 10 );
	*
	* var out = random( 10 );
	* // returns <Float64Array>
	*/
	discreteUniform: typeof discreteUniform;

	/**
	* Returns an array containing pseudorandom numbers drawn from an exponential distribution with rate parameter `lambda`.
	*
	* @param len - array length
	* @param lambda - rate parameter
	* @param options - function options
	* @returns output array
	*
	* @example
	* var out = ns.exponential( 10, 2.0 );
	* // returns <Float64Array>
	*
	* @example
	* var random = ns.exponential.factory( 2.0 );
	*
	* var out = random( 10 );
	* // returns <Float64Array>
	*/
	exponential: typeof exponential;

	/**
	* Returns an array containing pseudorandom numbers drawn from a gamma distribution with parameters `alpha` (shape parameter) and `beta` (rate parameter).
	*
	* @param len - array length
	* @param alpha - shape parameter
	* @param beta - rate parameter
	* @param options - function options
	* @returns output array
	*
	* @example
	* var out = ns.gamma( 10, 2.0, 5.0 );
	* // returns <Float64Array>
	*
	* @example
	* var random = ns.gamma.factory( 2.0, 5.0 );
	*
	* var out = random( 10 );
	* // returns <Float64Array>
	*/
	gamma: typeof gamma;

	/**
	* Returns an array containing pseudorandom numbers drawn from an inverse gamma distribution with parameters `alpha` (shape parameter) and `beta` (scale parameter).
	*
	* @param len - array length
	* @param alpha - shape parameter
	* @param beta - scale parameter
	* @param options - function options
	* @returns output array
	*
	* @example
	* var out = ns.invgamma( 10, 2.0, 5.0 );
	* // returns <Float64Array>
	*
	* @example
	* var random = ns.invgamma.factory( 2.0, 5.0 );
	*
	* var out = random( 10 );
	* // returns <Float64Array>
	*/
	invgamma: typeof invgamma;

	/**
	* Returns an array containing pseudorandom numbers drawn from a lognormal distribution with parameters `mu` (location parameter) and `sigma` (scale parameter).
	*
	* @param len - array length
	* @param mu - location parameter
	* @param sigma - scale parameter
	* @param options - function options
	* @returns output array
	*
	* @example
	* var out = ns.lognormal( 10, 2.0, 5.0 );
	* // returns <Float64Array>
	*
	* @example
	* var random = ns.lognormal.factory( 2.0, 5.0 );
	*
	* var out = random( 10 );
	* // returns <Float64Array>
	*/
	lognormal: typeof lognormal;

	/**
	* Returns an array containing pseudorandom numbers using a linear congruential pseudorandom number generator (LCG).
	*
	* @param len - array length
	* @param options - function options
	* @returns output array
	*
	* @example
	* var out = ns.minstd( 10 );
	* // returns <Float64Array>
	*
	* @example
	* var out = ns.minstd.normalized( 10 );
	* // returns <Float64Array>
	*
	* @example
	* var random = ns.minstd.factory();
	*
	* var out = random( 10 );
	* // returns <Float64Array>
	*/
	minstd: typeof minstd;

	/**
	* Returns an array containing pseudorandom numbers using a linear congruential pseudorandom number generator (LCG) whose output is shuffled.
	*
	* @param len - array length
	* @param options - function options
	* @returns output array
	*
	* @example
	* var out = ns.minstdShuffle( 10 );
	* // returns <Float64Array>
	*
	* @example
	* var out = ns.minstdShuffle.normalized( 10 );
	* // returns <Float64Array>
	*
	* @example
	* var random = ns.minstdShuffle.factory();
	*
	* var out = random( 10 );
	* // returns <Float64Array>
	*/
	minstdShuffle: typeof minstdShuffle;

	/**
	* Returns an array containing pseudorandom numbers using a 32-bit Mersenne Twister pseudorandom number generator.
	*
	* @param len - array length
	* @param options - function options
	* @returns output array
	*
	* @example
	* var out = ns.mt19937( 10 );
	* // returns <Float64Array>
	*
	* @example
	* var out = ns.mt19937.normalized( 10 );
	* // returns <Float64Array>
	*
	* @example
	* var random = ns.mt19937.factory();
	*
	* var out = random( 10 );
	* // returns <Float64Array>
	*/
	mt19937: typeof mt19937;

	/**
	* Returns an array containing pseudorandom numbers drawn from a normal distribution with parameters `mu` (mean) and `sigma` (standard deviation).
	*
	* @param len - array length
	* @param mu - mean
	* @param sigma - standard deviation
	* @param options - function options
	* @returns output array
	*
	* @example
	* var out = ns.normal( 10, 2.0, 5.0 );
	* // returns <Float64Array>
	*
	* @example
	* var random = ns.normal.factory( 2.0, 5.0 );
	*
	* var out = random( 10 );
	* // returns <Float64Array>
	*/
	normal: typeof normal;

	/**
	* Returns an array containing uniformly distributed pseudorandom numbers between `0` and `1`.
	*
	* @param len - array length
	* @param options - function options
	* @returns output array
	*
	* @example
	* var out = ns.randu( 10 );
	* // returns <Float64Array>
	*
	* @example
	* var random = ns.randu.factory();
	*
	* var out = random( 10 );
	* // returns <Float64Array>
	*/
	randu: typeof randu;

	/**
	* Returns an array containing pseudorandom numbers drawn from a continuous uniform distribution with minimum support `a` and maximum support `b`.
	*
	* @param len - array length
	* @param a - minimum support
	* @param b - maximum support
	* @param options - function options
	* @returns output array
	*
	* @example
	* var out = ns.uniform( 10, 2.0, 5.0 );
	* // returns <Float64Array>
	*
	* @example
	* var random = ns.uniform.factory( 2.0, 5.0 );
	*
	* var out = random( 10 );
	* // returns <Float64Array>
	*/
	uniform: typeof uniform;
}

/**
* Pseudorandom number generator array creation functions.
*/
declare var ns: Namespace;


// EXPORTS //

export = ns;
