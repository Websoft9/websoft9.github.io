(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{271:function(t,a,s){"use strict";s.r(a);var e=s(28),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"更新升级"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#更新升级"}},[t._v("#")]),t._v(" 更新升级")]),t._v(" "),s("p",[t._v("网站技术日新月异，"),s("strong",[t._v("更新升级")]),t._v("是维护工作之一，长时间不升级的程序，就如长时间不维护的建筑物一样，会加速老化、功能逐渐缺失直至无法使用。")]),t._v(" "),s("p",[t._v("这里注意更新与升级这两词的差异（"),s("a",{attrs:{href:"https://support.websoft9.com/docs/faq/zh/tech-upgrade.html#%E6%9B%B4%E6%96%B0-vs-%E5%8D%87%E7%BA%A7",target:"_blank",rel:"noopener noreferrer"}},[t._v("延伸阅读"),s("OutboundLink")],1),t._v("），例如：")]),t._v(" "),s("ul",[s("li",[t._v("操作系统打个补丁常称之为"),s("strong",[t._v("更新")]),t._v("，Ubuntu16.04 变更为 Ubuntu18.04，称之为"),s("strong",[t._v("升级")])]),t._v(" "),s("li",[t._v("MySQL5.6.25--\x3eMySQL5.6.30 常称之为"),s("strong",[t._v("更新")]),t._v("，MySQL5.6->MySQL5.7 称之为"),s("strong",[t._v("升级")])])]),t._v(" "),s("p",[t._v("Docker 完整的更新升级包括：系统级更新（操作系统和运行环境）和 Docker 程序升级两种类型")]),t._v(" "),s("h2",{attrs:{id:"系统级更新"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#系统级更新"}},[t._v("#")]),t._v(" 系统级更新")]),t._v(" "),s("p",[t._v("运行一条更新命令，即可完成系统级更新：")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#For Ubuntu&Debian")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" update "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" upgrade -y\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#For Centos&Redhat")]),t._v("\nyum update -y\n")])])]),s("blockquote",[s("p",[t._v("本部署包已预配置一个用于自动更新的计划任务。如果希望去掉自动更新，请删除对应的Cron")])]),t._v(" "),s("h2",{attrs:{id:"docker-更新升级"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#docker-更新升级"}},[t._v("#")]),t._v(" Docker 更新升级")]),t._v(" "),s("p",[t._v("上面的命令会同时升级 Docker 程序本体")]),t._v(" "),s("h2",{attrs:{id:"容器升级"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#容器升级"}},[t._v("#")]),t._v(" 容器升级")]),t._v(" "),s("p",[t._v("以正在运行的MySQL容器为例，如果没有持久化卷，容器的升级步骤：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("#更新镜像\ndocker pull mysql\n#停止容器\ndocker stop my-mysql-container\n#删除容器\ndocker rm my-mysql-container\n#重载容器\ndocker run --name=my-mysql-container --restart=always \\\n  -e MYSQL_ROOT_PASSWORD=mypwd -v /my/data/dir:/var/lib/mysql -d mysql\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);