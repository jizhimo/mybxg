/**
 * Created by �ν��� on 2017/9/24.
 */
define(["jquery"],function($){
    return {
        qs:function(key){
            var param=location.search.substr(1);
            var result=null;
            if(param){
                var ps=param.split("&");
                // console.log(ps) tc_id=2
                $.each(ps,function(index,item){
                    var  kv=item.split("=");
                    if(kv[0]==key){
                        result=kv[1];
                        return false;//��ֹeachѭ��
                    }
                });
            }
            return result;
        }
    }
});