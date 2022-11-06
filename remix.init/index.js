const { execSync } = require("child_process");
const uuid = require("uuid").v4
const fs = require("fs/promises");
const path = require("path");
const crypto = require("crypto");

const sort = require("sort-package-json");

let createFilePaths = (rootDirectory) => {
  const filePaths = {
    README_TEMPLATE: path.join(
      rootDirectory,
      "remix.init",
      "README.template.md"
    ),
    README_DESTINATION: path.join(rootDirectory, "README.md"),
    ENV_EXAMPLE: path.join(rootDirectory, ".env.example"),
    ENV_DESTINATION: path.join(rootDirectory, ".env"),
    PACKAGE_JSON: path.join(rootDirectory, "package.json"),
    APP_LAYOUT: path.join(rootDirectory, "app/features/layout/AppLayout.tsx"),
  };

  return filePaths;
};

function escapeRegExp(string) {
  // $& means the whole matched string
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
// TODO: Generate secrets
// - SESSION_SECRET, HASURA_JWT_SECRET, HASURA_GRAPHQL_ADMIN_SECRET

async function main({ rootDirectory }) {
  const APP_NAME_REPLACER = "{remix-stack-app-name}";
  const DIR_NAME = path.basename(rootDirectory);
  let filePaths = createFilePaths(rootDirectory);
  const APP_NAME = DIR_NAME
    // get rid of anything that's not allowed in an app name
    .replace(/[^a-zA-Z0-9-_]/g, "-");

  const HASURA_JWT_SECRET = uuid();

  let [readme, envExample, packageJson, appLayout] = await Promise.all([
    fs.readFile(filePaths.README_TEMPLATE, "utf-8"),
    fs.readFile(filePaths.ENV_EXAMPLE, "utf-8"),
    fs.readFile(filePaths.PACKAGE_JSON, "utf-8"),
    fs.readFile(filePaths.APP_LAYOUT, "utf-8"),
  ]);


  const newReadme = replaceInFile(readme, APP_NAME_REPLACER, APP_NAME);
  const hasuraPort = generateRandomPortNumber();
  const postgresPort = generateRandomPortNumber();
  envExample = replaceInFile(envExample, "REPLACE_HASURA_PORT", hasuraPort);
  envExample = replaceInFile(envExample, "REPLACE_POSTGRES_PORT", postgresPort);
  // Overwrite the .env.example file with Ports but without JWT secret
  await fs.writeFile(filePaths.ENV_EXAMPLE, envExample);

  envExample = replaceInFile(envExample, "REPLACE_HASURA_JWT_SECRET", HASURA_JWT_SECRET);
  const newPackageJson =
    JSON.stringify(
      sort({ ...JSON.parse(packageJson), name: APP_NAME }),
      null,
      2
    ) + "\n";

  appLayout = replaceInFile(appLayout, "Your App", DIR_NAME);

  await Promise.all([
    fs.writeFile(filePaths.README_DESTINATION, newReadme),
    fs.writeFile(filePaths.ENV_DESTINATION, envExample),
    fs.writeFile(filePaths.PACKAGE_JSON, newPackageJson),
    fs.writeFile(filePaths.APP_LAYOUT, appLayout),
  ]);


  // Setup hasura
  execSync("npx rimraf yarn.lock", { stdio: "inherit", cwd: rootDirectory });
  execSync(`npx rimraf .git`, { stdio: "inherit", cwd: rootDirectory });
  execSync(`git init`, { stdio: "inherit", cwd: rootDirectory });

  console.log(
    `Setup is complete. You're now ready to rock and roll 🤘

Start development with \`npm run dev\`
    `.trim()
  );
}

const replaceInFile = (fileContents, template, value) => {
  return fileContents.replace(
    new RegExp(escapeRegExp(template), "g"),
    value
  );
};

// Generates a random 4 digit port number using node crypto
const generateRandomPortNumber = () => {
  const randomBytes = crypto.randomBytes(2);
  const port = (randomBytes.readUInt16BE(0) % 10000).toString();
  // right pad with 0s so it is 4 characters long
  return port.padEnd(4, "0");
}

module.exports = main;
