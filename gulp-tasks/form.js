"use strict";

import { paths } from "../gulpfile.babel";
import gulp from "gulp";

gulp.task("forms", () => {
    return gulp.src(paths.forms.src)
        .pipe(gulp.dest(paths.forms.dist));
});