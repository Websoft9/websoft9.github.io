(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{272:function(e,t,s){"use strict";s.r(t);var a=s(28),l=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"office-文档预览与编辑"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#office-文档预览与编辑"}},[e._v("#")]),e._v(" Office 文档预览与编辑")]),e._v(" "),s("p",[e._v("Seafile 开源版支持集成 OnlyOffice Document Server 作为 Office 格式的文档预览与编辑，而本部署解决默认已经安装 OnlyOffice Document Server，只需设置即可使用")]),e._v(" "),s("h2",{attrs:{id:"前置条件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前置条件"}},[e._v("#")]),e._v(" 前置条件")]),e._v(" "),s("ol",[s("li",[e._v("在云控制台安全组中，检查 "),s("strong",[e._v("TCP:9003")]),e._v(" 端口是否开启")]),e._v(" "),s("li",[e._v("使用本地电脑浏览器测试文档服务是否可用：打开网址：https://服务器公网IP:9003，会看到 OnlyOffice Document Server 正在运行的提示\n"),s("img",{attrs:{src:"https://libs.websoft9.com/Websoft9/DocsPicture/zh/onlyoffice/onlyoffice-dkisrunning-websoft9.png",alt:""}})])]),e._v(" "),s("h2",{attrs:{id:"配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[e._v("#")]),e._v(" 配置")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("使用 SFTP 连接服务器，编辑 Seafile 配置文件")])]),e._v(" "),s("li",[s("p",[e._v("插入下面的模板")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("# Enable Only Office\nENABLE_ONLYOFFICE = True\nVERIFY_ONLYOFFICE_CERTIFICATE = False\nONLYOFFICE_APIJS_URL = 'https://119.8.39.175:9003/web-apps/apps/api/documents/api.js'\nONLYOFFICE_FILE_EXTENSION = ('doc', 'docx', 'ppt', 'pptx', 'xls', 'xlsx', 'odt', 'fodt', 'odp', 'fodp', 'ods', 'fods')\nONLYOFFICE_EDIT_FILE_EXTENSION = ('docx', 'pptx', 'xlsx')\n")])])]),s("blockquote",[s("p",[e._v("ONLYOFFICE_APIJS_URL 字段中的 IP 地址请更改为你的服务器公网IP地址")])])]),e._v(" "),s("li",[s("p",[e._v("重启 Seafile 容器服务")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("sudo docker restart seafile\n")])])])]),e._v(" "),s("li",[s("p",[e._v("打开 Seafile 控制台，试一试预览或编辑文档")])])])])}),[],!1,null,null,null);t.default=l.exports}}]);