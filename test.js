const execSync = require('./index.js');

// test1
execSync(['ls','-al']);

// test2
execSync(['rm', '-rf', 'test_dir' ]);
execSync(['mkdir', 'test_dir' ]);
const result = execSync(['mkdir', 'test_dir']);
if( result.status !== 0 ) {
	console.log('An error occurred in execSync. Now, check err.out file');
	execSync(['cat','err.out']);
}


// test3
console.log( execSync('git rev-parse HEAD') );

// test3
console.log( execSync('gdit rev-parse HEAD') );
