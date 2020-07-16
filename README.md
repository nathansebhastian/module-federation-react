# Webpack 5 Module Federation with React

This example shows a basic host application loading remote components

For more information, visit the article explaining this workflow

- `app1` expose component for import by other apps.
- `app2` will import exposed component from `app1`

## Running Demo

Run `npm install` and `npm start` inside each repo respectively. This will build and serve your apps on ports 3001, 3002

- [localhost:3001](http://localhost:3001/) (expose component for import)
- [localhost:3002](http://localhost:3002/) (will import exposed component)

Example referenced from https://github.com/module-federation/module-federation-examples/tree/master/basic-host-remote
