/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    connect: {
      server: {
        options: {
          port: 8888,
          hostname: '0.0.0.0', // Change to 0.0.0.0 to external connection.
          base: './test',
          open: true,
          middleware: function (connect, options) {
            return [
              require('connect-livereload')({ port: 35732 }),
              // Serve static files.
              connect.static(options.base),
            ];
          }
        }
      }
    },

    watch: {
      reload: {
        files: ['weblime.js'],
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

  // Default task.
  grunt.registerTask('default', 'server');
  grunt.registerTask('server', ['connect', 'watch:reload']);

};