(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{194:function(t,a,e){"use strict";e.r(a);var r=e(0),s=Object(r.a)({},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"更多"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#更多","aria-hidden":"true"}},[t._v("#")]),t._v(" 更多...")]),t._v(" "),e("p",[t._v("下面每一个方案，都经过实践证明行之有效，希望能够对你有帮助")]),t._v(" "),e("h2",{attrs:{id:"域名绑定"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#域名绑定","aria-hidden":"true"}},[t._v("#")]),t._v(" 域名绑定")]),t._v(" "),e("p",[t._v("当服务器上只有一个网站时，不做域名绑定也可以访问网站。但从安全和维护考量，"),e("strong",[t._v("域名绑定")]),t._v("不可省却。")]),t._v(" "),e("p",[t._v("以示例网站为例，域名绑定操作步骤如下：")]),t._v(" "),e("ol",[e("li",[t._v("确保域名解析已经生效")]),t._v(" "),e("li",[t._v("使用 WinSCP 等工具登录云服务器")]),t._v(" "),e("li",[t._v("修改 "),e("router-link",{attrs:{to:"/zh/stack-components.html#apache"}},[t._v("Apache虚拟机主机配置文件")]),t._v("，将其中的 "),e("strong",[t._v("ServerName")]),t._v(" 项的值修改为你的域名"),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('<VirtualHost *:80>\nServerName www.mydomain.com # 此处修改为你的域名\nDocumentRoot "/data/wwwroot/mysite2"\n...\n')])])])],1),t._v(" "),e("li",[t._v("保存配置文件，重启 "),e("router-link",{attrs:{to:"/zh/admin-services.html#apache"}},[t._v("Apache 服务")])],1)]),t._v(" "),e("h2",{attrs:{id:"使用-apache-伪静态"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用-apache-伪静态","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用 Apache 伪静态")]),t._v(" "),e("p",[t._v("使用 Apache 伪静态有三个步骤：")]),t._v(" "),e("ol",[e("li",[t._v("打开 "),e("router-link",{attrs:{to:"/zh/stack-components.html#apache"}},[t._v("Apache模块配置文件")]),t._v("，检查 Rewrite 模块是否启用（LAMP 环境默认已经开启 Rewirte）")],1),t._v(" "),e("li",[t._v("保证 "),e("router-link",{attrs:{to:"/zh/stack-components.html#apache"}},[t._v("Apache 虚拟主机配置文件")]),t._v("中 VirtualHost 配置段中增加 AllowOverride All")],1),t._v(" "),e("li",[t._v("给需要使用伪静态的网站的根目录中增加.htaccess文件，并在其中配置伪静态规则")])]),t._v(" "),e("h2",{attrs:{id:"重置-mysql-密码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#重置-mysql-密码","aria-hidden":"true"}},[t._v("#")]),t._v(" 重置 MySQL 密码")]),t._v(" "),e("ol",[e("li",[t._v("远程连接到服务器，")]),t._v(" "),e("li",[t._v("运行一下命令，按提示输入新密码即可"),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("sudo git clone https://github.com/Websoft9/linux.git; cd linux/Mysql_ResetPasswd_Script;sudo sh reset_mysql_password.sh\n")])])])])]),t._v(" "),e("h2",{attrs:{id:"修改-php-ini"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#修改-php-ini","aria-hidden":"true"}},[t._v("#")]),t._v(" 修改 php.ini")]),t._v(" "),e("p",[t._v("在使用PHP网站的时候，你可能会碰到需要修改：上传文件大小、内存限制等参数。这个时候，就需要通过修改 "),e("code",[t._v("php.ini")]),t._v(" 来实现")]),t._v(" "),e("ol",[e("li",[t._v("使用 SFTP 工具修改 "),e("em",[t._v("/etc/php.ini")])])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("# File upload limit\npost_max_size = 16M\nupload_max_filesize = 16M\n\n# Max Execution Time\nmax_execution_time = 90\n\n# Memory Limit\nmemory_limit – Minimum: 256M\n")])])]),e("ol",{attrs:{start:"2"}},[e("li",[t._v("保存并重启 "),e("router-link",{attrs:{to:"/zh/admin-services.html#apache"}},[t._v("Apache 服务")])],1)]),t._v(" "),e("h2",{attrs:{id:"php版本变更"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#php版本变更","aria-hidden":"true"}},[t._v("#")]),t._v(" PHP版本变更")]),t._v(" "),e("p",[t._v("请参考 "),e("a",{attrs:{href:"https://support.websoft9.com/docs/linux/zh/lang-php.html#%E7%89%88%E6%9C%AC%E5%8D%87%E7%BA%A7",target:"_blank",rel:"noopener noreferrer"}},[t._v("《PHP版本管理专题》"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"php安装扩展"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#php安装扩展","aria-hidden":"true"}},[t._v("#")]),t._v(" PHP安装扩展")]),t._v(" "),e("p",[t._v("请参考 "),e("a",{attrs:{href:"https://support.websoft9.com/docs/linux/zh/lang-php.html#%E6%89%A9%E5%B1%95",target:"_blank",rel:"noopener noreferrer"}},[t._v("《PHP扩展管理专题》"),e("OutboundLink")],1)])])},[],!1,null,null,null);a.default=s.exports}}]);