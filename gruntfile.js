module.exports = function(grunt) {
	grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),
										
	  concat : {
      options: {
        separator: '\n\n//------------------------------------------\n',
        banner: '\n\n//------------------------------------------\n'
      },
      dist : {
        src: ['components/scripts/*.js'],
        dest: 'builds/development/js/script.js'
      },
    }, //concat

    uglify: {
      options: {
        preserveComments: 'some'
      },
      prod: {
        src: ['components/scripts/*.js'],
        dest: 'builds/production/js/script.js'
      }
    }, //ugligy

    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files : [{
          src: 'components/sass/style.scss',
          dest: 'builds/development/css/style.css'
        }]
      },
    }, //sass

    cssmin: {
      prod: {
        files: [{
          expand: true,
          cwd: 'builds/development/css',
          src: ['*.css', '!*.min.css'],
          dest: 'builds/production/css',
          ext: '.min.css'
        }]
      }
    }, //cssmin

    connect: {
      sever: {
        options: {
          hostname: 'localhost',
          port: 3000,
          base: 'builds/development/',
          livereload: true
        }
      }
    }, //connect

    watch: {
      options: {
        spawn: false,
        livereload: true
      },
      scripts: {
        files: ['builds/development/**/*.html',
        'builds/development/**/*.htm',
        'components/scripts/**/*.js',
        'components/sass/**/*.scss'],
        tasks: ['concat', 'sass']
      }
    } //watch

	}); //initConfig

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['concat', 'sass', 'connect', 'cssmin', 'uglify', 'watch']);

}; //wrapper function 