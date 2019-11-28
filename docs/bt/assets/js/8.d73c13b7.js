(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{208:function(t,s,a){"use strict";a.r(s);var e=a(0),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"start-or-stop-the-services"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#start-or-stop-the-services"}},[t._v("#")]),t._v(" Start or Stop the Services")]),t._v(" "),a("p",[t._v("These commands you must know when you using the aaPanel of Websoft9")]),t._v(" "),a("h3",{attrs:{id:"aapanel"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#aapanel"}},[t._v("#")]),t._v(" aaPanel")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("sudo service bt start\nsudo service bt stop\nsudo service bt restart\n\n## uninstall aaPanel\nservice bt stop && chkconfig --del bt && rm -f /etc/init.d/bt && rm -rf /www/server/panel\n")])])]),a("h3",{attrs:{id:"apache"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#apache"}},[t._v("#")]),t._v(" Apache")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("##For Ubuntu&Debian\nsudo systemctl start apache2\nsudo systemctl stop apache2\nsudo systemctl restart apache2\nsudo systemctl status apache2\n\n##For Centos&Redhat\nsudo systemctl start httpd\nsudo systemctl stop httpd\nsudo systemctl restart httpd\nsudo systemctl status httpd\n")])])]),a("h3",{attrs:{id:"nginx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx"}},[t._v("#")]),t._v(" Nginx")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("sudo systemctl start nginx\nsudo systemctl stop nginx\nsudo systemctl restart nginx\nsudo systemctl status nginx\n")])])]),a("h3",{attrs:{id:"php-fpm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#php-fpm"}},[t._v("#")]),t._v(" PHP-FPM")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("systemctl start php-fpm\nsystemctl stop php-fpm\nsystemctl restart php-fpm\nsystemctl status php-fpm\n")])])]),a("h3",{attrs:{id:"mysql-mariadb"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql-mariadb"}},[t._v("#")]),t._v(" MySQL&MariaDB")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("sudo systemctl start mysql\nsudo systemctl stop mysql\nsudo systemctl restart mysql\nsudo systemctl status mysql\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);