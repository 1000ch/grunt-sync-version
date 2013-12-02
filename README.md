# grunt-json-version

## About

Synchronize version of JSON setting file with Grunt task.

## Usage

```js
module.exports = function (grunt) {

  grunt.initConfig({
    version: {
      options: {
        base: 'base.json'
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
### files

Type `String` or `Array`

Specify targets to apply version.

### Options

#### base

Type: `String`

Base json file. This is optional.  
If `base` is omitted, `package.json` will be loaded.

#### space

Type: `Number`

## License

MIT.
