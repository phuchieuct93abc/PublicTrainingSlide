/* global module:false */
module.exports = function (grunt) {
    var port = grunt.option('port') || 8000;
    var root = grunt.option('root') || '.';

    if (!Array.isArray(root))
        root = [root];

    // Project configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        meta: {
            banner: '/*!\n' +
                    ' * reveal.js <%= pkg.version %> (<%= grunt.template.today("yyyy-mm-dd, HH:MM") %>)\n' +
                    ' * http://lab.hakim.se/reveal-js\n' +
                    ' * MIT licensed\n' +
                    ' *\n' +
                    ' * Copyright (C) 2016 Hakim El Hattab, http://hakim.se\n' +
                    ' */'
        },

        qunit: {
            files: ['test/*.html']
        },

        uglify: {
            options: {
                banner: '<%= meta.banner %>\n'
            },
            build: {
                src: 'js/reveal.js',
                dest: 'js/reveal.min.js'
            }
        },

        autoprefixer: {
            dist: {
                src: 'css/reveal.css'
            }
        },

        cssmin: {
            compress: {
                files: {
                    'css/reveal.min.css': ['css/reveal.css']
                }
            }
        },

        jshint: {
            options: {
                curly: false,
                eqeqeq: true,
                immed: true,
                esnext: true,
                latedef: true,
                newcap: true,
                noarg: true,
                sub: true,
                undef: true,
                eqnull: true,
                browser: true,
                expr: true,
                globals: {
                    head: false,
                    module: false,
                    console: false,
                    unescape: false,
                    define: false,
                    exports: false
                }
            },
            files: ['Gruntfile.js', 'js/reveal.js']
        },

        connect: {
            server: {
                options: {
                    port: port,
                    base: root,
                    livereload: true,
                    open: true,
                    hostname: "localhost"
                }
            },

        },

        zip: {
            'reveal-js-presentation.zip': [
                'index.html',
                'css/**',
                'js/**',
                'lib/**',
                'images/**',
                'plugin/**',
                '**.md'
            ]
        },

        watch: {
            slides: {
                files: ['index.html', 'slides/*.html'],

            },
            scss: {
                files: ['styles/**/*.scss'],
                tasks: 'sass'
            },

            js: {
                files: ['Gruntfile.js', 'js/reveal.js', 'controllers/*.js'],
                tasks: 'js'
            },

            html: {
                files: root.map(path => path + '/*.html')
            },
            markdown: {
                files: root.map(path => path + '/*.md')
            },
            options: {
                livereload: true
            }
        },

        retire: {
            js: ['js/reveal.js', 'lib/js/*.js', 'plugin/**/*.js'],
            node: ['.'],
            options: {}
        },

        sass: {
            dist: {
                options: {
                    sourcemap: 'none'
                },
                files: [{
                        expand: true,
                        cwd: 'styles/scss',
                        src: ['*.scss'],
                        ext: '.css',
                        dest: 'styles/css',

                    }]
            }
        },
        wiredep: {

            task: {

                // Point to the files that should be updated when
                // you run `grunt wiredep`
                src: [
                    'index.html' // .html support...

                ],

                options: {
                    // See wiredep's configuration documentation for the options
                    // you may pass:

                    // https://github.com/taptapship/wiredep#configuration
                }
            }
        },
        useminPrepare: {
            html: 'index.html',
            options: {
                dest: 'target',
                flow: {
                    html: {
                        steps: {
                            js: ['concat', 'uglifyjs'],
                            css: ['cssmin']
                        },
                        post: {}
                    }
                }
            }
        },

        usemin: {
            html: ['target/index.html'],
            css: ['target/app.css'],
            js: ['target/app.js']
        },
//        ngmin: {
//
//            directives: {
//                expand: true,
//                cwd: 'target/',
//                src: ['**/*.js'],
//                dest: 'target/'
//            }
//        },
        uglify: {
            options: {
                mangle: false
            }},

        copy: {
            main: {
                files: [
                    // includes files within path
                    {expand: true, src: ['index.html'], dest: 'target/'},
                    {expand: true, src: ['lib/**'], dest: 'target/'},
                    {expand: true, src: ['js/**'], dest: 'target/'},
                    {expand: true, src: ['resources/**'], dest: 'target/'},
                    {expand: true, src: ['plugin/**'], dest: 'target/'},
                    {expand: true, src: ['slides/**'], dest: 'target/'},
                    {expand: true, cwd: "lib/font/source-sans-pro", src: ['**'], dest: 'target/'},
                ],
            },
        },
        injector: {
            options: {},
            local_dependencies: {
                files: {
                    'index.html': ['controllers/*.js', 'styles/css/*.css'],
                }
            }
        }

    });

    // Dependencies
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-zip');
    grunt.loadNpmTasks('grunt-retire');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-wiredep');
    require('load-grunt-tasks')(grunt);



    // Default task
    grunt.registerTask('default', ['css', 'js']);

    // JS task
    grunt.registerTask('js', ['jshint', 'uglify', 'qunit']);

    // Theme CSS
    grunt.registerTask('css-themes', ['sass:themes']);

    // Core framework CSS
    grunt.registerTask('css-core', ['sass:core', 'autoprefixer', 'cssmin']);

    // All CSS
    grunt.registerTask('css', ['sass', 'autoprefixer', 'cssmin']);

    // Package presentation to archive
    grunt.registerTask('package', ['default', 'zip']);

    // Serve presentation locally
    grunt.registerTask('serve', ['connect', 'wiredep','injector', 'watch']);

    // Run tests
    grunt.registerTask('test', ['jshint', 'qunit']);
    grunt.registerTask('build', [
        'injector',
        'sass',
        'useminPrepare',
        'copy',
        'concat:generated',
        'cssmin:generated',
        'uglify:generated',
        'usemin'
    ]);

};