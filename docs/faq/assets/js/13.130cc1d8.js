(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{206:function(t,e,a){"use strict";a.r(e);var r=a(0),s=Object(r.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"ssl-https"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ssl-https","aria-hidden":"true"}},[t._v("#")]),t._v(" SSL/HTTPS")]),t._v(" "),a("p",[t._v("配置HTTPS访问的前置条件：")]),t._v(" "),a("ul",[a("li",[t._v("开启服务器安全组的443端口")]),t._v(" "),a("li",[t._v("网站通过HTTP可正常访问")]),t._v(" "),a("li",[t._v("Web服务器已经安装SSL模块（Websoft9提供的所有镜像默认已经安装）")])]),t._v(" "),a("p",[t._v("具体以上条件后，便可以登录服务器配置HTTPS。此处提供两种方案，请根据实际情况选择：")]),t._v(" "),a("h2",{attrs:{id:"方案一：自动免费证书配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方案一：自动免费证书配置","aria-hidden":"true"}},[t._v("#")]),t._v(" 方案一：自动免费证书配置")]),t._v(" "),a("p",[t._v("Websoft9的镜像默认安装了Let's Encrypt免费的证书部署软件，只需运行一条命令就可以启动证书部署")]),t._v(" "),a("p",[t._v("自动部署证书会根据已有的HTTP配置而定，故请确保网站的配置文件中ServerName和ServerAlias中配置有正确的解析后的域名")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("连接服务器，运行命令")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("certbot\n")])])])]),t._v(" "),a("li",[a("p",[t._v("根据提示输入对应的内容（下图为范例）")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://libs.websoft9.com/Websoft9/DocsPicture/zh/lamp/certbot-websoft9.png",alt:"1542853767834"}})]),t._v(" "),a("blockquote",[a("p",[t._v("第4步可以多选,输入的数字以逗号/空格为分隔")])])]),t._v(" "),a("li",[a("p",[t._v("以上步骤操作完成后,certbot将会自动配置好证书,浏览器访问域名检查是否配置成功。生成的网站证书存放目录："),a("code",[t._v("/etc/letsencrypt/live/")])])])]),t._v(" "),a("h2",{attrs:{id:"方案二：自行上传证书配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方案二：自行上传证书配置","aria-hidden":"true"}},[t._v("#")]),t._v(" 方案二：自行上传证书配置")]),t._v(" "),a("p",[t._v("下面以Apache为例，说明上传证书的配置方案：")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("将可用的证书上传到服务器证书目录：/data/cert（没有cert目录可以自己新建）")])]),t._v(" "),a("li",[a("p",[t._v("编辑虚拟主机配置文件"),a("code",[t._v("/etc/httpd/vhost/vhost.conf")]),t._v("，将下面的https配置文件模板拷贝到配置文件中")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<VirtualHost *:443>\nServerName  www.mydomain.com\nDocumentRoot "/data/wwwroot/default"\n#ErrorLog "logs/www.mydomain.com-error_log"\n#CustomLog "logs/www.mydomain.com-access_log" common\n<Directory "/data/wwwroot/default">\nOptions Indexes FollowSymlinks\nAllowOverride All\nRequire all granted\n</Directory>\nSSLEngine on\nSSLCertificateFile  /data/cert/www.mydomain.com.crt\nSSLCertificateKeyFile  /data/cert/www.mydomain.com.key\nSSLCertificateChainFile  /data/cert/root_bundle.crt\n</VirtualHost>\n')])])])]),t._v(" "),a("li",[a("p",[t._v("修改配置文件中相关项，并保存\nServerName  #主域名，务必修改\nServerAlias   #副域名，可选项\nDocumentRoot #网站路径，务必填写网站实际路径，例如:/data/wwwroot/wordpress\nDirectory #同上\nSSLCertificateFile #证书，务必填写网站实际路径和名称\nSSLCertificateKeyFile #证书私钥，务必填写网站实际路径和名称\nSSLCertificateChainFile #证书链（CA文件），务必填写网站实际路径和名称")]),t._v(" "),a("blockquote",[a("p",[t._v("证书的后缀一般是：.crt或者 .pem，私钥的后缀是：.key，填写错误会导致服务无法启动")])])]),t._v(" "),a("li",[a("p",[t._v("重启服务")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("systemctl restart httpd\n")])])])])]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"证书faq"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#证书faq","aria-hidden":"true"}},[t._v("#")]),t._v(" 证书FAQ")]),t._v(" "),a("h4",{attrs:{id:"为什么设置成功，显示“与此网站建立的连接并非完全安全”？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么设置成功，显示“与此网站建立的连接并非完全安全”？","aria-hidden":"true"}},[t._v("#")]),t._v(" 为什么设置成功，显示“与此网站建立的连接并非完全安全”？")]),t._v(" "),a("p",[t._v("首选明确一点即您的HTTPS设置是成功的，只是由于网站中存在包含 http访问的静态文件 或 外部链接等，导致浏览器告警您的网站并非完全安全。")]),t._v(" "),a("h4",{attrs:{id:"证书的申请注意事项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#证书的申请注意事项","aria-hidden":"true"}},[t._v("#")]),t._v(" 证书的申请注意事项")]),t._v(" "),a("ul",[a("li",[t._v("免费证书只能用于单个域名,例如: buy.example.com,或next.buy.example.com,")]),t._v(" "),a("li",[t._v("example.com是通配符域名方式，不能用于申请免费证书")]),t._v(" "),a("li",[t._v("申请证书的时候，请先解析好域名，有些证书会绑定域名对应的IP地址，即一旦申请后，IP地址不能更换，否则证书不可用")])]),t._v(" "),a("h4",{attrs:{id:"cdn开启https"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cdn开启https","aria-hidden":"true"}},[t._v("#")]),t._v(" CDN开启HTTPS")]),t._v(" "),a("p",[t._v("需要根据云平台参考文档设置")]),t._v(" "),a("h4",{attrs:{id:"http自动跳转到https页面"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http自动跳转到https页面","aria-hidden":"true"}},[t._v("#")]),t._v(" HTTP自动跳转到HTTPS页面")]),t._v(" "),a("p",[t._v("建议在网站根目录下的.htacesss文件中增加redirect规则")])])},[],!1,null,null,null);e.default=s.exports}}]);