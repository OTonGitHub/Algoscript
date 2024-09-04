# Algoscript

Data Structures and Algorithms done in TypeScript/JS run on NodeJS.

![TypeScript Compilation](https://github.com/OTonGitHub/Algoscript/actions/workflows/ts.node.js.yml/badge.svg)

### Requires

- Node.JS v22 with NPM
- `npm install -g typescript`
  > Or just use `mcr.microsoft.com/devcontainers/typescript-node:1-22-bookworm` container

### How To Run

- `Ctrl + Shift + B` **_(Tasks: Run Build Task)_** to start TypeScript compiler
- settings for this are located in .vscode -> `tasks.json` file.
- can rebuild this file using **_Tasks: Configure Default Build Task_**
- then just run using `clear && node src/build/file` from the build folder.

_note: just keep one shell running for the build process, the other to run node_

## Notes

- Big O Big Rules
  - growth is with respect to input
  - constants are dropped
  - worst case is what's measures

## To-Do

- add in-file support for testing and running code, compile and run tests.
- can be updated based on the katas, but don't use seperation.
