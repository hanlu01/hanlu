
window.onload = function(){

	// 验证码
	$(".img_pos").click(function(){
		let $index=parseInt(Math.random()*6);
		$(".img_pos").attr("src","img/lang/s"+$index+".jpg");
	})
	
	//手机验证
	$(".shouji").focusout(function(){
		if(checkAll("phoneNumber",$(".shouji").val())){
			$("#phoneMsg").text( "√");
			$("#phoneMsg").css({"color":"green"});
		}else{
			$("#phoneMsg").text("手机格式不正确");
			$("#phoneMsg").css({"color":"red"});

		}
	}) 

	//密码验证
	$(".mima").focusout(function(){
		if(checkAll("password",$(".mima").val())){
			$("#password").text( "√");
			$("#password").css({"color":"green"});
		}else{
			$("#password").text("密码不正确");
			$("#password").css({"color":"red"});

		}
	})

	// 确认密码
	$("#mima_s").focusout(function(){
		if($(".mima").val() == $("#mima_s").val()){
			$("#password_s").text("√");
			$("#password_s").css({"color":"green"});
		}else{
			$("#password_s").text("密码不一样");
			$("#password_s").css({"color":"red"});
		}
	})

}


function checkAll(type,value){
	var reg = null;
	switch(type){
		case "username":reg = /^[a-zA-Z_]\w{1,10}$/;break;//用户名
		case "password":reg = /^[a-zA-Z]\w{5,15}$/;break;//密码验证
		case "pass-head":reg=/^[a-zA-z]/;break;
		case "pass-space":reg=/\S*/;break;//去除多余空格
		case "emial":reg = /^\w+@[a-zA-Z0-9]+\.(com|cn|net|top|vip)$/;break;
		case "phoneNumber":reg = /^1[^0126]\d{9}$/;break;//手机号验证
		case "personId":reg = /^[1-9]\d{5}(19|20)\d{2}(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])\d{3}[0-9xX]$/;break;
		default:;
	}
	if(reg!=null){
		if(reg.test(value)){
			return true;
		}
	}
	return false;	
}