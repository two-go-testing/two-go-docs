# two-go-docs

This repository holds the documentation site for [two-go](https://github.com/two-go-testing/two-go), a zero-dependency fluent service and API testing library for Node. The site is built with [VitePress](https://vitepress.dev).

## Run it locally

Install the dependencies and start the dev server:

```sh
npm install
npm run docs:dev
```

The dev server prints a local URL you can open in your browser. Pages live under `docs/` and update on save.

## Build and preview

```sh
npm run docs:build
npm run docs:preview
```

## Deployment

The site deploys to GitHub Pages. On every push to the `main` branch, a GitHub Actions workflow builds the VitePress site and publishes the output to Pages at <https://two-go-testing.github.io/two-go-docs/>. The site is served from that sub-path, so `base` in `docs/.vitepress/config.js` must stay `/two-go-docs/`.
