# npm packaging basic template project

- testing library: mocha
- assertion library: chai
- coverage tool: nyc
- language: typescript
- linting: eslint



### Steps performed to code the package are

1. initialise a npm project using `npm init --y` command
2. install typescript and intialise a tsconfig file, configure root and out directories
3. create a `src/` folder to include all the source files
4. install necessary test runner(`mocha` and `ts-mocha`) and assertion (`chai`) libraries.
5. configure tsconfig.json options for rootDir and outDir



## Note:

this is inspired from https://codeburst.io/developing-and-publishing-a-typescript-npm-package-d9fc643d4229