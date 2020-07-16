# Third Party Developer Workflow using Webpack 5 Federation Module and Bit

This example shows a basic host application loading remote components, which can be used as a micro-frontend workflows for third party developers.

For more information, visit the article explaining this workflow

- `app1` is the host application.
- `app2` and `app3` are standalone applications developed using reusable components from Bit as its design system.

## Running Demo

Run `npm install` and `npm start` inside each repo respectively. This will build and serve your apps on ports 3001, 3002 and 3003

- [localhost:3001](http://localhost:3001/) (HOST)
- [localhost:3002](http://localhost:3002/) (STANDALONE REMOTE)
- [localhost:3003](http://localhost:3003/) (STANDALONE REMOTE)

Example referenced from https://github.com/module-federation/module-federation-examples/tree/master/basic-host-remote
