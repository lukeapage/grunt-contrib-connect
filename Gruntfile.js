/*
 * grunt-contrib-connect
 * http://gruntjs.com/
 *
 * Copyright (c) 2012 "Cowboy" Ben Alman, contributors
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },
    server: {
      options: {
        keepalive: true,
        // Example usage
        middleware: function(connect, options) {
          // Return array of whatever middlewares you want
          return [
            function(req, res, next) {
              res.end(JSON.stringify(options, null, '\t'));
            }
          ];
        }
      }
    }
  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // The jshint plugin is used for linting.
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // By default, lint task.
  grunt.registerTask('default', 'jshint');

};
