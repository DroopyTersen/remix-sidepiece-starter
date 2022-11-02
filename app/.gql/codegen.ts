import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "https://techstacker.hasura.app/v1/graphql",
  documents: "./app/**/*.{graphql,gql}",
  generates: {
    "./app/.gql/graphql.types.ts": {
      plugins: ["typescript", "typescript-operations", "typed-document-node"],
    },
  },
};
export default config;
