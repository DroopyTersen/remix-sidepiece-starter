import type { CodegenConfig } from "@graphql-codegen/cli";
import gqlConfig from "../../graphql.config";

const config: CodegenConfig = {
  ...gqlConfig,
  generates: {
    "./app/.gql/graphql.types.ts": {
      plugins: ["typescript", "typescript-operations", "typed-document-node"],
    },
  },
};
export default config;
