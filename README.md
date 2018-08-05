# Deep `Proxy`

[![Travis](https://img.shields.io/travis/slikts/deepproxy.svg)](https://travis-ci.org/slikts/deepproxy)
[![Coveralls](https://img.shields.io/coveralls/slikts/deepproxy.svg)](https://coveralls.io/github/slikts/deepproxy)

A tiny library to recursively wrap an object and all its sub-objects with [ES2015 `Proxy`][Proxy].

## Installation

```
npm install --save deepproxy
```

## Usage

```js
import { deepProxy } from "deepproxy"

const a = deepProxy({ b: { c: 1 } }, {
  get(target, key) {
    return target[key] ? target[key] : 123;
  }
});

a.b; // -> { c: 1 }
a.foo; // -> 123
a.b.c; // -> 1
a.b.foo; // -> 123
```

## How it Works

The target object is wrapped with an additional `Proxy` that traps property access and also wraps any values of object type. The created proxies are memoized to avoid re-creating them for the same target and handler.

## License

MIT

## Author

slikts <dabas@untu.ms>

[Proxy]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
