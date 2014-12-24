module.exports = function (grunt) {
	grunt.initConfig({
		watch : {
			files : ['test/*.js'],
			tasks : ['shell:phantom']
		},
		shell : {
			phantom : {
				command : 'node node_modules/phantomjs/bin/phantomjs node_modules/qunit-phantomjs-runner/runner.js test/index.html'
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-shell');
	grunt.registerTask('default', ['watch']);
};
