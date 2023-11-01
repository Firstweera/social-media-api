# Social Media Backend

Welcome to the Social Media Backend project, the backend server for a social media application that provides features like user management, authentication, and more.

## Technology Stack

- **TypeScript 5.0.2**: A typed superset of JavaScript for enhanced development.

## Dependencies

- **@prisma/client 5.5.2**: Prisma client for database operations.
- **bcrypt 5.1.1**: A library for hashing and salting passwords.
- **cors 2.8.5**: Middleware for handling Cross-Origin Resource Sharing.
- **express 4.18.2**: A popular Node.js web framework.
- **fp-ts 2.16.1**: Functional programming in TypeScript.
- **io-ts 2.2.20**: Runtime type system for JavaScript/TypeScript.
- **io-ts-extra 0.11.6**: Extra codecs for io-ts.
- **jsonwebtoken 9.0.2**: Library for working with JSON Web Tokens (JWT).
- **pg 8.11.3**: Node.js PostgreSQL driver.
- **prisma 5.5.2**: Prisma ORM for database management.
- **ts-node 10.9.1**: TypeScript execution and REPL for Node.js.
- **tsconfig-paths 4.2.0**: Resolving TypeScript module paths based on tsconfig.json.

## Scripts

- **dev**: Start the server in development mode with hot-reloading.
- **start**: Start the server in production mode.
- **postinstall**: Generate Prisma client.
- **prisma:merge**: Merge Prisma schema files into one.
- **prisma:format**: Format Prisma schema.
- **prisma:migrate**: Run Prisma database migrations.
- **prisma:generate**: Generate Prisma client.
- **test**: Run unit tests.
- **test:user**: Run tests specific to the user service.

## Usage

To use this backend:

1. Clone or download this repository to your local development environment.
2. Install the necessary dependencies using your preferred package manager.

```shell
yarn install
```

3. Configure your environment variables and Prisma schema.
4. Run database migrations and generate Prisma client.
5. Start the server using the appropriate script (dev or start).
6. Build upon this foundation to create a fully functional social media application.
