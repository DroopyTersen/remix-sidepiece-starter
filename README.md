# Welcome to Side Piece Starter

```sh
# When prompted, make sure to select `Y` to run the 'npm install`.
npx create-remix@latest --template droopytersen/remix-sidepiece-starter
```

## Tech Stack

- Remix
- React
- Styling
  - Tailwind
  - Tailwind Forms
  - Tailwind Typography
  - DaisyUI
- Auth
  - Github authentication
  - Hasura authorization
- GraphQL API
  - Hasura generated API
  - Typesafety w/ GraphQL Codegen
- Utility libraries
  - dayjs
  - zod

## Envrionment Variables

- Locally assumes you have a `.env` file setup
- On the server you can access them with `getEnvVar(key)`
- Anything prefixed with `PUBLIC_` will be available on the client with `useEnvVars()` or `useEnvVar(key)`
- Also uses `zod` schemas to validate you environment variables so the app crashes right away with a helpful error message.

## Starter TODOs

- [x] Setup to be a "remix stack" template
  - \* the Remix versions
  - Setup `/remix.init`
- [x] Lax Code Style
  - [x] Make Typescript it less strict
  - [x] Disable eslint
  - [x] Setup prettier and autoformatting
- [x] CSS/Styling Setup
  - [x] Tailwind CSS
    - [x] Tailwind Typography
    - [x] DaisyUI
  - [x] Sass Setup for custom CSS
- [x] Environment Variable Pattern
- [ ] Toolkit Code
  - [ ] Remix Utils
    - `useRouteData`
    - `authUtils`
  - [ ] React Components
  - [ ] Common React Hooks
- [ ] Layout
  - [ ] Responsive Menu
- [ ] Hasura
  - [ ] Hasura Docker Compose
  - [ ] Hasura folder basic migration
  - [ ] Hasura Dockerfile for infrastucture
- [ ] GraphQL Setup
  - [ ] Intellisense in `.gql` files
  - [ ] Type safety with `TypedDocumentNode`
    - `graphql-codegen`, `graphql-request`
- [ ] Auth Setup
  - [ ] Github OAuth Flow
  - [ ] Generate Hasura token
  - [ ] Admin vs User GQL Requests
- [ ] Form Example
  - [ ] User Profile Form
  - [ ] Validation error pattern (with Zod)
