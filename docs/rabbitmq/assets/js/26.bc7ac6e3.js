(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{345:function(t,a,e){"use strict";e.r(a);var v=e(33),s=Object(v.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"参数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参数"}},[t._v("#")]),t._v(" 参数")]),t._v(" "),e("p",[t._v("RabbitMQ 预装包包含 RabbitMQ 运行所需一序列支撑软件（简称为“组件”），下面列出主要组件名称、安装路径、配置文件地址、端口、版本等重要的信息。")]),t._v(" "),e("h2",{attrs:{id:"路径"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#路径"}},[t._v("#")]),t._v(" 路径")]),t._v(" "),e("p",[t._v("虽然运行 "),e("code",[t._v("whereis")]),t._v(" 命令可以查看相关安装路径，但接下来我们仍然对路径信息进行更为准确的说明。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("whereis activemq\nwhereis java\n")])])]),e("h3",{attrs:{id:"rabbitmq"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rabbitmq"}},[t._v("#")]),t._v(" RabbitMQ")]),t._v(" "),e("p",[t._v("RabbitMQ 安装目录： "),e("em",[t._v("/opt/activemq/")]),e("br"),t._v("\nRabbitMQ 配置目录： "),e("em",[t._v("/opt/apache-activemq/conf")]),e("br"),t._v("\nRabbitMQ 数据目录： "),e("em",[t._v("/opt/apache-activemq/data")]),e("br"),t._v("\nRabbitMQ 日志目录： "),e("em",[t._v("/opt/apache-activemq/data/activemq.log")])]),t._v(" "),e("blockquote",[e("p",[t._v("通过修改 "),e("em",[t._v("/opt/apache-activemq/conf/jetty-realm.propertie")]),t._v(" 重置管理密码")])]),t._v(" "),e("h3",{attrs:{id:"java"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#java"}},[t._v("#")]),t._v(" Java")]),t._v(" "),e("p",[t._v("Java Directory: "),e("em",[t._v("/usr/lib/jvm")])]),t._v(" "),e("h2",{attrs:{id:"端口号"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#端口号"}},[t._v("#")]),t._v(" 端口号")]),t._v(" "),e("p",[t._v("在云服务器中，通过 "),e("strong",[e("a",{attrs:{href:"https://support.websoft9.com/docs/faq/zh/tech-instance.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("安全组设置"),e("OutboundLink")],1)]),t._v(" 来控制（开启或关闭）端口是否可以被外部访问。")]),t._v(" "),e("p",[t._v("通过命令"),e("code",[t._v("netstat -tunlp")]),t._v("查看相关端口，下面列出本应用可能要用到的端口：")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("名称")]),t._v(" "),e("th",[t._v("端口号")]),t._v(" "),e("th",[t._v("用途")]),t._v(" "),e("th",[t._v("必要性")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("HTTP")]),t._v(" "),e("td",[t._v("8161")]),t._v(" "),e("td",[t._v("通过 HTTP 访问 RabbitMQ 控制台")]),t._v(" "),e("td",[t._v("可选")])]),t._v(" "),e("tr",[e("td",[t._v("TCP")]),t._v(" "),e("td",[t._v("5672")]),t._v(" "),e("td",[t._v("amqp")]),t._v(" "),e("td",[t._v("可选")])])])]),t._v(" "),e("h2",{attrs:{id:"版本号"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#版本号"}},[t._v("#")]),t._v(" 版本号")]),t._v(" "),e("p",[t._v("组件版本号可以通过云市场商品页面查看。但部署到您的服务器之后，组件会自动进行更新导致版本号有一定的变化，故精准的版本号请通过在服务器上运行命令查看：")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Linux Version")]),t._v("\nlsb_release -a\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Java Version")]),t._v("\njava -version\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# RabbitMQ version")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v(" /opt/apache-activemq "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" activemq\n")])])])])}),[],!1,null,null,null);a.default=s.exports}}]);