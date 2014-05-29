/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    connect: {
      server: {
        options: {
          port: 8888,
          hostname: '0.0.0.0', // Change to 0.0.0.0 to external connection.
          base: '.',
          open: true,
          debug: true,
          middleware: function (connect, options) {
            return [
              require('connect-livereload')({ port: 35732 }),
              // Serve static files.
              connect.static(options.base)
            ];
          }
        }
      }
    },

    watch: {
      reload: {
        files: ['lib/**/*.js'],
        tasks: [],
        options: {
          livereload: 35732
        }
      },
      scss: {
        files: ['*.scss'],
        tasks: ['compass'],
        options: {
          livereload: 35732
        }
      }
    },

    compass: {
      build: {
        options: {
          relativeAssets: true,
          sassDir: '.',
          cssDir: '.',
          environment: 'development',
          outputStyle: 'expanded',
          imagesDir: '.'
        }
      }
    }

  });

  // Load task modules.
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');

  // Default task.
  grunt.registerTask('default', 'server');
  grunt.registerTask('server', ['connect','watch']);

};