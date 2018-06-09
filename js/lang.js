(function(){
	// 验证码
	$("#imgsj").click(function(){
		let $index=parseInt(Math.random()*6);
		$("#imgsj").attr("src","img/s"+$index+".jpg");
	})
})