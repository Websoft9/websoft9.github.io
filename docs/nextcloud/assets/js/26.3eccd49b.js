(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{225:function(t,a,s){"use strict";s.r(a);var e=s(28),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"备份恢复"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#备份恢复"}},[t._v("#")]),t._v(" 备份恢复")]),t._v(" "),s("h2",{attrs:{id:"为什么？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么？"}},[t._v("#")]),t._v(" 为什么？")]),t._v(" "),s("p",[t._v("有服务器运维经验的用户都明白一个道理：“信息系统根本无法长时间保持100%稳定的状态，任何系统都可能会出现故障，只是故障出现的概率不同、危害程度不同而已”。")]),t._v(" "),s("ol",[s("li",[t._v("工作几天的成果被误删了，怎么恢复？")]),t._v(" "),s("li",[t._v("网站被黑客攻击面目全非，能复原吗？")]),t._v(" "),s("li",[t._v("网站内容被改得乱七八糟，想要恢复到一个正常状态？")])]),t._v(" "),s("p",[t._v("当故障发生之时，我们首先是寻求专业人士的帮助，快速诊断并处理故障，但不幸的是，有些故障无法在期望的时间周期内顺利的解决，甚至是无法解决。")]),t._v(" "),s("p",[t._v("显然，有一个备份及其重要，它可以保证出现故障之时可以通过已有的备份文件将系统恢复到正常的状态，意味着可以避免由于无法恢复而造成的巨大损失。")]),t._v(" "),s("blockquote",[s("p",[t._v("一定要养成备份的习惯，切莫存在侥幸心理")])]),t._v(" "),s("h2",{attrs:{id:"怎样做？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#怎样做？"}},[t._v("#")]),t._v(" 怎样做？")]),t._v(" "),s("p",[t._v("从具体的备份对象上看，由于服务器上存在："),s("strong",[t._v("操作系统、运行环境、数据库和应用程序")]),t._v("四个备份对象，每个对象都有可能出现不可预期、不可如期解决的故障。")]),t._v(" "),s("p",[t._v("基于备份对象的性质，我们认为如下两种备份措施是必要的：")]),t._v(" "),s("h3",{attrs:{id:"全局自动备份"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#全局自动备份"}},[t._v("#")]),t._v(" 全局自动备份")]),t._v(" "),s("p",[t._v("所有的云平台都提供了全局自动备份功能，基本原理是基于"),s("strong",[t._v("磁盘快照")]),t._v("：快照是针对于服务器的磁盘来说的，它可以记录磁盘在指定时间点的数据，将其全部备份起来，并可以实现一键恢复。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("- 备份范围: 将操作系统、运行环境、数据库和应用程序\n- 备份效果: 非常好\n- 备份频率: 按小时、天、周备份均可\n- 恢复方式: 云平台一键恢复\n- 技能要求：非常容易\n- 自动化：设置策略后全自动备份\n")])])]),s("p",[t._v("不同云平台的自动备份方案有一定的差异，详情参考 "),s("a",{attrs:{href:"https://support.websoft9.com/docs/faq/zh/tech-instance.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("云平台备份方案"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"程序手工备份"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#程序手工备份"}},[t._v("#")]),t._v(" 程序手工备份")]),t._v(" "),s("p",[t._v("程序手工本地备份是通过"),s("strong",[t._v("下载应用程序源码和导出数据库文件")]),t._v("实现最小化的备份方案。")]),t._v(" "),s("p",[t._v("下面以列表的方式介绍这种备份：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("- 备份范围: 数据库和应用程序\n- 备份效果: 一般\n- 备份频率: 一周最低1次，备份保留30天\n- 恢复方式: 重新导入\n- 技能要求：非常容易\n- 自动化：无\n")])])]),s("p",[t._v("通用的手动备份操作步骤如下：")]),t._v(" "),s("ol",[s("li",[t._v("通过 WinSCP 将网站源码目录（"),s("em",[t._v("/data/wwwroot/nextcloud")]),t._v("）"),s("strong",[t._v("压缩后")]),t._v("再完整的下载到本地")]),t._v(" "),s("li",[t._v("通过 WinSCP 将网站数据目录（"),s("em",[t._v("/data/wwwroot/nextcloud/data")]),t._v("）"),s("strong",[t._v("压缩后")]),t._v("再完整的下载到本地")]),t._v(" "),s("li",[t._v("通过 phpMyAdmin 导出 Nextcloud 数据库\n"),s("img",{attrs:{src:"https://libs.websoft9.com/Websoft9/DocsPicture/zh/mysql/phpmyadmin-export-websoft9.png",alt:""}})]),t._v(" "),s("li",[t._v("将程序文件、数据文件和数据库文件放到同一个文件夹，根据日期命名")]),t._v(" "),s("li",[t._v("备份工作完成")])]),t._v(" "),s("h3",{attrs:{id:"nextcloud-后台备份"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nextcloud-后台备份"}},[t._v("#")]),t._v(" Nextcloud 后台备份")]),t._v(" "),s("p",[t._v("Nextcloud 后台提供在线备份功能")]),t._v(" "),s("ol",[s("li",[t._v("登录 Nextcloud 后台，安装 "),s("strong",[s("a",{attrs:{href:"https://apps.nextcloud.com/apps/ownbackup",target:"_blank",rel:"noopener noreferrer"}},[t._v("OwnBackup"),s("OutboundLink")],1)]),t._v(" 插件\n"),s("img",{attrs:{src:"https://libs.websoft9.com/Websoft9/DocsPicture/en/nextcloud/nextcloud-backupapps-websoft9.png",alt:""}})]),t._v(" "),s("li",[t._v("打开：【Admin】>【Additional settings】>【OwnBackup】，开始备份\n"),s("img",{attrs:{src:"https://libs.websoft9.com/Websoft9/DocsPicture/en/nextcloud/nextcloud-backupapp002-websoft9.png",alt:""}})])])])}),[],!1,null,null,null);a.default=r.exports}}]);