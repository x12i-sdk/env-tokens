# @x12i/env-tokens usage example

Resolve {{ENV.*}} tokens in strings using environment variables with case-insensitive and camel-to-snake lookup.

This consuming application demonstrates **resolve configuration placeholders from an explicit environment** using the published npm package, pinned to `1.0.0`.

## Run

Requires Node.js 24 or newer and npm. The example needs no service credentials.

```sh
npm install --ignore-scripts
npm start
```

## Example

[`src/index.mjs`](src/index.mjs) contains the complete example. Assertions check the demonstrated behavior and the program prints a small result.

## When to use the package

- Resolve a template's environment placeholders from an explicit environment map.
- Accept camel-case placeholders backed by snake-case environment names.

## Links

- [npm package](https://www.npmjs.com/package/@x12i/env-tokens)
- [Implementation monorepo](https://github.com/x12i/env-tokens-)
- [Reviewed package source](https://github.com/x12i/env-tokens-/tree/b35afa08a1f9ccca088747f653261c3569a9fb36/.)

The `package.json` in this repository is private to prevent accidental publication of the example application under an npm package name.
