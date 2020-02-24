(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{211:function(t,e,a){"use strict";a.r(e);var n=a(0),r=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"ssl-https"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ssl-https"}},[t._v("#")]),t._v(" SSL/HTTPS")]),t._v(" "),a("p",[t._v("Redmine deployment package has installed the SSL module of Nginx and open Certificate Authority "),a("strong",[a("a",{attrs:{href:"https://letsencrypt.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Let's Encrypt"),a("OutboundLink")],1)]),t._v(" for you configure the HTTPS quickly and conveniently.")]),t._v(" "),a("blockquote",[a("p",[t._v("In addition to the vhost configuration file, HTTPS settings do not need to modify any files in Nginx")])]),t._v(" "),a("p",[t._v("We provided your two solution for "),a("strong",[t._v("SSL/HTTPS")])]),t._v(" "),a("h2",{attrs:{id:"interaction-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#interaction-configuration"}},[t._v("#")]),t._v(" Interaction configuration")]),t._v(" "),a("p",[t._v("If you want to use a free certificate, just run the one command "),a("code",[t._v("certbot")]),t._v(" on your instance to start the HTTPS deployment.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("sudo certbot\n")])])]),a("h2",{attrs:{id:"manual-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#manual-configuration"}},[t._v("#")]),t._v(" Manual configuration")]),t._v(" "),a("p",[t._v("If you have applied for a commercial certificate, complete the HTTPS configuration in just three steps:")]),t._v(" "),a("ol",[a("li",[t._v("Upload your certificate to the directory of your instance: "),a("em",[t._v("/data/cert")])]),t._v(" "),a("li",[t._v("Edit the vhost configuration file: "),a("em",[t._v("/etc/nginx/sites-available/default")])]),t._v(" "),a("li",[t._v("Insert the "),a("strong",[t._v("HTTPS template")]),t._v(" into "),a("em",[t._v("server{  }")]),t._v(" and modify to your certificate path"),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("#-----HTTPS template start------------\nlisten 443 ssl; \nssl_certificate /data/cert/xxx.crt;\nssl_certificate_key /data/cert/xxx.key;\nssl_session_timeout 5m;\nssl_protocols TLSv1 TLSv1.1 TLSv1.2;\nssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE;\nssl_prefer_server_ciphers on;\n#-----HTTPS template end------------\n")])])])]),t._v(" "),a("li",[t._v("Save file and "),a("RouterLink",{attrs:{to:"/admin-services.html"}},[t._v("Restart Nginx service")])],1)]),t._v(" "),a("h2",{attrs:{id:"special-guide"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#special-guide"}},[t._v("#")]),t._v(" Special Guide")]),t._v(" "),a("p",[t._v("For details on configuring HTTPS pre-conditions, HTTPS configuration segment templates, precautions, detailed steps, and troubleshooting, refer to the "),a("a",{attrs:{href:"https://support.websoft9.com/docs/faq/tech-https.html#nginx",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTTPS Special Guide"),a("OutboundLink")],1),t._v(" provided by Websoft9")])])}),[],!1,null,null,null);e.default=r.exports}}]);