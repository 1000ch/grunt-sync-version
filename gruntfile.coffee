module.exports = (grunt) ->

  grunt.initConfig
    pkg: grunt.file.readJSON 'package.json'
    jsonversion:
      options:
        major: 0
        minor: 1
        patch: 0
        format: '{{major}}.{{minor}}.{{patch}}'
      files: 'package.json'

  grunt.loadTasks 'tasks'

  grunt.registerTask 'default', 'jsonversion'
