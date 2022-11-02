require("dotenv").config();

module.exports = {
  schema: [{
    [process.env.GRAPHQL_ENDPOINT]: {
      headers: {
        "x-hasura-admin-secret": process.env.HASURA_ADMIN_SECRET
      }
    }
  }],
  documents: "app/**/*.{graphql,gql,js,ts,jsx,tsx}",
};