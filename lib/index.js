/**
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

'use strict';

/*
* When adding modules to the namespace, ensure that they are added in alphabetical order according to module name.
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils-define-read-only-property' );


// MAIN //

/**
* Top-level namespace.
*
* @namespace ns
*/
var ns = {};

/**
* @name arcsine
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/array/arcsine}
*/
setReadOnly( ns, 'arcsine', require( '@stdlib/random-array-arcsine' ) );

/**
* @name bernoulli
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/array/bernoulli}
*/
setReadOnly( ns, 'bernoulli', require( '@stdlib/random-array-bernoulli' ) );

/**
* @name beta
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/array/beta}
*/
setReadOnly( ns, 'beta', require( '@stdlib/random-array-beta' ) );

/**
* @name betaprime
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/array/betaprime}
*/
setReadOnly( ns, 'betaprime', require( '@stdlib/random-array-betaprime' ) );

/**
* @name binomial
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/array/binomial}
*/
setReadOnly( ns, 'binomial', require( '@stdlib/random-array-binomial' ) );

/**
* @name cauchy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/array/cauchy}
*/
setReadOnly( ns, 'cauchy', require( '@stdlib/random-array-cauchy' ) );

/**
* @name chi
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/array/chi}
*/
setReadOnly( ns, 'chi', require( '@stdlib/random-array-chi' ) );

/**
* @name chisquare
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/array/chisquare}
*/
setReadOnly( ns, 'chisquare', require( '@stdlib/random-array-chisquare' ) );

/**
* @name cosine
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/array/cosine}
*/
setReadOnly( ns, 'cosine', require( '@stdlib/random-array-cosine' ) );

/**
* @name discreteUniform
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/array/discrete-uniform}
*/
setReadOnly( ns, 'discreteUniform', require( '@stdlib/random-array-discrete-uniform' ) );

/**
* @name erlang
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/array/erlang}
*/
setReadOnly( ns, 'erlang', require( '@stdlib/random-array-erlang' ) );

/**
* @name exponential
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/array/exponential}
*/
setReadOnly( ns, 'exponential', require( '@stdlib/random-array-exponential' ) );

/**
* @name f
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/array/f}
*/
setReadOnly( ns, 'f', require( '@stdlib/random-array-f' ) );

/**
* @name gamma
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/array/gamma}
*/
setReadOnly( ns, 'gamma', require( '@stdlib/random-array-gamma' ) );

/**
* @name geometric
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/array/geometric}
*/
setReadOnly( ns, 'geometric', require( '@stdlib/random-array-geometric' ) );

/**
* @name gumbel
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/array/gumbel}
*/
setReadOnly( ns, 'gumbel', require( '@stdlib/random-array-gumbel' ) );

/**
* @name invgamma
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/array/invgamma}
*/
setReadOnly( ns, 'invgamma', require( '@stdlib/random-array-invgamma' ) );

/**
* @name kumaraswamy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/array/kumaraswamy}
*/
setReadOnly( ns, 'kumaraswamy', require( '@stdlib/random-array-kumaraswamy' ) );

/**
* @name laplace
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/array/laplace}
*/
setReadOnly( ns, 'laplace', require( '@stdlib/random-array-laplace' ) );

/**
* @name levy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/array/levy}
*/
setReadOnly( ns, 'levy', require( '@stdlib/random-array-levy' ) );

/**
* @name logistic
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/array/logistic}
*/
setReadOnly( ns, 'logistic', require( '@stdlib/random-array-logistic' ) );

/**
* @name lognormal
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/array/lognormal}
*/
setReadOnly( ns, 'lognormal', require( '@stdlib/random-array-lognormal' ) );

/**
* @name minstd
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/array/minstd}
*/
setReadOnly( ns, 'minstd', require( '@stdlib/random-array-minstd' ) );

/**
* @name minstdShuffle
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/array/minstd-shuffle}
*/
setReadOnly( ns, 'minstdShuffle', require( '@stdlib/random-array-minstd-shuffle' ) );

/**
* @name mt19937
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/array/mt19937}
*/
setReadOnly( ns, 'mt19937', require( '@stdlib/random-array-mt19937' ) );

/**
* @name normal
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/array/normal}
*/
setReadOnly( ns, 'normal', require( '@stdlib/random-array-normal' ) );

/**
* @name pareto1
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/array/pareto-type1}
*/
setReadOnly( ns, 'pareto1', require( '@stdlib/random-array-pareto-type1' ) );

/**
* @name poisson
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/array/poisson}
*/
setReadOnly( ns, 'poisson', require( '@stdlib/random-array-poisson' ) );

/**
* @name randu
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/array/randu}
*/
setReadOnly( ns, 'randu', require( '@stdlib/random-array-randu' ) );

/**
* @name rayleigh
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/array/rayleigh}
*/
setReadOnly( ns, 'rayleigh', require( '@stdlib/random-array-rayleigh' ) );

/**
* @name t
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/array/t}
*/
setReadOnly( ns, 't', require( '@stdlib/random-array-t' ) );

/**
* @name uniform
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/array/uniform}
*/
setReadOnly( ns, 'uniform', require( '@stdlib/random-array-uniform' ) );

/**
* @name weibull
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/array/weibull}
*/
setReadOnly( ns, 'weibull', require( '@stdlib/random-array-weibull' ) );


// EXPORTS //

module.exports = ns;
