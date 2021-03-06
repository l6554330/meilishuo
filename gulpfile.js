const gulp = require("gulp");//加载gulp模块;
const connect = require("gulp-connect");//加载 gulp-connect 插件;
const babel = require("gulp-babel");//加载gulp-babel 插件；
const sass = require("gulp-sass-china");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");

//给 gulp 添加一个指令; sayhello => 打印 hello....
// gulp.task("sayhello",()=>{
// 	console.log("hello world my gulp run");
// })

//gulp.src => 找到文件根源;
//pipe() => 所有的特殊指令;
//gulp.dest() => 所有的特殊指令;
gulp.task("html",()=>{
	return gulp
				//.src(["html/*.html"])
				//.src(["html/*"])
				//.src(["html/**/*"])
				.src(["*.html"])
			 	.pipe(gulp.dest("dist"))
			 	.pipe(connect.reload());//自动刷新;
})

gulp.task("htmls",()=>{
	return gulp
				//.src(["html/*.html"])
				//.src(["html/*"])
				//.src(["html/**/*"])
				.src(["html/*.html"])
			 	.pipe(gulp.dest("dist"))
			 	.pipe(connect.reload());//自动刷新;
})

gulp.task("json",()=>{
	return gulp
				//.src(["html/*.html"])
				//.src(["html/*"])
				//.src(["html/**/*"])
				.src(["json/*.json"])
			 	.pipe(gulp.dest("dist/json"))
			 	.pipe(connect.reload());//自动刷新;
})

gulp.task("script",()=>{
	return gulp
				.src(["src/*.js","model/*.js","libs/*.js","!src/secret.js"])
				.pipe(gulp.dest("dist/scripts"))
				.pipe(connect.reload());
})

gulp.task("images",()=>{
	return gulp
				.src(["images/*.*"])
				.pipe(gulp.dest("dist/images"))
})
// gulp.task("script",()=>{
// 	return gulp
// 				.src(["src/*.js","model/*.js","libs/*.js","!src/secret.js","libs/*.js"])
// //				.src(["libs/*.js"])
// //				.pipe(concat("vendor.js"))
// 				.pipe(gulp.dest("dist/scripts"))
// })
gulp.task("watch",()=>{
	gulp.watch(["**/*.html","*/*.js","!module/**/*","images/*.*","html/*.html","json/*.json"],["script","html","images","htmls","json"])
//	gulp.watch(["**/*.html","!module/**/*"],["html"]);
//	gulp.watch(["*/*.js","!module/**/*","!es6/*"],["script"]);
//	gulp.watch(["es6/*.js","!module/**/*"],["es6"]);
	gulp.watch(["scss/scss.scss","*.html","es6/*.js"],["sass","html","es6"]);
})



//gulp.task("publish",["html","script"]);

//可以省略 gulp publish => gulp 
//gulp.task("default",["html","script"]);

//自动检测执行;
//gulp.watch()
// gulp.task("watch",()=>{
// 	//gulp.watch(["**/*.html","*/*.js","!module/**/*"],["script","html"])
// 	gulp.watch(["**/*.html","!module/**/*"],["html"]);
// 	gulp.watch(["src/*.js","*/*.js","!module/**/*","!es6/*"],["script"]);
// 	gulp.watch(["es6/*.js","!module/**/*"],["es6"]);
// 	gulp.watch(["scss/*.scss","*.html"],["sass","html"]);
// })
gulp.task('server',function(){
    connect.server({
        root:'dist',  //以谁为服务器根目录
        port:83,  // 端口号 
        livereload:true //开启自动刷新;
    });
});
gulp.task('es6',() =>{
	   return gulp.src('es6/*.js')
	        .pipe(babel({
	            presets: ['env']
	        }))
	        .pipe(gulp.dest('dist/scripts/'))
	        .pipe(connect.reload())
});

gulp.task("sass",()=>{
	 return gulp.src('scss/scss.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'));
})

gulp.task("default",["watch","server"]);
