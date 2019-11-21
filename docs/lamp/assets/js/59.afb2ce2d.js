(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{216:function(t,e,a){"use strict";a.r(e);var r=a(0),s=Object(r.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参数","aria-hidden":"true"}},[t._v("#")]),t._v(" 参数")]),t._v(" "),a("p",[t._v("LAMP 预装包包含 LAMP 运行所需一序列支撑软件（简称为“组件”），下面列出主要组件名称、安装路径、配置文件地址、端口、版本等重要的信息。")]),t._v(" "),a("h2",{attrs:{id:"路径"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#路径","aria-hidden":"true"}},[t._v("#")]),t._v(" 路径")]),t._v(" "),a("h3",{attrs:{id:"网站目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#网站目录","aria-hidden":"true"}},[t._v("#")]),t._v(" 网站目录")]),t._v(" "),a("p",[t._v("根目录： "),a("em",[t._v("LAMP 环境中，你的网站代码存放位置是没有限制的，因此没有根目录的说法")]),a("br"),t._v("\n网站存放目录（建议）： "),a("em",[t._v("/data/wwwroot")]),a("br"),t._v("\n示例网站目录： "),a("em",[t._v("/data/wwwroot/www.example.com")])]),t._v(" "),a("blockquote",[a("p",[t._v("通过 "),a("em",[t._v("http://公网IP地址")]),t._v(" 访问的就是示例网站")])]),t._v(" "),a("h3",{attrs:{id:"apache"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#apache","aria-hidden":"true"}},[t._v("#")]),t._v(" Apache")]),t._v(" "),a("p",[t._v("Apache 虚拟主机配置文件："),a("em",[t._v("/etc/httpd/conf.d/vhost.conf")]),a("br"),t._v("\nApache 主配置文件： "),a("em",[t._v("/etc/httpd/conf/httpd.conf")]),a("br"),t._v("\nApache 日志文件： "),a("em",[t._v("/var/log/httpd")]),a("br"),t._v("\nApache 模块配置文件： "),a("em",[t._v("/etc/httpd/conf.modules.d/00-base.conf")])]),t._v(" "),a("p",[a("strong",[t._v("vhost.conf")]),t._v(" 默认存在一个 "),a("a",{attrs:{href:"https://support.websoft9.com/docs/linux/zh/webs-apache.html#%E8%99%9A%E6%8B%9F%E4%B8%BB%E6%9C%BA",target:"_blank",rel:"noopener noreferrer"}},[t._v("VirtualHost（虚拟主机）"),a("OutboundLink")],1),t._v(" 配置项，对应的就是 "),a("strong",[t._v("示例网站")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<VirtualHost *:80>\nServerName www.mydomain.com\nServerAlias other.mydomain.com\nDocumentRoot "/data/wwwroot/www.example.com"\nErrorLog "/var/log/httpd/www.mydomain.com_error_apache.log"\nCustomLog "/var/log/httpd/www.mydomain.com_apache.log" common\n<Directory "/data/wwwroot/www.example.com">\nOptions Indexes FollowSymlinks\nAllowOverride All\nRequire all granted\n</Directory>\n</VirtualHost>\n')])])]),a("blockquote",[a("p",[t._v("有多少个网站，就需要在 vhost.conf 中增加同等数量的 VirtualHost 配置项")])]),t._v(" "),a("h3",{attrs:{id:"php"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#php","aria-hidden":"true"}},[t._v("#")]),t._v(" PHP")]),t._v(" "),a("p",[t._v("PHP 配置文件： "),a("em",[t._v("/etc/php.ini")]),a("br"),t._v("\nPHP Modules 配置文件目录： "),a("em",[t._v("/etc/php.d")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("# 默认已安装的 PHP Modules\nCore  date  libxml  openssl  pcre  zlib  filter  hash  Reflection  SPL  session  standard  apache2handler  \nbcmath  bz2  calendar  ctype  curl  dom  mbstring  fileinfo  ftp  gd  gettext  gmp  iconv  \nimap  intl  json  ldap  exif  mcrypt  mysqlnd  odbc  PDO  Phar  posix  recode  shmop  \nSimpleXML  snmp  soap  sockets  sqlite3  sysvmsg  sysvsem  sysvshm  tokenizer  xml  xmlwriter  xsl  mysqli  \npdo_dblib  pdo_mysql  PDO_ODBC  pdo_sqlite  wddx  xmlreader  xmlrpc  igbinary  imagick  zip  redis  Zend OPcache  \n")])])]),a("h3",{attrs:{id:"mysql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql","aria-hidden":"true"}},[t._v("#")]),t._v(" MYSQL")]),t._v(" "),a("p",[t._v("MySQL 安装路径: "),a("em",[t._v("/usr/local/mysql")]),a("br"),t._v("\nMySQL 数据文件 "),a("em",[t._v("/data/mysql")]),a("br"),t._v("\nMySQL 配置文件: "),a("em",[t._v("/etc/my.cnf")]),a("br"),t._v("\nMySQL 可视化管理地址: "),a("em",[t._v("http://服务器公网IP/phpmyadmin")]),t._v("，用户名和密码请见 "),a("router-link",{attrs:{to:"/zh/stack-accounts.html"}},[t._v("账号密码")]),t._v(" 章节。")],1),t._v(" "),a("h3",{attrs:{id:"phpmyadmin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#phpmyadmin","aria-hidden":"true"}},[t._v("#")]),t._v(" phpMyAdmin")]),t._v(" "),a("p",[t._v("phpMyAdmin 配置文件："),a("em",[t._v("/etc/httpd/conf.d/phpmyAdmin.conf")])]),t._v(" "),a("h3",{attrs:{id:"redis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redis","aria-hidden":"true"}},[t._v("#")]),t._v(" Redis")]),t._v(" "),a("p",[t._v("Redis 配置文件： "),a("em",[t._v("/etc/redis.conf")]),a("br"),t._v("\nRedis 数据目录： "),a("em",[t._v("/var/lib/redis")]),a("br"),t._v("\nRedis 日志文件： "),a("em",[t._v("/var/log/redis/redis.log")])]),t._v(" "),a("h2",{attrs:{id:"端口号"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#端口号","aria-hidden":"true"}},[t._v("#")]),t._v(" 端口号")]),t._v(" "),a("p",[t._v("在云服务器中，通过 "),a("strong",[a("a",{attrs:{href:"https://support.websoft9.com/docs/faq/zh/tech-instance.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("安全组设置"),a("OutboundLink")],1)]),t._v(" 来控制（开启或关闭）端口是否可以被外部访问。")]),t._v(" "),a("p",[t._v("本环境建议开启的端口如下：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("名称")]),t._v(" "),a("th",[t._v("端口号")]),t._v(" "),a("th",[t._v("用途")]),t._v(" "),a("th",[t._v("必要性")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("HTTP")]),t._v(" "),a("td",[t._v("80")]),t._v(" "),a("td",[t._v("通过 HTTP 访问网站")]),t._v(" "),a("td",[t._v("必须")])]),t._v(" "),a("tr",[a("td",[t._v("HTTPS")]),t._v(" "),a("td",[t._v("443")]),t._v(" "),a("td",[t._v("通过 HTTP 访问网站")]),t._v(" "),a("td",[t._v("可选")])]),t._v(" "),a("tr",[a("td",[t._v("MySQL")]),t._v(" "),a("td",[t._v("3306")]),t._v(" "),a("td",[t._v("本地电脑远程连接服务器上的 MySQL")]),t._v(" "),a("td",[t._v("可选")])])])]),t._v(" "),a("h2",{attrs:{id:"版本号"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#版本号","aria-hidden":"true"}},[t._v("#")]),t._v(" 版本号")]),t._v(" "),a("p",[t._v("组件版本号可以通过云市场商品页面查看。但部署到您的服务器之后，组件会自动进行更新导致版本号有一定的变化，故精准的版本号请通过在服务器上运行命令查看：")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("# Linux Version\nlsb_release -a\n\n# PHP Version\nphp -v\n\n# List Installed PHP Modules\nphp -m\n\n# Apache version on Centos\nhttpd -v\n\n# Apache version on Ubuntu\napache2 -v\n\n# List Installed Apache Modules\napachectl -M\n\n# MySQL version\nmysql -V\n\n# Redis version\nredis-server -v\n")])])])])},[],!1,null,null,null);e.default=s.exports}}]);