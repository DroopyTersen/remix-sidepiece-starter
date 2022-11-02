# {remix-stack-app-name}

## Running Locally

Make sure docker is running with:

```
docker compose up -d
```

Start running app

```
npm run dev
```

To start creating tables, open Hasura console with:

```
yarn hasura
```

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
