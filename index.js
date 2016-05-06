const path = require('path');
const execSync = require('child_process').execSync;
const objectAssign = require('object-assign');
const colors = require('colors');
colors.enabled = true;

const isArray = Array.isArray || function(obj) {
	return Object.prototype.toString.call(obj) === '[object Array]';
};

const execOptions = {
	stdio: [ process.stdin, process.stdout, process.stderr ],
	cwd: path.resolve( process.cwd() )
};

function exec( cmd, options ) {

	options = objectAssign( {}, execOptions, options );
	if( isArray( cmd )) {
		cmd = cmd.join(' ');
	}

	const prompt = options.cwd.cyan + '$ ';

	console.log('');
	console.log('--------------------start exec------------------'.cyan);
	console.log( prompt.magenta + cmd );
	execSync( cmd, options );
	console.log('--------------------/end exec-------------------'.cyan);
	console.log('');
}

module.exports = exec;
