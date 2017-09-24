/**
 * Created by �ν��� on 2017/9/20.
 */
require.config(
    {
        baseUrl:"/public/assets",
        paths:{
            jquery:"jquery/jquery",
            cookie:"jquery-cookie/jquery.cookie",
            template:"artTemplate/template-web",
            common:"../js/common",
            login:"../js/login",
            teacherlist:"../js/teacher-list",
            teacherAdd:"../js/teacher-add",
            bootstrap:"bootstrap/js/bootstrap.min",
            util:"../js/util"

        },
        shim:{
            bootstrap:{
                deps:["jquery"]
            }
        }
    }
)