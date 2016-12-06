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
                quality: 60
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
              cwd: 'images_src/',
              dest: 'images/'
            }]
          }
        },
        image_resize: {
          no_overwrite: {
            options: {
              width: 150,
              height: 150,
              overwrite: false,
            },
            files: {
               'images/Logo1-red.png': 'images_src/Logo1.png'
             }
          }
        }
      });

      grunt.loadNpmTasks('grunt-contrib-copy');
      grunt.loadNpmTasks('grunt-responsive-images');
      grunt.loadNpmTasks('grunt-image-resize');

      grunt.registerTask('default',['copy', 'responsive_images', 'image_resize']);

    };