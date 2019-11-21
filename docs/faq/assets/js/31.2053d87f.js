(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{201:function(t,a,r){"use strict";r.r(a);var s=r(0),e=Object(s.a)({},function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"故障速查"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#故障速查","aria-hidden":"true"}},[t._v("#")]),t._v(" 故障速查")]),t._v(" "),r("p",[t._v("下面列出最常见的故障或设置错误导致的问题。")]),t._v(" "),r("h4",{attrs:{id:"sftp无法登录？"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#sftp无法登录？","aria-hidden":"true"}},[t._v("#")]),t._v(" SFTP无法登录？")]),t._v(" "),r("p",[t._v("检查账号和密码是正确，请保证"),r("router-link",{attrs:{to:"/zh/tech-instance.html"}},[t._v("服务器安全组")]),t._v("的22端口是开启的")],1),t._v(" "),r("h4",{attrs:{id:"windows远程桌面连接失败？"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#windows远程桌面连接失败？","aria-hidden":"true"}},[t._v("#")]),t._v(" Windows远程桌面连接失败？")]),t._v(" "),r("p",[t._v("检查账号和密码是正确，请保证"),r("router-link",{attrs:{to:"/zh/tech-instance.html"}},[t._v("服务器安全组")]),t._v("的3389端口是开启的，下图是排查方法"),r("br"),t._v(" "),r("img",{attrs:{src:"http://libs.websoft9.com/Websoft9/DocsPicture/zh/aliyun/aliyun-guzhangpaichu.png",alt:""}})],1),t._v(" "),r("h4",{attrs:{id:"服务器无法重启？"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#服务器无法重启？","aria-hidden":"true"}},[t._v("#")]),t._v(" 服务器无法重启？")]),t._v(" "),r("p",[t._v("请联系云平台官方修复")]),t._v(" "),r("h4",{attrs:{id:"http-公网ip-无法打开软件的初始化界面？"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#http-公网ip-无法打开软件的初始化界面？","aria-hidden":"true"}},[t._v("#")]),t._v(" http://公网IP 无法打开软件的初始化界面？")]),t._v(" "),r("p",[t._v("检查是否安装了所需的软件，请保证"),r("router-link",{attrs:{to:"/zh/tech-instance.html"}},[t._v("服务器安全组")]),t._v("的80端口是开启的")],1),t._v(" "),r("h4",{attrs:{id:"已经替换了默认目录的文件，仍然指向websoft9演示页面？"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#已经替换了默认目录的文件，仍然指向websoft9演示页面？","aria-hidden":"true"}},[t._v("#")]),t._v(" 已经替换了默认目录的文件，仍然指向Websoft9演示页面？")]),t._v(" "),r("p",[t._v("请清空浏览器缓存 或 换一个浏览器测试")]),t._v(" "),r("h4",{attrs:{id:"域名解析迟迟没有生效？"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#域名解析迟迟没有生效？","aria-hidden":"true"}},[t._v("#")]),t._v(" 域名解析迟迟没有生效？")]),t._v(" "),r("p",[t._v("解析生效之后，本地访问可能由于缓存问题导致仍然没有生效，请清空浏览器缓存和DNS缓存")]),t._v(" "),r("h4",{attrs:{id:"phpmyadmin-出现-error-during-session-错误？"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#phpmyadmin-出现-error-during-session-错误？","aria-hidden":"true"}},[t._v("#")]),t._v(" phpMyAdmin 出现 Error during session...错误？")]),t._v(" "),r("p",[t._v("错误原因：PHP 的 session.save_path 路径目录的权限设置不正确。\n解决方案：打开WinSCP，运行如下命令即可")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("chown -R root:nginx /var/lib/php/session\necho 'chown nginx. -R /var/lib/php' >> /etc/cron.daily/0yum-daily.cron\n")])])]),r("h4",{attrs:{id:"nginx出现502错误"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#nginx出现502错误","aria-hidden":"true"}},[t._v("#")]),t._v(" Nginx出现502错误")]),t._v(" "),r("p",[t._v("Nginx应用服务器出现502错误的原因很多，但是基本都是资源不够造成的。 包括：内存不足，CPU超标，硬盘满了，另外可能也有程序导致php-fpm停止运行。对应的的解决办法：")]),t._v(" "),r("ul",[r("li",[t._v("内存和CPU超标，通过重启一下php-fpm 和nginx mysql 三个服务可以临时解决，如果是1核1g的配置且经常出现502错误的话，建议升级")]),t._v(" "),r("li",[t._v("硬盘满了的话，会导致MySQL停止服务，需要进行硬盘扩容")]),t._v(" "),r("li",[t._v("php-fpm服务停止或者报错也会出现502，需要重启php-fpm")])]),t._v(" "),r("h4",{attrs:{id:"网站速度很慢？"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#网站速度很慢？","aria-hidden":"true"}},[t._v("#")]),t._v(" 网站速度很慢？")]),t._v(" "),r("p",[t._v("带宽不足以及服务器满负荷运转是最常见的原因")]),t._v(" "),r("h4",{attrs:{id:"连接sftp，出现disconnected-publickey"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#连接sftp，出现disconnected-publickey","aria-hidden":"true"}},[t._v("#")]),t._v(" 连接SFTP，出现Disconnected...publickey")]),t._v(" "),r("p",[t._v("错误原因：选用的是密钥对作为（与root账号密码有区别）登录凭证，而密钥对如果每日有下载到本地是无法在WinSCP等工具中直接使用的")]),t._v(" "),r("p",[t._v("解决方案：设置WinSCP为秘钥对登录 或 云控制台更改登录凭证方式")])])},[],!1,null,null,null);a.default=e.exports}}]);