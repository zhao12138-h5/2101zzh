
$(function(){
	
	var str = $.cookie("loginedUsers") ? $.cookie("loginedUsers") : "";
	if(str){
		var obj = convertStrToObj(str);
		$(".navtop span").prepend($('<p>欢迎您！' + str + '<a href="javascript:;" id="logout">注销</a></p>'))
	}else{
		var str1 = $('<p>您还未登陆:<a href="javascript:;" id="register">免费注册</a>,<a id="logout" >登录</a><i>|</i></p>');
		$(".navtop span").prepend(str1);
	}
	if(str){
		var obj = convertStrToObj(str);
		$(".rg-nav span").prepend($('<p>欢迎您！' + str + '<a href="javascript:;" id="logout">注销</a></p>'))
	}else{
		var str1 = $('<p>您还未登陆哦:<a href="javascript:;" id="register">免费注册</a>或立即<a id="logout" >登录</a></p>');
		$(".rg-nav span").prepend(str1);
	}
	$("#register").click(function(){
		location.href = "../dist/pages/register.html";
	})
	$("#logout").click(function(){
		$(this).parent().remove();
		$.removeCookie("loginedUsers",{expires : 7,path:"/"});
		location.href = "../dist/pages/login.html";
	})	
})
function convertStrToObj(str){
	if(!str){
		return {};
	}
	var users = str.split(":");
	var obj = {};
	for(var i = 0; i < users.length; i ++){
		var data = users[i].split(",");
		obj[data[0]] = data[1];
	}
	return obj;
}
function convertObjToStr(obj){
	var str = "";
	for(var usn in obj){
		var pwd = obj[usn];
		if(str){
			str += ":";
		}
		str += usn + "," + pwd;
	}
	return str;
}