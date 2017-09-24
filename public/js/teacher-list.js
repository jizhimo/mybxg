/**
 * Created by �ν��� on 2017/9/21.
 */
define(["jquery","template","bootstrap"],function($,template){
//教师列表功能
    $.ajax({
        type:"get",
        url:"/api/teacher",
        dataType:"json",
        success:function(data){
                //console.log(data)
            var html=template("template",{list:data.result});
            $("#teacherInfo").html(html);
            //启用注销教师功能
            $(".eod").click(function(){
                var that=this;
                var td=$(this).parent();
                //var td=$(this).closest("td");查找最近父元素
                var tcID=td.attr("data-tcId");
                var tcStatus=td.attr("data-status");
                //console.log(tcID,tcStatus)
                $.ajax({
                    type:"post",
                    url:"/api/teacher/handle",
                    data:{tc_id:tcID,tc_status:tcStatus},
                    dataType:"json",
                    success:function(data){
                        //console.log(data)
                        if(data.code==200){
                            td.attr("data-status", data.result.tc_status);
                            if(data.result.tc_status==0){
                                $(that).text("注销")
                            }else{
                                $(that).text("启用")
                            }

                        }
                    }
                });
            });
            //讲师查看功能
            $(".preview").click(function(){
                var td=$(this).parent();
                var tcID=td.attr("data-tcId");
                var tcStatus=td.attr("data-status");
                $.ajax({
                    type:"get",
                    url:"/api/teacher/view",
                    data:{tc_id:tcID},
                    dataType:"json",
                    success:function(data){
                        console.log(data)
                        var html=template("tcTpl",data.result);
                        console.log(html)
                        $("#tcInfo").html(html);
                        $("#teacherModal").modal();
                    }
                });
            });
        }
    });

})