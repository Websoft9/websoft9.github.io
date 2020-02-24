(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{211:function(t,e,o){"use strict";o.r(e);var r=o(28),a=Object(r.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"ssl-https"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#ssl-https"}},[t._v("#")]),t._v(" SSL/HTTPS")]),t._v(" "),o("p",[t._v("Nextcloud deployment package has installed the SSL module of Nginx and open Certificate Authority "),o("strong",[o("a",{attrs:{href:"https://letsencrypt.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Let's Encrypt"),o("OutboundLink")],1)]),t._v(" for you configure the HTTPS quickly and conveniently.")]),t._v(" "),o("blockquote",[o("p",[t._v("In addition to the vhost configuration file, HTTPS settings do not need to modify any files in Nginx")])]),t._v(" "),o("h2",{attrs:{id:"quick-configuration"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#quick-configuration"}},[t._v("#")]),t._v(" Quick configuration")]),t._v(" "),o("p",[t._v("If you want to use a free certificate, just run the one command "),o("code",[t._v("certbot")]),t._v(" on your instance to start the HTTPS deployment.")]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("sudo certbot\n")])])]),o("p",[t._v("If you have applied for a commercial certificate, complete the HTTPS configuration in just three steps:")]),t._v(" "),o("h3",{attrs:{id:"for-nextcloud-lamp"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#for-nextcloud-lamp"}},[t._v("#")]),t._v(" For Nextcloud (LAMP)")]),t._v(" "),o("p",[t._v("LAMP means that "),o("strong",[t._v("Apache")]),t._v(" for Web Server")]),t._v(" "),o("ol",[o("li",[t._v("Upload your certificate to the directory of your instance: "),o("em",[t._v("/data/cert")])]),t._v(" "),o("li",[t._v("Edit the vhost configuration file: "),o("em",[t._v("/etc/httpd/conf.d/vhost.conf")])]),t._v(" "),o("li",[t._v("Insert the "),o("strong",[t._v("HTTPS template")]),t._v("  segment "),o("code",[t._v("<VirtualHost *:443>--</VirtualHost>")]),t._v(" into "),o("code",[t._v("vhost.conf")]),o("div",{staticClass:"language-text extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v('#-----HTTPS template start------------\n<VirtualHost *:443>\n ServerName  nextcloud.yourdomain.com\n DocumentRoot "/data/wwwroot/nextcloud"\n #ErrorLog "logs/nextcloud.yourdomain.com-error_log"\n #CustomLog "logs/nextcloud.yourdomain.com-access_log" common\n <Directory "/data/wwwroot/nextcloud">\n Options Indexes FollowSymlinks\n AllowOverride All\n Require all granted\n </Directory>\n SSLEngine on\n SSLCertificateFile  /data/cert/nextcloud.yourdomain.com.crt\n SSLCertificateKeyFile  /data/cert/nextcloud.yourdomain.com.key\n </VirtualHost>\n#-----HTTPS template end------------\n')])])])]),t._v(" "),o("li",[t._v("Modify ServerName, SSLCertificateFile, SSLCertificateKeyFile")]),t._v(" "),o("li",[t._v("Save it and "),o("RouterLink",{attrs:{to:"/admin-services.html#apache"}},[t._v("Restart Apache service")])],1)]),t._v(" "),o("h3",{attrs:{id:"for-nextcloud-lemp"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#for-nextcloud-lemp"}},[t._v("#")]),t._v(" For Nextcloud (LEMP)")]),t._v(" "),o("p",[t._v("LEMP means that "),o("strong",[t._v("Nginx")]),t._v(" for Web Server")]),t._v(" "),o("ol",[o("li",[t._v("Upload your certificate to the directory of your instance: "),o("em",[t._v("/data/cert")])]),t._v(" "),o("li",[t._v("Edit the vhost configuration file: "),o("em",[t._v("/etc/nginx/conf.d/default.conf")])]),t._v(" "),o("li",[t._v("Insert the "),o("strong",[t._v("HTTPS template")]),t._v(" into Nextcloud's "),o("em",[t._v("server{ }")]),t._v(" already existing"),o("div",{staticClass:"language-text extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("#-----HTTPS template start------------\nlisten 443 ssl; \nssl_certificate /data/cert/xxx.crt;\nssl_certificate_key /data/cert/xxx.key;\nssl_session_timeout 5m;\nssl_protocols TLSv1 TLSv1.1 TLSv1.2;\nssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE;\nssl_prefer_server_ciphers on;\n#-----HTTPS template end------------\n")])])])]),t._v(" "),o("li",[t._v("Modify ssl_certificate, ssl_certificate_key")]),t._v(" "),o("li",[t._v("Save it and "),o("RouterLink",{attrs:{to:"/admin-services.html#nginx"}},[t._v("Restart Nginx service")])],1)]),t._v(" "),o("h2",{attrs:{id:"special-guide"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#special-guide"}},[t._v("#")]),t._v(" Special Guide")]),t._v(" "),o("p",[t._v("For details on configuring HTTPS pre-conditions, HTTPS configuration segment templates, precautions, detailed steps, and troubleshooting, refer to the "),o("a",{attrs:{href:"https://support.websoft9.com/docs/faq/tech-https.html#nginx",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTTPS Special Guide"),o("OutboundLink")],1),t._v(" provided by Websoft9")])])}),[],!1,null,null,null);e.default=a.exports}}]);