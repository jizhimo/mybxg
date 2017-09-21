/**
 * Created by 任洁玉 on 2017/9/21.
 */
define(["jquery","template"],function($,template){
//调用接口。获取数据
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