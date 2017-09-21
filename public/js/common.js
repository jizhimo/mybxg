define(["jquery","template","cookie"],function($,template){
	//NProgress.start();
    //
	//NProgress.done();

	$('.navs ul').prev('a').on('click', function () {
		$(this).next().slideToggle();
	});
	//ʵ���˳�����
	$("#loginOut").click(function(){
		$.ajax({
			type:"post",
			url:"/api/logout",
			dataType:"json",
			success:function(data){
				if(data.code==200){
					location.href="/main/login";
				}
			}
		})
	});
	//����û��Ƿ��ѵ�¼
	var flag=$.cookie("PHPSESSID");
	console.log(flag)
	if(!flag &&location.pathname!="/main/login"){
		location.href="/main/login"
	}
	//�����û�ͷ����Ϣ
	var loginInfo=$.cookie("loginInfo");
	console.log(loginInfo)
	loginInfo=loginInfo&&JSON.parse(loginInfo);
	//$(".aside .profile img").attr("src",loginInfo.tc_avatar);
	//$(".aside .profile h4").html(loginInfo.tc_name);
	var tpl='<div class="avatar img-circle"> <img src="{{tc_avatar}}"> </div> '
		+'<h4>{{tc_name}}</h4>'
	console.log(tpl)
	var html=template.render(tpl,loginInfo);
	console.log(html)
	$(".aside .profile").html(html);
})
