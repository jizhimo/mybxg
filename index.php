<?php
    header("content-type:text/html;charset=uft8");
    //include("./views/main/index.html");
    //默认目录名称
   $dir="main";
   //默认文件名称
   $filename="index";
   //处理url中的路径
   if(array_key_exists("PATH_INFO",$_SERVER)){
        //路径存在  请求路径
        $path=$_SERVER["PATH_INFO"];//   /main/index
        //截取字符串
        $str=substr($path,1); //   main/index
        //分隔字符串
        $ret=explode("/",$str);
        if(count($ret)==2){
            $dir=$ret[0];
            $filename=$ret[1];
        }else{
            $filename="login";
        }
   }
   //切入子页面
   include("./views/".$dir."/".$filename.".html");
?>