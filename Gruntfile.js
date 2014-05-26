/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    connect: {
      server: {
        options: {
          port: 8888,
          hostname: '0.0.0.0', // Change to 0.0.0.0 to external connection.
          base: './app',
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

    copy: {
      main: {
        files: [{
          flatten: true,
          src: 'bower_components/jquery/jquery.min.js',
          dest: 'app/lib/jquery.js',
          filter: 'isFile'
        },{
          flatten: true,
          src: 'bower_components/requirejs/require.js',
          dest: 'app/lib/require.js',
          filter: 'isFile'
        }]
      }
    },

    watch: {
      reload: {
        files: ['lib/**/*.js'],
        tasks: [], // Add more tasks here.
        options: {
          livereload: 35732
        }
      }
    }

  });

  // Load task modules.
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Default task.
  grunt.registerTask('default', 'server');
  grunt.registerTask('server', ['copy', 'connect','watch:reload']);

};