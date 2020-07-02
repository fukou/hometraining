module.exports = function (grunt) {
  grunt.initConfig({
    watch: {
      files: "scss/**/*.scss",
      tasks: ["sass"],
    },
    sass: {
      dev: {
        files: {
          "css/main.css": "scss/main.scss",
        },
      },
    },
    browserSync: {
      dev: {
        bsFiles: {
          src: ["css/*.css", "*.html"],
        },
        options: {
          watchTask: true,
          server: ".",
        },
      },
    },
  });

  //   grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks("grunt-contrib-sass");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-browser-sync");

  //   default kalau run grunt langsung run semua skrip di atas
  grunt.registerTask("default", ["browserSync", "watch", "sass"]);
};
