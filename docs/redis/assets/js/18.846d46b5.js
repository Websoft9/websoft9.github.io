(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{218:function(e,t,r){"use strict";r.r(t);var a=r(0),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"parameters"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[e._v("#")]),e._v(" Parameters")]),e._v(" "),r("p",[e._v('The Redis deployment package contains a sequence software (referred to as "components") required for Redis to run. The important information such as the component name, installation directory path, configuration file path, port, version, etc. are listed below.')]),e._v(" "),r("h2",{attrs:{id:"path"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#path"}},[e._v("#")]),e._v(" Path")]),e._v(" "),r("h3",{attrs:{id:"redis"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#redis"}},[e._v("#")]),e._v(" Redis")]),e._v(" "),r("p",[e._v("Run the command "),r("code",[e._v("sudo docker volume ls")]),e._v(" to list all volumes:")]),e._v(" "),r("p",[e._v("awx_postgres volume mount: "),r("em",[e._v("/var/lib/postgresql/data")]),r("br"),e._v("\nawx_rabbitmq volume mount: "),r("em",[e._v("/var/lib/rabbitmq")]),r("br"),e._v("\nawx_web volume mount: "),r("em",[e._v("/var/lib/nginx")]),r("br"),e._v("\nawx_task volume mount: "),r("em",[e._v("/var/lib/nginx")])]),e._v(" "),r("h3",{attrs:{id:"other"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#other"}},[e._v("#")]),e._v(" Other")]),e._v(" "),r("p",[e._v("no other components now")]),e._v(" "),r("h2",{attrs:{id:"ports"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ports"}},[e._v("#")]),e._v(" Ports")]),e._v(" "),r("p",[e._v("These Ports is need when use Redis, refer to "),r("a",{attrs:{href:"https://support.websoft9.com/docs/faq/tech-instance.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Safe Group Setting on Cloud Console"),r("OutboundLink")],1)]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("Name")]),e._v(" "),r("th",[e._v("Number")]),e._v(" "),r("th",[e._v("Use")]),e._v(" "),r("th",[e._v("Necessity")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("Redis")]),e._v(" "),r("td",[e._v("6379")]),e._v(" "),r("td",[e._v("Remote connect Redis")]),e._v(" "),r("td",[e._v("Optional")])])])]),e._v(" "),r("h2",{attrs:{id:"version"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#version"}},[e._v("#")]),e._v(" Version")]),e._v(" "),r("p",[e._v("You can see the version from product page of Marketplace. However, after being deployed to your server, the components will be automatically updated, resulting in a certain change in the version number. Therefore, the exact version number should be viewed by running the command on the server:")]),e._v(" "),r("div",{staticClass:"language-shell extra-class"},[r("pre",{pre:!0,attrs:{class:"language-shell"}},[r("code",[r("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Linux Version")]),e._v("\nlsb_release -a\n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Python Version")]),e._v("\nredis-server -v\n")])])])])}),[],!1,null,null,null);t.default=s.exports}}]);