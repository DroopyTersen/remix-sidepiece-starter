# {remix-stack-app-name}

## Prereqs

```
npm install -g hasura-cli
```

## Initial Setup

> Make sure you don't have any other docker apps running that use port `8080` or Postgres's `5432`

```
docker compose up -d
hasura migrate apply --project hasura --database-name default
hasura metadata apply --project hasura
```

### Github Auth

Create a new Github App (not an OAuth App)

```
Profile -> Settings -> Developer Settings -> Github Apps
```

1. Add the following callback uri and check "Request user authorization (OAuth)
   ```
   https://localhost:3000/api/auth-callback
   ```
2. Under Webhook, uncheck the "Active"
3. Once it's created generate a client secret and it to `GITHUB_CLIENT_SECRET` in `.env`

## Running Local

Start running app

```
npm run dev
```

To start creating tables, open Hasura console with:

```
yarn hasura
```

## Environment Variables

- Locally assumes you have a `.env` file setup
- On the server you can access them with `getEnvVar(key)`
- Anything prefixed with `PUBLIC_` will be available on the client with `useEnvVars()` or `useEnvVar(key)`
- Also uses `zod` schemas to validate you environment variables so the app crashes right away with a helpful error message.

## Hasura Migrations

### Squash migrations

```
hasura migrate squash --database-name default --name "<feature-name>" --from <start-migration-version>
```

### Apply Migrations

```
hasura metadata apply --endpoint https://YOUR-APP.up.railway.app --admin-secret YOUR_SECRET
hasura migrate apply --endpoint https://YOUR-APP.up.railway.app --database-name default --admin-secret YOUR_SECRET --version <squashed-migration>
hasura metadata reload --endpoint https://YOUR-APP.up.railway.app --admin-secret YOUR_SECRET
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
