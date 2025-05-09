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

// TypeScript Version: 4.1

/* eslint-disable max-lines */

import arcsine = require( '@stdlib/random-array-arcsine' );
import bernoulli = require( '@stdlib/random-array-bernoulli' );
import beta = require( '@stdlib/random-array-beta' );
import betaprime = require( '@stdlib/random-array-betaprime' );
import binomial = require( '@stdlib/random-array-binomial' );
import cauchy = require( '@stdlib/random-array-cauchy' );
import chi = require( '@stdlib/random-array-chi' );
import chisquare = require( '@stdlib/random-array-chisquare' );
import cosine = require( '@stdlib/random-array-cosine' );
import discreteUniform = require( '@stdlib/random-array-discrete-uniform' );
import erlang = require( '@stdlib/random-array-erlang' );
import exponential = require( '@stdlib/random-array-exponential' );
import f = require( '@stdlib/random-array-f' );
import frechet = require( '@stdlib/random-array-frechet' );
import gamma = require( '@stdlib/random-array-gamma' );
import geometric = require( '@stdlib/random-array-geometric' );
import gumbel = require( '@stdlib/random-array-gumbel' );
import hypergeometric = require( '@stdlib/random-array-hypergeometric' );
import invgamma = require( '@stdlib/random-array-invgamma' );
import kumaraswamy = require( '@stdlib/random-array-kumaraswamy' );
import laplace = require( '@stdlib/random-array-laplace' );
import levy = require( '@stdlib/random-array-levy' );
import logistic = require( '@stdlib/random-array-logistic' );
import lognormal = require( '@stdlib/random-array-lognormal' );
import minstd = require( '@stdlib/random-array-minstd' );
import minstdShuffle = require( '@stdlib/random-array-minstd-shuffle' );
import mt19937 = require( '@stdlib/random-array-mt19937' );
import negativeBinomial = require( '@stdlib/random-array-negative-binomial' );
import normal = require( '@stdlib/random-array-normal' );
import pareto1 = require( '@stdlib/random-array-pareto-type1' );
import poisson = require( '@stdlib/random-array-poisson' );
import randu = require( '@stdlib/random-array-randu' );
import rayleigh = require( '@stdlib/random-array-rayleigh' );
import t = require( '@stdlib/random-array-t' );
import triangular = require( '@stdlib/random-array-triangular' );
import uniform = require( '@stdlib/random-array-uniform' );
import weibull = require( '@stdlib/random-array-weibull' );

/**
* Interface describing the `array` namespace.
*/
interface Namespace {
	/**
	* Returns an array containing pseudorandom numbers drawn from an arcsine distribution.
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
	* Returns an array containing pseudorandom numbers drawn from a Bernoulli distribution.
	*
	* @param len - array length
	* @param p - success probability
	* @param options - function options
	* @returns output array
	*
	* @example
	* var out = ns.bernoulli( 10, 0.5 );
	* // returns <Float64Array>
	*
	* @example
	* var random = ns.bernoulli.factory( 0.5 );
	*
	* var out = random( 10 );
	* // returns <Float64Array>
	*/
	bernoulli: typeof bernoulli;

	/**
	* Returns an array containing pseudorandom numbers drawn from a beta distribution.
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
	* Returns an array containing pseudorandom numbers drawn from a beta prime distribution.
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
	* Returns an array containing pseudorandom numbers drawn from a binomial distribution.
	*
	* @param len - array length
	* @param n - number of trials
	* @param p - success probability
	* @param options - function options
	* @returns output array
	*
	* @example
	* var out = ns.binomial( 10, 17, 0.5 );
	* // returns <Float64Array>
	*
	* @example
	* var random = ns.binomial.factory( 17, 0.5 );
	*
	* var out = random( 10 );
	* // returns <Float64Array>
	*/
	binomial: typeof binomial;

	/**
	* Returns an array containing pseudorandom numbers drawn from a Cauchy distribution.
	*
	* @param len - array length
	* @param x0 - location parameter
	* @param gamma - scale parameter
	* @param options - function options
	* @returns output array
	*
	* @example
	* var out = ns.cauchy( 10, 2.0, 5.0 );
	* // returns <Float64Array>
	*
	* @example
	* var random = ns.cauchy.factory( 2.0, 5.0 );
	*
	* var out = random( 10 );
	* // returns <Float64Array>
	*/
	cauchy: typeof cauchy;

	/**
	* Returns an array containing pseudorandom numbers drawn from a chi distribution.
	*
	* @param len - array length
	* @param k - degrees of freedom
	* @param options - function options
	* @returns output array
	*
	* @example
	* var out = ns.chi( 10, 2.0 );
	* // returns <Float64Array>
	*
	* @example
	* var random = ns.chi.factory( 2.0 );
	*
	* var out = random( 10 );
	* // returns <Float64Array>
	*/
	chi: typeof chi;

	/**
	* Returns an array containing pseudorandom numbers drawn from a chi-square distribution.
	*
	* @param len - array length
	* @param k - degrees of freedom
	* @param options - function options
	* @returns output array
	*
	* @example
	* var out = ns.chisquare( 10, 2.0 );
	* // returns <Float64Array>
	*
	* @example
	* var random = ns.chisquare.factory( 2.0 );
	*
	* var out = random( 10 );
	* // returns <Float64Array>
	*/
	chisquare: typeof chisquare;

	/**
	* Returns an array containing pseudorandom numbers drawn from a raised cosine distribution.
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
	* Returns an array containing pseudorandom numbers drawn from a discrete uniform distribution.
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
	* Returns an array containing pseudorandom numbers drawn from an Erlang distribution.
	*
	* @param len - array length
	* @param k - shape parameter
	* @param lambda - rate parameter
	* @param options - function options
	* @returns output array
	*
	* @example
	* var out = ns.erlang( 10, 2, 5.0 );
	* // returns <Float64Array>
	*
	* @example
	* var random = ns.erlang.factory( 2, 5.0 );
	*
	* var out = random( 10 );
	* // returns <Float64Array>
	*/
	erlang: typeof erlang;

	/**
	* Returns an array containing pseudorandom numbers drawn from an exponential distribution.
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
	* Returns an array containing pseudorandom numbers drawn from an F distribution.
	*
	* @param len - array length
	* @param d1 - degrees of freedom
	* @param d2 - degrees of freedom
	* @param options - function options
	* @returns output array
	*
	* @example
	* var out = ns.f( 10, 2.0, 5.0 );
	* // returns <Float64Array>
	*
	* @example
	* var random = ns.f.ns.factory( 2.0, 5.0 );
	*
	* var out = random( 10 );
	* // returns <Float64Array>
	*/
	f: typeof f;

	/**
	* Returns an array containing pseudorandom numbers drawn from a Fréchet distribution.
	*
	* @param len - array length
	* @param alpha - shape parameter
	* @param s - scale parameter
	* @param m - location parameter
	* @param options - function options
	* @returns output array
	*
	* @example
	* var out = ns.frechet( 10, 2.0, 5.0, 3.0 );
	* // returns <Float64Array>
	*
	* @example
	* var random = ns.frechet.factory( 2.0, 5.0, 3.0 );
	*
	* var out = random( 10 );
	* // returns <Float64Array>
	*/
	frechet: typeof frechet;

	/**
	* Returns an array containing pseudorandom numbers drawn from a gamma distribution.
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
	* Returns an array containing pseudorandom numbers drawn from a geometric distribution.
	*
	* @param len - array length
	* @param p - success probability
	* @param options - function options
	* @returns output array
	*
	* @example
	* var out = ns.geometric( 10, 0.01 );
	* // returns <Float64Array>
	*
	* @example
	* var random = ns.geometric.factory( 0.01 );
	*
	* var out = random( 10 );
	* // returns <Float64Array>
	*/
	geometric: typeof geometric;

	/**
	* Returns an array containing pseudorandom numbers drawn from a Gumbel distribution.
	*
	* @param len - array length
	* @param mu - mean
	* @param beta - scale parameter
	* @param options - function options
	* @returns output array
	*
	* @example
	* var out = ns.gumbel( 10, 2.0, 5.0 );
	* // returns <Float64Array>
	*
	* @example
	* var random = ns.gumbel.factory( 2.0, 5.0 );
	*
	* var out = random( 10 );
	* // returns <Float64Array>
	*/
	gumbel: typeof gumbel;

	/**
	* Returns an array containing pseudorandom numbers drawn from a hypergeometric distribution.
	*
	* @param len - array length
	* @param N - population size
	* @param K - subpopulation size
	* @param n - number of draws
	* @param options - function options
	* @returns output array
	*
	* @example
	* var out = ns.hypergeometric( 10, 20, 10, 7 );
	* // returns <Float64Array>
	*
	* @example
	* var random = ns.hypergeometric.factory( 20, 10, 7 );
	*
	* var out = random( 10 );
	* // returns <Float64Array>
	*/
	hypergeometric: typeof hypergeometric;

	/**
	* Returns an array containing pseudorandom numbers drawn from an inverse gamma distribution.
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
	* Returns an array containing pseudorandom numbers drawn from Kumaraswamy's double bounded distribution.
	*
	* @param len - array length
	* @param a - first shape parameter
	* @param b - second shape parameter
	* @param options - function options
	* @returns output array
	*
	* @example
	* var out = ns.kumaraswamy( 10, 2.0, 5.0 );
	* // returns <Float64Array>
	*
	* @example
	* var random = ns.kumaraswamy.factory( 2.0, 5.0 );
	*
	* var out = random( 10 );
	* // returns <Float64Array>
	*/
	kumaraswamy: typeof kumaraswamy;

	/**
	* Returns an array containing pseudorandom numbers drawn from a Laplace (double exponential) distribution.
	*
	* @param len - array length
	* @param mu - mean
	* @param b - scale parameter
	* @param options - function options
	* @returns output array
	*
	* @example
	* var out = ns.laplace( 10, 2.0, 5.0 );
	* // returns <Float64Array>
	*
	* @example
	* var random = ns.laplace.factory( 2.0, 5.0 );
	*
	* var out = random( 10 );
	* // returns <Float64Array>
	*/
	laplace: typeof laplace;

	/**
	* Returns an array containing pseudorandom numbers drawn from a Lévy distribution.
	*
	* @param len - array length
	* @param mu - location parameter
	* @param c - scale parameter
	* @param options - function options
	* @returns output array
	*
	* @example
	* var out = ns.levy( 10, 2.0, 5.0 );
	* // returns <Float64Array>
	*
	* @example
	* var random = ns.levy.factory( 2.0, 5.0 );
	*
	* var out = random( 10 );
	* // returns <Float64Array>
	*/
	levy: typeof levy;

	/**
	* Returns an array containing pseudorandom numbers drawn from a logistic distribution.
	*
	* @param len - array length
	* @param mu - mean parameter
	* @param s - scale parameter
	* @param options - function options
	* @returns output array
	*
	* @example
	* var out = ns.logistic( 10, 2.0, 5.0 );
	* // returns <Float64Array>
	*
	* @example
	* var random = ns.logistic.factory( 2.0, 5.0 );
	*
	* var out = random( 10 );
	* // returns <Float64Array>
	*/
	logistic: typeof logistic;

	/**
	* Returns an array containing pseudorandom numbers drawn from a lognormal distribution.
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
	* Returns an array containing pseudorandom numbers drawn from a negative binomial distribution.
	*
	* @param len - array length
	* @param r - number of successes until experiment is stopped
	* @param p - success probability
	* @param options - function options
	* @returns output array
	*
	* @example
	* var out = ns.negativeBinomial( 10, 10, 0.5 );
	* // returns <Float64Array>
	*
	* @example
	* var random = ns.negativeBinomial.factory( 10, 0.5 );
	*
	* var out = random( 10 );
	* // returns <Float64Array>
	*/
	negativeBinomial: typeof negativeBinomial;

	/**
	* Returns an array containing pseudorandom numbers drawn from a normal distribution.
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
	* Returns an array containing pseudorandom numbers drawn from a Pareto (Type I) distribution.
	*
	* @param len - array length
	* @param alpha - shape parameter
	* @param beta - scale parameter
	* @param options - function options
	* @returns output array
	*
	* @example
	* var out = ns.pareto1( 10, 2.0, 5.0 );
	* // returns <Float64Array>
	*
	* @example
	* var random = ns.pareto1.factory( 2.0, 5.0 );
	*
	* var out = random( 10 );
	* // returns <Float64Array>
	*/
	pareto1: typeof pareto1;

	/**
	* Returns an array containing pseudorandom numbers drawn from a Poisson distribution.
	*
	* @param len - array length
	* @param lambda - mean parameter
	* @param options - function options
	* @returns output array
	*
	* @example
	* var out = ns.poisson( 10, 2.0 );
	* // returns <Float64Array>
	*
	* @example
	* var random = ns.poisson.factory( 2.0 );
	*
	* var out = random( 10 );
	* // returns <Float64Array>
	*/
	poisson: typeof poisson;

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
	* Returns an array containing pseudorandom numbers drawn from a Rayleigh distribution.
	*
	* @param len - array length
	* @param sigma - scale parameter
	* @param options - function options
	* @returns output array
	*
	* @example
	* var out = ns.rayleigh( 10, 2.0 );
	* // returns <Float64Array>
	*
	* @example
	* var random = ns.rayleigh.factory( 2.0 );
	*
	* var out = random( 10 );
	* // returns <Float64Array>
	*/
	rayleigh: typeof rayleigh;

	/**
	* Returns an array containing pseudorandom numbers drawn from a Student's t-distribution.
	*
	* @param len - array length
	* @param v - degrees of freedom
	* @param options - function options
	* @returns output array
	*
	* @example
	* var out = ns.t( 10, 2.0 );
	* // returns <Float64Array>
	*
	* @example
	* var random = ns.t.factory( 2.0 );
	*
	* var out = random( 10 );
	* // returns <Float64Array>
	*/
	t: typeof t;

	/**
	* Returns an array containing pseudorandom numbers drawn from a triangular distribution.
	*
	* @param len - array length
	* @param a - minimum support
	* @param b - maximum support
	* @param c - mode
	* @param options - function options
	* @returns output array
	*
	* @example
	* var out = ns.triangular( 10, 2.0, 5.0, 3.0 );
	* // returns <Float64Array>
	*
	* @example
	* var random = ns.triangular.factory( 2.0, 5.0, 3.0 );
	*
	* var out = random( 10 );
	* // returns <Float64Array>
	*/
	triangular: typeof triangular;

	/**
	* Returns an array containing pseudorandom numbers drawn from a continuous uniform distribution.
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

	/**
	* Returns an array containing pseudorandom numbers drawn from a Weibull distribution.
	*
	* @param len - array length
	* @param k - shape parameter
	* @param lambda - scale parameter
	* @param options - function options
	* @returns output array
	*
	* @example
	* var out = ns.weibull( 10, 2.0, 5.0 );
	* // returns <Float64Array>
	*
	* @example
	* var random = ns.weibull.factory( 2.0, 5.0 );
	*
	* var out = random( 10 );
	* // returns <Float64Array>
	*/
	weibull: typeof weibull;
}

/**
* Pseudorandom number generator array creation functions.
*/
declare var ns: Namespace;


// EXPORTS //

export = ns;
