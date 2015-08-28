module.exports = function (grunt) {
    grunt.initConfig({

    // define source files and their destinations
    concat: {
        dist: {
            src: ['js/data.js', 'js/*.js', 'js/**/*.js', '!js/_/*.js'],
            dest: 'js/_/all.comb.js'
        }
    },
    concat_css: {
        all: {
            src: ['css/*.css', '!css/_/*.css'],
            dest: 'css/_/all.css'
        }
    },
    uglify: {
        files: {
            src: 'js/_/all.comb.js',
            dest: 'js/_/all.js',
            expand: false,
            flatten: true,
            ext: '.min.js'
        }
    },
    watch: {
        js:  {
            files: ['js/*.js', 'js/**/*.js', '!js/_/*.js'],
            tasks: ['concat', 'uglify']
        },
        css: {
            files: ['css/*.css', '!css/_/*.css'],
            tasks: ['concat_css']
        }
    }
});

// load plugins
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-concat-css');
grunt.loadNpmTasks('grunt-contrib-uglify');

// register at least this one task
grunt.registerTask('default', [ 'concat', 'concat_css', 'uglify', 'watch' ]);


};