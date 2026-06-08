# Getting Started

two-go is a zero-dependency fluent library for testing services and APIs in Node. You build an HTTP request with a chainable API, attach checks, and await the result. It works standalone or inside any test runner.

## Installation

Install the core package from npm:

```sh
npm install two-go
```

two-go requires Node 18 or newer.

## Your first request

Import `go`, build a request with the chainable methods, attach your checks, and await it:

```js
import { go } from "two-go";

await go("https://api.example.com")
  .get("/users")
  .bearer(token)
  .expectStatus(200)
  .expectHeader("content-type", /json/)
  .expectJson("data[0].id", 1);
```

This sends a GET request to `https://api.example.com/users` with a bearer token, then verifies the response status, a response header, and a value inside the JSON body. If any check fails, the awaited call rejects with a descriptive error.

## Running it

You can run a test file directly with Node:

```sh
node test.mjs
```

Because the checks are part of the awaited chain, a failed assertion rejects the promise and fails the run. The same file also works inside node:test, Jest, Vitest, or Mocha, so you can drop two-go into an existing suite without any extra setup.
