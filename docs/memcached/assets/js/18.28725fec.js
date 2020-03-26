(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{262:function(e,t,a){"use strict";a.r(t);var r=a(28),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[e._v("#")]),e._v(" Parameters")]),e._v(" "),a("p",[e._v('The Memcached deployment package contains a sequence software (referred to as "components") required for Memcached to run. The important information such as the component name, installation directory path, configuration file path, port, version, etc. are listed below.')]),e._v(" "),a("h2",{attrs:{id:"path"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#path"}},[e._v("#")]),e._v(" Path")]),e._v(" "),a("h3",{attrs:{id:"memcached"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#memcached"}},[e._v("#")]),e._v(" Memcached")]),e._v(" "),a("p",[e._v("Run the command "),a("code",[e._v("sudo docker volume ls")]),e._v(" to list all volumes:")]),e._v(" "),a("p",[e._v("awx_postgres volume mount: "),a("em",[e._v("/var/lib/postgresql/data")]),a("br"),e._v("\nawx_rabbitmq volume mount: "),a("em",[e._v("/var/lib/rabbitmq")]),a("br"),e._v("\nawx_web volume mount: "),a("em",[e._v("/var/lib/nginx")]),a("br"),e._v("\nawx_task volume mount: "),a("em",[e._v("/var/lib/nginx")])]),e._v(" "),a("h3",{attrs:{id:"other"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#other"}},[e._v("#")]),e._v(" Other")]),e._v(" "),a("p",[e._v("no other components now")]),e._v(" "),a("h2",{attrs:{id:"ports"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ports"}},[e._v("#")]),e._v(" Ports")]),e._v(" "),a("p",[e._v("These Ports is need when use Memcached, refer to "),a("a",{attrs:{href:"https://support.websoft9.com/docs/faq/tech-instance.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Safe Group Setting on Cloud Console"),a("OutboundLink")],1)]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Name")]),e._v(" "),a("th",[e._v("Number")]),e._v(" "),a("th",[e._v("Use")]),e._v(" "),a("th",[e._v("Necessity")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("Memcached")]),e._v(" "),a("td",[e._v("6379")]),e._v(" "),a("td",[e._v("Remote connect Memcached")]),e._v(" "),a("td",[e._v("Optional")])])])]),e._v(" "),a("h2",{attrs:{id:"version"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#version"}},[e._v("#")]),e._v(" Version")]),e._v(" "),a("p",[e._v("You can see the version from product page of Marketplace. However, after being deployed to your server, the components will be automatically updated, resulting in a certain change in the version number. Therefore, the exact version number should be viewed by running the command on the server:")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Linux Version")]),e._v("\nlsb_release -a\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Python Version")]),e._v("\nredis-server -v\n")])])])])}),[],!1,null,null,null);t.default=s.exports}}]);