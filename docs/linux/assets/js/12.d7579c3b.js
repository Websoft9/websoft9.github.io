(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{331:function(t,e,s){"use strict";s.r(e);var a=s(33),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"最佳实践"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#最佳实践"}},[t._v("#")]),t._v(" 最佳实践")]),t._v(" "),s("h2",{attrs:{id:"如何连接linux？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何连接linux？"}},[t._v("#")]),t._v(" 如何连接Linux？")]),t._v(" "),s("p",[t._v("最常见的方式是使用SSH工具连接Linux，SSH工具包括：Putty,Xshell,WinSCP等")]),t._v(" "),s("p",[t._v("如果使用云服务器，云厂商一般都会提供在线的SSH工具")]),t._v(" "),s("h2",{attrs:{id:"如何安装ftp？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何安装ftp？"}},[t._v("#")]),t._v(" 如何安装FTP？")]),t._v(" "),s("p",[t._v("安装FTP是比较繁琐的工作，具体参考："),s("RouterLink",{attrs:{to:"/zh/admin-file.html#ftp"}},[t._v("FTP相关章节")])],1),t._v(" "),s("h2",{attrs:{id:"如何初始化数据磁盘？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何初始化数据磁盘？"}},[t._v("#")]),t._v(" 如何初始化数据磁盘？")]),t._v(" "),s("p",[t._v("初始化数据磁盘主要分为三个步骤：")]),t._v(" "),s("ul",[s("li",[t._v("磁盘分区")]),t._v(" "),s("li",[t._v("磁盘初始化")]),t._v(" "),s("li",[t._v("磁盘挂载")])]),t._v(" "),s("h2",{attrs:{id:"如何写一个系统服务？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何写一个系统服务？"}},[t._v("#")]),t._v(" 如何写一个系统服务？")]),t._v(" "),s("p",[t._v("服务(service) 本质就是进程，运行在后台，通常都会监听某个端口，等待其它程序的请求，比如(mysql , sshd 防火墙等)，因此我们又称为守护进程，是 Linux 中非常重要的知识点。")]),t._v(" "),s("p",[t._v("一般通过下面的格式来管理服务：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("systemctl    服务名 [start | stop | restart | reload | status]\n")])])]),s("p",[t._v("那服务是如何创建的呢？以 Websoft9 提供的 Redmine 自动化项目为例，下面描述完整的服务创建过程：")]),t._v(" "),s("ol",[s("li",[t._v("编辑好"),s("a",{attrs:{href:"https://github.com/Websoft9/ansible-redmine/blob/master/roles/redmine/files/redmine.service",target:"_blank",rel:"noopener noreferrer"}},[t._v("redmine.service"),s("OutboundLink")],1),t._v("文件"),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("[Unit]\nDescription=Redmine\nAfter=nginx.service\n[Service]\nEnvironment=RAILS_ENV=production\nType=simple\nWorkingDirectory=/data/wwwroot/redmine\nExecStart=/usr/local/bin/puma -b tcp://127.0.0.1:9292 -e production \nUser=redmine\n[Install]\nWantedBy=multi-user.target\n")])])])]),t._v(" "),s("li",[t._v("将服务文件放入路径："),s("em",[t._v("/etc/systemd/system")]),t._v(" 下")]),t._v(" "),s("li",[t._v("启动并设置开机启动")]),t._v(" "),s("li",[t._v("测试服务的可用性\n···\nsystemctl restart redmine\nsystemctl stop redmine\n···")])]),t._v(" "),s("h2",{attrs:{id:"如何设置计划任务？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何设置计划任务？"}},[t._v("#")]),t._v(" 如何设置计划任务？")]),t._v(" "),s("p",[t._v("Cron是一个Linux下的定时执行工具，可以在无需人工干预的情况下定时地运行任务task。")]),t._v(" "),s("ol",[s("li",[t._v("安装Crontab"),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("yum install vixie-cron\nyum install crontabs\n")])])])]),t._v(" "),s("li",[t._v("编写计划任务脚本：我们推荐一个在线的"),s("a",{attrs:{href:"https://crontab-generator.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Crontab生成器"),s("OutboundLink")],1),t._v("，帮助不熟悉语法的用户简化脚本的编写"),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('4 * * * * echo "hello" >/dev/null 2>&1\n')])])])]),t._v(" "),s("li",[t._v("将脚本插入Cron配置文件："),s("em",[t._v("/etc/crontab")])])]),t._v(" "),s("h2",{attrs:{id:"如何安装图形化桌面"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何安装图形化桌面"}},[t._v("#")]),t._v(" 如何安装图形化桌面")]),t._v(" "),s("p",[t._v("下面针对不同Linux家族，提供安装桌面的命令")]),t._v(" "),s("h3",{attrs:{id:"centos-oracle"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#centos-oracle"}},[t._v("#")]),t._v(" CentOS/Oracle")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('yum groupinstall -y "GNOME Desktop" \nsystemctl set-default graphical.target\nsystemctl set-default graphical.target\n')])])]),s("h3",{attrs:{id:"oraclelinux"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#oraclelinux"}},[t._v("#")]),t._v(" OracleLinux")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("安装,使用root用户执行")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("yum groupinstall -y "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Server with GUI'")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果这一步骤有错误,先执行 yum update 更新系统")]),t._v("\nyum "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -y tigervnc-server tigervnc-server-module\n")])])])]),t._v(" "),s("li",[s("p",[t._v("配置桌面")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("systemctl set-default graphical.target\nsystemctl isolate graphical.target\nsystemctl get-default\n")])])])])]),t._v(" "),s("h3",{attrs:{id:"ubuntu"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu"}},[t._v("#")]),t._v(" Ubuntu")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("待完善\n")])])]),s("h2",{attrs:{id:"如何安装vnc-server"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何安装vnc-server"}},[t._v("#")]),t._v(" 如何安装VNC Server")]),t._v(" "),s("h3",{attrs:{id:"centos-oracle-linux"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#centos-oracle-linux"}},[t._v("#")]),t._v(" Centos/Oracle Linux")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("安装VNC")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("yum "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -y tigervnc-server tigervnc-server-module\n")])])])]),t._v(" "),s("li",[s("p",[t._v("配置桌面")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("# vnc 设置密码\nvncserver \n\n# 配置文件\ncat > /etc/systemd/system/vncserver@:1.service << EOF\n[Unit]\nDescription=Remote desktop service (VNC)\nAfter=syslog.target network.target\n\n[Service]\nType=forking\n\nExecStartPre=/bin/sh -c '/usr/bin/vncserver -kill %i > /dev/null 2>&1 || :'\nExecStart=/usr/sbin/runuser -l root -c \"/usr/bin/vncserver %i\"\nPIDFile=/root/.vnc/%H%i.pid\nExecStop=/bin/sh -c '/usr/bin/vncserver -kill %i > /dev/null 2>&1 || :'\n\n[Install]\nWantedBy=multi-user.target\nEOF\n\n# 启动VNC\nsystemctl enable vncserver@:1.service\nsystemctl start vncserver@:1.service\n")])])])])]),t._v(" "),s("h2",{attrs:{id:"如何实现自动交互应答？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何实现自动交互应答？"}},[t._v("#")]),t._v(" 如何实现自动交互应答？")]),t._v(" "),s("p",[t._v("Linux 系统中，通过安装 expect 扩展，来实现自动交互应答")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("yum install expect -y\n")])])]),s("p",[t._v("下面是一个 expect 使用范例：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('#! /usr/bin/expect\nset timeout 2  # 演示2秒\nspawn /mnt/ask.sh  #开始 ask.sh 文件的交互式问答\nexpect "name?" #应对包含 name? 的问题\nsend "tom\\r" #回答问题\nexpect "old?" #应对包含 old? 的问题\nsend "18\\r"#回答问题\nexpect eof #结束\n')])])]),s("h2",{attrs:{id:"推荐可视化面板工具？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#推荐可视化面板工具？"}},[t._v("#")]),t._v(" 推荐可视化面板工具？")]),t._v(" "),s("p",[t._v("Linux命令行操作功能强大的同时，也让一些用户望而生畏。Linux面板工具可以通过Web页面，对服务器进行可视化操作，降低Linux使用门槛。")]),t._v(" "),s("h3",{attrs:{id:"cockpit"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cockpit"}},[t._v("#")]),t._v(" Cockpit")]),t._v(" "),s("p",[t._v("Cockpit 是一个基于 Web 的服务器管理工具，可用于 CentOS 和 RHEL 系统。最近发布的 CentOS 8 和 RHEL 8，其中 cockpit 是默认的服务器管理工具。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://libs.websoft9.com/Websoft9/DocsPicture/en/cockpit/cockpit-gui-websoft9.png",alt:""}})]),t._v(" "),s("h3",{attrs:{id:"webmin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#webmin"}},[t._v("#")]),t._v(" Webmin")]),t._v(" "),s("p",[t._v("Webmin是一款开源免费的Web面板，可以对Linux进行深度操作。")]),t._v(" "),s("p",[t._v("登录方式："),s("em",[t._v("http://公网IP地址:10000")]),t._v(" ，登录账号为服务器账号（root/服务器密码）")]),t._v(" "),s("p",[t._v("更多参考"),s("a",{attrs:{href:"https://libs.websoft9.com/Websoft9/documents/zh/webmin/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("详细文档"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"本地电脑访问服务器上的firefox"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#本地电脑访问服务器上的firefox"}},[t._v("#")]),t._v(" 本地电脑访问服务器上的Firefox")]),t._v(" "),s("ol",[s("li",[t._v("本地电脑下载"),s("a",{attrs:{href:"https://mobaxterm.mobatek.net/",target:"_blank",rel:"noopener noreferrer"}},[t._v("MobaXterm"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("使用SSH登录到服务器后，分别安装如下组件"),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('yum groupinstall "X Window System" -y\nyum install dbus-x11 -y\nyum install firefox -y\n')])])])]),t._v(" "),s("li",[t._v("开启一个与 SSH客户端配套的 X11 Windows 客户端")]),t._v(" "),s("li",[t._v("在SSH中输入命令 "),s("code",[t._v("firefox")]),t._v(" "),s("img",{attrs:{src:"https://libs.websoft9.com/Websoft9/DocsPicture/zh/linux/linux-xwindows-websoft9.JPG",alt:""}})]),t._v(" "),s("li",[t._v("此时Firefox的图形化界面就被传输到本地\n"),s("img",{attrs:{src:"https://libs.websoft9.com/Websoft9/DocsPicture/zh/linux/linux-xwindowsfirefox-websoft9.JPG",alt:""}})])])])}),[],!1,null,null,null);e.default=r.exports}}]);