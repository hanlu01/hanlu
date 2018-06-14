//添加cookie
//参数：
// 键，值，保质期（单位：天）
//返回值：无

function saveCookie(key,value,days){
	var d = new Date();
	d.setDate(d.getDate()+days);
	document.cookie = key+"="+escape(value)+";expires="+d.toGMTString();//用escape进行中文编码
	
}


//获取cookie
//参数：键
//返回值：值；

function getCookie(key){
	var str = unescape(document.cookie);
	var arr = str.split("; ");
	var value="";
	for(var i in arr){
		if(arr[i].indexOf(key+"=")==0){
			value = arr[i].substring((key+"=").length);
			break;
		}
	}
	return value;	
}

//删除cookie：要删除哪个cookie，就把哪个cookie的失效日期改成过去的时间
//参数：键
//返回值：无

function removeCookie(key){
	var d = new Date();
	d.setDate(d.getDate()-1);
	document.cookie = key+"=a;expires="+d.toGMTString();
}
