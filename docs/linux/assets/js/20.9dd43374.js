(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{190:function(t,e,r){"use strict";r.r(e);var a=r(0),s=Object(a.a)({},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"parameters"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#parameters","aria-hidden":"true"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),r("h2",{attrs:{id:"components-and-directory"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#components-and-directory","aria-hidden":"true"}},[t._v("#")]),t._v(" Components and directory")]),t._v(" "),r("p",[t._v("The AWX deployment package includes not only AWX itself, but also a series of other software (herein referred to as components) required to support AWX operation. The important information such as the main component name, installation path, and configuration file address are listed below:")]),t._v(" "),r("h3",{attrs:{id:"awx"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#awx","aria-hidden":"true"}},[t._v("#")]),t._v(" AWX")]),t._v(" "),r("p",[t._v("AWX: /var/lib/awx"),r("br"),t._v("\nAWX Python package directory: /opt/awx"),r("br"),t._v("\nAWX configuration file: /etc/awx/settings.py"),r("br"),t._v("\nAnsible: /opt/awx/embedded/lib/python2.7/site-packages/ansible")]),t._v(" "),r("div",{staticClass:"language-python extra-class"},[r("pre",{pre:!0,attrs:{class:"language-python"}},[r("code",[t._v("TATIC_ROOT "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/opt/awx/static'")]),t._v("\nPROJECTS_ROOT "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/var/lib/awx/projects'")]),t._v("\nJOBOUTPUT_ROOT "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/var/lib/awx/job_status'")]),t._v("\n")])])]),r("h3",{attrs:{id:"python"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#python","aria-hidden":"true"}},[t._v("#")]),t._v(" Python")]),t._v(" "),r("p",[t._v("PHP Configuration File: "),r("em",[t._v("/etc/php.ini")]),r("br"),t._v("\nPHP Modules Configuration Directory: "),r("em",[t._v("/etc/php.d")])]),t._v(" "),r("h3",{attrs:{id:"rabbitmq"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#rabbitmq","aria-hidden":"true"}},[t._v("#")]),t._v(" RabbitMQ")]),t._v(" "),r("p",[t._v("Installation directory: /var/lib/rabbitmq")]),t._v(" "),r("h3",{attrs:{id:"postgresql"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#postgresql","aria-hidden":"true"}},[t._v("#")]),t._v(" PostgreSQL")]),t._v(" "),r("p",[t._v("PostgreSQL Management URL: http://Internet IP:9090")]),t._v(" "),r("h3",{attrs:{id:"redis"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#redis","aria-hidden":"true"}},[t._v("#")]),t._v(" Redis")]),t._v(" "),r("p",[t._v("Redis configuration file: /etc/redis.conf"),r("br"),t._v("\nRedis data directory: /var/lib/redis")]),t._v(" "),r("h2",{attrs:{id:"ports"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ports","aria-hidden":"true"}},[t._v("#")]),t._v(" Ports")]),t._v(" "),r("p",[t._v("The following is the port number you need to use during the process of using this image. Please set it through the cloud console security group.")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Name")]),t._v(" "),r("th",[t._v("Port")]),t._v(" "),r("th",[t._v("Use")]),t._v(" "),r("th",[t._v("Necessity")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("MySQL")]),t._v(" "),r("td",[t._v("3306")]),t._v(" "),r("td",[t._v("Remote connect MySQL")]),t._v(" "),r("td",[t._v("Optional")])]),t._v(" "),r("tr",[r("td",[t._v("HTTP")]),t._v(" "),r("td",[t._v("80")]),t._v(" "),r("td",[t._v("Use HTTP to visit AWX")]),t._v(" "),r("td",[t._v("Must")])]),t._v(" "),r("tr",[r("td",[t._v("HTTPS")]),t._v(" "),r("td",[t._v("443")]),t._v(" "),r("td",[t._v("Use HTTPS to visit AWX")]),t._v(" "),r("td",[t._v("Optional")])]),t._v(" "),r("tr",[r("td",[t._v("phpPgAdmin on Docker")]),t._v(" "),r("td",[t._v("9090")]),t._v(" "),r("td",[t._v("Web-GUI for Postgresql")]),t._v(" "),r("td",[t._v("Optional")])])])]),t._v(" "),r("h2",{attrs:{id:"version"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#version","aria-hidden":"true"}},[t._v("#")]),t._v(" Version")]),t._v(" "),r("p",[t._v("The basic version number corresponding to the component can be viewed through the product page on Cloud platform, but after deployment to your server, the version will be upgraded. Therefore, the more accurate version can be viewed by running the command on the server:")]),t._v(" "),r("div",{staticClass:"language-shell extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("# Nginx version\n\n# MySQL version\n\n# Python version\n")])])])])},[],!1,null,null,null);e.default=s.exports}}]);