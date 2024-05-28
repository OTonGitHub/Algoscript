# Algoscript
Data Structures and Algorithms done in TypeScript/JS run on NodeJS.

![TypeScript Compilation](https://github.com/OTonGitHub/Algoscript/actions/workflows/ts.node.js.yml/badge.svg)

### Requires
- Node.JS v22 with NPM
- `npm install -g typescript`
> Or just use `mcr.microsoft.com/devcontainers/typescript-node:1-22-bookworm` container

### How To Run
- `Ctrl + Shift + B` ***(Tasks: Run Build Task)*** to start TypeScript compiler
- settings for this are located in .vscode -> `tasks.json` file.
- can rebuild this file using ***Tasks: Configure Default Build Task***
- then just run using `clear && node src/build/file` from the build folder.

*note: just keep one shell running for the build process, the other to run node*
