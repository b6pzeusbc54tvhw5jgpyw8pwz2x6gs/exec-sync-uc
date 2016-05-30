[![npm version](https://img.shields.io/npm/v/exec-sync-uc.svg?style=flat-square)](https://www.npmjs.com/package/exec-sync-uc)
[![Build Status](https://travis-ci.org/b6pzeusbc54tvhw5jgpyw8pwz2x6gs/exec-sync-uc.svg?branch=master)](https://travis-ci.org/b6pzeusbc54tvhw5jgpyw8pwz2x6gs/exec-sync-uc)

# exec-sync-uc

## Usage 1

```javascript
// native execSync
const nativeExecSync = require('child_process').execSync;
nativeExecSync('cat *.js ' + bad_file + ' | wc -l');

// is equivalent to
const execSync = require('exec-sync-uc');
const PIPE = '|';
execSync([ 'cat *.js', bad_file, PIPE, 'wc -l' ]);
```




## Usage 2

```javascript
const NPM = '/home/ubuntu/.nvm/versions/node/v4.2.6/bin/npm';
const DIR_NAME = 'SOME_DIR_PATH';
const zip_file = process.argv[2];

execSync(['rm', '-rf', DIR_NAME ]);

execSync('unzip'+ zip_file +' -d'+ DIR_NAME );
// It's hard to find problem by `whitespace`, let's use below

execSync(['unzip', zip_file, '-d', DIR_NAME ]);
execSync([ NPM, 'install', '--production'], { cwd: DIR_NAME });
```
