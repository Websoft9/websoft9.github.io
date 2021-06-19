(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{348:function(t,a,e){"use strict";e.r(a);var s=e(33),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"nginx"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nginx"}},[t._v("#")]),t._v(" Nginx")]),t._v(" "),e("p",[e("a",{attrs:{href:"http://nginx.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Nginx"),e("OutboundLink")],1),t._v('("engine x")是一款是由俄罗斯的程序设计师Igor Sysoev所开发高性能的Web和反向代理服务器，具有优异的静态资源处理能力，同时也是一个 IMAP/POP3/SMTP 代理服务器。在高连接并发的情况下，Nginx是Apache服务器不错的替代品。')]),t._v(" "),e("p",[e("img",{attrs:{src:"https://libs.websoft9.com/Websoft9/DocsPicture/zh/nginx/nginx-architecture-websoft9.png",alt:""}})]),t._v(" "),e("p",[t._v("本章所提及的Nginx，具体是指NGINX Open Source（即Nginx开源Web服务器）。实际上：")]),t._v(" "),e("p",[t._v("Nginx公司还有企业级的商业产品：")]),t._v(" "),e("ul",[e("li",[t._v("NGINX Plus")]),t._v(" "),e("li",[t._v("NGINX Controller")]),t._v(" "),e("li",[t._v("NGINX Unit")]),t._v(" "),e("li",[t._v("NGINX Amplify")]),t._v(" "),e("li",[t._v("NGINX WAF")])]),t._v(" "),e("p",[t._v("同时基于Nginx的著名开源项目包括：")]),t._v(" "),e("ul",[e("li",[t._v("Tengine：由淘宝网发起的Web服务器项目。它在Nginx的基础上，针对大访问量网站的需求，添加了很多高级功能和特性。")]),t._v(" "),e("li",[t._v("OpenResty：一个基于 Nginx 与 Lua 的高性能 Web 平台，其内部集成了大量精良的 Lua 库、第三方模块以及大多数的依赖项。用于方便地搭建能够处理超高并发、扩展性极高的动态 Web 应用、Web 服务和动态网关。")])]),t._v(" "),e("h2",{attrs:{id:"安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),e("p",[t._v("安装Nginx有在线包安装和源码编译安装两种方式。其中在线安装通常称之为 yum/apt 安装，而源码安装即需要下载源码然后进行编译后方可使用。")]),t._v(" "),e("p",[t._v("相比源码编译安装来说，在线安装非常简单，下面是在线安装的范例：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("# Fedora/CentOS/Red Hat\nsudo yum install nginx\nsudo systemctl enable nginx\nsudo systemctl start nginx\n\n# Ubuntu/Debian\nsudo apt install nginx\nsudo service nginx start\n")])])]),e("h2",{attrs:{id:"命令和服务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#命令和服务"}},[t._v("#")]),t._v(" 命令和服务")]),t._v(" "),e("h3",{attrs:{id:"命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#命令"}},[t._v("#")]),t._v(" 命令")]),t._v(" "),e("p",[t._v("安装完成之后，系统生成一个可以运行的Nginx命令，它提供几个可选参数：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("-c <path_to_config>：使用指定的配置文件而不是 conf 目录下的 nginx.conf 。\n\n-t：测试配置文件是否正确，在运行时需要重新加载配置的时候，此命令非常重要，用来检测所修改的配置文件是否有语法错误。\n\n-v：显示 nginx 版本号。\n\n-V：显示 nginx 的版本号以及编译环境信息以及编译时的参数。\n")])])]),e("h3",{attrs:{id:"服务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#服务"}},[t._v("#")]),t._v(" 服务")]),t._v(" "),e("p",[t._v("在不同的操作系统下，Nginx对应的服务启停如下：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("#CentOS or Redhat\nsystemctl start httpd\nsystemctl stop httpd\nsystemctl restart httpd\nsystemctl status httpd\n\n# Ubutnu\nsystemctl start apache2\nsystemctl stop apache2\nsystemctl restart apache2\nsystemctl status apache2\n")])])]),e("h2",{attrs:{id:"模块"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#模块"}},[t._v("#")]),t._v(" 模块")]),t._v(" "),e("p",[t._v("Nginx 采用模块化设计机制，各个模块协作共同完成处理任务。主要模块分类：")]),t._v(" "),e("ul",[e("li",[t._v("核心模块：核心模块是指Nginx服务器正常运行时必不可少的模块，它们提供了Nginx最基本最核心的服务，如进程管理、权限控制、错误日志记录等")]),t._v(" "),e("li",[t._v("标准HTTP模块：编译Nginx后包含的模块，其支持Nginx服务器的标准HTTP功能。")]),t._v(" "),e("li",[t._v("可选HTTP模块：主要用于扩展标准的HTTP功能，使其能够处理一些特殊的HTTP请求。在编译Nginx时，如果不指定这些模块，默认是不会安装的。")]),t._v(" "),e("li",[t._v("邮件模块：主要用于支持Ningx的邮件服务。")]),t._v(" "),e("li",[t._v("第三方模块：由第三方机构或者个人开发的模块，用于实现某种特殊功能。")])]),t._v(" "),e("p",[e("img",{attrs:{src:"https://libs.websoft9.com/Websoft9/DocsPicture/zh/nginx/nginx-modules-websoft9.png",alt:""}})]),t._v(" "),e("p",[t._v("安装模块之前，先查看当前已安装的所有模块，然后再决定是否安装，最后将已安装模块启用或停止。")]),t._v(" "),e("p",[t._v("更多模块机制参考博客："),e("a",{attrs:{href:"https://www.cnblogs.com/zy09/p/10273399.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Nginx 模块及运行机制"),e("OutboundLink")],1)]),t._v(" "),e("h3",{attrs:{id:"查看"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看"}},[t._v("#")]),t._v(" 查看")]),t._v(" "),e("p",[t._v("通过 "),e("code",[t._v("nginx -V")]),t._v(" 命令可以查看已经安装的所有Nginx模块。")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("~"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# nginx -V")]),t._v("\nnginx version: nginx/1.12.2\nbuilt by gcc "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("4.8")]),t._v(".5 "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("20150623")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Red Hat "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("4.8")]),t._v(".5-16"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("GCC"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nbuilt with OpenSSL "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),t._v(".2k-fips  "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("26")]),t._v(" Jan "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2017")]),t._v("\nTLS SNI support enabled\nconfigure arguments: \n--prefix"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/usr/share/nginx --sbin-path"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/usr/sbin/nginx --modules-path"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/usr/lib64/nginx/modules --conf-path"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/etc/nginx/nginx.conf --error-log-path"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/var/log/nginx/error.log --http-log-path"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/var/log/nginx/access.log --http-client-body-temp-path"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/var/lib/nginx/tmp/client_body --http-proxy-temp-path"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/var/lib/nginx/tmp/proxy --http-fastcgi-temp-path"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/var/lib/nginx/tmp/fastcgi --http-uwsgi-temp-path"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/var/lib/nginx/tmp/uwsgi --http-scgi-temp-path"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/var/lib/nginx/tmp/scgi --pid-path"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/run/nginx.pid --lock-path"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/run/lock/subsys/nginx --user"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("nginx --group"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("nginx --with-file-aio --with-ipv6 --with-http_auth_request_module --with-http_ssl_module --with-http_v2_module --with-http_realip_module --with-http_addition_module --with-http_xslt_module"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("dynamic --with-http_image_filter_module"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("dynamic --with-http_geoip_module"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("dynamic --with-http_sub_module --with-http_dav_module --with-http_flv_module --with-http_mp4_module --with-http_gunzip_module --with-http_gzip_static_module --with-http_random_index_module --with-http_secure_link_module --with-http_degradation_module --with-http_slice_module --with-http_stub_status_module --with-http_perl_module"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("dynamic --with-mail"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("dynamic --with-mail_ssl_module --with-pcre --with-pcre-jit --with-stream"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("dynamic --with-stream_ssl_module --with-google_perftools_module --with-debug --with-cc-opt"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'-O2 -g -pipe -Wall -Wp,-D_FORTIFY_SOURCE=2 -fexceptions -fstack-protector-strong --param=ssp-buffer-size=4 -grecord-gcc-switches -specs=/usr/lib/rpm/redhat/redhat-hardened-cc1 -m64 -mtune=generic'")]),t._v(" --with-ld-opt"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'-Wl,-z,relro -specs=/usr/lib/rpm/redhat/redhat-hardened-ld -Wl,-E'")]),t._v("\n")])])]),e("h3",{attrs:{id:"安装-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装-2"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),e("h3",{attrs:{id:"启停"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#启停"}},[t._v("#")]),t._v(" 启停")]),t._v(" "),e("h2",{attrs:{id:"路径"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#路径"}},[t._v("#")]),t._v(" 路径")]),t._v(" "),e("p",[t._v("不同的Linux发行版，对应的安装路径有一定的差异：")]),t._v(" "),e("h3",{attrs:{id:"centos"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#centos"}},[t._v("#")]),t._v(" CentOS")]),t._v(" "),e("p",[t._v("Nginx 虚拟主机配置文件："),e("em",[t._v("/etc/nginx/conf.d/default.conf")]),e("br"),t._v("\nNginx 主配置文件： "),e("em",[t._v("/etc/nginx/nginx.conf")]),e("br"),t._v("\nNginx 日志文件： "),e("em",[t._v("/var/log/nginx")]),e("br"),t._v("\nNginx 伪静态规则目录： "),e("em",[t._v("/etc/nginx/conf.d/rewrite")])]),t._v(" "),e("h3",{attrs:{id:"ubuntu"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu"}},[t._v("#")]),t._v(" Ubuntu")]),t._v(" "),e("p",[t._v("Nginx 虚拟主机配置文件："),e("em",[t._v("/etc/nginx/sites-available/default")]),e("br"),t._v("\nNginx 主配置文件："),e("em",[t._v("/etc/nginx/nginx.conf")]),e("br"),t._v("\nNginx 日志文件："),e("em",[t._v("/var/log/nginx/")])]),t._v(" "),e("h2",{attrs:{id:"性能管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#性能管理"}},[t._v("#")]),t._v(" 性能管理")]),t._v(" "),e("p",[t._v("以下内容参考："),e("a",{attrs:{href:"https://www.cnblogs.com/yyxianren/p/12106362.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("《nginx性能优化 汇总篇》"),e("OutboundLink")],1),t._v(" 和"),e("a",{attrs:{href:"https://www.ibm.com/developerworks/cn/web/wa-lo-nginx/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("《使用 Nginx 提升网站访问速度》"),e("OutboundLink")],1)]),t._v(" "),e("h3",{attrs:{id:"进程模型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#进程模型"}},[t._v("#")]),t._v(" 进程模型")]),t._v(" "),e("p",[t._v("NGINX有一个主进程（master process）（执行特权操作，如读取配置、绑定端口）和一系列工作进程（worker process）和辅助进程（helper process）。\n"),e("img",{attrs:{src:"https://libs.websoft9.com/Websoft9/DocsPicture/zh/nginx/nginx-processes-websoft9.png",alt:""}})]),t._v(" "),e("p",[t._v("Nginx运行工作进程个数一般设置CPU的核心或者核心数x2。下面是一台2核CPU服务器的Nginx相关进程查看，有1个主进程，2个子进程，还有一个辅助进程。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("[root@nginx]# ps -ef --forest | grep nginx\nroot       747     1  0 11:48 ?        00:00:00 nginx: master process /usr/sbin/nginx\nnginx      752   747  0 11:48 ?        00:00:00  \\_ nginx: worker process\nnginx      753   747  0 11:48 ?        00:00:00  \\_ nginx: worker process\nroot      1756  1708  0 17:04 pts/0    00:00:00          \\_ grep --color=auto nginx\n")])])]),e("p",[e("img",{attrs:{src:"https://libs.websoft9.com/Websoft9/DocsPicture/zh/nginx/nginx-processmaster-websoft9.jpg",alt:""}})]),t._v(" "),e("p",[t._v("通过信号对 Nginx 进行控制")]),t._v(" "),e("h3",{attrs:{id:"io多路复用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#io多路复用"}},[t._v("#")]),t._v(" IO多路复用")]),t._v(" "),e("p",[t._v("一般情况下并发处理机制有三种：多进程、多线程，与异步机制。Nginx对于并发的处理同时采用了三种机制。Nginx的进程分为两类：master进程与worker进程。每个master进程可以生成多个worker进程，所以其是多进程的。每个worker进程可以同时处理多个用户请求，每个用户请求会由一个线程来处理，所以其是多线程的")]),t._v(" "),e("p",[t._v("对于操作系统而言，IO多路复用就是要完成操作系统IO的请求。对于IO文件的请求，当一个IO流要进行文件处理的时候，要获取一组文件的描述符，当文件描述符还没有就绪时，那么它就在等待，直到描述符一旦就绪，马上上报系统通知的机制，告诉应用程序我准备就绪，你可以来操作了。这就是IO多路复用的方式。")]),t._v(" "),e("p",[t._v("worker进程采用的就是epoll多路复用机制来对后端服务器进行处理的。当后端服务器返回结果后，后端服务器就会回调epoll多路复用器，由多路复用器对相应的worker进程进行通知。此时，worker进程就会挂起当前正在处理的事务，拿IO返回结果去响应客户端请求。响应完毕后，会再继续执行挂起的事务。这个过程就是“异步非阻塞”的。")]),t._v(" "),e("h3",{attrs:{id:"最大打开文件数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#最大打开文件数"}},[t._v("#")]),t._v(" 最大打开文件数")]),t._v(" "),e("p",[t._v("这个指令是指当一个Nginx进程打开的最多文件描述符数目，理论值应该是最多打开文件数（ulimit -n）与nginx进程数相除，但是nginx分配请求并不是那么均匀，所以最好与ulimit -n的值保持一致。")]),t._v(" "),e("p",[t._v("注：文件资源限制的配置可以在/etc/security/limits.conf设置，针对root/user等各个用户或者*代表所有用户来设置。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("*   soft nofile   65535\n*   hard nofile   65535\n")])])]),e("h3",{attrs:{id:"压缩"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#压缩"}},[t._v("#")]),t._v(" 压缩")]),t._v(" "),e("p",[t._v("使用gzip压缩功能，可能为我们节约带宽，加快传输速度，有更好的体验，也为我们节约成本，所以说这是一个重点。Nginx启用压缩功能需要你来ngx_http_gzip_module模块，apache使用的是mod_deflate。")]),t._v(" "),e("p",[t._v("一般我们需要压缩的内容有：文本，js，html，css，对于图片，视频，flash什么的不压缩。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("gzip on;\ngzip_min_length 2k;\ngzip_buffers   4 32k;\ngzip_http_version 1.1;\ngzip_comp_level 6;\ngzip_typestext/plain text/css text/javascriptapplication/json application/javascript application/x-javascriptapplication/xml;\ngzip_vary on;\ngzip_proxied any;\ngzip on;\n")])])]),e("h2",{attrs:{id:"配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),e("p",[t._v("先来看一个实际的配置文件：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('user  nobody;# 工作进程的属主\nworker_processes  4;# 工作进程数，一般与 CPU 核数等同\n \n#error_log  logs/error.log; \n#error_log  logs/error.log  notice; \n#error_log  logs/error.log  info; \n \n#pid        logs/nginx.pid; \n \nevents { \n   use epoll;#Linux 下性能最好的 event 模式\n   worker_connections  2048;# 每个工作进程允许最大的同时连接数\n} \n \nhttp { \n   include       mime.types; \n   default_type  application/octet-stream; \n \n   #log_format  main  \'$remote_addr - $remote_user [$time_local] $request \' \n   #                  \'"$status" $body_bytes_sent "$http_referer" \' \n   #                  \'"$http_user_agent" "$http_x_forwarded_for"\'; \n \n   #access_log  off; \n   access_log  logs/access.log;# 日志文件名\n \n   sendfile        on; \n   #tcp_nopush     on; \n   tcp_nodelay     on; \n \n   keepalive_timeout  65; \n \n   include      gzip.conf; \n    \n   # 集群中的所有后台服务器的配置信息\n   upstream tomcats { \n    server 192.168.0.11:8080 weight=10; \n    server 192.168.0.11:8081 weight=10; \n    server 192.168.0.12:8080 weight=10; \n    server 192.168.0.12:8081 weight=10; \n    server 192.168.0.13:8080 weight=10; \n    server 192.168.0.13:8081 weight=10; \n   } \n \n   server { \n       listen       80;#HTTP 的端口\n       server_name  localhost; \n \n       charset utf-8; \n \n       #access_log  logs/host.access.log  main; \n \n    location ~ ^/NginxStatus/ { \n       stub_status on; #Nginx 状态监控配置\n       access_log off; \n    } \n \n    location ~ ^/(WEB-INF)/ { \n       deny all; \n    } \n    \n \n    location ~ \\.(htm|html|asp|php|gif|jpg|jpeg|png|bmp|ico|rar|css|js|\n    zip|java|jar|txt|flv|swf|mid|doc|ppt|xls|pdf|txt|mp3|wma)$ { \n            root /opt/webapp; \n       expires 24h; \n       } \n \n       location / { \n       proxy_pass http://tomcats;# 反向代理\n       include proxy.conf; \n       } \n \n       error_page 404 /html/404.html; \n \n       # redirect server error pages to the static page /50x.html \n       # \n    error_page 502 503 /html/502.html; \n       error_page 500 504 /50x.html; \n       location = /50x.html { \n           root   html; \n       } \n   } \n}\n')])])]),e("h3",{attrs:{id:"nginx-监控"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nginx-监控"}},[t._v("#")]),t._v(" Nginx 监控")]),t._v(" "),e("p",[t._v("上面是一个实际网站的配置实例，其中灰色文字为配置说明。上述配置中，首先我们定义了一个 location ~ ^/NginxStatus/，这样通过 http://localhost/NginxStatus/ 就可以监控到 Nginx 的运行信息，显示的内容如下：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("Active connections: 70 \nserver accepts handled requests\n 14553819 14553819 19239266 \nReading: 0 Writing: 3 Waiting: 67\n")])])]),e("p",[t._v("NginxStatus 显示的内容意思如下：")]),t._v(" "),e("ul",[e("li",[t._v("active connections – 当前 Nginx 正处理的活动连接数。")]),t._v(" "),e("li",[t._v("server accepts handled requests -- 总共处理了 14553819 个连接 , 成功创建 14553819 次握手 ( 证明中间没有失败的 ), 总共处理了 19239266 个请求 ( 平均每次握手处理了 1.3 个数据请求 )。")]),t._v(" "),e("li",[t._v("reading -- nginx 读取到客户端的 Header 信息数。")]),t._v(" "),e("li",[t._v("writing -- nginx 返回给客户端的 Header 信息数。")]),t._v(" "),e("li",[t._v("waiting -- 开启 keep-alive 的情况下，这个值等于 active - (reading + writing)，意思就是 Nginx 已经处理完正在等候下一次请求指令的驻留连接。")])]),t._v(" "),e("h3",{attrs:{id:"静态文件处理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#静态文件处理"}},[t._v("#")]),t._v(" 静态文件处理")]),t._v(" "),e("p",[t._v("通过正则表达式，我们可让 Nginx 识别出各种静态文件，例如 images 路径下的所有请求可以写为：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("location ~ ^/images/ {\nroot /opt/webapp/images;\n}\n")])])]),e("p",[t._v("而下面的配置则定义了几种文件类型的请求处理方式。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("location ~ \\.(htm|html|gif|jpg|jpeg|png|bmp|ico|css|js|txt)$ {\nroot /opt/webapp;\nexpires 24h;\n}\n")])])]),e("p",[t._v("对于例如图片、静态 HTML 文件、js 脚本文件和 css 样式文件等，我们希望 Nginx 直接处理并返回给浏览器，这样可以大大的加快网页浏览时的速度。因此对于这类文件我们需要通过 root 指令来指定文件的存放路径，同时因为这类文件并不常修改，通过 "),e("code",[t._v("expires")]),t._v(" 指令来控制其在浏览器的缓存，以减少不必要的请求。 "),e("code",[t._v("expires")]),t._v(" 指令可以控制 HTTP 应答中的“ Expires ”和“ Cache-Control ”的头标（起到控制页面缓存的作用）。您可以使用例如以下的格式来书写 Expires：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("expires 1 January, 1970, 00:00:01 GMT;\nexpires 60s;\nexpires 30m;\nexpires 24h;\nexpires 1d;\nexpires max;\nexpires off;\n")])])]),e("h3",{attrs:{id:"动态页面请求处理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#动态页面请求处理"}},[t._v("#")]),t._v(" 动态页面请求处理")]),t._v(" "),e("p",[t._v("Nginx 本身并不支持现在流行的 JSP、ASP、PHP、PERL 等动态页面，但是它可以通过反向代理将请求发送到后端的服务器，例如 Tomcat、Apache、IIS 等来完成动态页面的请求处理。前面的配置示例中，我们首先定义了由 Nginx 直接处理的一些静态文件请求后，其他所有的请求通过 proxy_pass 指令传送给后端的服务器（在上述例子中是 Tomcat）。最简单的 "),e("code",[t._v("proxy_pass")]),t._v(" 用法如下：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("location / {\nproxy_pass    http://localhost:8080;\nproxy_set_header X-Real-IP $remote_addr;\n}\n")])])]),e("p",[t._v("这里我们没有使用到集群，而是将请求直接送到运行在 8080 端口的 Tomcat 服务上来完成类似 JSP 和 Servlet 的请求处理。")]),t._v(" "),e("p",[t._v("当页面的访问量非常大的时候，往往需要多个应用服务器来共同承担动态页面的执行操作，这时我们就需要使用集群的架构。 Nginx 通过 "),e("code",[t._v("upstream")]),t._v(" 指令来定义一个服务器的集群，最前面那个完整的例子中我们定义了一个名为 tomcats 的集群，这个集群中包括了三台服务器共 6 个 Tomcat 服务。而 proxy_pass 指令的写法变成了：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("location / {\nproxy_pass    http://tomcats;\nproxy_set_header X-Real-IP $remote_addr;}\n")])])]),e("p",[t._v("在 Nginx 的集群配置中，Nginx 使用最简单的平均分配规则给集群中的每个节点分配请求。一旦某个节点失效时，或者重新起效时，Nginx 都会非常及时的处理状态的变化，以保证不会影响到用户的访问。")]),t._v(" "),e("h2",{attrs:{id:"伪静态"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#伪静态"}},[t._v("#")]),t._v(" 伪静态")]),t._v(" "),e("h3",{attrs:{id:"基本设置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基本设置"}},[t._v("#")]),t._v(" 基本设置")]),t._v(" "),e("p",[t._v("使用伪静态有三个步骤：")]),t._v(" "),e("ol",[e("li",[t._v("确保已经安装Rewrite模块。")]),t._v(" "),e("li",[t._v("在服务器目录 "),e("em",[t._v("/etc/nginx/conf.d/rewrite")]),t._v(" 下新建你网站的伪静态规则文件（例如：wordpress.conf）")]),t._v(" "),e("li",[t._v("在网站的"),e("RouterLink",{attrs:{to:"/zh/stack-components.html#nginx"}},[t._v("虚拟主机配置段")]),t._v(" "),e("strong",[t._v("server{ }")]),t._v(" 中将伪静态规则文件 include 进来"),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("server\n{\nlisten 80;\nserver_name mysite2.yourdomain.com;  # 此处修改为你的域名\nindex index.html index.htm index.php;\nroot  /data/wwwroot/mysite2;\n...\n\n## Includes one of your Rewrite rules if you need, examples\ninclude conf.d/rewrite/wordpress.conf;  # 引入你的伪静态规则\n}\n")])])])],1)]),t._v(" "),e("h3",{attrs:{id:"场景"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#场景"}},[t._v("#")]),t._v(" 场景")]),t._v(" "),e("p",[t._v("伪静态的常见场景包括：重定向、隐藏页面后缀名、.htaccess文件使用")]),t._v(" "),e("h2",{attrs:{id:"virtualhost配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#virtualhost配置"}},[t._v("#")]),t._v(" VirtualHost配置")]),t._v(" "),e("p",[t._v("Nginx中的虚拟主机是通过server{ } 进行配置的。")]),t._v(" "),e("p",[t._v("server{ } 改动务必准确无误，任何错误的修改都会导致服务器上所有的网站不可访问")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("server 项")]),t._v(" "),e("th",[t._v("作用说明")]),t._v(" "),e("th",[t._v("必要性")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("server_name")]),t._v(" "),e("td",[t._v("域名，如果配置两个域名需以空格分开")]),t._v(" "),e("td",[t._v("必须填写")])]),t._v(" "),e("tr",[e("td",[t._v("root")]),t._v(" "),e("td",[t._v("网站存放目录")]),t._v(" "),e("td",[t._v("务必准确无误")])]),t._v(" "),e("tr",[e("td",[t._v("error_log")]),t._v(" "),e("td",[t._v("错误日志路径，系统会根据定义的路径产生相关日志文件")]),t._v(" "),e("td",[t._v("可以不填或删除")])]),t._v(" "),e("tr",[e("td",[t._v("access_log")]),t._v(" "),e("td",[t._v("访问日志路径，系统会根据定义的路径产生相关日志文件")]),t._v(" "),e("td",[t._v("可以不填或删除")])]),t._v(" "),e("tr",[e("td",[t._v("ssl_certificate")]),t._v(" "),e("td",[t._v("HTTPS 证书路径")]),t._v(" "),e("td",[t._v("设置 HTTPS 访问时必填")])]),t._v(" "),e("tr",[e("td",[t._v("ssl_certificate_key")]),t._v(" "),e("td",[t._v("HTTPS 证书秘钥路径")]),t._v(" "),e("td",[t._v("设置 HTTPS 访问时必填")])])])]),t._v(" "),e("h3",{attrs:{id:"http-virtualhost-template"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#http-virtualhost-template"}},[t._v("#")]),t._v(" HTTP VirtualHost template")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("server\n       {\n        listen 80;\n        server_name mysite2.yourdomain.com;\n        index index.html index.htm index.php;\n        root  /data/wwwroot/mysite2;\n        error_log /var/log/nginx/mysite2.yourdomain.com-error.log crit;\n        access_log  /var/log/nginx/mysite2.yourdomain.com-access.log;\n        include conf.d/extra/*.conf;\n\n        ## Includes one of your Rewrite rules if you need, examples\n        # include conf.d/rewrite/wordpress.conf;\n        # include conf.d/rewrite/joomla.conf;\n        }\n")])])]),e("h3",{attrs:{id:"alias-template"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#alias-template"}},[t._v("#")]),t._v(" Alias template")]),t._v(" "),e("p",[t._v("请将下面 Alias 模板插入到 default.conf 中已存在的 server{} 段中，并修改其中的 location,alias")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("  ```\n  location /mysite2\n  {\n   alias /data/wwwroot/mysite2;\n   index index.php index.html;\n   location ~ ^/mysite2/.+\\.php$ {\n    alias /data/wwwroot/mysite2;\n    fastcgi_pass  unix:/dev/shm/php-fpm-default.sock;\n    fastcgi_index  index.php;\n    fastcgi_param  SCRIPT_FILENAME /data/wwwroot/$fastcgi_script_name;\n    include        fastcgi_params; }\n  include conf.d/extra/*.conf;\n  }\n  ```\n  ![](https://libs.websoft9.com/Websoft9/DocsPicture/en/lnmp/lnmp-insertalias-websoft9.png)\n\n  注意：Alias 模板只能插入到 server{} 配置段中\n")])])]),e("h3",{attrs:{id:"https-virtualhost-template"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#https-virtualhost-template"}},[t._v("#")]),t._v(" HTTPS VirtualHost template")]),t._v(" "),e("p",[t._v("HTTPS 配置项 到对应的 HTTP server{ } 段落中")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("#-----HTTPS template start------------\nlisten 443 ssl; \nssl_certificate /data/cert/xxx.crt;\nssl_certificate_key /data/cert/xxx.key;\nssl_session_timeout 5m;\nssl_protocols TLSv1 TLSv1.1 TLSv1.2;\nssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE;\nssl_prefer_server_ciphers on;\n#-----HTTPS template end------------\n")])])]),e("h3",{attrs:{id:"特殊场景"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#特殊场景"}},[t._v("#")]),t._v(" 特殊场景")]),t._v(" "),e("p",[t._v("虚拟主机配置的更多特殊场景包括：默认首页名称顺序、禁用IP访问,防止恶意解析等")]),t._v(" "),e("h2",{attrs:{id:"代理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#代理"}},[t._v("#")]),t._v(" 代理")]),t._v(" "),e("p",[t._v("Proxy_pass反向代理，用的是nginx的Proxy模块。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("第一种：\nlocation /proxy/ {\n    proxy_pass http://127.0.0.1/;\n}\n代理到URL：http://127.0.0.1/test.html\n\n\n第二种：\nlocation /proxy/ {\n    proxy_pass http://127.0.0.1;  #少/\n}\n代理到URL：http://127.0.0.1/proxy/test.html\n\n\n第三种：\nlocation /proxy/ {\n    proxy_pass http://127.0.0.1/aaa/;\n}\n代理到URL：http://127.0.0.1/aaa/test.html\n\n\n第四种（相对于第三种，最后少一个 / ）\nlocation /proxy/ {\n    proxy_pass http://127.0.0.1/aaa;\n}\n代理到URL：http://127.0.0.1/aaatest.html\n")])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("- proxy_set_header  Host  $host;  作用web服务器上有多个站点时，用该参数header来区分反向代理哪个域名。比如下边的代码举例。\n- proxy_set_header X-Forwarded-For  $remote_addr; 作用是后端服务器上的程序获取访客真实IP，从该header头获取。部分程序需要该功能。\n")])])]),e("h2",{attrs:{id:"负载均衡"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#负载均衡"}},[t._v("#")]),t._v(" 负载均衡")]),t._v(" "),e("p",[t._v("本节来源于：https://www.jianshu.com/p/10ecc107b5ee")]),t._v(" "),e("p",[t._v("Proxy_pass配合upstream实现负载均衡。")]),t._v(" "),e("p",[t._v("Nginx负载均衡的几种模式：")]),t._v(" "),e("ul",[e("li",[t._v("轮询：每个请求按时间顺序逐一分配到不同的后端服务器，如果后端服务器down掉，就不在分配；")]),t._v(" "),e("li",[t._v("权重轮询：根据后端服务器性能不通配置轮询的权重比，权重越高访问的比重越高；")]),t._v(" "),e("li",[t._v("IP_Hash：根据请求的ip地址hash结果进行分配，第一次分配到A服务器，后面再请求默认还是分配到A服务器；可以解决Session失效重新登录问题；")]),t._v(" "),e("li",[t._v("Fair：按后端服务器的响应时间来分配请求，响应时间短的优先分配；")]),t._v(" "),e("li",[t._v("Url_hash：按访问url的hash结果来分配请求，使每个url定向到同一个后端服务器，后端服务器为缓存时比较有效；")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("http {\n    include       mime.types;\n    default_type  application/octet-stream;\n    sendfile        on;\n \n    upstream core_tomcat {\n      server 192.168.1.253:80      weight=5  max_fails=3 fail_timeout=30;\n      server 192.168.1.252:80      weight=1  max_fails=3 fail_timeout=30;\n      server 192.168.1.251:80      backup;\n    }\n\n    server {\n        listen       80;\n        server_name  www.jd.com;\n        location /web {\n            proxy_pass http://core_tomcat;\n            proxy_set_header  Host  $host;\n        }\n    }\n }\n")])])]),e("h2",{attrs:{id:"日志"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#日志"}},[t._v("#")]),t._v(" 日志")]),t._v(" "),e("p",[t._v("Nginx日志对于统计、系统服务排错很有用。Nginx日志主要分为两种：access_log(访问日志)和error_log(错误日志)。通过访问日志我们可以得到用户的IP地址、浏览器的信息，请求的处理时间等信息。错误日志记录了访问出错的信息，可以帮助我们定位错误的原因。本文将详细描述一下如何配置Nginx日志。")]),t._v(" "),e("p",[t._v("以下内容来源于：https://blog.csdn.net/biubiuli/article/details/79481882")]),t._v(" "),e("h3",{attrs:{id:"访问日志"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#访问日志"}},[t._v("#")]),t._v(" 访问日志")]),t._v(" "),e("p",[t._v("访问日志主要记录客户端的请求。客户端向Nginx服务器发起的每一次请求都记录在这里。客户端IP，浏览器信息，referer，请求处理时间，请求URL等都可以在访问日志中得到。当然具体要记录哪些信息，你可以通过log_format指令定义。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("access_log path [format [buffer=size] [gzip[=level]] [flush=time] [if=condition]]; # 设置访问日志\naccess_log off; # 关闭访问日志\n\n")])])]),e("ol",[e("li",[t._v("path 指定日志的存放位置。")]),t._v(" "),e("li",[t._v("format 指定日志的格式。默认使用预定义的combined。")]),t._v(" "),e("li",[t._v("buffer 用来指定日志写入时的缓存大小。默认是64k。")]),t._v(" "),e("li",[t._v("gzip 日志写入前先进行压缩。压缩率可以指定，从1到9数值越大压缩比越高，同时压缩的速度也越慢。默认是1。")]),t._v(" "),e("li",[t._v("flush 设置缓存的有效时间。如果超过flush指定的时间，缓存中的内容将被清空。")]),t._v(" "),e("li",[t._v("if 条件判断。如果指定的条件计算为0或空字符串，那么该请求不会写入日志。")])]),t._v(" "),e("p",[t._v("可以应用access_log指令的作用域分别有http，server，location，limit_except。也就是说，在这几个作用域外使用该指令，Nginx会报错。")]),t._v(" "),e("h3",{attrs:{id:"错误日志"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#错误日志"}},[t._v("#")]),t._v(" 错误日志")]),t._v(" "),e("p",[t._v("错误日志的形式如下：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('10.1.1.1 - - [22/Aug/2014:16:48:14 +0800] "POST /ajax/MbpRequest.do HTTP/1.1" 200 367 "-" "Dalvik/1.6.0 (Linux; U; Android 4.1.1; ARMM7K Build/JRO03H)" "119.189.56.175" 127.0.0.1:8090 0.022 0.022 \n10.1.1.1 - - [22/Aug/2014:16:48:19 +0800] "POST /ajax/MbpRequest.do HTTP/1.1" 200 616 "-" "Dalvik/1.6.0 (Linux; U; Android 4.0.4; GT-I9103 Build/IMM76D)" "36.250.89.22" 127.0.0.1:8090 0.036 0.036 \n')])])]),e("ol",[e("li",[t._v("客户端（用户）IP地址。如：上例中的 10.1.1.1 (内网负载均衡地址)")]),t._v(" "),e("li",[t._v("访问时间。如：上例中的 [22/Aug/2014:16:48:19 +0800]")]),t._v(" "),e("li",[t._v("访问端口。如：上例中的 127.0.0.1:8080")]),t._v(" "),e("li",[t._v("响应时间。如：上例中的 0.022")]),t._v(" "),e("li",[t._v("请求时间。如：上例中的 0.022")]),t._v(" "),e("li",[t._v("用户地理位置代码（国家代码）。")]),t._v(" "),e("li",[t._v("请求的url地址（目标url地址）的host。如：上例中的 /....")]),t._v(" "),e("li",[t._v("请求方式（GET或者POST等）。如：上例中的 GET")]),t._v(" "),e("li",[t._v("请求url地址（去除host部分）。如：上例中的 /html/test.html")]),t._v(" "),e("li",[t._v('请求状态（状态码，200表示成功，404表示页面不存在，301表示永久重定向等，具体状态码可以在网上找相关文章，不再赘述）。如：上例中的 "200"')]),t._v(" "),e("li",[t._v("请求页面大小，默认为B（byte）。如：上例中的 2426")]),t._v(" "),e("li",[t._v('来源页面，即从哪个页面转到本页，专业名称叫做“referer”。如：上例中的 "http://a.com"')]),t._v(" "),e("li",[t._v('用户浏览器语言。如：上例中的 "es-ES,es;q=0.8"')]),t._v(" "),e("li",[t._v('用户浏览器其他信息，浏览器版本、浏览器类型等。如：上例中的  "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.11 (KHTML, like Gecko) Chrome/23.0.1271.97 Safari/537.11"')])]),t._v(" "),e("p",[t._v("nginx access日志的格式不是一成不变的，是可以自定义的。在nginx的nginx.conf配置文件找到：log_format 这里就是日志的格式")]),t._v(" "),e("h2",{attrs:{id:"缓存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#缓存"}},[t._v("#")]),t._v(" 缓存")]),t._v(" "),e("p",[t._v("Nginx使用proxy_cache模块处理缓存。")]),t._v(" "),e("h2",{attrs:{id:"安全"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安全"}},[t._v("#")]),t._v(" 安全")]),t._v(" "),e("h3",{attrs:{id:"更新"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#更新"}},[t._v("#")]),t._v(" 更新")]),t._v(" "),e("h3",{attrs:{id:"dos攻击"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dos攻击"}},[t._v("#")]),t._v(" DoS攻击")]),t._v(" "),e("h3",{attrs:{id:"ssl-tls-加密"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ssl-tls-加密"}},[t._v("#")]),t._v(" SSL/TLS 加密")]),t._v(" "),e("h2",{attrs:{id:"运行环境"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#运行环境"}},[t._v("#")]),t._v(" 运行环境")]),t._v(" "),e("p",[t._v("Apache可以作为常见的开发语言的 Web 服务器，集成数据库、应用容器，最后形成一个完整的应用运行环境，例如：Apache+PHP，Apache+Tomcat+Java等")]),t._v(" "),e("p",[t._v("下面我们以常见的开发语言为例，分别介绍它们是如何与Apache一起工作的。")]),t._v(" "),e("h3",{attrs:{id:"php"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#php"}},[t._v("#")]),t._v(" PHP")]),t._v(" "),e("p",[t._v("Apache被广泛用于PHP环境，Apache有两种PHP处理机制：")]),t._v(" "),e("ul",[e("li",[t._v("php-fpm：PHP内核中用来处理PHP文件的解释器和进程管理器")]),t._v(" "),e("li",[t._v("mod_php：Apache的PHP处理模块")])]),t._v(" "),e("p",[t._v("mod_php 作为Apache的模块，没有独立的进程，无需额外设置和处理，使用起来非常简单。")]),t._v(" "),e("p",[t._v("PHP-FPM(PHP FastCGI Process Manager)意：PHP FastCGI 进程管理器，用于管理PHP 进程池的软件，用于接受Nginx等Web服务器的请求。PHP-FPM提供了更好的PHP进程管理方式，可以有效控制内存和进程、可以平滑重载PHP配置。")]),t._v(" "),e("p",[t._v("下面是Apache+PHP-FPM共同工作的系统架构图，其中mod_proxy_fcgi用于Apache连接php-fpm")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://libs.websoft9.com/Websoft9/DocsPicture/zh/linux/apache_event_php-fpm.jpg",alt:""}})]),t._v(" "),e("h3",{attrs:{id:"java"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#java"}},[t._v("#")]),t._v(" Java")]),t._v(" "),e("p",[t._v("Nginx 无法直接运行Java程序，而是与Tomcat一起组合去部署Java程序。")]),t._v(" "),e("p",[t._v("这种组合下，Nginx处理静态资源，JSP等动态程序需转发给Tomcat处理，然后返回给用户。Nginx 使用 proxy_pass 模块来连接 Tomcat。")]),t._v(" "),e("p",[t._v("proxy_pass 模块是基于 HTTP 协议的代理，因此它要求 Tomcat 必须提供 HTTP 服务，也就是说必须启用 Tomcat 的 HTTP Connector。常见的配置如下：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('server\n{\n    listen 80;\n    server_name www.xxx.com;\n    \n    location ~* "\\.(jpg|png|jepg|js|css|xml|bmp|swf|gif|html)$"\n    {\n        root /data/wwwroot/aminglinux/;\n        access_log off;\n        expire 7d;\n    }\n    \n    location /\n    {\n        proxy_pass http://127.0.0.1:8080/;\n        proxy_set_header Host $host;\n        proxy_set_header X-Real-IP      $remote_addr;\n        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n    }\n}\n')])])]),e("h3",{attrs:{id:"python"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#python"}},[t._v("#")]),t._v(" Python")]),t._v(" "),e("p",[t._v("Nginx 也可以用于Python环境，通过扩展模块mod_proxy_uwsgi，连接Python的uWSGI服务器或Gunicorn服务器，便可以解析Python程序。")]),t._v(" "),e("p",[t._v("这种组合的的基本配置方法如下：")]),t._v(" "),e("ol",[e("li",[t._v("配置为uwsgi.ini"),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("[uwsgi]\nchdir = /home/vagrant/myweb/\nvirtualenv = /home/vagrant/env/\nsocket = 127.0.0.1:8080\nenv = DJANGO_SETTINGS_MODULE=myweb.settings\nmodule =myweb.wsgi:application\nmaster = true\nprocesses = 4\nvacuum = True\nmax-requests = 5000\ndaemonize = /var/log/uwsgi.log\npidfile = /var/log/uwsgi.pid\n")])])])]),t._v(" "),e("li",[t._v("apache的配置文件加载mod_proxy_uwsgi.so")]),t._v(" "),e("li",[t._v("apache的配置文件反向代理到uwsgi"),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("ProxyPass / uwsgi://127.0.0.1:8080\n")])])])])]),t._v(" "),e("h3",{attrs:{id:"node-js"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#node-js"}},[t._v("#")]),t._v(" Node.js")]),t._v(" "),e("p",[t._v("Nginx 也可以用于Node.js环境，Nginx 与 Node.js 最常见的连接方式是http_proxy，即利用 Apache 自带的 mod_proxy 模块使用代理技术来连接 Node.js。")]),t._v(" "),e("p",[t._v("下面是典型的配置文件范例：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("server {\n        listen 80 default_server;\n        server_name _;\n\n\n        location / {\n         proxy_pass http://127.0.0.1:2368;\n         proxy_set_header Host $host;\n         proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n        }\n\n}\n")])])]),e("h3",{attrs:{id:"ruby"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ruby"}},[t._v("#")]),t._v(" Ruby")])])}),[],!1,null,null,null);a.default=r.exports}}]);