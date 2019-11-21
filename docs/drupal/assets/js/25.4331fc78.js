(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{196:function(a,t,r){"use strict";r.r(t);var e=r(0),s=Object(e.a)({},function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("h1",{attrs:{id:"故障处理"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#故障处理","aria-hidden":"true"}},[a._v("#")]),a._v(" 故障处理")]),a._v(" "),r("p",[a._v("此处收集使用 Drupal 过程中最常见的故障，供您参考")]),a._v(" "),r("blockquote",[r("p",[a._v("大部分故障与云平台密切相关，如果你可以确认故障的原因是云平台造成的，请参考"),r("a",{attrs:{href:"https://support.websoft9.com/docs/faq/zh/tech-instance.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("云平台文档"),r("OutboundLink")],1)])]),a._v(" "),r("h4",{attrs:{id:"drupal-重定向错误？"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#drupal-重定向错误？","aria-hidden":"true"}},[a._v("#")]),a._v(" Drupal 重定向错误？")]),a._v(" "),r("p",[a._v("多语言下，重定向错误比较常见。例如：打开您的 Drupal 中文版会出现重定向错误")]),a._v(" "),r("p",[a._v("处理办法：分析网站根目录下的 "),r("code",[a._v(".htaccess")]),a._v(" 文件，看看有没有死循环规则")]),a._v(" "),r("h4",{attrs:{id:"修改了数据库密码-drupal-不能访问？"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#修改了数据库密码-drupal-不能访问？","aria-hidden":"true"}},[a._v("#")]),a._v(" 修改了数据库密码 Drupal 不能访问？")]),a._v(" "),r("p",[a._v("若已完成 Drupal 安装向导，再通过 phpMyAdmin 修改数据库密码，Drupal 就会连不上数据库")]),a._v(" "),r("p",[a._v("需要修改 "),r("router-link",{attrs:{to:"/zh/stack-components.html#drupal"}},[a._v("Drupal 配置文件")]),a._v(" 对应的数据库 password 参数即可。")],1),a._v(" "),r("h4",{attrs:{id:"apache-httpd-服务无法启动？"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#apache-httpd-服务无法启动？","aria-hidden":"true"}},[a._v("#")]),a._v(" Apache httpd 服务无法启动？")]),a._v(" "),r("p",[a._v("请通过分析日志文件定位原因： "),r("em",[a._v("/var/log/httpd")])]),a._v(" "),r("h4",{attrs:{id:"数据库服务无法启动"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#数据库服务无法启动","aria-hidden":"true"}},[a._v("#")]),a._v(" 数据库服务无法启动")]),a._v(" "),r("p",[a._v("数据库服务无法启动最常见的问题包括：磁盘空间不足，内存不足，配置文件错误。"),r("br"),a._v("\n建议先通过命令进行排查")]),a._v(" "),r("div",{staticClass:"language-shell extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("# 查看磁盘空间\ndf -lh\n\n# 查看内存使用\nfree -lh\n")])])])])},[],!1,null,null,null);t.default=s.exports}}]);