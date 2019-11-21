(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{215:function(t,a,r){"use strict";r.r(a);var _=r(0),v=Object(_.a)({},function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"热门问题"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#热门问题","aria-hidden":"true"}},[t._v("#")]),t._v(" 热门问题")]),t._v(" "),r("h2",{attrs:{id:"如何修改网站根目录？"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#如何修改网站根目录？","aria-hidden":"true"}},[t._v("#")]),t._v(" 如何修改网站根目录？")]),t._v(" "),r("p",[t._v("当你部署运行环境镜像后，默认网站目录为："),r("code",[t._v("/data/wwwroot/www.example.com")]),t._v("，也就是一个示例目录。"),r("br"),t._v("\n如果需要修改为其他目录，需要找到对应的虚拟主机配置文件，修改其中的网站路径配置项即可。")]),t._v(" "),r("blockquote",[r("p",[t._v("服务器是可以部署多个网站的，对于服务器来说没有根目录，但对于单个虚拟主机来说，其对应的目录可以称之为“根目录”")])]),t._v(" "),r("h2",{attrs:{id:"配置域名"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#配置域名","aria-hidden":"true"}},[t._v("#")]),t._v(" 配置域名")]),t._v(" "),r("p",[t._v("给网站配上域名访问有两个步骤：")]),t._v(" "),r("ul",[r("li",[t._v("域名解析：域名解析需要通过域名控制台操作")]),t._v(" "),r("li",[t._v("域名绑定：域名绑定需要连接到云服务器，修改虚拟主机配置文件中的域名项")])]),t._v(" "),r("h2",{attrs:{id:"数据库密码是什么？"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#数据库密码是什么？","aria-hidden":"true"}},[t._v("#")]),t._v(" 数据库密码是什么？")]),t._v(" "),r("p",[t._v("数据库的账号密码存储在您的服务器指定文件中："),r("code",[t._v("/credentials/password.txt")]),t._v("  。建议通过云控制台直接连接服务器，进入命令终端，运行 cat 命令获取数据库密码： 运行"),r("code",[t._v("cat")]),t._v("命令\n"),r("img",{attrs:{src:"https://libs.websoft9.com/Websoft9/DocsPicture/zh/common/catdbpassword-websoft9.png",alt:""}})]),t._v(" "),r("p",[t._v("如果你的服务器上没有此文件，数据密码是："),r("code",[t._v("123456")])]),t._v(" "),r("h2",{attrs:{id:"我要人工服务"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#我要人工服务","aria-hidden":"true"}},[t._v("#")]),t._v(" 我要人工服务")]),t._v(" "),r("p",[t._v("如果你在云平台订阅了我们镜像，并为之付费，您可以享受人工服务，马上"),r("a",{attrs:{href:"https://support.websoft9.com/zh/contact.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("联系人工"),r("OutboundLink")],1)]),t._v(" "),r("h2",{attrs:{id:"怎么远程登录"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#怎么远程登录","aria-hidden":"true"}},[t._v("#")]),t._v(" 怎么远程登录")]),t._v(" "),r("p",[t._v("请查阅：本文档的"),r("router-link",{attrs:{to:"/zh/tech-instance.html"}},[t._v("《云服务器操作》")])],1),t._v(" "),r("h2",{attrs:{id:"服务器连不上"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#服务器连不上","aria-hidden":"true"}},[t._v("#")]),t._v(" 服务器连不上")]),t._v(" "),r("p",[t._v("服务器连不上有两个最常见的原因：")]),t._v(" "),r("ul",[r("li",[t._v("安全组端口没有开启（Windows服务器对应的端口是：3389，Linux对应的端口是：22）")]),t._v(" "),r("li",[t._v("服务器无法连接互联网")])]),t._v(" "),r("p",[t._v("如果无法自行解决问题，请联系云厂商的客服")]),t._v(" "),r("h2",{attrs:{id:"我需要镜像的帮助文档"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#我需要镜像的帮助文档","aria-hidden":"true"}},[t._v("#")]),t._v(" 我需要镜像的帮助文档")]),t._v(" "),r("p",[t._v("我们每一个镜像都提供了在线问题，请查看"),r("a",{attrs:{href:"https://support.websoft9.com/zh/alldocs.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("所有文档"),r("OutboundLink")],1)]),t._v(" "),r("h2",{attrs:{id:"ftp-上传文件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ftp-上传文件","aria-hidden":"true"}},[t._v("#")]),t._v(" FTP/上传文件")]),t._v(" "),r("p",[t._v("镜像本身没有安装FTP，但你可以通过更简单的方式管理文件：")]),t._v(" "),r("ul",[r("li",[t._v("Windows服务器：直接远程桌面登录后，通过拷贝和粘贴的方式管理文件")]),t._v(" "),r("li",[t._v("Linux服务器：请使用SFTP模式连接服务器后管理文件")])]),t._v(" "),r("p",[t._v("以上两种方式的具体使用请参考：本文档的"),r("router-link",{attrs:{to:"/zh/tech-instance.html"}},[t._v("《云服务器操作》")])],1),t._v(" "),r("h2",{attrs:{id:"更换镜像"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#更换镜像","aria-hidden":"true"}},[t._v("#")]),t._v(" 更换镜像")]),t._v(" "),r("p",[t._v("阿里云、华为云和腾讯云支持更换镜像的操作"),r("br"),t._v("\nAzure和AWS不支持更换镜像的操作")]),t._v(" "),r("p",[t._v("需要更换镜像，请参考：本文档的"),r("router-link",{attrs:{to:"/zh/tech-instance.html"}},[t._v("《云服务器操作》")])],1),t._v(" "),r("h2",{attrs:{id:"镜像怎么初始化安装"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#镜像怎么初始化安装","aria-hidden":"true"}},[t._v("#")]),t._v(" 镜像怎么初始化安装")]),t._v(" "),r("p",[t._v("当镜像部署到您的服务器后，需要完成一个"),r("code",[t._v("初始化安装")]),t._v("操作，方可使用。\n通过本地浏览器访问：http://服务器公网IP 就可以进入初始化安装向导。如果无法访问，需要开启服务器安全组80端口是开启状态")]),t._v(" "),r("blockquote",[r("p",[t._v("部分镜像的初始化不是通过浏览器访问，而需要登录到服务器中修改配置才能完成")])]),t._v(" "),r("h2",{attrs:{id:"ssl-https证书"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ssl-https证书","aria-hidden":"true"}},[t._v("#")]),t._v(" SSL/HTTPS证书")]),t._v(" "),r("p",[t._v("Websoft9提供的所有镜像，都默认开启了对SSL/HTTPS的支持，无需再修改Web服务器的配置。\n需要安装证书，请参考本文档的: "),r("router-link",{attrs:{to:"/zh/tech-https.html"}},[t._v("HTTPS")]),t._v(" 章节")],1),t._v(" "),r("h2",{attrs:{id:"浏览器访问http-公网ip失败"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#浏览器访问http-公网ip失败","aria-hidden":"true"}},[t._v("#")]),t._v(" 浏览器访问"),r("code",[t._v("http://公网IP")]),t._v("失败")]),t._v(" "),r("p",[t._v("最常见的原因如下：")]),t._v(" "),r("ul",[r("li",[t._v("服务器安全组80端口没有开启")]),t._v(" "),r("li",[t._v("你所安装的镜像不支持此类访问")]),t._v(" "),r("li",[t._v("安装的不是目标镜像")])]),t._v(" "),r("h2",{attrs:{id:"源码存放在哪里？"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#源码存放在哪里？","aria-hidden":"true"}},[t._v("#")]),t._v(" 源码存放在哪里？")]),t._v(" "),r("p",[t._v("大部分镜像的源码都存放在："),r("code",[t._v("/data/wwwroot")])]),t._v(" "),r("h2",{attrs:{id:"数据库无法远程连接"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#数据库无法远程连接","aria-hidden":"true"}},[t._v("#")]),t._v(" 数据库无法远程连接")]),t._v(" "),r("p",[t._v("数据库的远程连接需要具备两个条件：")]),t._v(" "),r("ul",[r("li",[t._v("数据库的设置中，支持远程访问")]),t._v(" "),r("li",[t._v("服务器安全组开启了数据库的远程访问端口（例如：MySQL需要开启3306端口）")])]),t._v(" "),r("p",[t._v("详细设置请参考："),r("a",{attrs:{href:"https://support.websoft9.com/mysql/zh",target:"_blank",rel:"noopener noreferrer"}},[t._v("MySQL文档"),r("OutboundLink")],1)]),t._v(" "),r("h2",{attrs:{id:"网站访问很慢"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#网站访问很慢","aria-hidden":"true"}},[t._v("#")]),t._v(" 网站访问很慢")]),t._v(" "),r("p",[t._v("网站慢最常见的原因包括如下几个方面：")]),t._v(" "),r("ul",[r("li",[t._v("带宽不够")]),t._v(" "),r("li",[t._v("服务器满负荷运转")]),t._v(" "),r("li",[t._v("静态资源多，没有实现动静分离")])]),t._v(" "),r("p",[t._v("我们在大量的客服过程中，发现中国地区的用户对带宽的大小是没有概念的，是模糊乃至错误的认知。")]),t._v(" "),r("p",[t._v("例如：用户选择了一个2M的包年包月带宽，打开一个首页大概为4M的网站，80%的用户认为应该是在2-3s内打开，实际上这种算法和预期是错误的。")]),t._v(" "),r("p",[t._v("一个2M的带宽，下载应该为：2×128k/s，即：256k/s。那么4M页面的下载时间为：4000k/256=15.6s")]),t._v(" "),r("p",[t._v("这个15.6s还没有考虑服务器的计算时间、网络延时时间。")]),t._v(" "),r("p",[t._v("正确的方式是：服务器采用按量付费的带宽，这种情况下带宽大小与费用没有关系，用多少给多少，那么就可以享受100-300M的带宽了。国外的主流云厂商，是没有包年包月带宽这种选项的。")]),t._v(" "),r("p",[t._v("另外针对静态资源较多的情况，我们建议：")]),t._v(" "),r("ol",[r("li",[t._v("采用CDN")]),t._v(" "),r("li",[t._v("网站图片超过1000张，建议放到对象存储中")])]),t._v(" "),r("p",[t._v("以上方案简单可靠，降低服务器资源消耗，实现成本较低，效果好。")])])},[],!1,null,null,null);a.default=v.exports}}]);