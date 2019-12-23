(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{223:function(t,a,v){"use strict";v.r(a);var s=v(0),_=Object(s.a)({},(function(){var t=this,a=t.$createElement,v=t._self._c||a;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"备份恢复"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#备份恢复"}},[t._v("#")]),t._v(" 备份恢复")]),t._v(" "),v("h2",{attrs:{id:"为什么？"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#为什么？"}},[t._v("#")]),t._v(" 为什么？")]),t._v(" "),v("p",[t._v("有服务器运维经验的用户都明白一个道理：“信息系统根本无法长时间保持100%稳定的状态，任何系统都可能会出现故障，只是故障出现的概率不同、危害程度不同而已”。")]),t._v(" "),v("ol",[v("li",[t._v("工作几天的成果被误删了，怎么恢复？")]),t._v(" "),v("li",[t._v("网站被黑客攻击面目全非，能复原吗？")]),t._v(" "),v("li",[t._v("网站内容被改得乱七八糟，想要恢复到一个正常状态？")])]),t._v(" "),v("p",[t._v("当故障发生之时，我们首先是寻求专业人士的帮助，快速诊断并处理故障，但不幸的是，有些故障无法在期望的时间周期内顺利的解决，甚至是无法解决。")]),t._v(" "),v("p",[t._v("显然，有一个备份及其重要，它可以保证出现故障之时可以通过已有的备份文件将系统恢复到正常的状态，意味着可以避免由于无法恢复而造成的巨大损失。")]),t._v(" "),v("blockquote",[v("p",[t._v("一定要养成备份的习惯，切莫存在侥幸心理")])]),t._v(" "),v("h2",{attrs:{id:"怎样做？"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#怎样做？"}},[t._v("#")]),t._v(" 怎样做？")]),t._v(" "),v("p",[t._v("从具体的备份对象上看，由于服务器上存在："),v("strong",[t._v("操作系统、运行环境、数据库和应用程序")]),t._v("四个备份对象，每个对象都有可能出现不可预期、不可如期解决的故障。")]),t._v(" "),v("p",[t._v("基于备份对象的性质，我们认为如下两种备份措施是必要的：")]),t._v(" "),v("h3",{attrs:{id:"全局自动备份"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#全局自动备份"}},[t._v("#")]),t._v(" 全局自动备份")]),t._v(" "),v("p",[t._v("所有的云平台都提供了全局自动备份功能，基本原理是基于"),v("strong",[t._v("磁盘快照")]),t._v("：快照是针对于服务器的磁盘来说的，它可以记录磁盘在指定时间点的数据，将其全部备份起来，并可以实现一键恢复。")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("- 备份范围: 将操作系统、运行环境、数据库和应用程序\n- 备份效果: 非常好\n- 备份频率: 按小时、天、周备份均可\n- 恢复方式: 云平台一键恢复\n- 技能要求：非常容易\n- 自动化：设置策略后全自动备份\n")])])]),v("p",[t._v("不同云平台的自动备份方案有一定的差异，详情参考 "),v("a",{attrs:{href:"https://support.websoft9.com/docs/faq/zh/tech-instance.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("云平台备份方案"),v("OutboundLink")],1)]),t._v(" "),v("h3",{attrs:{id:"docker应用备份"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#docker应用备份"}},[t._v("#")]),t._v(" Docker应用备份")]),t._v(" "),v("p",[t._v("Docker上的应用备份主要通过"),v("strong",[t._v("下载Volume")]),t._v("实现最小化的备份方案。")]),t._v(" "),v("p",[t._v("下面以列表的方式介绍这种备份：")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("- 备份范围: 数据库和应用程序\n- 备份效果: 一般\n- 备份频率: 一周最低1次，备份保留30天\n- 恢复方式: 重新导入\n- 技能要求：非常容易\n- 自动化：无\n")])])]),v("p",[t._v("通用的手动备份操作步骤如下：")]),t._v(" "),v("ol",[v("li",[t._v("通过 WinSCP 将Volume目录"),v("strong",[t._v("压缩后")]),t._v("再完整的下载到本地")]),t._v(" "),v("li",[t._v("如果涉及数据库，建议导出 SQL 文件")]),t._v(" "),v("li",[t._v("将程序文件、数据文件和数据库文件放到同一个文件夹，根据日期命名")]),t._v(" "),v("li",[t._v("备份工作完成")])])])}),[],!1,null,null,null);a.default=_.exports}}]);