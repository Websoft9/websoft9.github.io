(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{201:function(t,a,e){"use strict";e.r(a);var n=e(0),r=Object(n.a)({},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"thinkphp"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#thinkphp","aria-hidden":"true"}},[t._v("#")]),t._v(" ThinkPHP")]),t._v(" "),e("p",[t._v("Websoft9提供的 "),e("strong",[t._v("ThinkPHP 运行环境(LAMP)")]),t._v("，基于 "),e("a",{attrs:{href:"https://support.websoft9.com/docs/lamp/zh",target:"_blank",rel:"noopener noreferrer"}},[t._v("LAMP 环境镜像"),e("OutboundLink")],1),t._v("制作，节省你的安装部署时间。")]),t._v(" "),e("h3",{attrs:{id:"thinkphp安装原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#thinkphp安装原理","aria-hidden":"true"}},[t._v("#")]),t._v(" ThinkPHP安装原理")]),t._v(" "),e("p",[t._v("下面介绍ThinkPHP是如何基于LAMP安装的")]),t._v(" "),e("blockquote",[e("p",[t._v("如果您使用 "),e("strong",[t._v("ThinkPHP 运行环境(LAMP)")]),t._v("，只需了解原理即可，无需再次安装 ThinkPHP。")])]),t._v(" "),e("ol",[e("li",[t._v("服务器部署 "),e("a",{attrs:{href:"https://support.websoft9.com/docs/lamp/zh",target:"_blank",rel:"noopener noreferrer"}},[t._v("LAMP 镜像"),e("OutboundLink")],1)]),t._v(" "),e("li",[t._v("将 ThinkPHP 包下载后上传到服务器目录："),e("em",[t._v("/data/wwwroot/thinkphp")])]),t._v(" "),e("li",[t._v("WinSCP 连接服务器，编辑虚拟主机配置文件："),e("em",[t._v("/etc/httpd/vhost/vhost.conf")])]),t._v(" "),e("li",[t._v("将 DocumentRoot, Directory 路径指向："),e("em",[t._v("thinkphp/public")]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('<VirtualHost *:80>\nDocumentRoot "/data/wwwroot/default/thinkphp/public"\n ...\n<Directory "/data/wwwroot/default/thinkphp/public">\n...\n')])])])]),t._v(" "),e("li",[t._v("保存，并重启服务")])]),t._v(" "),e("h3",{attrs:{id:"更新thinkphp程序"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#更新thinkphp程序","aria-hidden":"true"}},[t._v("#")]),t._v(" 更新ThinkPHP程序")]),t._v(" "),e("p",[t._v("当 ThinkPHP 镜像版本过低的时候，您可能希望下载ThinkPHP官方最新版本替换镜像内版本，我们建议的步骤如下：")]),t._v(" "),e("ol",[e("li",[t._v("将ThinkPHP下载解压，上传后替换原来的目录")]),t._v(" "),e("li",[t._v("运行修改文件权限的命令")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("chown -R apache.apache /data/wwwroot/thinkphp\n")])])]),e("blockquote",[e("p",[t._v("下载的新版本目录结构中应用根目录（如public文件夹）与配置文件中的路径（DocumentRoot,Directory）需要保持一致")])])])},[],!1,null,null,null);a.default=r.exports}}]);