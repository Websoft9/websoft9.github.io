(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{279:function(t,v,_){"use strict";_.r(v);var a=_(0),s=Object(a.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"迁移网站"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#迁移网站"}},[t._v("#")]),t._v(" 迁移网站")]),t._v(" "),_("p",[t._v("迁移网站就是将"),_("strong",[t._v("网站数据")]),t._v("移动到新的位置，然后通过配置，保证移动后可正常访问。")]),t._v(" "),_("p",[t._v("迁移是需要谨慎对待的操作，迁移之前需要清楚的明白如下要点：")]),t._v(" "),_("ul",[_("li",[t._v("被移动的网站数据对象：网站源码文件和数据库数据文件")]),t._v(" "),_("li",[t._v("目的地位置：服务器目录之间转移（本地）和转移到外部服务器（外部）")])]),t._v(" "),_("p",[t._v("被迁移对象和目的地位置的组合，形成了多种多样的迁移场景。下面详细说明最常见的迁移场景：")]),t._v(" "),_("h2",{attrs:{id:"迁移网站源码（本地）"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#迁移网站源码（本地）"}},[t._v("#")]),t._v(" 迁移网站源码（本地）")]),t._v(" "),_("p",[t._v("以将原目录 "),_("em",[t._v("/data/wwwroot")]),t._v(" 下的 "),_("strong",[t._v("mysite1")]),t._v(" 迁移到 "),_("em",[t._v("/data2/wwwroot")]),t._v(" 目标目录下为例，具体步骤如下：")]),t._v(" "),_("ol",[_("li",[_("p",[t._v("使用 WinSCP 连接服务器")])]),t._v(" "),_("li",[_("p",[t._v("将 "),_("em",[_("strong",[t._v("mysite1")])]),t._v(" 文件夹整体拷贝到目标位置 "),_("em",[t._v("/data2/wwwroot")]),t._v(" "),_("img",{attrs:{src:"https://libs.websoft9.com/Websoft9/DocsPicture/zh/lamp/lamp-copysite1todata2-websoft9.png",alt:""}})])]),t._v(" "),_("li",[_("p",[t._v("修改vhost.conf 中 mysite1 这个网站对应的 VirtualHost 配置段 DocumentRoot, Directory 项的值\n"),_("img",{attrs:{src:"https://libs.websoft9.com/Websoft9/DocsPicture/zh/lamp/lamp-modifyvhostdata2-websoft9.png",alt:""}})]),t._v(" "),_("p",[t._v("原地址：/data/wwwroot/mysite1"),_("br"),t._v("\n目标地址：/data2/wwwroot/mysite1")])]),t._v(" "),_("li",[_("p",[t._v("保存vhost.conf，然后在 WinSCP 中运行重启服务命令 或 云控制台重启服务器 ：")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("# 重启Apache服务命令\nsystemctl restart httpd\n")])])])]),t._v(" "),_("li",[_("p",[t._v("测试迁移后的结果，成功后可以删除原来的 "),_("em",[t._v("mysite1")]),t._v(" 文件夹")])])]),t._v(" "),_("h2",{attrs:{id:"迁移数据库文件（本地）"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#迁移数据库文件（本地）"}},[t._v("#")]),t._v(" 迁移数据库文件（本地）")]),t._v(" "),_("p",[t._v("没有特殊情况，我们不建议迁移数据库文件到服务器上另外一个目录，毕竟主流的云厂商磁盘均可扩容。")]),t._v(" "),_("p",[t._v("如果要更改 "),_("router-link",{attrs:{to:"/zh/stack-components.html#mysql"}},[t._v("MySQL 数据库文件目录")]),t._v("，请参考此处"),_("a",{attrs:{href:"https://support.websoft9.com/docs/mysql/zh/solution-modifydatadir.html",target:"_blank",rel:"noopener noreferrer"}},[t._v(" MySQL 专题文档"),_("OutboundLink")],1)],1),t._v(" "),_("h2",{attrs:{id:"将-data目录迁移到数据盘（本地）"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#将-data目录迁移到数据盘（本地）"}},[t._v("#")]),t._v(" 将/data目录迁移到数据盘（本地）")]),t._v(" "),_("p",[t._v("默认情况下 /data 是在系统盘的，当需要转移到数据盘，步骤如下:")]),t._v(" "),_("ol",[_("li",[_("p",[t._v("开始操作之前，"),_("strong",[t._v("请务必做好数据备份")]),t._v("；")])]),t._v(" "),_("li",[_("p",[t._v("提前购买数据盘，然后到云控制台将数据盘关联到云服务器")])]),t._v(" "),_("li",[_("p",[t._v("连接服务器，将数据盘分区格式化")])]),t._v(" "),_("li",[_("p",[t._v("在云服务器根目录下创建一个临时目录 temp")])]),t._v(" "),_("li",[_("p",[t._v("将数据盘挂载（mount）到:"),_("em",[t._v("/temp")]),t._v(" 目录")])]),t._v(" "),_("li",[_("p",[t._v("停止云服务器上的 Apache 和 MySQL 服务")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("sudo systemctl stop httpd mysqld\n")])])])]),t._v(" "),_("li",[_("p",[t._v("将当前 "),_("em",[t._v("/data")]),t._v(" 下所有文件拷贝到服务器临时文件夹 "),_("em",[t._v("/temp")]),t._v("  中")]),t._v(" "),_("blockquote",[_("p",[t._v("数据较大的话，拷贝可能会失败，此步骤具体问题需具体对待")])])]),t._v(" "),_("li",[_("p",[t._v("等待数据转移完成")])]),t._v(" "),_("li",[_("p",[t._v("连接服务器，将数据盘再次挂载（mount）到:"),_("em",[t._v("/data")]),t._v(" 目录")])]),t._v(" "),_("li",[_("p",[t._v("运行以下命令重新启动 Apache 和 MySQL:")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("sudo systemctl start httpd mysqld\n")])])])]),t._v(" "),_("li",[_("p",[t._v("测试迁移结果")])])]),t._v(" "),_("blockquote",[_("p",[t._v("数据盘格式化以及挂载（mount）操作非常复杂，需要有熟练的相关技能")])]),t._v(" "),_("h2",{attrs:{id:"迁移到外部服务器"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#迁移到外部服务器"}},[t._v("#")]),t._v(" 迁移到外部服务器")]),t._v(" "),_("p",[t._v("网站从一台服务器（原服务器）迁移到另外一台服务器（目的服务器）是一个系统工程，基本步骤如下：")]),t._v(" "),_("ol",[_("li",[t._v("通过云控制台，在目的服务器上"),_("router-link",{attrs:{to:"/zh/stack-deployment.html"}},[t._v("部署")]),t._v("参数一致的 LAMP 镜像。")],1),t._v(" "),_("li",[t._v("通过 WinSCP 将原服务器上的网站源文件"),_("strong",[t._v("下载")]),t._v("到本地电脑，然后再"),_("strong",[t._v("上传")]),t._v("到目的服务器。")]),t._v(" "),_("li",[t._v("通过 phpMyAdmin "),_("strong",[t._v("导出")]),t._v("原服务器上的数据库，然后在目的服务器上"),_("strong",[t._v("导入")]),t._v("数据库。")]),t._v(" "),_("li",[t._v("把原服务器上的 vhost.conf 配置文件内容，完整拷贝到目的服务器的 vhost.conf 中，保存之。")]),t._v(" "),_("li",[t._v("重启 Apache 服务。")]),t._v(" "),_("li",[t._v("解析域名到目的服务器，等待域名解析生效。")]),t._v(" "),_("li",[t._v("通过域名访问网站，测试可用性。")]),t._v(" "),_("li",[t._v("正式发布。")])]),t._v(" "),_("p",[t._v("如果一台服务器上有多个网站需要迁移，建议逐个迁移")])])}),[],!1,null,null,null);v.default=s.exports}}]);