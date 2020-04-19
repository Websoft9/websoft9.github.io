(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{328:function(e,t,a){"use strict";a.r(t);var o=a(33),s=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"troubleshooting"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting"}},[e._v("#")]),e._v(" Troubleshooting")]),e._v(" "),a("p",[e._v("We collect the most common troubleshooting of using RabbitMQ for your reference:")]),e._v(" "),a("h4",{attrs:{id:"how-can-i-use-the-logs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-can-i-use-the-logs"}},[e._v("#")]),e._v(" How can I use the logs?")]),e._v(" "),a("p",[e._v("You can find the keywords "),a("strong",[e._v("Failed")]),e._v(" or "),a("strong",[e._v("error")]),e._v(" from the logs file: "),a("code",[e._v("/opt/apache-activemq/data/activemq.log")])]),e._v(" "),a("h4",{attrs:{id:"rabbitmq-service-can-t-start"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rabbitmq-service-can-t-start"}},[e._v("#")]),e._v(" RabbitMQ service can't start?")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Use the debug mode of "),a("code",[e._v("activemq console")]),e._v(" and you can see the errors")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("/opt/apache-activemq/bin/activemq\n")])])])]),e._v(" "),a("li",[a("p",[e._v("Search the keywords "),a("strong",[e._v("Failed")]),e._v(" or "),a("strong",[e._v("error")]),e._v(" in the log file: "),a("em",[e._v("/opt/apache-activemq/data/activemq.log")])])]),e._v(" "),a("li",[a("p",[e._v("The most common reasons are as follows:")]),e._v(" "),a("ul",[a("li",[e._v('The hostname have "." string, e.g: activemq5.6, you must rename it and restart the service by the following commands')])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("hostnamectl set-hostname activemq\nsystemctl restart activemq\n")])])]),a("ul",[a("li",[e._v("Java environment variable problem. you can use the command "),a("code",[e._v("echo $JAVA_HOME")]),e._v(" or "),a("code",[e._v("which java")]),e._v(" to check it")])])])])])}),[],!1,null,null,null);t.default=s.exports}}]);