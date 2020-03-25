(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{272:function(t,e,a){"use strict";a.r(e);var o=a(28),s=Object(o.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"更多"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更多"}},[t._v("#")]),t._v(" 更多...")]),t._v(" "),a("p",[t._v("下面每一个方案，都经过实践证明行之有效，希望能够对你有帮助")]),t._v(" "),a("h2",{attrs:{id:"域名绑定"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#域名绑定"}},[t._v("#")]),t._v(" 域名绑定")]),t._v(" "),a("p",[t._v("绑定域名的前置条件是：已经完成域名解析（登录域名控制台，增加一个A记录指向服务器公网IP）")]),t._v(" "),a("p",[t._v("完成域名解析后，从服务器安全和后续维护考量，需要完成"),a("strong",[t._v("域名绑定")]),t._v("：")]),t._v(" "),a("p",[t._v("Nextcloud 域名绑定操作步骤：")]),t._v(" "),a("ol",[a("li",[t._v("使用 SFTP 工具登录云服务器")]),t._v(" "),a("li",[t._v("修改 "),a("RouterLink",{attrs:{to:"/zh/stack-components.html#apache"}},[t._v("虚拟机主机配置文件")]),t._v("，将其中的域名相关的值"),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('#### Nextcloud(LAMP) bind domain #### \n\n  <VirtualHost *:80>\n  ServerName  www.mydomain.com # 修改成您的实际域名\n  DocumentRoot "/data/wwwroot/nextcloud"\n  ...\n  \n#### Nextcloud(LNMP) bind domain #### \n\n  server {\n   listen 80;\n   server_name nextcloud.example.com; # 修改成您的实际域名\n  ...\n\n')])])])],1),t._v(" "),a("li",[t._v("保存配置文件，"),a("RouterLink",{attrs:{to:"/zh/admin-services.html#apache"}},[t._v("重启服务")])],1)]),t._v(" "),a("h2",{attrs:{id:"nextcloud-更换域名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nextcloud-更换域名"}},[t._v("#")]),t._v(" Nextcloud 更换域名")]),t._v(" "),a("p",[t._v("如果 Nextcloud 需要更换域名，具体操作如下：")]),t._v(" "),a("ol",[a("li",[t._v("完成新的域名解析和域名绑定")]),t._v(" "),a("li",[t._v("修改 "),a("RouterLink",{attrs:{to:"/zh/stack-components.html#nextcloud"}},[t._v("Nextcloud 配置文件")]),t._v("中的域名值"),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("'overwrite.cli.url' => 'nextcloud.yourdomain.com', # 修改为新域名\n")])])])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/zh/admin-services.html#php-fpm"}},[t._v("重启 PHP-FPM 服务")]),t._v("后生效")],1)]),t._v(" "),a("h2",{attrs:{id:"nextcloud-设置语言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nextcloud-设置语言"}},[t._v("#")]),t._v(" Nextcloud 设置语言")]),t._v(" "),a("p",[t._v("登录 Nextcloud，在后台 【个人】>【个人信息】中设置语言")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://libs.websoft9.com/Websoft9/DocsPicture/zh/nextcloud/nextcloud-mylanguage-websoft9.png",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"nextcloud-安装扩展"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nextcloud-安装扩展"}},[t._v("#")]),t._v(" Nextcloud 安装扩展")]),t._v(" "),a("p",[t._v("Nextcloud 后台集成了 "),a("a",{attrs:{href:"https://apps.nextcloud.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("Marketplace"),a("OutboundLink")],1),t._v(" 大量的扩展（也叫apps），下面介绍如何安装它们")]),t._v(" "),a("ol",[a("li",[t._v("登录 Nextcloud，在后台 【应用】>【应用软件包】中寻找所需的应用\n"),a("img",{attrs:{src:"https://libs.websoft9.com/Websoft9/DocsPicture/zh/nextcloud/nextcloud-backendmk-websoft9.png",alt:""}})]),t._v(" "),a("li",[t._v("在线安装它")])]),t._v(" "),a("h2",{attrs:{id:"nextcloud-集成-ldap"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nextcloud-集成-ldap"}},[t._v("#")]),t._v(" Nextcloud 集成 LDAP")]),t._v(" "),a("p",[t._v("当企业网盘与多个人使用的时候，用户需要与内部域控集成，以保证用户可以通过Windows账号集成。")]),t._v(" "),a("p",[t._v("Nextcloud提供了 LDAP 集成工具，具体参考官方方案："),a("em",[a("a",{attrs:{href:"https://docs.nextcloud.com/server/latest/admin_manual/configuration_user/user_auth_ldap.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("User Authentication with LDAP"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"nextcloud-命令行工具-occ"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nextcloud-命令行工具-occ"}},[t._v("#")]),t._v(" Nextcloud 命令行工具-OCC")]),t._v(" "),a("p",[t._v("OCC命令是 Nextcloud 的命令行界面。您可以使用OCC执行许多常见的服务器操作，例如安装和升级 Nextcloud，管理用户，加密，密码，LDAP设置等。")]),t._v(" "),a("h2",{attrs:{id:"nextcloud-连接外部存储"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nextcloud-连接外部存储"}},[t._v("#")]),t._v(" Nextcloud 连接外部存储")]),t._v(" "),a("p",[t._v("Nextcloud 支持多种流行的企业存储服务，具体使用步骤如下：")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("登录 Nextcloud 后台，安装 "),a("strong",[t._v("External storage support")]),t._v(" 扩展\n"),a("img",{attrs:{src:"https://libs.websoft9.com/Websoft9/DocsPicture/zh/nextcloud/nextcloud-enablestorage-websoft9.png",alt:""}})])]),t._v(" "),a("li",[a("p",[t._v("打开：【Admin】>【Add storage】>【External Storage】，选择一个外部存储服务\n"),a("img",{attrs:{src:"https://libs.websoft9.com/Websoft9/DocsPicture/zh/nextcloud/nextcloud-enablestorage002-websoft9.png",alt:""}})])]),t._v(" "),a("li",[a("p",[t._v("根据实际情况进行设置\n"),a("img",{attrs:{src:"https://libs.websoft9.com/Websoft9/DocsPicture/zh/nextcloud/nextcloud-auth_mechanism-websoft9.png",alt:""}})])])]),t._v(" "),a("p",[t._v("更多详情参考官方文档："),a("a",{attrs:{href:"https://docs.nextcloud.com/server/latest/admin_manual/configuration_files/external_storage_configuration_gui.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("External Storage"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"nextcloud-数据转移"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nextcloud-数据转移"}},[t._v("#")]),t._v(" Nextcloud 数据转移")]),t._v(" "),a("p",[t._v("Nextcloud 的程序和数据文件默认均存在系统盘，你要转移到数据盘（或对象存储），步骤如下：")]),t._v(" "),a("h3",{attrs:{id:"转移到数据盘"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#转移到数据盘"}},[t._v("#")]),t._v(" 转移到数据盘")]),t._v(" "),a("ol",[a("li",[t._v("在服务器所在的云平台上购买数据盘，并"),a("strong",[t._v("挂载")]),t._v("到 Nextcloud 服务器")]),t._v(" "),a("li",[t._v("使用 SFTP 工具连接服务器，停止服务"),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("systemctl stop httpd\n")])])])]),t._v(" "),a("li",[t._v("新建一个 "),a("em",[t._v("/data/wwwroot/nextcloud2")]),t._v(" 文件夹")]),t._v(" "),a("li",[t._v("初始化数据盘，并将数据盘 "),a("strong",[t._v("mount")]),t._v(" 到新建的 "),a("em",[t._v("nextcloud2")]),t._v(" 文件夹")]),t._v(" "),a("li",[t._v("将 "),a("em",[t._v("/data/wwwroot/nextcloud")]),t._v(" 下的数据全部拷贝到 "),a("em",[t._v("/data/wwwroot/nextcloud2")])]),t._v(" "),a("li",[t._v("修改 Nextcloud "),a("RouterLink",{attrs:{to:"/zh/stack-components.html#apache"}},[t._v("虚拟主机配置文件")]),t._v(" 的路径")],1),t._v(" "),a("li",[t._v("启动服务后生效"),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("systemctl start httpd\n")])])])])]),t._v(" "),a("h3",{attrs:{id:"转移到对象存储"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#转移到对象存储"}},[t._v("#")]),t._v(" 转移到对象存储")]),t._v(" "),a("ol",[a("li",[t._v("在服务器所在的云平台上购买对象存储，新建一个 "),a("strong",[t._v("bucket")])]),t._v(" "),a("li",[t._v("使用 SFTP 工具连接服务器，停止服务"),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("systemctl stop httpd\n")])])])]),t._v(" "),a("li",[t._v("新建一个 "),a("em",[t._v("/data/wwwroot/nextcloud2")]),t._v(" 文件夹")]),t._v(" "),a("li",[t._v("将对象存储的 bucket "),a("strong",[t._v("mount")]),t._v(" 到新建的 "),a("em",[t._v("nextcloud2")]),t._v(" 文件夹")]),t._v(" "),a("li",[t._v("将 "),a("em",[t._v("/data/wwwroot/nextcloud")]),t._v(" 下的数据全部拷贝到 "),a("em",[t._v("/data/wwwroot/nextcloud2")])]),t._v(" "),a("li",[t._v("修改 Nextcloud "),a("RouterLink",{attrs:{to:"/zh/stack-components.html#apache"}},[t._v("虚拟主机配置文件")]),t._v(" 的路径")],1),t._v(" "),a("li",[t._v("启动服务后生效"),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("systemctl start httpd\n")])])])]),t._v(" "),a("li",[t._v("设置对象存储开机自动挂载（不同云平台操作不同）")])]),t._v(" "),a("blockquote",[a("p",[t._v("以上两种数据转移方案中，"),a("strong",[t._v("mount")]),t._v(" 操作对新手来说是几乎是不可能独立完成的任务。另外，如果转移的数据超过10G，会存在拷贝失败的风险")])]),t._v(" "),a("h2",{attrs:{id:"nextcloud-文件预览与编辑"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nextcloud-文件预览与编辑"}},[t._v("#")]),t._v(" Nextcloud 文件预览与编辑")]),t._v(" "),a("p",[t._v("Nextcloud 自身是不能对 Office 文件进行预览或编辑的，需要集成外部的 Office 文档编辑和预览服务才可以具备这样的功能。")]),t._v(" "),a("p",[t._v("Websoft9 提供的 Nextcloud 部署包内置了 OnlyOffice Document Server(Docker版) ，此软件可以用于给 Nextcloud 提供文档预览与编辑服务，具体设置步骤如下：")]),t._v(" "),a("ol",[a("li",[t._v("开启服务器安全组的 9003 端口")]),t._v(" "),a("li",[t._v("登录到 Nextcloud ，单击左上角齿轮图标，点击【应用】\n"),a("img",{attrs:{src:"https://libs.websoft9.com/Websoft9/DocsPicture/zh/nextcloud/nextcloud-olpreview-1-websoft9.png",alt:""}})]),t._v(" "),a("li",[t._v("找到【ONLYOFFICE】插件，安装它")]),t._v(" "),a("li",[t._v("安装完成后，找到"),a("strong",[t._v("设置")]),t._v("页面，对 ONLYOFFICE 进行如图所示的设置（"),a("a",{attrs:{href:"https://api.onlyoffice.com/editors/nextcloud",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考官方文档"),a("OutboundLink")],1),t._v("）\n"),a("img",{attrs:{src:"https://libs.websoft9.com/Websoft9/DocsPicture/zh/nextcloud/nextcloud-setonlyoffice-websoft9.png",alt:""}}),t._v(" "),a("blockquote",[a("p",[t._v("图中涂抹处应修改为"),a("strong",[t._v("服务器公网IP")])])])]),t._v(" "),a("li",[t._v("返回到首页，刷新或重新登录，然后单击 Office 文件即可在线预览和编辑。")])]),t._v(" "),a("h2",{attrs:{id:"使用移动端"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用移动端"}},[t._v("#")]),t._v(" 使用移动端")]),t._v(" "),a("p",[t._v("Nextcloud 支持移动端，使用步骤如下：")]),t._v(" "),a("ol",[a("li",[a("a",{attrs:{href:"https://nextcloud.com/install",target:"_blank",rel:"noopener noreferrer"}},[t._v("下载"),a("OutboundLink")],1),t._v("移动端")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://docs.nextcloud.com/android/",target:"_blank",rel:"noopener noreferrer"}},[t._v("设置"),a("OutboundLink")],1),t._v("移动端到服务器的连接")])])])}),[],!1,null,null,null);e.default=s.exports}}]);