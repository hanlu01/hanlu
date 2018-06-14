<?php
		header("Content-type","text/html;charset=utf-8");
		//获取数据
		$userphone=$_POST['userphone'];
		$userpass=$_POST['userpass'];
		//处理
		$rows="";
			//连接数据库
		$conn=mysql_connect("localhost","root","root");
			//选择数据库
		mysql_select_db("lang",$conn);
			//执行sql语句
		$resultStr="select * from stuinfo where userphone='".$userphone."' and userpass='".$userpass."'";
		
		// echo $resultStr;
		$result=mysql_query($resultStr,$conn);
		$row=mysql_num_rows($result);
		// echo $row;
		if($row>0){
			$rows=1;
		}else{
			$rows=0;
		}
		//关闭数据库
		mysql_close($conn);
		//响应
		echo $rows;
?>
	