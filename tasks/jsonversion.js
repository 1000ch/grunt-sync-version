module.exports = function (grunt) {
  'use strict';

  grunt.registerMultiTask('jsonversion', 'Package version manager.', function() {

    var options = this.options({
      major: 0,
      minor: 1,
      patch: 0,
      format: '{{major}}.{{minor}}.{{patch}}',
      space: 2
    });

    if (!options.version) {
      options.version = options.format
        .replace('{{major}}', options.major)
        .replace('{{minor}}', options.minor)
        .replace('{{patch}}', options.patch);
    }

    this.filesSrc.filter(function(file) {
      if (grunt.file.isFile(file)) {
        return true;
      } else {
        grunt.log.warn(file + ' is not found.');
        return false;
      }
    }).forEach(function(file) {
      bumpVersion(file, options.version, options.space);
    });
  });

  function bumpVersion(file, version, space) {
    var json = grunt.file.readJSON(file);
    json.version = version;
    grunt.file.write(file, JSON.stringify(json, null, new Array(space + 1).join(' ')));
  }
};
