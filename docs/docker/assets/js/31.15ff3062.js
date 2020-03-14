(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{230:function(r,t,e){"use strict";e.r(t);var a=e(28),o=Object(a.a)({},(function(){var r=this,t=r.$createElement,e=r._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[e("h1",{attrs:{id:"初始化安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#初始化安装"}},[r._v("#")]),r._v(" 初始化安装")]),r._v(" "),e("p",[r._v("在云服务器上部署 Docker 预装包之后，请参考下面的步骤快速入门。")]),r._v(" "),e("h2",{attrs:{id:"准备"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#准备"}},[r._v("#")]),r._v(" 准备")]),r._v(" "),e("ol",[e("li",[r._v("在云控制台获取您的 "),e("strong",[r._v("服务器公网IP地址")])]),r._v(" "),e("li",[r._v("如果使用 Portainer，请在云控制台安全组中，检查 "),e("strong",[r._v("Inbound（入）规则")]),r._v(" 下的 "),e("strong",[r._v("TCP:9000")]),r._v(" 端口是否开启")])]),r._v(" "),e("h2",{attrs:{id:"docker-初始化向导"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker-初始化向导"}},[r._v("#")]),r._v(" Docker 初始化向导")]),r._v(" "),e("h3",{attrs:{id:"检测-docker-安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#检测-docker-安装"}},[r._v("#")]),r._v(" 检测 Docker 安装")]),r._v(" "),e("ol",[e("li",[r._v("使用 SSH 连接服务器，运行下面的命令，查看 Docker 的安装信息和运行状态"),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[r._v("sudo docker info\nsudo systemctl status docker\n")])])])]),r._v(" "),e("li",[r._v('运行服务状态查询命令，Docker 正常运行会得到 " Active: active (running)... " 的反馈')])]),r._v(" "),e("h3",{attrs:{id:"登录-portainer"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#登录-portainer"}},[r._v("#")]),r._v(" 登录 Portainer")]),r._v(" "),e("p",[r._v("如果部署了 Portainer，请参考如下的初始化步骤：")]),r._v(" "),e("ol",[e("li",[e("p",[r._v("通过本地浏览器访问："),e("em",[r._v("http://服务器公网IP:9000")]),r._v("， 直接进入 Portainer 界面\n"),e("img",{attrs:{src:"http://libs.websoft9.com/Websoft9/DocsPicture/zh/docker/portainer/portainer-login-websoft9.png",alt:""}})])]),r._v(" "),e("li",[e("p",[r._v("设置管理员账号密码，点击【Create user】")])]),r._v(" "),e("li",[e("p",[r._v("选择【Local】作为镜像连接选项，然后点击【Connect】\n"),e("img",{attrs:{src:"http://libs.websoft9.com/Websoft9/DocsPicture/zh/docker/portainer/portainer-loginconnect-websoft9.png",alt:""}})])]),r._v(" "),e("li",[e("p",[r._v("进入Portainer后台管理界面，点击Local项目就可以开始使用Portainer\n"),e("img",{attrs:{src:"http://libs.websoft9.com/Websoft9/DocsPicture/zh/docker/portainer/portainer-bkselect-websoft9.png",alt:""}})])]),r._v(" "),e("li",[e("p",[r._v("通过 Portainer 查看运行容器，你会发现 Portainer 本身也是运行在容器中的\n"),e("img",{attrs:{src:"http://libs.websoft9.com/Websoft9/DocsPicture/zh/docker/portainer/portainer-pcontainer-websoft9.png",alt:""}})])])]),r._v(" "),e("blockquote",[e("p",[r._v("需要了解更多 Docker 的使用，请参考官方文档："),e("a",{attrs:{href:"https://docs.docker.com/",target:"_blank",rel:"noopener noreferrer"}},[r._v("Docker Documentation"),e("OutboundLink")],1)])]),r._v(" "),e("h2",{attrs:{id:"常见问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常见问题"}},[r._v("#")]),r._v(" 常见问题")]),r._v(" "),e("h4",{attrs:{id:"浏览器无法访问-portainer（白屏没有结果）？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#浏览器无法访问-portainer（白屏没有结果）？"}},[r._v("#")]),r._v(" 浏览器无法访问 Portainer（白屏没有结果）？")]),r._v(" "),e("p",[r._v("您的服务器对应的安全组9000端口没有开启（入规则），导致浏览器无法它")]),r._v(" "),e("h4",{attrs:{id:"portainer是如何安装的？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#portainer是如何安装的？"}},[r._v("#")]),r._v(" Portainer是如何安装的？")]),r._v(" "),e("p",[r._v("Portainer 自身也是采用Docker安装")]),r._v(" "),e("h4",{attrs:{id:"如果我用的部署包中没有portainer，如何安装它？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如果我用的部署包中没有portainer，如何安装它？"}},[r._v("#")]),r._v(" 如果我用的部署包中没有Portainer，如何安装它？")]),r._v(" "),e("p",[r._v("可以将服务器当前镜像更换为Portainer镜像，也可以在当前镜像的基础通过命令安装")]),r._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[r._v("#通过命令安装 Portainer\n\ndocker volume create portainer_data\ndocker run -d -p 9000:9000 -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer\ncd /usr/libexec/docker/\nsudo ln -s docker-runc-current docker-runc\n")])])])])}),[],!1,null,null,null);t.default=o.exports}}]);