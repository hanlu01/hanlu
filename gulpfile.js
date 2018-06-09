var gulp = require("gulp");
// var concat = require("gulp-concat");
// var uglify = require("gulp-uglify");
// var rename = require("gulp-rename");
// var connect = require("gulp-connect");
var sass = require("gulp-sass");

// sass编译
gulp.task("sassin",function(){
	gulp.src(["sass/*.scss"])
	.pipe(sass())
	.pipe(gulp.dest("E:\\hanlu\\dist\\css"));
});

//定义一个复制文件的任务（命令）
gulp.task("copy",function(){
	gulp.src("*.html")
	.pipe(gulp.dest("E:\\hanlu\\dist"));
});

//复制图片文件
// gulp.task("images",function(){
// 	gulp.src("img/*.jpg")
// 	.pipe(gulp.dest("D:\\Documents\\Desktop\\aaa\\img"));
// });

//合并文件
// gulp.task("concatjs",function(){
// 	gulp.src(["js/index.js","js/goodslist.js"])
// 	.pipe(concat("common.js"))
// 	.pipe(gulp.dest("D:\\Documents\\Desktop\\aaa\\dist\\js"));
// });


// //合并和压缩文件
// gulp.task("concatanduglifyjs",function(){
// 	gulp.src(["js/index.js","js/goodslist.js"])
// 	.pipe(concat("common.js"))
// 	.pipe(uglify())
// 	.pipe(gulp.dest("D:\\Documents\\Desktop\\aaa\\dist\\js"));
// });



//合并和压缩重命名文件
// gulp.task("concatanduglifyandrenamejs",function(){
// 	gulp.src(["js/index.js","js/goodslist.js"])
// 	.pipe(concat("common.js"))
// 	.pipe(gulp.dest("E:\\hanlu\\dist\\js"))
// 	.pipe(uglify())
// 	.pipe(rename("common.min.js"))
// 	.pipe(gulp.dest("E:\\hanlu\\dist\\js"));
// });

//合并和压缩重命名文件
// gulp.task("babel",function(){
// 	gulp.src("js/goodsdetail.js")
// 	.pipe(babel())
// 	.pipe(gulp.dest("E:\\hanlu\\dist\\js"));
// });

gulp.task("js",function(){
	gulp.src("js/*.js")
	.pipe(gulp.dest("E:\\hanlu\\dist\\js"));
});

//启动监听器
gulp.task("watch",function(){
	gulp.watch("sass/*.scss",["sassin"]);
	gulp.watch("js/*.js",["js"]);
	gulp.watch("*.html",["copy"]);
	// gulp.watch("img/*.{jpg,png}",["images"]);
	// gulp.watch(["js/*.js","js/goodslist.js"],["concatanduglifyandrenamejs"]);
});


//简易的web服务器
gulp.task("server",function(){
	connect.server({
		"root":"dist"
	});
});