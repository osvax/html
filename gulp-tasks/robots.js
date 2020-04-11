"use strict";

import { paths } from "../gulpfile.babel";
import gulp from "gulp";

gulp.task("robots", () => {
    return gulp.src(paths.robots.src)
        .pipe(gulp.dest(paths.robots.dist));
});