## Description

This repo is a error reproduction for the issue [#4988](https://github.com/nestjs/nest/issues/4988).

When i create a DTO for my mutation having a FileUpload field and binding the ValidationPipe, i get the error:

```bash
TypeError: Promise resolver undefined is not a function
  at new Promise (<anonymous>)
  at TransformOperationExecutor.transform (/Users/victorassis/Workspace/barreiroclub/nestjs-graphql-upload-error/node_modules/class-transformer/TransformOperationExecutor.js:117:32)
  at _loop_1 (/Users/victorassis/Workspace/barreiroclub/nestjs-graphql-upload-error/node_modules/class-transformer/TransformOperationExecutor.js:235:45)
  at TransformOperationExecutor.transform (/Users/victorassis/Workspace/barreiroclub/nestjs-graphql-upload-error/node_modules/class-transformer/TransformOperationExecutor.js:260:17)
  at ClassTransformer.plainToClass (/Users/victorassis/Workspace/barreiroclub/nestjs-graphql-upload-error/node_modules/class-transformer/ClassTransformer.js:17:25)
  at Object.plainToClass (/Users/victorassis/Workspace/barreiroclub/nestjs-graphql-upload-error/node_modules/class-transformer/index.js:20:29)
  at ValidationPipe.transform (/Users/victorassis/Workspace/barreiroclub/nestjs-graphql-upload-error/node_modules/@nestjs/common/pipes/validation.pipe.js:41:39)
  at /Users/victorassis/Workspace/barreiroclub/nestjs-graphql-upload-error/node_modules/@nestjs/core/pipes/pipes-consumer.js:16:33
  at processTicksAndRejections (internal/process/task_queues.js:97:5)
```
## Installation

```bash
$ yarn install
```

## Running the app

```bash
$ yarn start:dev
```

## GraphQL Queries to test

### Mutations that works

```graphql
mutation works ($image: Upload!) {
  createWithDtoWithoutValidation(name: "example", file: $image)
  createWithoutDtoWithoutValidation(file: $image)
  createWithoutDtoWithValidation(file: $image)
}
```

### Mutation that doesn't work

```graphql
mutation notWork ($image: Upload!) {
  createWithDtoWithValidation(name: "example", file: $image)
}
```
