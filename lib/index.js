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
* @name exponential
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/array/exponential}
*/
setReadOnly( ns, 'exponential', require( '@stdlib/random-array-exponential' ) );

/**
* @name gamma
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/array/gamma}
*/
setReadOnly( ns, 'gamma', require( '@stdlib/random-array-gamma' ) );

/**
* @name invgamma
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/array/invgamma}
*/
setReadOnly( ns, 'invgamma', require( '@stdlib/random-array-invgamma' ) );

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
* @name randu
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/array/randu}
*/
setReadOnly( ns, 'randu', require( '@stdlib/random-array-randu' ) );

/**
* @name uniform
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/array/uniform}
*/
setReadOnly( ns, 'uniform', require( '@stdlib/random-array-uniform' ) );


// EXPORTS //

module.exports = ns;
