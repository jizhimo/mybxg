<?php
    header("content-type:text/html;charset=uft8");
    //include("./views/main/index.html");
    //Ĭ��Ŀ¼����
   $dir="main";
   //Ĭ���ļ�����
   $filename="index";
   //����url�е�·��
   if(array_key_exists("PATH_INFO",$_SERVER)){
        //·������  ����·��
        $path=$_SERVER["PATH_INFO"];//   /main/index
        //��ȡ�ַ���
        $str=substr($path,1); //   main/index
        //�ָ��ַ���
        $ret=explode("/",$str);
        if(count($ret)==2){
            $dir=$ret[0];
            $filename=$ret[1];
        }else{
            $filename="login";
        }
   }
   //������ҳ��
   include("./views/".$dir."/".$filename.".html");
?>