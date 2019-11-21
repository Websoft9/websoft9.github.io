(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{206:function(t,_,v){"use strict";v.r(_);var r=v(0),a=Object(r.a)({},function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"部署"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#部署","aria-hidden":"true"}},[t._v("#")]),t._v(" 部署")]),t._v(" "),v("p",[t._v("一般来说，当您看到本文档的时候，您可能已经在的云服务器上部署了 AWX，那么接下来请直接进入 "),v("router-link",{attrs:{to:"/zh/stack-installation.html"}},[t._v("初始化安装")]),t._v(" 章节，根据文档完成相关操作。")],1),t._v(" "),v("p",[t._v("如果您的云服务器上还没有部署 AWX，就需要先将 AWX 部署到您的云服务器。")]),t._v(" "),v("p",[t._v("我们提供了结果保持一致的两种部署 AWX 的方案：")]),t._v(" "),v("h2",{attrs:{id:"镜像部署"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#镜像部署","aria-hidden":"true"}},[t._v("#")]),t._v(" 镜像部署")]),t._v(" "),v("p",[t._v("我们在主流的云平台上发布了 AWX 镜像，只要有一定的云服务器使用经验，部署完全可以称之为“一键部署”。")]),t._v(" "),v("blockquote",[v("p",[t._v("镜像是指云服务器可选择的运行环境模板，一般包括操作系统和预装的软件。用户基于镜像来创建云服务器，从而获得与镜像一致的系统环境。")])]),t._v(" "),v("p",[t._v("查看 "),v("a",{attrs:{href:"http://apps.websoft9.com/awx",target:"_blank",rel:"noopener noreferrer"}},[t._v("AWX的镜像地址"),v("OutboundLink")],1),t._v("，开始进入镜像部署。云平台一般支持三种部署方式：")]),t._v(" "),v("ul",[v("li",[t._v("在 "),v("strong",[t._v("选购新服务器")]),t._v(" 的时候，找到并选取 AWX 镜像作为服务器启动环境")]),t._v(" "),v("li",[t._v("在 "),v("strong",[t._v("云市场（Marketplace）")]),t._v("  的 AWX 商品页面直接购买")]),t._v(" "),v("li",[t._v("针对已有服务器，通过 "),v("strong",[t._v("更换镜像")]),t._v(" 的操作，将已有镜像更换成 AWX 镜像。")])]),t._v(" "),v("h2",{attrs:{id:"脚本部署"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#脚本部署","aria-hidden":"true"}},[t._v("#")]),t._v(" 脚本部署")]),t._v(" "),v("p",[t._v("我们在 Github上发布了 AWX 的自动化部署脚本，脚本采用 Ansible 编写。只要熟悉 Ansible，便可以实现无人值守的方式将 AWX 部署到服务器")]),t._v(" "),v("p",[t._v("查看 "),v("a",{attrs:{href:"https://github.com/Websoft9/ansible-awx",target:"_blank",rel:"noopener noreferrer"}},[t._v("AWX的Github地址"),v("OutboundLink")],1),t._v("，开始通过脚本部署。")]),t._v(" "),v("h2",{attrs:{id:"对比"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#对比","aria-hidden":"true"}},[t._v("#")]),t._v(" 对比")]),t._v(" "),v("p",[t._v("虽然通过镜像部署与脚本部署的结果一致，但仍然有一些可供您做出部署方式决定的参考项：")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("项")]),t._v(" "),v("th",[t._v("镜像部署")]),t._v(" "),v("th",[t._v("脚本部署")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("部署时间")]),t._v(" "),v("td",[t._v("2-5分钟")]),t._v(" "),v("td",[t._v("20-60分钟")])]),t._v(" "),v("tr",[v("td",[t._v("部署成功率")]),t._v(" "),v("td",[t._v("99.99%")]),t._v(" "),v("td",[t._v("80%，受制于网络和地域原因，可能会部署失败")])]),t._v(" "),v("tr",[v("td",[t._v("技能要求")]),t._v(" "),v("td",[t._v("低")]),t._v(" "),v("td",[t._v("高")])]),t._v(" "),v("tr",[v("td",[t._v("安全")]),t._v(" "),v("td",[t._v("云厂商测试通过")]),t._v(" "),v("td",[t._v("内测通过")])]),t._v(" "),v("tr",[v("td",[t._v("版本")]),t._v(" "),v("td",[t._v("固定")]),t._v(" "),v("td",[t._v("适当可变")])]),t._v(" "),v("tr",[v("td",[t._v("费用")]),t._v(" "),v("td",[t._v("按需订阅")]),t._v(" "),v("td",[t._v("免费")])]),t._v(" "),v("tr",[v("td",[t._v("人工支持")]),t._v(" "),v("td",[t._v("标准人工支持")]),t._v(" "),v("td",[t._v("无任何支持，可以通过Github反馈故障")])]),t._v(" "),v("tr",[v("td",[t._v("源码")]),t._v(" "),v("td",[t._v("100%开源")]),t._v(" "),v("td",[t._v("100%开源")])]),t._v(" "),v("tr",[v("td",[t._v("问题反馈")]),t._v(" "),v("td",[t._v("标准人工支持")]),t._v(" "),v("td",[t._v("无任何支持")])]),t._v(" "),v("tr",[v("td",[t._v("云支持")]),t._v(" "),v("td",[t._v("公有云")]),t._v(" "),v("td",[t._v("公有云，私有云")])])])]),t._v(" "),v("blockquote",[v("p",[t._v("结论：镜像部署更为简单，并可以获得一定的技术支持。")])])])},[],!1,null,null,null);_.default=a.exports}}]);