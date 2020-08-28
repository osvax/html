"use strict";

import { paths } from "../gulpfile.babel";
import gulp from "gulp";
import browsersync from "browser-sync";

gulp.task("serve", () => {
    browsersync.init({
        server: "./dist/",
        port: 4000,
        notify: true,
		browser:'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
		//tunnel: "http://valexo.localtunnel.me", // Демонстрация страницы: http://projectname.localtunnel.me
		logPrefix: "Valexo_Dev",
		// online: false, // Работа в автономном режиме без подключения к интернету
    });

    gulp.watch(paths.views.watch, gulp.parallel("views"));
    gulp.watch(paths.styles.watch, gulp.parallel("styles"));
    gulp.watch(paths.scripts.watch, gulp.parallel("scripts"));
    gulp.watch(paths.sprites.watch, gulp.parallel("sprites"));
    gulp.watch(paths.images.watch, gulp.parallel("images"));
    gulp.watch(paths.fonts.watch, gulp.parallel("fonts"));
});