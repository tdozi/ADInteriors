'use strict';

module.exports = {
	watch: {
		options: {
            spawn: false,
            cwd: '<%= dirs.source %>',
            livereload: true,},
	  	files: ['js/*.js', 'scss/*.scss'],
	  	tasks: ['concurrent:test', 'concurrent:staging','concurrent:release']
	}
}