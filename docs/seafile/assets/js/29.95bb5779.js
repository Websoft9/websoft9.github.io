(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{229:function(t,e,s){"use strict";s.r(e);var a=s(0),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"smtp"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#smtp"}},[t._v("#")]),t._v(" SMTP")]),t._v(" "),s("p",[t._v("大量用户实践反馈，使用"),s("strong",[t._v("第三方 SMTP 服务发送邮件")]),t._v("是一种最稳定可靠的方式。")]),t._v(" "),s("p",[t._v("请勿尝试在服务器上安装sendmail等发邮件方案，因为邮件系统的路由配置受制与域名、防火墙、路由等多种因素制约，导致不稳定、不易维护、诊断故障困难。")]),t._v(" "),s("p",[t._v("下面以"),s("strong",[t._v("网易邮箱")]),t._v("为例，提供设置 Seafile 发邮件的步骤：")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("在网易邮箱管理控制台获取 SMTP 相关参数")])]),t._v(" "),s("li",[s("p",[t._v("使用 SFTP 连接服务器，编辑 Seafile 配置文件 "),s("router-link",{attrs:{to:"/zh/stack-components.html#seafile"}},[t._v("seahub_settings.py")]),t._v("，插入邮箱配置段")],1),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("EMAIL_USE_SSL = True\nEMAIL_HOST = 'smtp.163.com'\nEMAIL_HOST_USER = 'websoft9@163.com'\nEMAIL_HOST_PASSWORD = 'Auth_Code'  //此密码不是邮箱密码，是需要通过163邮箱后台设置去获取的授权码\nEMAIL_PORT = '465'\nDEFAULT_FROM_EMAIL = EMAIL_HOST_USER\nSERVER_EMAIL = EMAIL_HOST_USER\n")])])]),s("p",[t._v("参考官方文档："),s("a",{attrs:{href:"https://manual-cn-origin.seafile.com/config/sending_email",target:"_blank",rel:"noopener noreferrer"}},[t._v("发送邮件提醒"),s("OutboundLink")],1)])]),t._v(" "),s("li",[s("p",[t._v("重启 Seafile 容器服务")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("sudo docker restart seafile\n")])])])])]),t._v(" "),s("blockquote",[s("p",[t._v("更多邮箱设置（QQ邮箱，阿里云邮箱，Gmail，Hotmail等）以及无法发送邮件等故障之诊断，请参考由Websoft9提供的 "),s("a",{attrs:{href:"https://support.websoft9.com/docs/faq/zh/tech-smtp.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("SMTP 专题指南"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=n.exports}}]);