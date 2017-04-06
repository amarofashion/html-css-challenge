module.exports = function(grunt) {
	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		less: {
			development: {
				files: {
					'dist/css/style.css': 'less/source.less'
				}
			},
			production: {
				options: {
					compress: true
				},
				files: {
					'dist/css/style.min.css': 'less/source.less'
				}
			}
		},

		watch: {
			css: {
				files: ['less/**/*.less'],
				tasks: ['less']
			},
			js: {
				files: ['js/**/*.js'],
				tasks: ['concat', 'uglify']
			}
		},

		concat: {
			options: {
				separator: ';'				
			},
			dist: {
				src: ['js/jquery.min.js', 'js/flowtype.js', 'js/*.js'],
				dest: 'temp/js/app-concatenated.js'
			}
		},

		uglify: {
			options: {
				banner: '/* <%= pkg.name %> by <%= pkg.author %> on ' + '<%= grunt.template.today("dd/mm/yyyy hh:MM:ss") %> */\n',
			},
			dist: {
				files: {
					'dist/js/app.min.js': 'temp/js/app-concatenated.js'
				}
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('default', ['uglify']);
	grunt.registerTask('w', ['watch']);
}