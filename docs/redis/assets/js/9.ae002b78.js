(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{209:function(e,t,r){"use strict";r.r(t);var s=r(0),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"troubleshooting"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting"}},[e._v("#")]),e._v(" Troubleshooting")]),e._v(" "),r("p",[e._v("We collect the most common troubleshooting of using aaPanel for your reference:")]),e._v(" "),r("blockquote",[r("p",[e._v("Many troubleshooting is closely related to the Server, if you can confirm troubleshooting is related to Cloud Platform, please refer to "),r("a",{attrs:{href:"https://support.websoft9.com/docs/faq/tech-instance.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cloud Platform Documentation"),r("OutboundLink")],1)])]),e._v(" "),r("h4",{attrs:{id:"database-service-could-not-be-started"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#database-service-could-not-be-started"}},[e._v("#")]),e._v(" Database service could not be started?")]),e._v(" "),r("p",[e._v("Insufficient disk space, insufficient memory, and configuration file errors can make database service could not be started")]),e._v(" "),r("p",[e._v("It is recommended to first check through the command.")]),e._v(" "),r("div",{staticClass:"language-shell extra-class"},[r("pre",{pre:!0,attrs:{class:"language-shell"}},[r("code",[r("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# restart mysql service")]),e._v("\nsystemctl restart mysql\n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# view disk space")]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("df")]),e._v(" -lh\n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# view memory rate")]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("free")]),e._v(" -lh \n")])])]),r("h4",{attrs:{id:"can-t-open-pid-file-var-run-redis-pid-yet-after-start-no-such-file-or-directory"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#can-t-open-pid-file-var-run-redis-pid-yet-after-start-no-such-file-or-directory"}},[e._v("#")]),e._v(" Can't open PID file /var/run/redis.pid (yet?) after start: No such file or directory")]),e._v(" "),r("p",[e._v("问题：运行命令：sudo systemctl status redis，状态是active，但是下面有段报错信息：Can't open PID file /var/run/redis.pid (yet?) after start: No such file or directory"),r("br"),e._v("\n原因：Redis自身的服务PID被其他服务占用"),r("br"),e._v("\n方案：检查自行创建的服务是否占用了默认服务")])])}),[],!1,null,null,null);t.default=a.exports}}]);