(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-11f1a759"],{4565:function(e,t,n){"use strict";n("6bec")},"6bec":function(e,t,n){},7695:function(e,t,n){},d5c2:function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"lowin  lowin-blue"},[n("div",{staticClass:"lowin-wrapper"},[n("div",{staticClass:"lowin-box lowin-register"},[n("div",{staticClass:"lowin-box-inner"},[n("el-form",{ref:"loginForm",attrs:{model:e.loginForm}},[n("p",[e._v("学之思考试系统")]),n("div",{staticClass:"lowin-group"},[n("label",[e._v("用户名 ")]),n("el-input",{ref:"userName",staticClass:"lowin-input",attrs:{placeholder:"用户名",name:"userName",type:"text",tabindex:"1","auto-complete":"on"},model:{value:e.loginForm.userName,callback:function(t){e.$set(e.loginForm,"userName",t)},expression:"loginForm.userName"}})],1),n("div",{staticClass:"lowin-group password-group"},[n("label",[e._v("密码")]),n("el-input",{ref:"password",staticClass:"lowin-input",attrs:{placeholder:"密码",name:"password",tabindex:"2","auto-complete":"on"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleLogin(t)}},model:{value:e.loginForm.password,callback:function(t){e.$set(e.loginForm,"password",t)},expression:"loginForm.password"}})],1),n("div",{staticClass:"lowin-group"},[n("label",[e._v("年级 ")]),n("el-select",{staticClass:"lowin-input",attrs:{placeholder:"年级"},model:{value:e.loginForm.userLevel,callback:function(t){e.$set(e.loginForm,"userLevel",t)},expression:"loginForm.userLevel"}},e._l(e.levelEnum,(function(e){return n("el-option",{key:e.key,attrs:{value:e.key,label:e.value}})})),1)],1),n("el-button",{staticClass:"lowin-btn login-btn",attrs:{type:"text"},nativeOn:{click:function(t){return t.preventDefault(),e.handleRegister(t)}}},[e._v("注册")]),n("div",{staticClass:"text-foot"},[e._v(" 已有账号? "),n("router-link",{staticClass:"login-link",attrs:{to:"/login"}},[e._v(" 登录 ")])],1)],1)],1)])]),e._m(0)])},o=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"account-foot-copyright"},[n("span",[e._v("Copyright © 2020 武汉思维跳跃科技有限公司 版权所有")])])}],l=n("5530"),i=n("2f62"),r=n("b775"),a={register:function(e){return Object(r["c"])("/api/student/user/register",e)}},u={name:"Login",data:function(){return{loginForm:{userName:"",password:"",userLevel:1}}},methods:Object(l["a"])({handleRegister:function(){var e=this;a.register(this.loginForm).then((function(t){t&&1===t.code?e.$router.push({path:"/login"}):e.$message.error(t.message)}))}},Object(i["d"])("user",["setUserName"])),computed:Object(l["a"])({},Object(i["e"])("enumItem",{levelEnum:function(e){return e.user.levelEnum}}))},c=u,p=(n("4565"),n("ea3c"),n("2877")),m=Object(p["a"])(c,s,o,!1,null,"00ebc0b1",null);t["default"]=m.exports},ea3c:function(e,t,n){"use strict";n("7695")}}]);