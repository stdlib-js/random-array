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

```javascript
import ns from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-array@esm/index.mjs';
```
The previous example will load the latest bundled code from the esm branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/random-array/tags). For example,

```javascript
import ns from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-array@v0.1.0-esm/index.mjs';
```

You can also import the following named exports from the package:

```javascript
import { arcsine, beta, betaprime, cosine, discreteUniform, exponential, gamma, invgamma, lognormal, minstd, minstdShuffle, mt19937, normal, randu, uniform } from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-array@esm/index.mjs';
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
-   <span class="signature">[`beta( len, alpha, beta[, options] )`][@stdlib/random/array/beta]</span><span class="delimiter">: </span><span class="description">create an array containing pseudorandom numbers drawn from a beta distribution.</span>
-   <span class="signature">[`betaprime( len, alpha, beta[, options] )`][@stdlib/random/array/betaprime]</span><span class="delimiter">: </span><span class="description">create an array containing pseudorandom numbers drawn from a beta prime distribution.</span>
-   <span class="signature">[`cosine( len, mu, s[, options] )`][@stdlib/random/array/cosine]</span><span class="delimiter">: </span><span class="description">create an array containing pseudorandom numbers drawn from a raised cosine distribution.</span>
-   <span class="signature">[`discreteUniform( len, a, b[, options] )`][@stdlib/random/array/discrete-uniform]</span><span class="delimiter">: </span><span class="description">create an array containing pseudorandom numbers drawn from a discrete uniform distribution.</span>
-   <span class="signature">[`exponential( len, lambda[, options] )`][@stdlib/random/array/exponential]</span><span class="delimiter">: </span><span class="description">create an array containing pseudorandom numbers drawn from an exponential distribution.</span>
-   <span class="signature">[`gamma( len, alpha, beta[, options] )`][@stdlib/random/array/gamma]</span><span class="delimiter">: </span><span class="description">create an array containing pseudorandom numbers drawn from a gamma distribution.</span>
-   <span class="signature">[`invgamma( len, alpha, beta[, options] )`][@stdlib/random/array/invgamma]</span><span class="delimiter">: </span><span class="description">create an array containing pseudorandom numbers drawn from an inverse gamma distribution.</span>
-   <span class="signature">[`lognormal( len, mu, sigma[, options] )`][@stdlib/random/array/lognormal]</span><span class="delimiter">: </span><span class="description">create an array containing pseudorandom numbers drawn from a lognormal distribution.</span>
-   <span class="signature">[`minstdShuffle( len[, options] )`][@stdlib/random/array/minstd-shuffle]</span><span class="delimiter">: </span><span class="description">create an array containing pseudorandom numbers generated using a linear congruential pseudorandom number generator (LCG) whose output is shuffled.</span>
-   <span class="signature">[`minstd( len[, options] )`][@stdlib/random/array/minstd]</span><span class="delimiter">: </span><span class="description">create an array containing pseudorandom numbers generated using a linear congruential pseudorandom number generator (LCG).</span>
-   <span class="signature">[`mt19937( len[, options] )`][@stdlib/random/array/mt19937]</span><span class="delimiter">: </span><span class="description">create an array containing pseudorandom numbers generated using a 32-bit Mersenne Twister pseudorandom number generator.</span>
-   <span class="signature">[`normal( len, mu, sigma[, options] )`][@stdlib/random/array/normal]</span><span class="delimiter">: </span><span class="description">create an array containing pseudorandom numbers drawn from a normal distribution.</span>
-   <span class="signature">[`randu( len[, options] )`][@stdlib/random/array/randu]</span><span class="delimiter">: </span><span class="description">create an array containing uniformly distributed pseudorandom numbers between `0` and `1`.</span>
-   <span class="signature">[`uniform( len, a, b[, options] )`][@stdlib/random/array/uniform]</span><span class="delimiter">: </span><span class="description">create an array containing pseudorandom numbers drawn from a continuous uniform distribution.</span>

</div>

<!-- </toc> -->

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import objectKeys from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-keys@esm/index.mjs';
import ns from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-array@esm/index.mjs';

console.log( objectKeys( ns ) );

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

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/random-array.svg
[npm-url]: https://npmjs.org/package/@stdlib/random-array

[test-image]: https://github.com/stdlib-js/random-array/actions/workflows/test.yml/badge.svg?branch=v0.1.0
[test-url]: https://github.com/stdlib-js/random-array/actions/workflows/test.yml?query=branch:v0.1.0

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
[umd-url]: https://github.com/stdlib-js/random-array/tree/umd
[esm-url]: https://github.com/stdlib-js/random-array/tree/esm
[branches-url]: https://github.com/stdlib-js/random-array/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/random-array/main/LICENSE

<!-- <toc-links> -->

[@stdlib/random/array/arcsine]: https://github.com/stdlib-js/random-array-arcsine/tree/esm

[@stdlib/random/array/beta]: https://github.com/stdlib-js/random-array-beta/tree/esm

[@stdlib/random/array/betaprime]: https://github.com/stdlib-js/random-array-betaprime/tree/esm

[@stdlib/random/array/cosine]: https://github.com/stdlib-js/random-array-cosine/tree/esm

[@stdlib/random/array/discrete-uniform]: https://github.com/stdlib-js/random-array-discrete-uniform/tree/esm

[@stdlib/random/array/exponential]: https://github.com/stdlib-js/random-array-exponential/tree/esm

[@stdlib/random/array/gamma]: https://github.com/stdlib-js/random-array-gamma/tree/esm

[@stdlib/random/array/invgamma]: https://github.com/stdlib-js/random-array-invgamma/tree/esm

[@stdlib/random/array/lognormal]: https://github.com/stdlib-js/random-array-lognormal/tree/esm

[@stdlib/random/array/minstd-shuffle]: https://github.com/stdlib-js/random-array-minstd-shuffle/tree/esm

[@stdlib/random/array/minstd]: https://github.com/stdlib-js/random-array-minstd/tree/esm

[@stdlib/random/array/mt19937]: https://github.com/stdlib-js/random-array-mt19937/tree/esm

[@stdlib/random/array/normal]: https://github.com/stdlib-js/random-array-normal/tree/esm

[@stdlib/random/array/randu]: https://github.com/stdlib-js/random-array-randu/tree/esm

[@stdlib/random/array/uniform]: https://github.com/stdlib-js/random-array-uniform/tree/esm

<!-- </toc-links> -->

</section>

<!-- /.links -->
