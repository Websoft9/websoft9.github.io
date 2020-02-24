(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{224:function(t,e,a){"use strict";a.r(e);var s=a(28),o=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"故障处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#故障处理"}},[t._v("#")]),t._v(" 故障处理")]),t._v(" "),a("p",[t._v("此处收集使用 Nextcloud 过程中最常见的故障，供您参考")]),t._v(" "),a("blockquote",[a("p",[t._v("大部分故障与云平台密切相关，如果你可以确认故障的原因是云平台造成的，请参考"),a("a",{attrs:{href:"https://support.websoft9.com/docs/faq/zh/tech-instance.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("云平台文档"),a("OutboundLink")],1)])]),t._v(" "),a("h4",{attrs:{id:"nextcloud-重定向错误？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nextcloud-重定向错误？"}},[t._v("#")]),t._v(" Nextcloud 重定向错误？")]),t._v(" "),a("p",[t._v("多语言下，重定向错误比较常见。例如：打开您的Nextcloud商店中文版会出现重定向")]),t._v(" "),a("p",[t._v("处理办法：")]),t._v(" "),a("ol",[a("li",[t._v("分析网站根目录下的 "),a("code",[t._v(".htaccess")]),t._v(" 文件，看看有没有死循环规则")]),t._v(" "),a("li",[t._v("进入后台先删除中文，然后再重新导入中文。重新导入的时候，Nextcloud会自动生成伪静态规则，覆盖您网站根目录的 "),a("code",[t._v(".htaccess")]),t._v(" 文件")])]),t._v(" "),a("h4",{attrs:{id:"域名配置后，会出现-页面布局混乱或图片无法显示-？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#域名配置后，会出现-页面布局混乱或图片无法显示-？"}},[t._v("#")]),t._v(" 域名配置后，会出现“页面布局混乱或图片无法显示”？")]),t._v(" "),a("p",[t._v("如果先通过 IP 安装，再绑定域名，就会出现这个问题，请分别打开 Nextcloud 的"),a("RouterLink",{attrs:{to:"/zh/stack-components.html#nextcloud"}},[t._v("配置文件")]),t._v("，将其中的IP地址改成域名。")],1),t._v(" "),a("h4",{attrs:{id:"安装插件，显示403权限不足，错误-you-dont-have-permession-to-access-admin-index-php"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装插件，显示403权限不足，错误-you-dont-have-permession-to-access-admin-index-php"}},[t._v("#")]),t._v(' 安装插件，显示403权限不足，错误"you dont have permession to access /admin/index.php"')]),t._v(" "),a("p",[t._v("修改文件：/etc/httpd/conf.d/mod_evasive.conf 中  DOSPageCount 2 改为 DOSPageCount 12")]),t._v(" "),a("h4",{attrs:{id:"修改了数据库密码-nextcloud-不能访问？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改了数据库密码-nextcloud-不能访问？"}},[t._v("#")]),t._v(" 修改了数据库密码 Nextcloud 不能访问？")]),t._v(" "),a("p",[t._v("若已完成 Nextcloud 安装向导，再通过 phpMyAdmin 修改数据库密码，Nextcloud 就会连不上数据库")]),t._v(" "),a("p",[t._v("需要修改 "),a("RouterLink",{attrs:{to:"/zh/stack-components.html#nextcloud"}},[t._v("Nextcloud 配置文件")]),t._v(" 对应的数据库 password 参数即可。")],1),t._v(" "),a("h4",{attrs:{id:"apache-httpd-服务无法启动？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#apache-httpd-服务无法启动？"}},[t._v("#")]),t._v(" Apache httpd 服务无法启动？")]),t._v(" "),a("p",[t._v("请通过分析日志文件定位原因： "),a("em",[t._v("/var/log/httpd")])]),t._v(" "),a("h4",{attrs:{id:"数据库服务无法启动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据库服务无法启动"}},[t._v("#")]),t._v(" 数据库服务无法启动")]),t._v(" "),a("p",[t._v("数据库服务无法启动最常见的问题包括：磁盘空间不足，内存不足，配置文件错误。"),a("br"),t._v("\n建议先通过命令进行排查")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看磁盘空间")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("df")]),t._v(" -lh\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看内存使用")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("free")]),t._v(" -lh\n")])])])])}),[],!1,null,null,null);e.default=o.exports}}]);