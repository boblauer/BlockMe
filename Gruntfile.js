module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    nodewebkit: {
      options: {
          build_dir: './build',
          mac: true,
          win: true,
          linux32: false,
          linux64: false
      },
      src: ['./src/js/*', './src/css/*', './src/index.html']
    },
  });

  grunt.registerTask('build', ['nodewebkit']);
};
