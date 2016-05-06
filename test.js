const execSync = require('./index.js');
const fs = require('fs');

// test1
execSync(['ls','-a']);

// test2
const options = {
	stdio: [ process.stdin, process.stdout, fs.openSync('err.out', 'w') ]
};

execSync(['rm', '-rf', 'test_dir' ]);
execSync(['mkdir', 'test_dir' ]);
try {
	execSync(['mkdir', 'test_dir'], options );
} catch( err ) {

	console.log('An error occurred in execSync. check err.out file');
	execSync(['cat','err.out']);
}
