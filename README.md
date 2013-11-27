# grunt-json-version

## About

Manage version of JSON setting file with Grunt task.

## Usage

```js
module.exports = function (grunt) {

  grunt.initConfig({
    version: {
      options: {
        major: 0,
        minor: 1,
        patch: 1,
        format: '{{major}}.{{minor}}.{{patch}}'
      },
      files: ['package.json']
    }
  });

  // load grunt-json-version
  grunt.loadNpmTasks('grunt-json-version');

  // register task
  grunt.registerTask('default', 'version');
};
```

### Options

If `version` is specified, `major`, `minor`, `patch`, `patch` options will be ignored.

#### version

Type: `String`

#### major

Type: `Number`

#### minor

Type: `Number`

#### patch

Type: `Number`

#### format

Type: `String`

#### space

Type: `Number`

## License

MIT.
