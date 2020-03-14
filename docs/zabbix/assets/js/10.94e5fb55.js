(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{209:function(e,t,r){"use strict";r.r(t);var s=r(28),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"troubleshooting"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting"}},[e._v("#")]),e._v(" Troubleshooting")]),e._v(" "),r("p",[e._v("We collect the most common troubleshooting of using Zabbix for your reference:")]),e._v(" "),r("blockquote",[r("p",[e._v("Many troubleshooting is closely related to the Server, if you can confirm troubleshooting is related to Cloud Platform, please refer to "),r("a",{attrs:{href:"https://support.websoft9.com/docs/faq/tech-instance.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cloud Platform Documentation"),r("OutboundLink")],1)])]),e._v(" "),r("h4",{attrs:{id:"database-service-could-not-be-started"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#database-service-could-not-be-started"}},[e._v("#")]),e._v(" Database service could not be started?")]),e._v(" "),r("p",[e._v("Insufficient disk space, insufficient memory, and configuration file errors can make database service could not be started")]),e._v(" "),r("p",[e._v("It is recommended to first check through the command.")]),e._v(" "),r("div",{staticClass:"language-shell extra-class"},[r("pre",{pre:!0,attrs:{class:"language-shell"}},[r("code",[r("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# restart mysql service")]),e._v("\nsystemctl restart mysql\n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# view disk space")]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("df")]),e._v(" -lh\n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# view memory rate")]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("free")]),e._v(" -lh\n")])])]),r("h4",{attrs:{id:"apache-httpd-service-restart-error"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#apache-httpd-service-restart-error"}},[e._v("#")]),e._v(" Apache httpd service restart error")]),e._v(" "),r("p",[e._v("Please make sure the vhost.conf is correct for you, and you can track and analyze log files")])])}),[],!1,null,null,null);t.default=a.exports}}]);