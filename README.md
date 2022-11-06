# Welcome to Side Piece Starter

The fastest way to get started with a Remix + Hasura project

```sh
# When prompted, make sure to select `Y` to run the 'npm install`.
npx create-remix@latest --template droopytersen/remix-sidepiece-starter
```

## Tech Stack

- Remix
- React
- Styling
  - Tailwind + DaisyUI
  - Sass
- Auth
  - Github authentication
  - Hasura authorization
- GraphQL API
  - Hasura generated API
  - Typesafety w/ GraphQL Codegen
- Utility libraries
  - dayjs
  - zod
- Local development with docker

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
  - [x] Pattern for `PUBLIC_` vars that go to client
  - [x] Use `zod` to validate env variables
- [x] Toolkit Code
  - [x] Remix Utils
    - `useRouteData`
    - `authUtils`
  - [x] React Components
  - [x] Common React Hooks
- [x] GraphQL Setup
  - [x] Intellisense in `.gql` files
  - [x] Type safety with `TypedDocumentNode`
    - `graphql-codegen`, `graphql-request`
- [x] Hasura
  - [x] Hasura Docker Compose
  - [x] Hasura folder basic migration
  - [x] Hasura GQL Client factories
- [x] Auth Setup
  - [x] Github OAuth Flow
  - [x] Document Github App Setup instructions
  - [x] Generate Hasura token
  - [x] Pattern for authorizing loaders/actions
  - [x] Pattern for authorized GraphQL requests
- [x] Form Example
  - [x] User Profile Form
  - [x] Validation error pattern (with Zod)
- [ ] Ensure infrastructure
  - [ ] Hasura Dockerfile
  - [ ] Remix Dockerfile
