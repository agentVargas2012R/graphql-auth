## Description

This sample app showcases the integration of different layers of the Nest, GraphQL and TypeOrm frameworks. It contains validations, autoschema generation and Nest components which create the ecosystem.

## Naming Conventions
 
 The easiest way to decipher project layout is to look at the extension names of the files.  Each component follows a pod-style layout where the functional areas belong to a folder structure.

 .module - declare a high-level functional component

.resolver - indicates a graphql resolver

.service - indicates a service that interacts with graphql types.

.type - indicates a graphql object type

.entity - indicates a **typeorm** object, not to be confused with a graphql type.

## Responsibilities

This microservice acts as an authentication and authorization provider. It contains two services, one for user operations and the other for a users permissions (known as a claim system).

## Architecture

See graphl-api draw.io diagram in related project. App.module.ts is the main entry point from the application. Use the modules files to discover each of the components declared.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Frameworks

The following frameworks are components of this demo project.

[TypeOrm](https://github.com/typeorm/typeorm/blob/master/docs/select-query-builder.md) framework is used as a relational db mapping tool to interface with databases> is a specification used to interact with apis in a flexible and powerful way.

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

[Postgres](https://www.postgresql.org/) database implementation for this project. Can be swapped out for another db. See **typeorm.config.ts**

## License

 N/A
