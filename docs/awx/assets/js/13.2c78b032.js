(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{213:function(e,t,a){"use strict";a.r(t);var r=a(0),o=Object(r.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"https-for-owncloud"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#https-for-owncloud","aria-hidden":"true"}},[e._v("#")]),e._v(" HTTPS for OwnCloud")]),e._v(" "),a("p",[e._v("Websoft9 OwnCloud(LAMP) have enabled the Nginx SSL module, you just need to add the HTTPS profile to vhost configuration file .Before setting up HTTPS access, please open port 443 of the security group. if not, HTTPS access is not available.")]),e._v(" "),a("p",[e._v("Here are two configuration schemes for HTTPS, please choose according to the actual situation:")]),e._v(" "),a("p",[a("a",{attrs:{name:"f7f3b410"}})]),e._v(" "),a("h2",{attrs:{id:"configuration-method-1-using-your-own-certificate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration-method-1-using-your-own-certificate","aria-hidden":"true"}},[e._v("#")]),e._v(" Configuration Method 1: Using your own certificate")]),e._v(" "),a("p",[e._v("If you have already applied for a certificate (please ensure that the certificate is available), please refer to the following configuration:")]),e._v(" "),a("ol",[a("li",[e._v("Upload the certificate to the certificate Directory: "),a("em",[e._v("/data/cert")]),e._v(" (no cert directory can be created by yourself)")]),e._v(" "),a("li",[e._v("Copy the HTTPS profile template below into the "),a("em",[a("code",[e._v("vhost.conf")])]),e._v(" file and save")])]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('<VirtualHost *:443>\nServerName  www.mydomain.com\nDocumentRoot "/data/wwwroot/owncloud"\n#ErrorLog "logs/www.mydomain.com-error_log"\n#CustomLog "logs/www.mydomain.com-access_log" common\n<Directory "/data/wwwroot/owncloud">\nOptions Indexes FollowSymlinks\nAllowOverride All\nRequire all granted\n</Directory>\nSSLEngine on\nSSLCertificateFile  /data/cert/www.mydomain.com.crt\nSSLCertificateKeyFile  /data/cert/www.mydomain.com.key\nSSLCertificateChainFile  /data/cert/root_bundle.crt\n</VirtualHost>\n')])])]),a("ol",{attrs:{start:"3"}},[a("li",[e._v("Modify the related items in the configuration file and save\n| "),a("strong",[e._v("Items")]),e._v(" | "),a("strong",[e._v("Description")]),e._v(" |\n| --- | --- |\n| ServerName | Primary domain |\n| DocumentRoot | The real website storage directory |\n| Directory | The real website storage directory |\n| ErrorLog | error logs directory |\n| CustomLog | visit logs directory |\n| SSLCertificateFile | SSLCertificateFile directory, suffix name is .crt or .pem |\n| SSLCertificateKeyFile  | SSLCertificateKeyFile directory, suffix name is .key |\n| SSLCertificateChainFile  | SSLCertificateChainFile  directory, suffix name is .cer |")])]),e._v(" "),a("blockquote",[a("p",[e._v("The incorrect directory will cause the service to fail to restart, view the ErroLog to troubleshoot")])]),e._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[e._v("Restart HTTP Services")])]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("#~ systemctl restart httpd\n")])])]),a("p",[a("a",{attrs:{name:"f09ba4e3"}})]),e._v(" "),a("h2",{attrs:{id:"configuration-method-2-using-let-s-encrypt"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration-method-2-using-let-s-encrypt","aria-hidden":"true"}},[e._v("#")]),e._v(" Configuration Method 2: Using Let's Encrypt")]),e._v(" "),a("p",[e._v("You can use the free SSL/TLS Certificate "),a("a",{attrs:{href:"https://letsencrypt.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Let's Encrypt"),a("OutboundLink")],1),e._v(" in this Image, Let's Encrypt is a free, automated, and open Certificate Authority.")]),e._v(" "),a("p",[e._v("Before using Let's Encrypt Certificate for your site, you should make sure that your site have already bound to the domain name, it's means that the ServerName parameter have correct domain in HTTP profile template."),a("br"),e._v("E.g. The domain of your site is test.websoft9.cn, here are the steps to configure the HTTPS:")]),e._v(" "),a("ol",[a("li",[e._v("Start up the Let's Encrypt configuration just need one command")])]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("certbot\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[e._v("Enter the corresponding content according to the prompt")])]),e._v(" "),a("blockquote",[a("p",[e._v('You can select multiple domain by the method 1,2 when come to the step "Which names would you like to activate HTTPS for?"')])]),e._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[a("p",[e._v("After the above steps are completed, certbot will automatically configure the certificate to the directory "),a("em",[e._v("/etc/letsencrypt/live/")])])]),e._v(" "),a("li",[a("p",[e._v("Visit the HTTPS to confirm you have configured successfully")])])]),e._v(" "),a("hr"),e._v(" "),a("p",[a("a",{attrs:{name:"FAQ"}})]),e._v(" "),a("h2",{attrs:{id:"faq"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#faq","aria-hidden":"true"}},[e._v("#")]),e._v(" FAQ")]),e._v(" "),a("p",[a("a",{attrs:{name:"aa9423d7"}})]),e._v(" "),a("h3",{attrs:{id:"note-on-the-application-of-the-certificate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#note-on-the-application-of-the-certificate","aria-hidden":"true"}},[e._v("#")]),e._v(" Note on the application of the certificate")]),e._v(" "),a("ul",[a("li",[e._v("domain.com is a wildcard domain name method and cannot be used to apply for a free certificate")]),e._v(" "),a("li",[e._v("When applying for a certificate, please resolve the domain name first. some certificates will bind the IP address corresponding to the domain name, that is, the IP address cannot be replaced once applied, otherwise the certificate will not be available")])]),e._v(" "),a("p",[a("a",{attrs:{name:"cb873aa0"}})]),e._v(" "),a("h3",{attrs:{id:"why-is-the-setup-successful-showing-the-connection-established-with-this-site-is-not-completely-secure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#why-is-the-setup-successful-showing-the-connection-established-with-this-site-is-not-completely-secure","aria-hidden":"true"}},[e._v("#")]),e._v(' Why is the setup successful, showing "the connection established with this site is not completely secure "?')]),e._v(" "),a("p",[e._v("If https can be visited, you can make sure that your HTTPS settings are successful, just because there are static files containing http access, or external links, etc. in the website, the browser alarms that your website is not completely safe.")])])},[],!1,null,null,null);t.default=o.exports}}]);