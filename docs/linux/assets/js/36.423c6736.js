(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{192:function(e,t,r){"use strict";r.r(t);var s=r(0),o=Object(s.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h2",{attrs:{id:"smtp发送邮件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#smtp发送邮件","aria-hidden":"true"}},[e._v("#")]),e._v(" SMTP发送邮件")]),e._v(" "),r("p",[e._v("经过大量用户实践反馈，只推荐一种Metabase发邮件的方式，即安装邮件插件调用第三方邮件系统的STMP相关账号来进行邮件发送。")]),e._v(" "),r("blockquote",[r("p",[e._v("请忘掉在本机上安装sendmail等邮件服务器的方案，因为邮件系统的路由配置受制与域名、防火墙、路由等多种因素制约，导致不稳定、不容易维护、不好诊断问题。")])]),e._v(" "),r("p",[e._v("通过插件发送邮件的具体操作如下：")]),e._v(" "),r("ol",[r("li",[e._v("后台-设置-常规，设置好需要用于发件的邮件地址 "),r("img",{attrs:{src:"http://libs.websoft9.com/Websoft9/DocsPicture/zh/wordpress/wordpress-mailcg-websoft9.png",alt:""}})]),e._v(" "),r("li",[e._v("安装SMTP插件："),r("a",{attrs:{href:"https://wordpress.org/plugins/wp-mail-smtp/",target:"_blank",rel:"noopener noreferrer"}},[e._v("WP Mail SMTP by WPForms"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("后台-设置-Email，配置WP Mail SMTTP 插件的参数（本配置以qq邮箱为例，请提前"),r("a",{attrs:{href:"http://service.mail.qq.com/cgi-bin/help?subtype=1&&no=166&&id=28",target:"_blank",rel:"noopener noreferrer"}},[e._v("开通邮箱的SMTP"),r("OutboundLink")],1),e._v("功能，并"),r("a",{attrs:{href:"http://service.mail.qq.com/cgi-bin/help?subtype=1&&id=28&&no=1001256",target:"_blank",rel:"noopener noreferrer"}},[e._v("获取授权码"),r("OutboundLink")],1),e._v("） "),r("img",{attrs:{src:"http://libs.websoft9.com/Websoft9/DocsPicture/zh/wordpress/wordpress-mailconf-websoft9.png",alt:""}})]),e._v(" "),r("li",[e._v("填写参数后保存，然后最后输入一个收件地址用于测试是否可用，如果测试成功，会看到”Your email was sent successfully!”。如果邮件配置不可用，则会显示“There was a problem while sending the test email.”\n"),r("img",{attrs:{src:"http://libs.websoft9.com/Websoft9/DocsPicture/zh/wordpress/wordpress-mailss-websoft9.png",alt:""}})]),e._v(" "),r("li",[e._v("测试成功，即邮件系统已经可用，所有的WordPress后台邮件发送就会使用这个配置")])]),e._v(" "),r("h3",{attrs:{id:"附：主流邮箱的stmp设置说明"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#附：主流邮箱的stmp设置说明","aria-hidden":"true"}},[e._v("#")]),e._v(" 附：主流邮箱的STMP设置说明")]),e._v(" "),r("p",[e._v("QQ邮箱（mail.qq.com）")]),e._v(" "),r("ul",[r("li",[e._v("SMTP服务器地址：smtp.qq.com（SSL端口：465或587）")]),e._v(" "),r("li",[e._v("SMTP身份认证：必须勾选")]),e._v(" "),r("li",[e._v("SMTP密码：密码不是邮箱密码，而是需要在SMTP服务页面上申请的一个授权码")]),e._v(" "),r("li",[e._v("SMTP加密：需启用SSL")])]),e._v(" "),r("blockquote",[r("p",[e._v("以上仅供快速参考，具体查看"),r("a",{attrs:{href:"https://service.mail.qq.com/cgi-bin/help?subtype=1&&id=28&&no=166",target:"_blank",rel:"noopener noreferrer"}},[e._v("官方SMTP"),r("OutboundLink")],1)])]),e._v(" "),r("p",[e._v("网易邮箱（163.com）:")]),e._v(" "),r("ul",[r("li",[e._v("SMTP服务器地址：smtp.163.com（SSL端口：465或994）")]),e._v(" "),r("li",[e._v("SMTP身份认证：必须勾选")]),e._v(" "),r("li",[e._v("SMTP密码：密码不是邮箱密码，而是需要在SMTP服务页面上申请的一个授权码")]),e._v(" "),r("li",[e._v("SMTP加密：需启用SSL")])]),e._v(" "),r("blockquote",[r("p",[e._v("以上仅供快速参考，具体查看"),r("a",{attrs:{href:"http://help.163.com/09/1223/14/5R7P6CJ600753VB8.html?servCode=6010376",target:"_blank",rel:"noopener noreferrer"}},[e._v("官方SMTP"),r("OutboundLink")],1)])]),e._v(" "),r("p",[e._v("阿里云邮箱（mail.aliyun.com）:")]),e._v(" "),r("ul",[r("li",[e._v("SMTP服务器地址：smtp.mxhichina.com （SSL端口：465）")]),e._v(" "),r("li",[e._v("SMTP身份认证：必须勾选")]),e._v(" "),r("li",[e._v("SMTP密码：邮箱密码")]),e._v(" "),r("li",[e._v("SMTP加密：需启用SSL")])]),e._v(" "),r("blockquote",[r("p",[e._v("以上仅供快速参考，具体查看"),r("a",{attrs:{href:"https://help.aliyun.com/knowledge_detail/36576.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("官方SMTP"),r("OutboundLink")],1)])])])},[],!1,null,null,null);t.default=o.exports}}]);