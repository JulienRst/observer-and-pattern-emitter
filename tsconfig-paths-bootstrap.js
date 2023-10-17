const tsConfig = require('./tsconfig.json');
const tsConfigPaths = require('tsconfig-paths');

// from https://github.com/dividab/tsconfig-paths#readme
const baseUrl = './dist'; // Either absolute or relative path. If relative it's resolved to current working directory.
const cleanup = tsConfigPaths.register({
  baseUrl,
  paths: tsConfig.compilerOptions.paths || {},
});

// When path registration is no longer needed
