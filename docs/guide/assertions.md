# Assertions

two-go offers two ways to assert. Request assertions are chained onto a request and check the response. The separate value `expect` API checks any plain value.

## Request assertions

These methods attach to a request chain and run against the response once the request completes.

### expectStatus

Assert the HTTP status code of the response:

```js
import { go } from "two-go";

await go("https://api.example.com")
  .get("/users")
  .expectStatus(200);
```

### expectHeader

Assert a response header. The expected value can be an exact string or a regular expression:

```js
await go("https://api.example.com")
  .get("/users")
  .expectHeader("content-type", /json/);
```

### expectJson

Assert a value inside the parsed JSON body. The first argument is a path into the body and the second is the expected value:

```js
await go("https://api.example.com")
  .get("/users")
  .expectJson("data[0].id", 1);
```

You can chain several of these on a single request, and they all run against the same response:

```js
await go("https://api.example.com")
  .get("/users")
  .expectStatus(200)
  .expectHeader("content-type", /json/)
  .expectJson("data[0].id", 1);
```

## The value expect API

For assertions that are not tied to a response, use the standalone `expect` API to check any value:

```js
import { expect } from "two-go";

expect(1 + 1).toBe(2);
expect({ id: 1 }).toEqual({ id: 1 });
```

This is handy for validating data you compute in a test, or for checking a value you pulled out of a response after the request resolved.
