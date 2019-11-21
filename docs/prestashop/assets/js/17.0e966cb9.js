(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{203:function(e,t,a){"use strict";a.r(t);var r=a(0),n=Object(r.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameters","aria-hidden":"true"}},[e._v("#")]),e._v(" Parameters")]),e._v(" "),a("p",[e._v('The PrestaShop deployment package contains a sequence software (referred to as "components") required for PrestaShop to run. The important information such as the component name, installation directory path, configuration file path, port, version, etc. are listed below.')]),e._v(" "),a("h2",{attrs:{id:"path"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#path","aria-hidden":"true"}},[e._v("#")]),e._v(" Path")]),e._v(" "),a("h3",{attrs:{id:"prestashop"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prestashop","aria-hidden":"true"}},[e._v("#")]),e._v(" PrestaShop")]),e._v(" "),a("p",[e._v("PrestaShop installation directory: "),a("em",[e._v("/data/wwwroot/PrestaShop")]),a("br"),e._v("\nPrestaShop configuration file: "),a("em",[e._v("/data/wwwroot/prestashop/app/config/parameters.php")])]),e._v(" "),a("h3",{attrs:{id:"php"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#php","aria-hidden":"true"}},[e._v("#")]),e._v(" PHP")]),e._v(" "),a("p",[e._v("PHP configuration file: "),a("em",[e._v("/etc/php.ini")]),a("br"),e._v("\nPHP Modules configurations directory: "),a("em",[e._v("/etc/php.d")])]),e._v(" "),a("h3",{attrs:{id:"apache"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#apache","aria-hidden":"true"}},[e._v("#")]),e._v(" Apache")]),e._v(" "),a("p",[e._v("PrestaShop on LAMP, the Web Server is Apache")]),e._v(" "),a("p",[e._v("Apache vhost configuration file: "),a("em",[e._v("/etc/httpd/conf.d/vhost.conf")]),a("br"),e._v("\nApache main configuration file: "),a("em",[e._v("/etc/httpd/conf/httpd.conf")]),a("br"),e._v("\nApache logs file: "),a("em",[e._v("/var/log/httpd")]),a("br"),e._v("\nApache module configuration file: "),a("em",[e._v("/etc/httpd/conf.modules.d/00-base.conf")])]),e._v(" "),a("h3",{attrs:{id:"nginx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx","aria-hidden":"true"}},[e._v("#")]),e._v(" Nginx")]),e._v(" "),a("p",[e._v("PrestaShop on LEMP, the Web Server is Nginx")]),e._v(" "),a("p",[e._v("Nginx vhost configuration file: "),a("em",[e._v("/etc/nginx/sites-available/default.conf")]),a("br"),e._v("\nNginx main configuration file: "),a("em",[e._v("/etc/nginx/nginx.conf")]),a("br"),e._v("\nNginx logs file: "),a("em",[e._v("/var/log/nginx/")])]),e._v(" "),a("h3",{attrs:{id:"mysql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql","aria-hidden":"true"}},[e._v("#")]),e._v(" MYSQL")]),e._v(" "),a("p",[e._v("MySQL installation directory: "),a("em",[e._v("/usr/local/mysql")]),a("br"),e._v("\nMySQL data directory: "),a("em",[e._v("/data/mysql")]),a("br"),e._v("\nMySQL configuration file: "),a("em",[e._v("/etc/my.cnf")]),a("br"),e._v("\nMySQL Web Management URL: "),a("em",[e._v("http://Internet IP/phpmyadmin")]),e._v(", "),a("router-link",{attrs:{to:"/stack-accounts.html"}},[e._v("get credential")])],1),e._v(" "),a("h3",{attrs:{id:"phpmyadmin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#phpmyadmin","aria-hidden":"true"}},[e._v("#")]),e._v(" phpMyAdmin")]),e._v(" "),a("p",[e._v("phpMyAdmin installation directory: "),a("em",[e._v("/data/apps/phpmyadmin")]),a("br"),e._v("\nphpMyAdmin configuration file: "),a("em",[e._v("/data/apps/phpmyadmin/config.inc.php")]),a("br"),e._v("\nphpMyAdmin vhost configuration file: "),a("em",[e._v("/etc/httpd/conf.d/phpMyAdmin.conf")]),e._v(" or "),a("em",[e._v("/etc/nginx/php.conf")])]),e._v(" "),a("h3",{attrs:{id:"redis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redis","aria-hidden":"true"}},[e._v("#")]),e._v(" Redis")]),e._v(" "),a("p",[e._v("Redis configuration file: "),a("em",[e._v("/etc/redis.conf")]),a("br"),e._v("\nRedis data directory: "),a("em",[e._v("/var/lib/redis")]),a("br"),e._v("\nRedis logs file: "),a("em",[e._v("/var/log/redis/redis.log")])]),e._v(" "),a("h2",{attrs:{id:"ports"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ports","aria-hidden":"true"}},[e._v("#")]),e._v(" Ports")]),e._v(" "),a("p",[e._v("You can control(open or shut down) ports by "),a("strong",[a("a",{attrs:{href:"https://support.websoft9.com/docs/faq/zh/tech-instance.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Security Group Setting"),a("OutboundLink")],1)]),e._v(" of your Cloud Server whether the port can be accessed from Internet.")]),e._v(" "),a("p",[e._v("These ports should be opened for this application:")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Name")]),e._v(" "),a("th",[e._v("Number")]),e._v(" "),a("th",[e._v("Use")]),e._v(" "),a("th",[e._v("Necessity")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("MySQL")]),e._v(" "),a("td",[e._v("3306")]),e._v(" "),a("td",[e._v("Remote connect MySQL")]),e._v(" "),a("td",[e._v("Optional")])]),e._v(" "),a("tr",[a("td",[e._v("HTTP")]),e._v(" "),a("td",[e._v("80")]),e._v(" "),a("td",[e._v("HTTP requests for PrestaShop")]),e._v(" "),a("td",[e._v("Required")])]),e._v(" "),a("tr",[a("td",[e._v("HTTPS")]),e._v(" "),a("td",[e._v("443")]),e._v(" "),a("td",[e._v("HTTPS requests PrestaShop")]),e._v(" "),a("td",[e._v("Optional")])])])]),e._v(" "),a("h2",{attrs:{id:"version"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#version","aria-hidden":"true"}},[e._v("#")]),e._v(" Version")]),e._v(" "),a("p",[e._v("You can see the version from product page of Marketplace. However, after being deployed to your server, the components will be automatically updated, resulting in a certain change in the version number. Therefore, the exact version number should be viewed by running the command on the server:")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("# Linux Version\nlsb_release -a\n\n# PHP Version\nphp -v\n\n# List Installed PHP Modules\nphp -m\n\n# Apache version on Centos\nhttpd -v\n\n# Apache version on Ubuntu\napache2 -v\n\n# List Installed Apache Modules\napachectl -M\n\n# Nginx version\nnginx -v\n\n# List Installed Nginx Modules\nnginx -V\n\n# MySQL version:\nmysql -V\n\n# Redis version\nredis-server -v\n")])])])])},[],!1,null,null,null);t.default=n.exports}}]);