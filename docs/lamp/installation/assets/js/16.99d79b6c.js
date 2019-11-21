(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{208:function(a,t,e){"use strict";e.r(t);var r=e(0),l=Object(r.a)({},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"laravel"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#laravel","aria-hidden":"true"}},[a._v("#")]),a._v(" Laravel")]),a._v(" "),e("p",[a._v("Websoft9提供的 "),e("strong",[a._v("Laravel 运行环境(LAMP)")]),a._v("，基于 "),e("a",{attrs:{href:"https://support.websoft9.com/docs/lamp/zh",target:"_blank",rel:"noopener noreferrer"}},[a._v("LAMP 环境镜像"),e("OutboundLink")],1),a._v("制作，节省你的安装部署时间。")]),a._v(" "),e("h3",{attrs:{id:"laravel安装原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#laravel安装原理","aria-hidden":"true"}},[a._v("#")]),a._v(" Laravel安装原理")]),a._v(" "),e("p",[a._v("下面介绍Laravel是如何基于LAMP安装的")]),a._v(" "),e("blockquote",[e("p",[a._v("如果您使用 "),e("strong",[a._v("Laravel 运行环境(LAMP)")]),a._v("，只需了解原理即可，无需再次安装 Laravel。")])]),a._v(" "),e("ol",[e("li",[a._v("服务器部署 "),e("a",{attrs:{href:"https://support.websoft9.com/docs/lamp/zh",target:"_blank",rel:"noopener noreferrer"}},[a._v("LAMP 镜像"),e("OutboundLink")],1)]),a._v(" "),e("li",[a._v("将 Laravel 包下载后上传到服务器目录："),e("em",[a._v("/data/wwwroot/laravel")])]),a._v(" "),e("li",[a._v("WinSCP 连接服务器，编辑虚拟主机配置文件："),e("em",[a._v("/etc/httpd/vhost/vhost.conf")])]),a._v(" "),e("li",[a._v("将 DocumentRoot, Directory 路径指向："),e("em",[a._v("laravel/public")]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('<VirtualHost *:80>\nDocumentRoot "/data/wwwroot/default/laravel/public"\n ...\n<Directory "/data/wwwroot/default/laravel/public">\n...\n')])])])]),a._v(" "),e("li",[a._v("保存，并重启服务")])]),a._v(" "),e("h3",{attrs:{id:"更新laravel程序"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#更新laravel程序","aria-hidden":"true"}},[a._v("#")]),a._v(" 更新Laravel程序")]),a._v(" "),e("p",[a._v("当 Laravel 镜像版本过低的时候，您可能希望下载Laravel官方最新版本替换镜像内版本，我们建议的步骤如下：")]),a._v(" "),e("ol",[e("li",[a._v("将Laravel下载解压，上传后替换原来的目录")]),a._v(" "),e("li",[a._v("运行修改文件权限的命令")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("chown -R apache.apache /data/wwwroot/laravel\n")])])]),e("blockquote",[e("p",[a._v("下载的新版本目录结构中应用根目录（如public文件夹）与配置文件中的路径（DocumentRoot,Directory）需要保持一致")])])])},[],!1,null,null,null);t.default=l.exports}}]);