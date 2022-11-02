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
- [ ] Auth Setup
  - [ ] Github OAuth Flow
  - [ ] Document App Setup instructions
  - [ ] Generate Hasura token
- [ ] Form Example
  - [ ] User Profile Form
  - [ ] Validation error pattern (with Zod)
- [ ] Ensure infrastructure
  - [ ] Hasura Dockerfile
  - [ ] Remix Dockerfile
  - [ ] Railway deploy
