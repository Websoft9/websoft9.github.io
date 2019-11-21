(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{207:function(t,e,s){"use strict";s.r(e);var r=s(0),n=Object(r.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"ssl-https"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ssl-https","aria-hidden":"true"}},[t._v("#")]),t._v(" SSL/HTTPS")]),t._v(" "),s("p",[t._v("Mattermost预装包，已安装Web服务器 SSL 模块和公共免费证书方案 "),s("a",{attrs:{href:"https://letsencrypt.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Let's Encrypt"),s("OutboundLink")],1),t._v(" ，并完成预配置。")]),t._v(" "),s("blockquote",[s("p",[t._v("除了虚拟主机配置文件之外，HTTPS设置无需修改Nginx任何文件，切")])]),t._v(" "),s("p",[t._v("如果你想使用免费证书，只需在服务中运行一条命令"),s("code",[t._v("certbot")]),t._v("就可以启动证书部署")]),t._v(" "),s("p",[t._v("如果你已经申请了商业证书，只需三个步骤，即可完成HTTPS配置")]),t._v(" "),s("ol",[s("li",[t._v("将申请的证书、 证书链文件和秘钥文件上传到 "),s("em",[t._v("/data/cert")]),t._v(" 目录")]),t._v(" "),s("li",[t._v("打开虚拟主机配置文件："),s("em",[t._v("/etc/nginx/conf.d/default.conf")]),t._v(" ，插入"),s("strong",[t._v("HTTPS 配置段")])])]),t._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("  #-----HTTPS template start------------\n  listen 443 ssl; \n  ssl_certificate /data/cert/xxx.crt;\n  ssl_certificate_key /data/cert/xxx.key;\n  ssl_session_timeout 5m;\n  ssl_protocols TLSv1 TLSv1.1 TLSv1.2;\n  ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE;\n  ssl_prefer_server_ciphers on;\n  #-----HTTPS template end------------\n")])])]),s("ol",{attrs:{start:"3"}},[s("li",[t._v("重启Nginx服务")])]),t._v(" "),s("p",[t._v("配置HTTPS的前置条件、HTTPS 配置段模板、注意事项、详细步骤以及故障诊断等具体方案，请参考由Websoft9提供的 "),s("a",{attrs:{href:"https://support.websoft9.com/docs/faq/zh/tech-https.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("《HTTPS 专题指南》"),s("OutboundLink")],1)])])},[],!1,null,null,null);e.default=n.exports}}]);