

// 轮播图
let imgs = ["banner-1.jpg","banner-2.jpg","banner-3.jpg","banner-4.jpg","banner-5.jpg"];
let ord = 0;//表示下标
let myTimer =null; 

//初始化界面的函数
function initUI(){
	$("#btns li:first").css({"background":"red"})
	//把所有图片的透明度设置为0
	$("#banner img").slice(1).css({"display":"none"});

}

//动态改变图片
function changeImg(){
	myTimer = setInterval(function(){
		//一、数据处理
		//1、改变图片序号
		let outOrd = ord;//定义淡出（消失）的图片序号
		ord=ord+1;
		//2、改变外观（显示对应的图片）
		showImg(outOrd,ord);
	},2000);
}

//显示指定的图片（根据指定的图片序号）
function showImg(outOrd,transOrd){//2,4
	//一、数据处理
	//1、数据改变
	ord=transOrd;
	//2、边界（数据合法性）
	if(ord>imgs.length-1 || ord<0){
		ord=0;
	}
	//二、外观
	//调用淡入淡出函数就行了
	//$("imgId").src="img/"+imgs[ord];
	fadeInOut(outOrd,ord);//2,4
	
	//把所有豆豆都变成原始颜色。
	$("#banner li").css({"background":"orange"});
	//把当前豆豆变成高亮颜色。
	$("#banner li").eq(ord).css({"backgroundColor":"red"});

	$("#banner img").eq(ord).animate({
		"height":"100%",
		"width":"100%"
	})
}

//淡入淡出效果
function fadeInOut(outOrd,inOrd){//2,4
	if(outOrd==inOrd){
		return;
	}

	$("#banner img").eq(outOrd).fadeOut(1000);
	$("#banner img").eq(inOrd).fadeIn(1000);
	
}

$(function(){	
	initUI();
	
	changeImg();
	
	$("#banner").mouseenter(function(){
		clearInterval(myTimer);
	});
	$("#banner").mouseleave(function(){
		changeImg();
	});
	
	$("#btns li").click(function(){
		$("#banner img").eq(ord).stop(true,true);
		
		let index = $("#btns li").index(this);
		showImg(ord,index);
		

	
});




