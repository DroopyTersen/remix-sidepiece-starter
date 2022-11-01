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

## Using the Starter

To create a new project using this stack, run the following command.

- When prompted, **make sure to select `Y` to run the `npm install`**.
  - If you don't, our postinstall scripts won't run for you.
- You will be prompted to choose between Javascript or Typescript. **Pick Typescript**.

```sh
# When prompted, make sure to select `Y` to run the 'npm install`.
npx create-remix@latest --template droopytersen/remix-sidepiece-starter
```

## Starter TODOs

- [x] Setup to be a "remix stack" template
  - \* the Remix versions
  - Setup `/remix.init`
- [x] Lax Code Style
  - [x] Make Typescript it less strict
  - [x] Disable eslint
  - [x] Setup prettier and autoformatting
- [ ] CSS/Styling Setup
  - [ ] Tailwind CSS
    - [ ] Tailwind Forms
    - [ ] Tailwind Typography
    - [ ] DaisyUI
  - [ ] Sass Setup for custom CSS
- [ ] Environment Variable Pattern
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
