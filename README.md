<!--

@license Apache-2.0

Copyright (c) 2023 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Array

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Pseudorandom number generator (PRNG) array creation functions.



<section class="usage">

## Usage

To use in Observable,

```javascript
ns = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/random-array@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var ns = require( 'path/to/vendor/umd/random-array/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-array@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.ns;
})();
</script>
```

#### ns

Namespace containing array creation pseudorandom number generator (PRNG) functions.

```javascript
var o = ns;
// returns {...}
```

The namespace contains the following:

<!-- <toc pattern="*"> -->

<div class="namespace-toc">

-   <span class="signature">[`arcsine( len, a, b[, options] )`][@stdlib/random/array/arcsine]</span><span class="delimiter">: </span><span class="description">create an array containing pseudorandom numbers drawn from an arcsine distribution.</span>
-   <span class="signature">[`bernoulli( len, p[, options] )`][@stdlib/random/array/bernoulli]</span><span class="delimiter">: </span><span class="description">create an array containing pseudorandom numbers drawn from a Bernoulli distribution.</span>
-   <span class="signature">[`beta( len, alpha, beta[, options] )`][@stdlib/random/array/beta]</span><span class="delimiter">: </span><span class="description">create an array containing pseudorandom numbers drawn from a beta distribution.</span>
-   <span class="signature">[`betaprime( len, alpha, beta[, options] )`][@stdlib/random/array/betaprime]</span><span class="delimiter">: </span><span class="description">create an array containing pseudorandom numbers drawn from a beta prime distribution.</span>
-   <span class="signature">[`binomial( len, n, p[, options] )`][@stdlib/random/array/binomial]</span><span class="delimiter">: </span><span class="description">create an array containing pseudorandom numbers drawn from a binomial distribution.</span>
-   <span class="signature">[`cauchy( len, x0, gamma[, options] )`][@stdlib/random/array/cauchy]</span><span class="delimiter">: </span><span class="description">create an array containing pseudorandom numbers drawn from a Cauchy distribution.</span>
-   <span class="signature">[`chi( len, k[, options] )`][@stdlib/random/array/chi]</span><span class="delimiter">: </span><span class="description">create an array containing pseudorandom numbers drawn from a chi distribution.</span>
-   <span class="signature">[`chisquare( len, k[, options] )`][@stdlib/random/array/chisquare]</span><span class="delimiter">: </span><span class="description">create an array containing pseudorandom numbers drawn from a chi-square distribution.</span>
-   <span class="signature">[`cosine( len, mu, s[, options] )`][@stdlib/random/array/cosine]</span><span class="delimiter">: </span><span class="description">create an array containing pseudorandom numbers drawn from a raised cosine distribution.</span>
-   <span class="signature">[`discreteUniform( len, a, b[, options] )`][@stdlib/random/array/discrete-uniform]</span><span class="delimiter">: </span><span class="description">create an array containing pseudorandom numbers drawn from a discrete uniform distribution.</span>
-   <span class="signature">[`erlang( len, k, lambda[, options] )`][@stdlib/random/array/erlang]</span><span class="delimiter">: </span><span class="description">create an array containing pseudorandom numbers drawn from an Erlang distribution.</span>
-   <span class="signature">[`exponential( len, lambda[, options] )`][@stdlib/random/array/exponential]</span><span class="delimiter">: </span><span class="description">create an array containing pseudorandom numbers drawn from an exponential distribution.</span>
-   <span class="signature">[`f( len, d1, d2[, options] )`][@stdlib/random/array/f]</span><span class="delimiter">: </span><span class="description">create an array containing pseudorandom numbers drawn from an F distribution.</span>
-   <span class="signature">[`frechet( len, alpha, s, m[, options] )`][@stdlib/random/array/frechet]</span><span class="delimiter">: </span><span class="description">create an array containing pseudorandom numbers drawn from a Fréchet distribution.</span>
-   <span class="signature">[`gamma( len, alpha, beta[, options] )`][@stdlib/random/array/gamma]</span><span class="delimiter">: </span><span class="description">create an array containing pseudorandom numbers drawn from a gamma distribution.</span>
-   <span class="signature">[`geometric( len, p[, options] )`][@stdlib/random/array/geometric]</span><span class="delimiter">: </span><span class="description">create an array containing pseudorandom numbers drawn from a geometric distribution.</span>
-   <span class="signature">[`gumbel( len, mu, beta[, options] )`][@stdlib/random/array/gumbel]</span><span class="delimiter">: </span><span class="description">create an array containing pseudorandom numbers drawn from a Gumbel distribution.</span>
-   <span class="signature">[`hypergeometric( len, N, K, n[, options] )`][@stdlib/random/array/hypergeometric]</span><span class="delimiter">: </span><span class="description">create an array containing pseudorandom numbers drawn from a hypergeometric distribution.</span>
-   <span class="signature">[`invgamma( len, alpha, beta[, options] )`][@stdlib/random/array/invgamma]</span><span class="delimiter">: </span><span class="description">create an array containing pseudorandom numbers drawn from a inverse gamma distribution.</span>
-   <span class="signature">[`kumaraswamy( len, a, b[, options] )`][@stdlib/random/array/kumaraswamy]</span><span class="delimiter">: </span><span class="description">create an array containing pseudorandom numbers drawn from Kumaraswamy's double bounded distribution.</span>
-   <span class="signature">[`laplace( len, mu, b[, options] )`][@stdlib/random/array/laplace]</span><span class="delimiter">: </span><span class="description">create an array containing pseudorandom numbers drawn from a Laplace (double exponential) distribution.</span>
-   <span class="signature">[`levy( len, mu, c[, options] )`][@stdlib/random/array/levy]</span><span class="delimiter">: </span><span class="description">create an array containing pseudorandom numbers drawn from a Lévy distribution.</span>
-   <span class="signature">[`logistic( len, mu, s[, options] )`][@stdlib/random/array/logistic]</span><span class="delimiter">: </span><span class="description">create an array containing pseudorandom numbers drawn from a logistic distribution.</span>
-   <span class="signature">[`lognormal( len, mu, sigma[, options] )`][@stdlib/random/array/lognormal]</span><span class="delimiter">: </span><span class="description">create an array containing pseudorandom numbers drawn from a lognormal distribution.</span>
-   <span class="signature">[`minstdShuffle( len[, options] )`][@stdlib/random/array/minstd-shuffle]</span><span class="delimiter">: </span><span class="description">create an array containing pseudorandom numbers generated using a linear congruential pseudorandom number generator (LCG) whose output is shuffled.</span>
-   <span class="signature">[`minstd( len[, options] )`][@stdlib/random/array/minstd]</span><span class="delimiter">: </span><span class="description">create an array containing pseudorandom numbers generated using a linear congruential pseudorandom number generator (LCG).</span>
-   <span class="signature">[`mt19937( len[, options] )`][@stdlib/random/array/mt19937]</span><span class="delimiter">: </span><span class="description">create an array containing pseudorandom numbers generated using a 32-bit Mersenne Twister pseudorandom number generator.</span>
-   <span class="signature">[`negativeBinomial( len, r, p[, options] )`][@stdlib/random/array/negative-binomial]</span><span class="delimiter">: </span><span class="description">create an array containing pseudorandom numbers drawn from a negative binomial distribution.</span>
-   <span class="signature">[`normal( len, mu, sigma[, options] )`][@stdlib/random/array/normal]</span><span class="delimiter">: </span><span class="description">create an array containing pseudorandom numbers drawn from a normal distribution.</span>
-   <span class="signature">[`pareto1( len, alpha, beta[, options] )`][@stdlib/random/array/pareto-type1]</span><span class="delimiter">: </span><span class="description">create an array containing pseudorandom numbers drawn from a Pareto (Type I) distribution.</span>
-   <span class="signature">[`poisson( len, lambda[, options] )`][@stdlib/random/array/poisson]</span><span class="delimiter">: </span><span class="description">create an array containing pseudorandom numbers drawn from a Poisson distribution.</span>
-   <span class="signature">[`randu( len[, options] )`][@stdlib/random/array/randu]</span><span class="delimiter">: </span><span class="description">create an array containing uniformly distributed pseudorandom numbers between `0` and `1`.</span>
-   <span class="signature">[`rayleigh( len, sigma[, options] )`][@stdlib/random/array/rayleigh]</span><span class="delimiter">: </span><span class="description">create an array containing pseudorandom numbers drawn from a Rayleigh distribution.</span>
-   <span class="signature">[`t( len, v[, options] )`][@stdlib/random/array/t]</span><span class="delimiter">: </span><span class="description">create an array containing pseudorandom numbers drawn from a Student's t-distribution.</span>
-   <span class="signature">[`triangular( len, a, b, c[, options] )`][@stdlib/random/array/triangular]</span><span class="delimiter">: </span><span class="description">create an array containing pseudorandom numbers drawn from a triangular distribution.</span>
-   <span class="signature">[`uniform( len, a, b[, options] )`][@stdlib/random/array/uniform]</span><span class="delimiter">: </span><span class="description">create an array containing pseudorandom numbers drawn from a continuous uniform distribution.</span>
-   <span class="signature">[`weibull( len, k, lambda[, options] )`][@stdlib/random/array/weibull]</span><span class="delimiter">: </span><span class="description">create an array containing pseudorandom numbers drawn from a Weibull distribution.</span>

</div>

<!-- </toc> -->

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-array@umd/browser.js"></script>
<script type="text/javascript">
(function () {

// Generate arrays with ten random numbers drawn from the respective distributions:
var out = ns.arcsine( 10, 2.0, 5.0 );
// returns <Float64Array>

out = ns.weibull( 10, 2.0, 5.0 );
// returns <Float64Array>

out = ns.laplace( 10, 2.0, 5.0 );
// returns <Float64Array>

// Factory methods:

// 1. Basic factory usage (no parameters):
var random = ns.arcsine.factory();
out = random( 10, 2.0, 5.0 );
// returns <Float64Array>

// 2. Factory with options (e.g., seed):
random = ns.arcsine.factory({
    'seed': 1234
});
out = random( 10, 2.0, 5.0 );
// returns <Float64Array>

// 3. Factory with distribution parameters:
random = ns.arcsine.factory( 2.0, 5.0 );
out = random( 10 );
// returns <Float64Array>

// 4. Factory with both distribution parameters and options:
random = ns.arcsine.factory( 2.0, 5.0, {
    'dtype': 'float32'
});
out = random( 10 );
// returns <Float32Array>

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/random-array.svg
[npm-url]: https://npmjs.org/package/@stdlib/random-array

[test-image]: https://github.com/stdlib-js/random-array/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/random-array/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/random-array/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/random-array?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/random-array.svg
[dependencies-url]: https://david-dm.org/stdlib-js/random-array/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/random-array/tree/deno
[deno-readme]: https://github.com/stdlib-js/random-array/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/random-array/tree/umd
[umd-readme]: https://github.com/stdlib-js/random-array/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/random-array/tree/esm
[esm-readme]: https://github.com/stdlib-js/random-array/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/random-array/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/random-array/main/LICENSE

<!-- <toc-links> -->

[@stdlib/random/array/arcsine]: https://github.com/stdlib-js/random-array-arcsine/tree/umd

[@stdlib/random/array/bernoulli]: https://github.com/stdlib-js/random-array-bernoulli/tree/umd

[@stdlib/random/array/beta]: https://github.com/stdlib-js/random-array-beta/tree/umd

[@stdlib/random/array/betaprime]: https://github.com/stdlib-js/random-array-betaprime/tree/umd

[@stdlib/random/array/binomial]: https://github.com/stdlib-js/random-array-binomial/tree/umd

[@stdlib/random/array/cauchy]: https://github.com/stdlib-js/random-array-cauchy/tree/umd

[@stdlib/random/array/chi]: https://github.com/stdlib-js/random-array-chi/tree/umd

[@stdlib/random/array/chisquare]: https://github.com/stdlib-js/random-array-chisquare/tree/umd

[@stdlib/random/array/cosine]: https://github.com/stdlib-js/random-array-cosine/tree/umd

[@stdlib/random/array/discrete-uniform]: https://github.com/stdlib-js/random-array-discrete-uniform/tree/umd

[@stdlib/random/array/erlang]: https://github.com/stdlib-js/random-array-erlang/tree/umd

[@stdlib/random/array/exponential]: https://github.com/stdlib-js/random-array-exponential/tree/umd

[@stdlib/random/array/f]: https://github.com/stdlib-js/random-array-f/tree/umd

[@stdlib/random/array/frechet]: https://github.com/stdlib-js/random-array-frechet/tree/umd

[@stdlib/random/array/gamma]: https://github.com/stdlib-js/random-array-gamma/tree/umd

[@stdlib/random/array/geometric]: https://github.com/stdlib-js/random-array-geometric/tree/umd

[@stdlib/random/array/gumbel]: https://github.com/stdlib-js/random-array-gumbel/tree/umd

[@stdlib/random/array/hypergeometric]: https://github.com/stdlib-js/random-array-hypergeometric/tree/umd

[@stdlib/random/array/invgamma]: https://github.com/stdlib-js/random-array-invgamma/tree/umd

[@stdlib/random/array/kumaraswamy]: https://github.com/stdlib-js/random-array-kumaraswamy/tree/umd

[@stdlib/random/array/laplace]: https://github.com/stdlib-js/random-array-laplace/tree/umd

[@stdlib/random/array/levy]: https://github.com/stdlib-js/random-array-levy/tree/umd

[@stdlib/random/array/logistic]: https://github.com/stdlib-js/random-array-logistic/tree/umd

[@stdlib/random/array/lognormal]: https://github.com/stdlib-js/random-array-lognormal/tree/umd

[@stdlib/random/array/minstd-shuffle]: https://github.com/stdlib-js/random-array-minstd-shuffle/tree/umd

[@stdlib/random/array/minstd]: https://github.com/stdlib-js/random-array-minstd/tree/umd

[@stdlib/random/array/mt19937]: https://github.com/stdlib-js/random-array-mt19937/tree/umd

[@stdlib/random/array/negative-binomial]: https://github.com/stdlib-js/random-array-negative-binomial/tree/umd

[@stdlib/random/array/normal]: https://github.com/stdlib-js/random-array-normal/tree/umd

[@stdlib/random/array/pareto-type1]: https://github.com/stdlib-js/random-array-pareto-type1/tree/umd

[@stdlib/random/array/poisson]: https://github.com/stdlib-js/random-array-poisson/tree/umd

[@stdlib/random/array/randu]: https://github.com/stdlib-js/random-array-randu/tree/umd

[@stdlib/random/array/rayleigh]: https://github.com/stdlib-js/random-array-rayleigh/tree/umd

[@stdlib/random/array/t]: https://github.com/stdlib-js/random-array-t/tree/umd

[@stdlib/random/array/triangular]: https://github.com/stdlib-js/random-array-triangular/tree/umd

[@stdlib/random/array/uniform]: https://github.com/stdlib-js/random-array-uniform/tree/umd

[@stdlib/random/array/weibull]: https://github.com/stdlib-js/random-array-weibull/tree/umd

<!-- </toc-links> -->

</section>

<!-- /.links -->
