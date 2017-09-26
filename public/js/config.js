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
            util:"../js/util",
            validate:"validate/jquery-validate.min",
            form:"jquery-form/jquery.form",
            datepicker:"bootstrap-datepicker/js/bootstrap-datepicker.min",
            language:"bootstrap-datepicker/locales/bootstrap-datepicker.zh-CN.min"


        },
        shim:{
            bootstrap:{
                deps:["jquery"]
            },
            language:{
                deps:["jquery","datepicker"]
            },
            validate:{
                deps:["jquery"]
            }
        }
    }
)