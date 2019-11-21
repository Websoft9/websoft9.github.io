(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{199:function(t,e,r){"use strict";r.r(e);var s=r(0),a=Object(s.a)({},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"ssl-https"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ssl-https","aria-hidden":"true"}},[t._v("#")]),t._v(" SSL/HTTPS")]),t._v(" "),r("p",[t._v("AWX deployment package has installed the SSL module of Nginx and open Certificate Authority "),r("strong",[r("a",{attrs:{href:"https://letsencrypt.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Let's Encrypt"),r("OutboundLink")],1)]),t._v(" for you configure the HTTPS quickly and conveniently.")]),t._v(" "),r("blockquote",[r("p",[t._v("In addition to the vhost configuration file, HTTPS settings do not need to modify any files in Nginx")])]),t._v(" "),r("h2",{attrs:{id:"simple-steps"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#simple-steps","aria-hidden":"true"}},[t._v("#")]),t._v(" Simple Steps")]),t._v(" "),r("p",[t._v("If you want to use a free certificate, just run the one command "),r("code",[t._v("certbot")]),t._v(" on your instance to start the HTTPS deployment.")]),t._v(" "),r("p",[t._v("If you have applied for a commercial certificate, complete the HTTPS configuration in just three steps:")]),t._v(" "),r("ol",[r("li",[t._v("Upload your certificate to the directory of your instance: "),r("em",[t._v("/data/cert")])]),t._v(" "),r("li",[t._v("Edit the vhost configuration file: "),r("em",[t._v("/etc/nginx/conf.d/default.conf")])]),t._v(" "),r("li",[t._v("Insert the "),r("strong",[t._v("HTTPS template")]),t._v(" into "),r("em",[t._v("server{  }")]),t._v(" and modify to your certificate path"),r("div",{staticClass:"language-text extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("#-----HTTPS template start------------\nlisten 443 ssl; \nssl_certificate /data/cert/xxx.crt;\nssl_certificate_key /data/cert/xxx.key;\nssl_session_timeout 5m;\nssl_protocols TLSv1 TLSv1.1 TLSv1.2;\nssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE;\nssl_prefer_server_ciphers on;\n#-----HTTPS template end------------\n")])])])]),t._v(" "),r("li",[t._v("Save file and "),r("router-link",{attrs:{to:"/admin-services.html"}},[t._v("Restart Nginx service")])],1)]),t._v(" "),r("h2",{attrs:{id:"special-guide"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#special-guide","aria-hidden":"true"}},[t._v("#")]),t._v(" Special Guide")]),t._v(" "),r("p",[t._v("For details on configuring HTTPS pre-conditions, HTTPS configuration segment templates, precautions, detailed steps, and troubleshooting, refer to the "),r("a",{attrs:{href:"https://support.websoft9.com/docs/faq/tech-https.html#nginx",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTTPS Special Guide"),r("OutboundLink")],1),t._v(" provided by Websoft9")])])},[],!1,null,null,null);e.default=a.exports}}]);