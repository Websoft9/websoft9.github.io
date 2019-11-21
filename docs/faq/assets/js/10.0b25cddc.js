(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{212:function(t,r,a){"use strict";a.r(r);var _=a(0),s=Object(_.a)({},function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"备份"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#备份","aria-hidden":"true"}},[t._v("#")]),t._v(" 备份")]),t._v(" "),a("h2",{attrs:{id:"为什么？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么？","aria-hidden":"true"}},[t._v("#")]),t._v(" 为什么？")]),t._v(" "),a("p",[t._v("有服务器运维经验的用户都明白一个道理：“信息系统根本无法长时间保持100%稳定的状态，任何系统都可能会出现故障，只是故障出现的概率不同、危害程度不同而已”。")]),t._v(" "),a("ol",[a("li",[t._v("工作了几天的成果，被误删了")]),t._v(" "),a("li",[t._v("网站被黑客攻击，面目全非")]),t._v(" "),a("li",[t._v("现在的内容已乱七八糟，想要恢复到一个历史状态")])]),t._v(" "),a("p",[t._v("当故障发生之时，我们首先是寻求专业人士的帮助，快速诊断并处理故障，但不幸的是，有些故障无法在期望的时间周期内顺利的解决，甚至是无法解决。")]),t._v(" "),a("p",[t._v("显然，有一个备份及其重要，它可以保证出现故障之时可以通过已有的备份文件将系统恢复到正常的状态，意味着可以避免由于无法恢复而造成的巨大损失。")]),t._v(" "),a("blockquote",[a("p",[t._v("一定要养成备份的习惯，切莫存在侥幸心理")])]),t._v(" "),a("h2",{attrs:{id:"怎样做？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#怎样做？","aria-hidden":"true"}},[t._v("#")]),t._v(" 怎样做？")]),t._v(" "),a("p",[t._v("从具体的备份对象上看，我们的服务器上存在："),a("strong",[t._v("操作系统、运行环境、数据库和应用程序")]),t._v("四个组成部分，每个部分都有可能出现不可预期、不可如期解决的故障。")]),t._v(" "),a("p",[t._v("基于备份对象的性质，我们认为如下两种备份措施是必要的：")]),t._v(" "),a("h3",{attrs:{id:"全局自动备份"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#全局自动备份","aria-hidden":"true"}},[t._v("#")]),t._v(" 全局自动备份")]),t._v(" "),a("p",[t._v("全局自动备份，即一个备份方式能够将操作系统、运行环境、数据库和应用程序四个组成部分全部自动备份下来。")]),t._v(" "),a("p",[t._v("所有的云平台都提供了这种自动备份功能，基本原理是基于"),a("strong",[t._v("磁盘快照")]),t._v("：快照是针对于服务器的磁盘来说的，它可以记录磁盘在指定时间点的数据，将其全部备份起来，并可以实现一键恢复。")]),t._v(" "),a("p",[t._v("不同云平台的自动备份方案有一定的差异，详情参考"),a("router-link",{attrs:{to:"/zh/tech-instance.html"}},[t._v("此处")])],1),t._v(" "),a("p",[t._v("备份周期：建议一周最低3次，备份保留7天")]),t._v(" "),a("h3",{attrs:{id:"程序手工备份"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#程序手工备份","aria-hidden":"true"}},[t._v("#")]),t._v(" 程序手工备份")]),t._v(" "),a("p",[t._v("程序手工本地备份是通过"),a("strong",[t._v("下载应用程序源码和备份导出数据库文件")]),t._v("实现最小化的备份方案。")]),t._v(" "),a("p",[t._v("下面以LAMP为例，就具体的备份操作进行说明：")]),t._v(" "),a("ol",[a("li",[t._v("通过WinSCP将网站目录完整的下载到本地（如果文件数量比较多，建议压缩后再下载）\n"),a("img",{attrs:{src:"http://libs.websoft9.com/Websoft9/DocsPicture/zh/winscp/winscp-download-websoft9.png",alt:""}})]),t._v(" "),a("li",[t._v("通过PHPMyAdmin登录数据库，在左侧菜单中选择所需的数据库，顶部导航栏上选择“导出”标签    "),a("img",{attrs:{src:"http://libs.websoft9.com/Websoft9/DocsPicture/zh/mysql/phpmyadmin-export-websoft9.png",alt:""}})]),t._v(" "),a("li",[t._v("选择导出方式和格式（建议SQL），点击“执行”，导出文件后下载到本地")]),t._v(" "),a("li",[t._v("将程序文件和数据库文件放到同一个文件夹，根据日期命名，备份工作完成")])]),t._v(" "),a("p",[t._v("备份周期：建议一周最低1次，备份保留30天")]),t._v(" "),a("h2",{attrs:{id:"更多"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更多","aria-hidden":"true"}},[t._v("#")]),t._v(" 更多")]),t._v(" "),a("p",[t._v("本章的内容是通用性的，实际上我们针对每一个镜像都提供了详细的备份方案。查看"),a("a",{attrs:{href:"https://support.websoft9.com/zh/alldocs.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("所有文档"),a("OutboundLink")],1),t._v("页面，找到你所需的文档名称")])])},[],!1,null,null,null);r.default=s.exports}}]);