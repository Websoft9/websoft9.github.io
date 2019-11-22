(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{242:function(s,t,a){"use strict";a.r(t);var o=a(0),r=Object(o.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"osclass"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#osclass"}},[s._v("#")]),s._v(" Osclass")]),s._v(" "),a("p",[s._v("本文档可供使用了 "),a("strong",[s._v("Osclass 镜像")]),s._v(" 用户参考，也可以供准备在 "),a("strong",[s._v("LAMP 镜像")]),s._v(" 上自行部署 Osclass 参考。")]),s._v(" "),a("p",[s._v("Osclass（osclass.com）是一个构建分类信息网站的开源软件，使用PHP+MySQL开发，用于搭建类似58同城、百姓网等门户网站而不需要任何技术，并支持广告管理。官方提供了有大量的主题、模板、插件可供使用，系统也可以深度客户化定制。")]),s._v(" "),a("h2",{attrs:{id:"准备"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#准备"}},[s._v("#")]),s._v(" 准备")]),s._v(" "),a("p",[s._v("在开始 Osclass 的安装部署之前，建议完成如下事情：")]),s._v(" "),a("ul",[a("li",[s._v("浏览器访问："),a("em",[s._v("http://公网ip/9panel")]),s._v(" ，快速了解镜像的使用")]),s._v(" "),a("li",[s._v("查看镜像环境参数，包括："),a("strong",[s._v("目录路径、版本、数据库、虚拟主机配置文件等")]),s._v(" （"),a("a",{attrs:{href:"https://support.websoft9.com/docs/lamp/zh/stack-components.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("马上查看"),a("OutboundLink")],1),s._v("）")])]),s._v(" "),a("h2",{attrs:{id:"osclass-安装到服务器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#osclass-安装到服务器"}},[s._v("#")]),s._v(" Osclass 安装到服务器")]),s._v(" "),a("p",[a("strong",[s._v("如果你使用的是 "),a("em",[s._v("Osclass 镜像")]),s._v("，本节请忽略，直接阅读下一节 【Osclass 初始化安装向导】")])]),s._v(" "),a("p",[s._v("如果你使用的是 LAMP 镜像，请先将 Osclass 安装到服务器，操作步骤如下：")]),s._v(" "),a("ol",[a("li",[s._v("通过域名控制台完成解析域名（增加一个A记录指向服务器IP），并测试是否成功")]),s._v(" "),a("li",[s._v("通过 "),a("a",{attrs:{href:"https://support.websoft9.com/docs/lamp/zh/admin-mysql.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("phpMyAdmin 登录 MySQL"),a("OutboundLink")],1),s._v("，为 Osclass 系统增加一个数据库，假如名称为："),a("code",[s._v("osclass")])]),s._v(" "),a("li",[s._v("到 Osclass 官方"),a("a",{attrs:{href:"https://github.com/osclass/Osclass",target:"_blank",rel:"noopener noreferrer"}},[s._v("下载源码"),a("OutboundLink")],1)]),s._v(" "),a("li",[s._v("参考"),a("a",{attrs:{href:"https://support.websoft9.com/docs/lamp/zh/solution-deployment.html#%E5%AE%89%E8%A3%85%E7%AC%AC%E4%BA%8C%E4%B8%AA%E7%BD%91%E7%AB%99",target:"_blank",rel:"noopener noreferrer"}},[s._v("《如何在 LAMP 上增加网站》"),a("OutboundLink")],1),s._v(" ，将 Osclass 安装到服务器的 "),a("a",{attrs:{href:"https://support.websoft9.com/docs/lamp/zh/",target:"_blank",rel:"noopener noreferrer"}},[s._v("LAMP"),a("OutboundLink")],1),s._v(" 环境中")])]),s._v(" "),a("hr"),s._v(" "),a("h2",{attrs:{id:"osclass-初始化安装向导"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#osclass-初始化安装向导"}},[s._v("#")]),s._v(" Osclass 初始化安装向导")]),s._v(" "),a("ol",[a("li",[s._v("本地浏览器访问："),a("em",[s._v("http://域名")]),s._v(" 或 "),a("em",[s._v("http://公网IP")]),s._v(" 进入安装向导（首选域名访问方式）")]),s._v(" "),a("li",[s._v("根据系统提示，点击“Install”进入安装\n"),a("img",{attrs:{src:"https://libs.websoft9.com/Websoft9/DocsPicture/zh/osclass/osclass-install001-websoft9.png",alt:""}})]),s._v(" "),a("li",[s._v("填写您的数据库参数（"),a("a",{attrs:{href:"https://support.websoft9.com/docs/lamp/zh/stack-accounts.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("查看数据库账号密码"),a("OutboundLink")],1),s._v("），保存并继续;\n"),a("img",{attrs:{src:"https://libs.websoft9.com/Websoft9/DocsPicture/zh/osclass/osclass-install002-websoft9.png",alt:""}})]),s._v(" "),a("li",[s._v("设置网站信息。站点维护账号及后台账号，请务必设置好并牢记之。进入下一步\n"),a("img",{attrs:{src:"https://libs.websoft9.com/Websoft9/DocsPicture/zh/osclass/osclass-install003-websoft9.png",alt:""}})]),s._v(" "),a("li",[s._v("系统完成最后一步安装，建议进入Osclass后台（后台地址参考常见《账号与密码说明章节》），体验完整功能\n"),a("img",{attrs:{src:"https://libs.websoft9.com/Websoft9/DocsPicture/zh/osclass/osclass-install004-websoft9.png",alt:""}})])]),s._v(" "),a("p",[s._v("说明：后台地址为http://域名/os-admin")]),s._v(" "),a("h2",{attrs:{id:"常见问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见问题"}},[s._v("#")]),s._v(" 常见问题")])])}),[],!1,null,null,null);t.default=r.exports}}]);