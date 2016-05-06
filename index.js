const path = require('path');
const execSync = require('child_process').execSync;
const objectAssign = require('object-assign');
const colors = require('colors');

colors.enabled = true;

const isArray = Array.isArray || function(obj) {
	return Object.prototype.toString.call(obj) === '[object Array]';
};

const execOptions = {
	//stdio: [ process.stdin, process.stdout, process.stderr ],
	encoding: 'utf8',
	cwd: path.resolve( process.cwd() )
};

function execUC( cmd, options ) {

	options = objectAssign( {}, execOptions, options );
	if( isArray( cmd )) {
		cmd = cmd.join(' ');
	}

	if( options.stdio ) {
		console.log('now, stdio option is not allow yet.');
		delete options.stdio;
	}

	const prompt = options.cwd.cyan + '$ ';

	console.log('');
	console.log('--------------------start exec------------------'.cyan);
	console.log( prompt.magenta + cmd );

	const result = { stdout: '', stderr: '', status: 0 };

	//const originalStdoutWrite = process.stdout.write;
	const originalStderrWrite = process.stderr.write;

	process.stderr.write = function() {};

	try {
		result.stdout = execSync( cmd, options );
	} catch( err ) {

		//process.stdout.write = originalStdoutWrite;
		process.stderr.write = originalStderrWrite;

		result.status = err.status;
		result.stderr = err.stderr;

		console.error( err.stderr );

		console.log('--------------------/end exec with error---------'.yellow);
		console.log('');
		return result;
	}
	//process.stdout.write = originalStdoutWrite;
	process.stderr.write = originalStderrWrite;

	console.log( result.stdout );

	console.log('--------------------/end exec-------------------'.cyan);
	console.log('');
	return result;
}

module.exports = execUC;
