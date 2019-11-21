(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{199:function(t,a,r){"use strict";r.r(a);var e=r(0),n=Object(e.a)({},function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"ranzhi（然之）"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ranzhi（然之）","aria-hidden":"true"}},[t._v("#")]),t._v(" Ranzhi（然之）")]),t._v(" "),r("p",[t._v("本文档可供使用了 "),r("strong",[t._v("Ranzhi 镜像")]),t._v(" 用户参考，也可以供准备在 "),r("strong",[t._v("LAMP 镜像")]),t._v(" 上自行部署 Ranzhi 参考。")]),t._v(" "),r("p",[t._v("Ranzhi 一款开源的OA&CRM系统，完全免费。采用PHP+MySql开发。由客户管理、订单管理、报销、审批、应收应付、财务记账和团队分享等功能组成，是一款非常合适中小企业的内部一体化管理软件。桌面式操作体验，优雅流畅、快捷方便。"),r("a",{attrs:{href:"http://demo.ranzhi.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方演示"),r("OutboundLink")],1)]),t._v(" "),r("h2",{attrs:{id:"准备"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#准备","aria-hidden":"true"}},[t._v("#")]),t._v(" 准备")]),t._v(" "),r("p",[t._v("在开始 Ranzhi 的安装部署之前，建议完成如下事情：")]),t._v(" "),r("ul",[r("li",[t._v("浏览器访问："),r("em",[t._v("http://公网ip/9panel")]),t._v(" ，快速了解镜像的使用")]),t._v(" "),r("li",[t._v("查看镜像环境参数，包括："),r("strong",[t._v("目录路径、版本、数据库、虚拟主机配置文件等")]),t._v(" （"),r("a",{attrs:{href:"https://support.websoft9.com/docs/lamp/zh/stack-components.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("马上查看"),r("OutboundLink")],1),t._v("）")])]),t._v(" "),r("h2",{attrs:{id:"ranzhi-安装到服务器"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ranzhi-安装到服务器","aria-hidden":"true"}},[t._v("#")]),t._v(" Ranzhi 安装到服务器")]),t._v(" "),r("p",[r("strong",[t._v("如果你使用的是 "),r("em",[t._v("Ranzhi 镜像")]),t._v("，本节请忽略，直接阅读下一节 【Ranzhi 初始化安装向导】")])]),t._v(" "),r("p",[t._v("如果你使用的是 LAMP 镜像，请先将 Ranzhi 安装到服务器，操作步骤如下：")]),t._v(" "),r("ol",[r("li",[t._v("通过域名控制台完成解析域名（增加一个A记录指向服务器IP），并测试是否成功")]),t._v(" "),r("li",[t._v("通过 "),r("a",{attrs:{href:"https://support.websoft9.com/docs/lamp/zh/admin-mysql.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("phpMyAdmin 登录 MySQL"),r("OutboundLink")],1),t._v("，为 Ranzhi 系统增加一个数据库，假如名称为："),r("code",[t._v("ranzhi")])]),t._v(" "),r("li",[t._v("到 Ranzhi 官方"),r("a",{attrs:{href:"https://www.ranzhi.org/download.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("下载源码"),r("OutboundLink")],1)]),t._v(" "),r("li",[t._v("参考"),r("a",{attrs:{href:"https://support.websoft9.com/docs/lamp/zh/solution-deployment.html#%E5%AE%89%E8%A3%85%E7%AC%AC%E4%BA%8C%E4%B8%AA%E7%BD%91%E7%AB%99",target:"_blank",rel:"noopener noreferrer"}},[t._v("《如何在 LAMP 上增加网站》"),r("OutboundLink")],1),t._v(" ，将 Ranzhi 安装到服务器的 "),r("a",{attrs:{href:"https://support.websoft9.com/docs/lamp/zh/",target:"_blank",rel:"noopener noreferrer"}},[t._v("LAMP"),r("OutboundLink")],1),t._v(" 环境中")])]),t._v(" "),r("hr"),t._v(" "),r("h2",{attrs:{id:"ranzhi-初始化安装向导"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ranzhi-初始化安装向导","aria-hidden":"true"}},[t._v("#")]),t._v(" Ranzhi 初始化安装向导")]),t._v(" "),r("ol",[r("li",[r("p",[t._v("本地浏览器访问："),r("em",[t._v("http://域名")]),t._v(" 或 "),r("em",[t._v("http://公网IP")]),t._v(" 进入安装向导（首选域名访问方式）\n"),r("img",{attrs:{src:"http://libs.websoft9.com/Websoft9/DocsPicture/zh/ranzhi/ranzhi-install001-websoft9.gif",alt:""}})])]),t._v(" "),r("li",[r("p",[t._v("系统检查，通过后进入下一步\n"),r("img",{attrs:{src:"http://libs.websoft9.com/Websoft9/DocsPicture/zh/ranzhi/ranzhi-install002-websoft9.gif",alt:""}})])]),t._v(" "),r("li",[r("p",[t._v("进入配置数据库界面（"),r("a",{attrs:{href:"https://support.websoft9.com/docs/lamp/zh/stack-accounts.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("查看数据库账号密码"),r("OutboundLink")],1),t._v("）\n"),r("img",{attrs:{src:"http://libs.websoft9.com/Websoft9/DocsPicture/zh/ranzhi/ranzhi-install003-websoft9.gif",alt:""}})])]),t._v(" "),r("li",[r("p",[t._v("继续下一步，直至进入管理员账号设置界面，请设置好并牢记之，然后进入下一步\n"),r("img",{attrs:{src:"http://libs.websoft9.com/Websoft9/DocsPicture/zh/ranzhi/ranzhi-install005-websoft9.gif",alt:""}})])]),t._v(" "),r("li",[r("p",[t._v("安装完成后，系统进入管理员登录界面，输入上一步填写的账号信息\n"),r("img",{attrs:{src:"http://libs.websoft9.com/Websoft9/DocsPicture/zh/ranzhi/ranzhi-install006-websoft9.png",alt:""}})])]),t._v(" "),r("li",[r("p",[t._v("成功登录后台，开始体验\n"),r("img",{attrs:{src:"http://libs.websoft9.com/Websoft9/DocsPicture/zh/ranzhi/ranzhi-backend-websoft9.png",alt:""}})])])]),t._v(" "),r("p",[t._v("更多详情参考"),r("a",{attrs:{href:"http://www.ranzhi.org/book/ranzhi",target:"_blank",rel:"noopener noreferrer"}},[t._v("然之官方SMTP文档"),r("OutboundLink")],1)]),t._v(" "),r("h2",{attrs:{id:"ranzhi-espocrm-zentao-初始化向导"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ranzhi-espocrm-zentao-初始化向导","aria-hidden":"true"}},[t._v("#")]),t._v(" Ranzhi&EspoCRM&Zentao 初始化向导")]),t._v(" "),r("p",[t._v("Ranzhi&EspoCRM&禅道 是一个组合类部署包，内置了 Ranzhi, EspoCRM, Zentao 三个产品。初始化向导如下：")]),t._v(" "),r("ol",[r("li",[t._v("通过访问 "),r("em",[t._v("http://公网IP地址/9panel")]),t._v(" 了解初始化安装")]),t._v(" "),r("li",[t._v("通过 WinSCP 登录服务器，进入 "),r("em",[t._v("/etc/httpd/conf.d")]),t._v(" 目录，分别将“ranzhi.conf.范例”、“zentao.conf.范例”和“espocrm.conf.范例”内容中的示例域名（类似：mydomain.com等字样）替换成您的域名，然后保存，并去掉“.范例”后缀\n"),r("img",{attrs:{src:"http://libs.websoft9.com/Websoft9/DocsPicture/zh/ranzhi-zentao-espocrm/chanzhizentaoespocrm-conf-websoft9.png",alt:""}})]),t._v(" "),r("li",[t._v("逐个完成初始化")])]),t._v(" "),r("h2",{attrs:{id:"常见问题"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#常见问题","aria-hidden":"true"}},[t._v("#")]),t._v(" 常见问题")]),t._v(" "),r("h4",{attrs:{id:"浏览器打开ip地址，无法访问-ranzhi（白屏没有结果）？"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#浏览器打开ip地址，无法访问-ranzhi（白屏没有结果）？","aria-hidden":"true"}},[t._v("#")]),t._v(" 浏览器打开IP地址，无法访问 Ranzhi（白屏没有结果）？")]),t._v(" "),r("p",[t._v("您的服务器对应的安全组80端口没有开启（入规则），导致浏览器无法访问到服务器的任何内容")]),t._v(" "),r("h4",{attrs:{id:"本部署包采用的哪个数据库来存储-ranzhi-数据？"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#本部署包采用的哪个数据库来存储-ranzhi-数据？","aria-hidden":"true"}},[t._v("#")]),t._v(" 本部署包采用的哪个数据库来存储 Ranzhi 数据？")]),t._v(" "),r("p",[t._v("部署包内置 MySQL")]),t._v(" "),r("h4",{attrs:{id:"是否可以采用云厂商提供的-rds-来存储-ranzhi-数据？"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#是否可以采用云厂商提供的-rds-来存储-ranzhi-数据？","aria-hidden":"true"}},[t._v("#")]),t._v(" 是否可以采用云厂商提供的 RDS 来存储 Ranzhi 数据？")]),t._v(" "),r("p",[t._v("可以")]),t._v(" "),r("h4",{attrs:{id:"ranzhi-如何发送邮件？"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ranzhi-如何发送邮件？","aria-hidden":"true"}},[t._v("#")]),t._v(" Ranzhi 如何发送邮件？")]),t._v(" "),r("p",[t._v("Ranzhi支持第三方的SMTP发送邮件模式，具体如下：")]),t._v(" "),r("ol",[r("li",[r("p",[t._v("后台管理 -> 发信设置 ->编辑配置，进入邮箱配置")])]),t._v(" "),r("li",[r("p",[t._v("以 163 邮箱为例，根据下图的设置，完成SMTP参数的设置\n"),r("img",{attrs:{src:"http://libs.websoft9.com/Websoft9/DocsPicture/zh/ranzhi/ranzhi-smtp-websoft9.png",alt:""}})])]),t._v(" "),r("li",[r("p",[t._v("设置完成后，请点击“Send Test Email”测试设置是否成功")])])]),t._v(" "),r("blockquote",[r("p",[t._v("以上参数设置以163邮箱为例，不同SMTP提供商的设置略有差异，请务必明确您所使用的SMTP所要求的设置方式。Password 处填写邮箱密码 还是 授权码，这个需要严格参考SMTP提供商的说明。")])]),t._v(" "),r("h4",{attrs:{id:"ranzhi-后台的管理员密码忘了怎么办？"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ranzhi-后台的管理员密码忘了怎么办？","aria-hidden":"true"}},[t._v("#")]),t._v(" Ranzhi 后台的管理员密码忘了怎么办？")]),t._v(" "),r("p",[t._v("使用 phpMyAdmin 登录 MySQL, 修改 Ranzhi 对应的数据库 "),r("code",[t._v("sys_user")]),t._v("表，具体参考官方文档："),r("a",{attrs:{href:"https://www.ranzhi.org/book/faq1/78.html#4",target:"_blank",rel:"noopener noreferrer"}},[t._v("如何重置密码？"),r("OutboundLink")],1)]),t._v(" "),r("h4",{attrs:{id:"ranzhi-如何备份？"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ranzhi-如何备份？","aria-hidden":"true"}},[t._v("#")]),t._v(" Ranzhi 如何备份？")]),t._v(" "),r("h5",{attrs:{id:"然之后台手工备份（建议）"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#然之后台手工备份（建议）","aria-hidden":"true"}},[t._v("#")]),t._v(" 然之后台手工备份（建议）")]),t._v(" "),r("p",[t._v("超级管理员登录然之---后台管理---系统---备份 页面点击 备份 按钮进行备份。")]),t._v(" "),r("ul",[r("li",[t._v("可以设置备份保存的天数。")]),t._v(" "),r("li",[t._v("备份的数据和附件会显示具体的路径名，方便查看。\n"),r("img",{attrs:{src:"http://libs.websoft9.com/Websoft9/DocsPicture/zh/ranzhi/ranzhi-manulbk-websoft9.png",alt:""}})])]),t._v(" "),r("h5",{attrs:{id:"然之后台计划任务呢备份（必做）"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#然之后台计划任务呢备份（必做）","aria-hidden":"true"}},[t._v("#")]),t._v(" 然之后台计划任务呢备份（必做）")]),t._v(" "),r("p",[t._v("也可以在后台管理---系统---计划任务里，打开计划任务自动备份数据和附件。\n计划任务列表里，你可以编辑定时备份任务的时间和频率。\n"),r("img",{attrs:{src:"http://libs.websoft9.com/Websoft9/DocsPicture/zh/ranzhi/ranzhi-autobk-websoft9.png",alt:""}})]),t._v(" "),r("h4",{attrs:{id:"ranzhi-如何升级？"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ranzhi-如何升级？","aria-hidden":"true"}},[t._v("#")]),t._v(" Ranzhi 如何升级？")]),t._v(" "),r("p",[t._v("请参考："),r("a",{attrs:{href:"http://www.ranzhi.org/book/ranzhi/ranzhiupgrade-7.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方升级文档"),r("OutboundLink")],1)])])},[],!1,null,null,null);a.default=n.exports}}]);