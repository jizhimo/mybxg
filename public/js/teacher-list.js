/**
 * Created by �ν��� on 2017/9/21.
 */
define(["jquery","template"],function($,template){
//���ýӿڡ���ȡ����
    $.ajax({
        type:"get",
        url:"/api/teacher",
        dataType:"json",
        success:function(data){
                console.log(data)
            var html=template("template",{list:data.result});
            $("#teacherInfo").html(html)
        }
    })
})