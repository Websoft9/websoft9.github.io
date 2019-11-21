(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{187:function(e,t,r){"use strict";r.r(t);var a=r(0),s=Object(a.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"troubleshooting"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting","aria-hidden":"true"}},[e._v("#")]),e._v(" Troubleshooting")]),e._v(" "),r("p",[r("a",{attrs:{name:"f10a43fd"}})]),e._v(" "),r("h4",{attrs:{id:"mysql-service-not-start"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#mysql-service-not-start","aria-hidden":"true"}},[e._v("#")]),e._v(" MySQL Service Not Start")]),e._v(" "),r("p",[e._v("The most common reasons why MySQL can't start include: insufficient disk space, insufficient memory, configuration file errors...")]),e._v(" "),r("div",{staticClass:"language-shell extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("# view the disk space\ndf -lh\n\n# view the memory used\nfree -lh\n")])])]),r("p",[r("a",{attrs:{name:"ea1a371d"}})]),e._v(" "),r("h4",{attrs:{id:"phpmyadmin-timeout-errors"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#phpmyadmin-timeout-errors","aria-hidden":"true"}},[e._v("#")]),e._v(" PhpMyAdmin Timeout Errors")]),e._v(" "),r("p",[e._v("If you try to import a zipped database, you might see a timeout error because phpMyAdmin takes too long to execute the script.To fix this:")]),e._v(" "),r("ul",[r("li",[e._v("Set the max_execution_time of "),r("code",[e._v("php.ini")]),e._v(" to larger value")]),e._v(" "),r("li",[e._v("Try to import the file again.")])]),e._v(" "),r("p",[e._v("Remember to change the ExecTimeLimit setting back to its original value once the import process ends.")]),e._v(" "),r("p",[r("a",{attrs:{name:"657a59cd"}})]),e._v(" "),r("h4",{attrs:{id:"website-pictures-loading-very-slowly"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#website-pictures-loading-very-slowly","aria-hidden":"true"}},[e._v("#")]),e._v(" Website pictures loading very slowly?")]),e._v(" "),r("p",[e._v("Please make sure that your brandwith of Server is more than 5M")]),e._v(" "),r("p",[r("a",{attrs:{name:"8504d445"}})]),e._v(" "),r("h4",{attrs:{id:"apache-httpd-service-restart-error"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#apache-httpd-service-restart-error","aria-hidden":"true"}},[e._v("#")]),e._v(" Apache httpd service restart error")]),e._v(" "),r("p",[e._v("Please make sure the vhost.conf is correct for you, and you can track and analyze log files from "),r("em",[e._v("/var/log/httpd")]),r("br"),e._v("_\n"),r("a",{attrs:{name:"e34e1049"}})]),e._v(" "),r("h4",{attrs:{id:"redirects-error"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#redirects-error","aria-hidden":"true"}},[e._v("#")]),e._v(" Redirects Error")]),e._v(" "),r("p",[e._v("Check your "),r("code",[e._v(".htaccess")]),e._v(" file in your application root directory, make sure there not any cycle redirects settings")])])},[],!1,null,null,null);t.default=s.exports}}]);