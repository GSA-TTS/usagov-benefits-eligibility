const gulp = require("gulp")

function defaultTask(cb) {
  gulp.src("./node_modules/uswds/dist/img/**/*").pipe(gulp.dest("./assets/img/"))
  gulp.src("./node_modules/uswds/dist/fonts/**/*").pipe(gulp.dest("./assets/fonts/"))
  gulp.src("node_modules/uswds/dist/js/**/*").pipe(gulp.dest("./assets/js/"))
  cb()
}

exports.default = defaultTask
