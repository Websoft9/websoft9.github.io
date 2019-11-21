(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{190:function(e,t,a){"use strict";a.r(t);var r=a(0),o=Object(r.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"smtp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#smtp","aria-hidden":"true"}},[e._v("#")]),e._v(" SMTP")]),e._v(" "),a("p",[e._v("应用中发送邮件是一个很常见的功能。经过大量用户实践反馈，只推荐一种发邮件的方式，即安装邮件插调用第三方邮件系统的STMP相关账号来进行邮件发送。")]),e._v(" "),a("blockquote",[a("p",[e._v("请忘掉在本机上安装sendmail等邮件服务器的方案，因为邮件系统的路由配置受制与域名、防火墙、路由等多种因素制约，导致不稳定、不容易维护、不好诊断问题。")])]),e._v(" "),a("h2",{attrs:{id:"smtp配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#smtp配置","aria-hidden":"true"}},[e._v("#")]),e._v(" SMTP配置")]),e._v(" "),a("p",[e._v("下面是主流的邮箱提供商之SMTP服务设置（"),a("a",{attrs:{href:"https://www.lifewire.com/search?q=smtp",target:"_blank",rel:"noopener noreferrer"}},[e._v("来源"),a("OutboundLink")],1),e._v(" ）")]),e._v(" "),a("h3",{attrs:{id:"qq邮箱"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#qq邮箱","aria-hidden":"true"}},[e._v("#")]),e._v(" QQ邮箱")]),e._v(" "),a("ul",[a("li",[e._v("SMTP host: smtp.qq.com")]),e._v(" "),a("li",[e._v("SMTP port: 465 or 587 for SSL-encrypted email")]),e._v(" "),a("li",[e._v("SMTP Authentication: must be checked")]),e._v(" "),a("li",[e._v("SMTP Encryption: must SSL")]),e._v(" "),a("li",[e._v("SMTP username: email address")]),e._v(" "),a("li",[e._v("SMTP password: 这个密码不是邮箱密码，是需要通过QQ邮箱SMTP设置去获取的授权码")])]),e._v(" "),a("blockquote",[a("p",[e._v("The above is for quick reference only. see the "),a("a",{attrs:{href:"https://service.mail.qq.com/cgi-bin/help?subtype=1&&id=28&&no=166",target:"_blank",rel:"noopener noreferrer"}},[e._v("QQ邮箱SMTP设置"),a("OutboundLink")],1)])]),e._v(" "),a("h3",{attrs:{id:"_163邮箱（网易）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_163邮箱（网易）","aria-hidden":"true"}},[e._v("#")]),e._v(" 163邮箱（网易）")]),e._v(" "),a("ul",[a("li",[e._v("SMTP host: smtp.163.com")]),e._v(" "),a("li",[e._v("SMTP port: 465 or 994 for SSL-encrypted email")]),e._v(" "),a("li",[e._v("SMTP Authentication: must be checked")]),e._v(" "),a("li",[e._v("SMTP Encryption: must SSL")]),e._v(" "),a("li",[e._v("SMTP username: email address")]),e._v(" "),a("li",[e._v("SMTP password: 这个密码不是邮箱密码，是需要通过163邮箱SMTP设置去获取的授权码")])]),e._v(" "),a("blockquote",[a("p",[e._v("以上仅供快速设置参考，更多详情查看官网文档："),a("a",{attrs:{href:"https://help.163.com/09/1223/14/5R7P6CJ600753VB8.html?servCode=6010376",target:"_blank",rel:"noopener noreferrer"}},[e._v("163邮箱SMTP设置"),a("OutboundLink")],1)])]),e._v(" "),a("h3",{attrs:{id:"阿里云邮箱"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#阿里云邮箱","aria-hidden":"true"}},[e._v("#")]),e._v(" 阿里云邮箱")]),e._v(" "),a("ul",[a("li",[e._v("SMTP host: smtp.mxhichina.com")]),e._v(" "),a("li",[e._v("SMTP port: 465  for SSL-encrypted email")]),e._v(" "),a("li",[e._v("SMTP 身份认证: 必须勾选")]),e._v(" "),a("li",[e._v("SMTP 加密: 需启用SSL")]),e._v(" "),a("li",[e._v("SMTP username: email address")]),e._v(" "),a("li",[e._v("SMTP password: email password")])]),e._v(" "),a("blockquote",[a("p",[e._v("以上仅供快速设置参考，更多详情查看官网文档： "),a("a",{attrs:{href:"https://help.aliyun.com/knowledge_detail/36576.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("阿里云邮箱SMTP设置"),a("OutboundLink")],1)])]),e._v(" "),a("h3",{attrs:{id:"sendgrid"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sendgrid","aria-hidden":"true"}},[e._v("#")]),e._v(" SendGrid")]),e._v(" "),a("p",[e._v("To configure your application to send email through SendGrid’s SMTP service, use the settings below. Replace USERNAME with your SendGrid account username and PASSWORD with your SendGrid account password."),a("br")]),e._v(" "),a("ul",[a("li",[e._v("SMTP host: smtp.sendgrid.net")]),e._v(" "),a("li",[e._v("SMTP port: 25 or 587 for unencrypted/TLS email, 465 for SSL-encrypted email")]),e._v(" "),a("li",[e._v("SMTP username: USERNAME")]),e._v(" "),a("li",[e._v("SMTP password: PASSWORD")])]),e._v(" "),a("h3",{attrs:{id:"gmail"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gmail","aria-hidden":"true"}},[e._v("#")]),e._v(" Gmail")]),e._v(" "),a("ul",[a("li",[e._v("Gmail SMTP server address: "),a("strong",[e._v("smtp.gmail.com")])]),e._v(" "),a("li",[e._v("Gmail SMTP username: "),a("strong",[e._v("Your Gmail address")]),e._v(" (e.g. "),a("em",[e._v("example@gmail.com")]),e._v(")")]),e._v(" "),a("li",[e._v("Gmail SMTP password: "),a("strong",[e._v("Your Gmail password")])]),e._v(" "),a("li",[e._v("Gmail SMTP port (TLS): "),a("strong",[e._v("587")])]),e._v(" "),a("li",[e._v("Gmail SMTP port (SSL): "),a("strong",[e._v("465")])]),e._v(" "),a("li",[e._v("Gmail SMTP TLS/SSL required: "),a("strong",[e._v("yes")])])]),e._v(" "),a("blockquote",[a("p",[e._v("Remember that in addition to these email server settings, you need to let the email client receive/download mail from your Gmail account too. There's more information on that at the bottom of this page.")])]),e._v(" "),a("h3",{attrs:{id:"outlook-com"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#outlook-com","aria-hidden":"true"}},[e._v("#")]),e._v(" Outlook.com")]),e._v(" "),a("ul",[a("li",[e._v("SMTP Server: smtp-mail.outlook.com")]),e._v(" "),a("li",[e._v("Username: Your full Outlook.com email address")]),e._v(" "),a("li",[e._v("Password: Your Outlook.com password")]),e._v(" "),a("li",[e._v("SMTP Port\t587")]),e._v(" "),a("li",[e._v("SMTP TLS/SSL Encryption Required\tYes")])]),e._v(" "),a("h3",{attrs:{id:"hotmail"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hotmail","aria-hidden":"true"}},[e._v("#")]),e._v(" Hotmail")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Hotmail SMTP Server")]),e._v(": smtp.live.com")]),e._v(" "),a("li",[a("strong",[e._v("Hotmail SMTP Username")]),e._v(": Your complete Windows Live Hotmail email address (e.g. "),a("em",[e._v("me@hotmail.com")]),e._v(" or "),a("em",[e._v("me@live.com")]),e._v(")")]),e._v(" "),a("li",[a("strong",[e._v("Hotmail SMTP Password")]),e._v(": Your Windows Live Hotmail password")]),e._v(" "),a("li",[a("strong",[e._v("Hotmail SMTP Port")]),e._v(": 587")]),e._v(" "),a("li",[a("strong",[e._v("Hotmail SMTP TLS/SSL Required")]),e._v(": yes")])]),e._v(" "),a("h3",{attrs:{id:"yahoo-mail"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#yahoo-mail","aria-hidden":"true"}},[e._v("#")]),e._v(" Yahoo Mail")]),e._v(" "),a("ul",[a("li",[e._v("Yahoo Mail SMTP server address: "),a("strong",[e._v("smtp.mail.yahoo.com")])]),e._v(" "),a("li",[e._v("Yahoo Mail SMTP username: Your full "),a("a",{attrs:{href:"https://www.lifewire.com/forward-yahoo-mail-to-another-address-1174481",target:"_blank",rel:"noopener noreferrer"}},[a("strong",[e._v("Yahoo email address")]),a("OutboundLink")],1),e._v(" (including "),a("strong",[e._v("@yahoo.com")]),e._v(")")]),e._v(" "),a("li",[e._v("Yahoo Mail SMTP password: Your "),a("strong",[e._v("Yahoo Mail password")])]),e._v(" "),a("li",[e._v("Yahoo Mail SMTP port: "),a("strong",[e._v("465 "),a("strong",[e._v("or")]),e._v(" 587")])]),e._v(" "),a("li",[e._v("Yahoo Mail SMTP TLS/SSL required: "),a("strong",[e._v("yes")])])]),e._v(" "),a("blockquote",[a("p",[e._v("These settings work with most desktop, mobile, and web email programs and services. After you set up Yahoo Mail in your preferred email client, the mail and your Yahoo folders appear in both locations: in Yahoo and in your preferred app or web interface, such as Gmail.")])]),e._v(" "),a("h3",{attrs:{id:"icloud-mail"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#icloud-mail","aria-hidden":"true"}},[e._v("#")]),e._v(" iCloud Mail")]),e._v(" "),a("ul",[a("li",[e._v("Server name:** smtp.mail.me.com**")]),e._v(" "),a("li",[e._v("SSL required: "),a("strong",[e._v("Yes")])]),e._v(" "),a("li",[e._v("Port: "),a("strong",[e._v("587")])]),e._v(" "),a("li",[e._v("SMTP authentication required: "),a("strong",[e._v("Yes")])]),e._v(" "),a("li",[e._v("Username: Type your full iCloud email address.")]),e._v(" "),a("li",[e._v("Password: Type an app-specific iCloud Mail password.")])]),e._v(" "),a("h3",{attrs:{id:"zoho-mail"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#zoho-mail","aria-hidden":"true"}},[e._v("#")]),e._v(" Zoho Mail")]),e._v(" "),a("ul",[a("li",[e._v("Zoho Mail SMTP server address: "),a("strong",[e._v("smtp.zoho.com")])]),e._v(" "),a("li",[e._v("Zoho Mail SMTP port: "),a("strong",[e._v("465")])]),e._v(" "),a("li",[e._v("Zoho Mail SMTP TLS/SSL required: "),a("strong",[e._v("Yes")])]),e._v(" "),a("li",[e._v("Zoho Mail SMTP user name: "),a("strong",[e._v("Your")]),e._v(" "),a("strong",[e._v("Zoho Mail address")]),e._v(" (example@zoho.com or your email address if you use Zoho Mail with your own domain)")]),e._v(" "),a("li",[e._v("Zoho Mail SMTP password: "),a("strong",[e._v("Your")]),e._v(" "),a("strong",[e._v("Zoho Mail password")])])]),e._v(" "),a("h3",{attrs:{id:"directmail"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#directmail","aria-hidden":"true"}},[e._v("#")]),e._v(" Directmail")]),e._v(" "),a("p",[e._v("Directmail是阿里云的邮件推送服务，相对于免费邮箱来说，自主性更强，同时更稳定可靠\n下面是Directmail的配置简要流程：")]),e._v(" "),a("ol",[a("li",[e._v("登录阿里云邮件推送控制台，新增一个发信域名\n"),a("img",{attrs:{src:"https://libs.websoft9.com/Websoft9/DocsPicture/zh/aliyun/aliyun-dmailadd-websoft9.png",alt:"新增发信域名"}})]),e._v(" "),a("li",[e._v("根据域名配置要求，在域名控制台完成对应的域名解析，并点击“验证”\n"),a("img",{attrs:{src:"https://libs.websoft9.com/Websoft9/DocsPicture/zh/aliyun/aliyun-dmailverify-websoft9.png",alt:"验证"}})]),e._v(" "),a("li",[e._v("验证通过后，设置发信地址\n"),a("img",{attrs:{src:"https://libs.websoft9.com/Websoft9/DocsPicture/zh/aliyun/aliyun-dmailsetsendm-websoft9.png",alt:"设置发信地址"}})]),e._v(" "),a("li",[e._v("如果需要接受用户的邮件回复，可以针对此发件地址配套一个回信地址。")]),e._v(" "),a("li",[e._v("完成所有配置后，您会得到一个如下的SMTP参数")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("SMTP地址：smtpdm.aliyun.com \nSMTP用户名：norelpy@smtp.websoft9.cn\nSMTP密码：*******\nSMTP端口：465 需要启用ssl加密\nSMTP端口：80 无需加密 \n")])])]),a("h2",{attrs:{id:"smtp诊断"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#smtp诊断","aria-hidden":"true"}},[e._v("#")]),e._v(" SMTP诊断")]),e._v(" "),a("p",[e._v("如果使用第三方提供的SMTP服务（如qq邮箱、网易邮箱等），配置也没有问题，但是仍然无法发送邮件。请检查如下几个问题：")]),e._v(" "),a("ol",[a("li",[e._v("通过服务器的telnet工具，验证服务器是否可以连接SMTP服务")])]),e._v(" "),a("blockquote",[a("p",[e._v("注意：本地电脑Telnet测试成功，不代表服务器Telnet成功，因为您的服务器IP地址由于某些原因可能会被STMP服务器列入黑名单。")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("//安装telnet\nyum install telnet -y\n\n//示例1：测试qq邮箱 端口有465和587\ntelnet smtp.qq.com 465\n\n//示例2：测试网易邮箱 端口有465和994\ntelnet smtp.163.com 465\n\n")])])]),a("p",[e._v("出现 "),a("code",[e._v("220 smtp.*.com Esmtp *Mail Server")]),e._v("或 "),a("code",[e._v("Escape character is '^]'")]),e._v(" 类似反馈，说明可以连接")]),e._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[e._v("服务器安全组（出设置）禁止外部访问")]),e._v(" "),a("li",[e._v("服务器系统iptables，firewall设置关闭了465等端口")]),e._v(" "),a("li",[e._v("OpenSSL版本过低或者没有安装或其CA证书异常")])])])},[],!1,null,null,null);t.default=o.exports}}]);