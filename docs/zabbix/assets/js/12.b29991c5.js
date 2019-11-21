(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{212:function(e,t,a){"use strict";a.r(t);var i=a(0),r=Object(i.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"ssl-https"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ssl-https"}},[e._v("#")]),e._v(" SSL/HTTPS")]),e._v(" "),a("p",[e._v("Zabbix deployment package has installed the SSL module of Nginx and open Certificate Authority "),a("strong",[a("a",{attrs:{href:"https://letsencrypt.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Let's Encrypt"),a("OutboundLink")],1)]),e._v(" for you configure the HTTPS quickly and conveniently.")]),e._v(" "),a("blockquote",[a("p",[e._v("In addition to the vhost configuration file, HTTPS settings do not need to modify any files in Nginx")])]),e._v(" "),a("h2",{attrs:{id:"quick-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#quick-configuration"}},[e._v("#")]),e._v(" Quick configuration")]),e._v(" "),a("h3",{attrs:{id:"free-certificate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#free-certificate"}},[e._v("#")]),e._v(" Free certificate")]),e._v(" "),a("p",[e._v("If you want to use a free certificate, just run the one command "),a("code",[e._v("certbot")]),e._v(" on your instance to start the HTTPS deployment.")]),e._v(" "),a("ol",[a("li",[e._v("Connect your server, run the command"),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("sudo certbot\n")])])])]),e._v(" "),a("li",[e._v("Set by it by the configuration wizard")])]),e._v(" "),a("h3",{attrs:{id:"commercial-certificate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#commercial-certificate"}},[e._v("#")]),e._v(" Commercial certificate")]),e._v(" "),a("p",[e._v("If you have applied for a commercial certificate, complete the HTTPS configuration in just three steps:")]),e._v(" "),a("ol",[a("li",[e._v("Upload your certificate to the directory of your instance: "),a("em",[e._v("/data/cert")])]),e._v(" "),a("li",[e._v("Edit the vhost configuration file: "),a("em",[e._v("/etc/apache2/sites-available/default-ssl.conf")])]),e._v(" "),a("li",[e._v("Modify ServerName, SSLCertificateFile, SSLCertificateKeyFile"),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("SSLCertificateFile\t/etc/ssl/certs/ssl-cert-snakeoil.pem\nSSLCertificateKeyFile /etc/ssl/private/ssl-cert-snakeoil.key   \n")])])])]),e._v(" "),a("li",[e._v("Save it and "),a("router-link",{attrs:{to:"/admin-services.html#apache"}},[e._v("Restart Apache service")])],1)]),e._v(" "),a("h2",{attrs:{id:"special-guide"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#special-guide"}},[e._v("#")]),e._v(" Special Guide")]),e._v(" "),a("p",[e._v("For details on configuring HTTPS pre-conditions, HTTPS configuration segment templates, precautions, detailed steps, and troubleshooting, refer to the "),a("a",{attrs:{href:"https://support.websoft9.com/docs/faq/tech-https.html#nginx",target:"_blank",rel:"noopener noreferrer"}},[e._v("HTTPS Special Guide"),a("OutboundLink")],1),e._v(" provided by Websoft9")])])}),[],!1,null,null,null);t.default=r.exports}}]);