'use strict';

/* Balance processes */
module.exports = {
	release: ['concat', 'sass:release', 'copy:release', 'uglify'],
	staging: ['sass:staging', 'copy:staging'],
	test: ['jshint']
}