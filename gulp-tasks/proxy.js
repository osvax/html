"use strict";

import { paths } from "../gulpfile.babel";
import gulp from "gulp";
import browsersync from "browser-sync";

gulp.task("proxy", () => {
    browsersync.init({
        proxy: "localhost:9090",
		host: "localhost",
		port: 4001,
		browser:'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
		logPrefix: "Val_Devil_Proxy",
		files:     [
		"./dist/"
		],
    });

    gulp.watch(paths.views.watch, gulp.parallel("views"));
    gulp.watch(paths.styles.watch, gulp.parallel("styles"));
    gulp.watch(paths.scripts.watch, gulp.parallel("scripts"));
    gulp.watch(paths.sprites.watch, gulp.parallel("sprites"));
    gulp.watch(paths.images.watch, gulp.parallel("images"));
    gulp.watch(paths.webp.watch, gulp.parallel("webp"));
    gulp.watch(paths.fonts.watch, gulp.parallel("fonts"));
});