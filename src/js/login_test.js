$(function(){
	//给登录按钮加点击事件
	$("#login").click(function(){
		//获取用户输入的用户名和密码
		var usn = $("#username").val();
		var pwd = $("#password").val();
		
		//校验用户名和密码是否正确
		//获取到cookie中的用户信息
		var users = $.cookie("registerUsers") ? $.cookie("registerUsers") : "";
		//将字符串转为对象
		users = convertStrToObj(users);
		
		if(users[usn] == pwd){
			//登录成功
			$.cookie("loginedUsers",usn,{expires:7,path:"/"});
//			console.log("登录成功!");
			location.href = "../../dist/index.html";
		}else{
			//登录失败
			alert("用户名和密码不匹配，请确认后重试！");
		}
	});
	$("#goRegister").click(function(){
		//跳转到注册页
		location.href = "../../dist/pages/register.html";
	});
});
//将字符串转为对象
function convertStrToObj(str){
	if(!str){
		return {};
	}
	return JSON.parse(str);
}
