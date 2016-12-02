module.exports = function(grunt) {


    grunt.initConfig({
        responsive_images: {
          dev: {
            options: {
              engine: 'im',
              sizes: [{
                name: 'small',
                width: 350,
                height: 150
              }, {
                name: 'medium',
                width: 640
              }, {
                name: "large",
                width: 1140,
                separator: "-",
                suffix: "_x2",
                quality: 0.6
              }]
            },
            files: [{
              expand: true,
              src: ['*.{jpg,gif,png}'],
              cwd: 'images_src/',
              dest: 'images/'
            }]
          }
        },
        copy: {
          dev: {
            files: [{
              expand: true,
              src: ['**/*', '!app/img/**/*.*'],
              cwd: 'src/',
              dest: 'dist/'
            }]
          }
        }
      });

      grunt.loadNpmTasks('grunt-contrib-copy');
      grunt.loadNpmTasks('grunt-responsive-images');

      grunt.registerTask('default',['copy', 'responsive_images']);

    };