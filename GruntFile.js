module.exports = function (grunt) {
    // connect won't work without watch
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-open');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        connect: {
            server: {
                options: {
                    port: 8080,
                    base: './'
                }
            }
        },
        less : {
            development : {
                files : {
                    "./css/bootstrap.css": "./css/less/bootstrap/bootstrap.less",
                    "./css/navbar.css": "./css/less/navbar.less",
                    "./css/index.css": "./css/less/index.less",
                    "./css/me.css": "./css/less/me.less",
                    "./css/links.css": "./css/less/links.less",
                    "./css/impressum.css": "./css/less/impressum.less",
                    "./css/kontakte.css": "./css/less/kontakte.less"
                }
            }
        },
        watch : {
            files : ['./css/less/**/*.less'],
            tasks : ['less','cssmin']
        },
        cssmin : {
            minify: {
                expand: true,
                cwd: 'css/',
                src: ['*.css'],
                dest: 'css/min/',
                ext: '.min.css'
            }
        },
        open: {
            dev: {
                path: 'http://localhost:8080/view/index.html'
            }
        }
    });

    grunt.registerTask('default', ['connect', 'open','less','cssmin','watch']);

}