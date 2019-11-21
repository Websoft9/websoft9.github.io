(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{206:function(t,e,s){"use strict";s.r(e);var r=s(0),o=Object(r.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"mybb"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mybb","aria-hidden":"true"}},[t._v("#")]),t._v(" MyBB")]),t._v(" "),s("p",[t._v("本文档可供使用了 "),s("strong",[t._v("MyBB 镜像")]),t._v(" 用户参考，也可以供准备在 "),s("strong",[t._v("LAMP 镜像")]),t._v(" 上自行部署 MyBB 参考。")]),t._v(" "),s("p",[t._v("MyBB（mybb.com）是全球知名的开源PHP论坛软件之一。使用了标准的论坛结构和模式，充分根据用户的使用习惯而设计，简单易用。支持MySQL、PostgreSQL、SQLite三种数据库。经过10几年的发展，拥有完善的开发者生态，有数百万站点使用，主题、插件资源非常丰富。")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://libs.websoft9.com/Websoft9/DocsPicture/zh/mybb/Emerald-themes.png",alt:""}})]),t._v(" "),s("h2",{attrs:{id:"准备"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#准备","aria-hidden":"true"}},[t._v("#")]),t._v(" 准备")]),t._v(" "),s("p",[t._v("在开始 MyBB 的安装部署之前，建议完成如下事情：")]),t._v(" "),s("ul",[s("li",[t._v("浏览器访问："),s("em",[t._v("http://公网ip/9panel")]),t._v(" ，快速了解镜像的使用")]),t._v(" "),s("li",[t._v("查看镜像环境参数，包括："),s("strong",[t._v("目录路径、版本、数据库、虚拟主机配置文件等")]),t._v(" （"),s("a",{attrs:{href:"https://support.websoft9.com/docs/lamp/zh/stack-components.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("马上查看"),s("OutboundLink")],1),t._v("）")])]),t._v(" "),s("h2",{attrs:{id:"mybb-安装到服务器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mybb-安装到服务器","aria-hidden":"true"}},[t._v("#")]),t._v(" MyBB 安装到服务器")]),t._v(" "),s("p",[s("strong",[t._v("如果你使用的是 "),s("em",[t._v("MyBB 镜像")]),t._v("，本节请忽略，直接阅读下一节 【MyBB 初始化安装向导】")])]),t._v(" "),s("p",[t._v("如果你使用的是 LAMP 镜像，请先将 MyBB 安装到服务器，操作步骤如下：")]),t._v(" "),s("ol",[s("li",[t._v("通过域名控制台完成解析域名（增加一个A记录指向服务器IP），并测试是否成功")]),t._v(" "),s("li",[t._v("通过 "),s("a",{attrs:{href:"https://support.websoft9.com/docs/lamp/zh/admin-mysql.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("phpMyAdmin 登录 MySQL"),s("OutboundLink")],1),t._v("，为 MyBB 系统增加一个数据库，假如名称为："),s("code",[t._v("mybb")])]),t._v(" "),s("li",[t._v("到 MyBB 官方"),s("a",{attrs:{href:"https://mybb.com/download",target:"_blank",rel:"noopener noreferrer"}},[t._v("下载源码"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("参考"),s("a",{attrs:{href:"https://support.websoft9.com/docs/lamp/zh/solution-deployment.html#%E5%AE%89%E8%A3%85%E7%AC%AC%E4%BA%8C%E4%B8%AA%E7%BD%91%E7%AB%99",target:"_blank",rel:"noopener noreferrer"}},[t._v("《如何在 LAMP 上增加网站》"),s("OutboundLink")],1),t._v(" ，将 MyBB 安装到服务器的 "),s("a",{attrs:{href:"https://support.websoft9.com/docs/lamp/zh/",target:"_blank",rel:"noopener noreferrer"}},[t._v("LAMP"),s("OutboundLink")],1),t._v(" 环境中")])]),t._v(" "),s("hr"),t._v(" "),s("h2",{attrs:{id:"mybb-初始化安装向导"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mybb-初始化安装向导","aria-hidden":"true"}},[t._v("#")]),t._v(" MyBB 初始化安装向导")]),t._v(" "),s("ol",[s("li",[t._v("本地浏览器访问："),s("em",[t._v("http://域名")]),t._v(" 或 "),s("em",[t._v("http://公网IP")]),t._v(" 进入安装向导（首选域名访问方式）\n"),s("img",{attrs:{src:"http://libs.websoft9.com/Websoft9/DocsPicture/zh/mybb/mybb-installwelcome-websoft9.png",alt:""}})]),t._v(" "),s("li",[t._v("系统通过许可协议、环境检测之后，进入配置数据库界面（"),s("a",{attrs:{href:"https://support.websoft9.com/docs/lamp/zh/stack-accounts.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("查看数据库账号密码"),s("OutboundLink")],1),t._v("）\n"),s("img",{attrs:{src:"http://libs.websoft9.com/Websoft9/DocsPicture/zh/mybb/mybb-installdb-websoft9.png",alt:""}})]),t._v(" "),s("li",[t._v("继续下一步，直至进入如下的配置论坛步骤，然后下一步\n"),s("img",{attrs:{src:"http://libs.websoft9.com/Websoft9/DocsPicture/zh/mybb/mybb-installconfigforum-websoft9.png",alt:""}})]),t._v(" "),s("li",[t._v("进入填写管理员信息步骤，设置并牢记之，然后进入下一步\n"),s("img",{attrs:{src:"http://libs.websoft9.com/Websoft9/DocsPicture/zh/mybb/mybb-installadmin-websoft9.png",alt:""}})]),t._v(" "),s("li",[t._v("完成安装，获得安装成功的提示\n"),s("img",{attrs:{src:"http://libs.websoft9.com/Websoft9/DocsPicture/zh/mybb/mybb-installsuccess-websoft.png",alt:""}})]),t._v(" "),s("li",[t._v("进入根提示进入系统后台（/admin），体验系统的完整功能\n"),s("img",{attrs:{src:"http://libs.websoft9.com/Websoft9/DocsPicture/zh/mybb/mybb-installlogin-websoft9.png",alt:""}})]),t._v(" "),s("li",[t._v("开始体验后台\n"),s("img",{attrs:{src:"http://libs.websoft9.com/Websoft9/DocsPicture/zh/mybb/mybb-installbackend-websoft.png",alt:""}})])]),t._v(" "),s("h2",{attrs:{id:"常见问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常见问题","aria-hidden":"true"}},[t._v("#")]),t._v(" 常见问题")])])},[],!1,null,null,null);e.default=o.exports}}]);