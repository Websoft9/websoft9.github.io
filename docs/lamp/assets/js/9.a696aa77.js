(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{238:function(e,t,a){"use strict";a.r(t);var r=a(0),s=Object(r.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"troubleshooting"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting","aria-hidden":"true"}},[e._v("#")]),e._v(" Troubleshooting")]),e._v(" "),a("p",[e._v("We collect the most common troubleshooting of using LAMP for your reference:")]),e._v(" "),a("h2",{attrs:{id:"application-related"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#application-related","aria-hidden":"true"}},[e._v("#")]),e._v(" Application related")]),e._v(" "),a("h4",{attrs:{id:"redirects-error"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redirects-error","aria-hidden":"true"}},[e._v("#")]),e._v(" Redirects Error?")]),e._v(" "),a("p",[e._v("Check your "),a("em",[e._v(".htaccess")]),e._v(" file in your application root directory, remove cycle redirects settings")]),e._v(" "),a("h2",{attrs:{id:"database-related"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#database-related","aria-hidden":"true"}},[e._v("#")]),e._v(" Database related")]),e._v(" "),a("h4",{attrs:{id:"database-service-could-not-be-started"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#database-service-could-not-be-started","aria-hidden":"true"}},[e._v("#")]),e._v(" Database service could not be started?")]),e._v(" "),a("p",[e._v("Insufficient disk space, insufficient memory, and configuration file errors can make database service could not be started")]),e._v(" "),a("p",[e._v("It is recommended to first check through the command.")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("# restart mysql service\nsystemctl restart mysql\n\n# view disk space\ndf -lh\n\n# view memory rate\nfree -lh\n")])])]),a("h4",{attrs:{id:"the-database-log-file-is-too-large-resulting-in-insufficient-disk-space"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-database-log-file-is-too-large-resulting-in-insufficient-disk-space","aria-hidden":"true"}},[e._v("#")]),e._v(" The database log file is too large, resulting in insufficient disk space?")]),e._v(" "),a("p",[e._v("By default, mysql will automatically open the binlog. Binlog is mainly used to recover the database without backup. However, the binlog will take up a lot of space. If you don't clean it for a long time, the remaining disk space will be 0, which will affect the database or the server will not start.")]),e._v(" "),a("p",[e._v("If you have confidence in your own backup, you do not need the binlog function. Refer to the following steps to turn it off:")]),e._v(" "),a("ol",[a("li",[e._v("Edit [MySQL Configuration File] (/stack-components.md#mysql) and comment out the binlog log")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("#log-bin=mysql-bin\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[e._v("Restart mysql")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("systemctl restart mysqld\n")])])]),a("h4",{attrs:{id:"phpmyadmin-page-access-blank"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#phpmyadmin-page-access-blank","aria-hidden":"true"}},[e._v("#")]),e._v(" phpMyAdmin page access blank?")]),e._v(" "),a("p",[e._v("Please try another browser, such as chrome or firefox. If the phpMyAdmin can be opened normally before, and now appears to be incomplete or blank, it is recommended to clean up the browser cache, cookies and other information")]),e._v(" "),a("h2",{attrs:{id:"apache-related"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#apache-related","aria-hidden":"true"}},[e._v("#")]),e._v(" Apache related")]),e._v(" "),a("h4",{attrs:{id:"when-restart-apache-service-such-error-no-spaces"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#when-restart-apache-service-such-error-no-spaces","aria-hidden":"true"}},[e._v("#")]),e._v(" When restart Apache service, such error "),a("em",[e._v("No spaces...")])]),e._v(" "),a("p",[e._v("Do not worry, the Apache service is running")]),e._v(" "),a("h2",{attrs:{id:"instance-related"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#instance-related","aria-hidden":"true"}},[e._v("#")]),e._v(" Instance related")]),e._v(" "),a("p",[e._v("Instance troubleshooting is closely related to the Instance provider that is Cloud Platform"),a("br"),e._v("\nPlease refer to "),a("a",{attrs:{href:"https://support.websoft9.com/docs/faq/tech-instance.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cloud Platform Documentation"),a("OutboundLink")],1)]),e._v(" "),a("h2",{attrs:{id:"network-related"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#network-related","aria-hidden":"true"}},[e._v("#")]),e._v(" Network related")])])},[],!1,null,null,null);t.default=s.exports}}]);