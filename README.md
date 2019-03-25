# Node Default Project Using TypeScript, MongoDB and JWT

Project Structure:

## controllers: 
  This is the folder where the routes will be. The default is UserController.

## models:
  This is the folder where the Models will be stored. It will be used to create Schemas in MongoDB.

## repositories:
  The repository is mapping the Schema and MongoDB.

## routes:
  The routes are in app.ts, but the idea is to create a new file routes.ts where we will  receive the requests, manipulate as it             should be, and then return to Controller.

## app:
  In this file is the project configuration. Here we will import all packages/modules, and set our routes/middles.

## server:
  It's the first file that our application calls, in this file we will set port, it will check whether the database is correctly             configured.

## Config:
  There are three files: auth.ts, configs.ts, db.ts.

## auth:
  File to JWT configuration, in here we will check the request head and confirm the token.

## configs:
  Configuration file to enviroment variables, we are using to set JWT secret.

## db:
  Configuration file of Database. In this file we will find string connection, validation and others configurations about MongoDB.

