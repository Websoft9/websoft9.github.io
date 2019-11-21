(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{205:function(e,t,a){"use strict";a.r(t);var n=a(0),s=Object(n.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"smtp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#smtp","aria-hidden":"true"}},[e._v("#")]),e._v(" SMTP")]),e._v(" "),a("p",[e._v("Sending mail is a common feature for Grafana. After a large number of user practice feedback, only one way is recommended, that is, using the "),a("strong",[e._v("third-party STMP service")]),e._v(" to send the email.")]),e._v(" "),a("blockquote",[a("p",[e._v("Do not try to install "),a("strong",[e._v("Sendmail")]),e._v(" or other Mail server software on your Cloud Server for sending mail, because it is very difficulty in maintenance.")])]),e._v(" "),a("p",[e._v("Follow is the sample using "),a("strong",[e._v("SendGrid's SMTP Service")]),e._v(" to configure sending mail for Grafana:")]),e._v(" "),a("ol",[a("li",[e._v("Log in SendGrid console, prepare your SMTP settings like the follow sample"),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("SMTP host: smtp.sendgrid.net\nSMTP port: 25 or 587 for unencrypted/TLS email, 465 for SSL-encrypted email\nSMTP Authentication: must be checked\nSMTP Encryption: must SSL\nSMTP username: websoft9smpt\nSMTP password: #fdfwwBJ8f    \n")])])])]),e._v(" "),a("li",[e._v("Edit the SMTP segment part in "),a("router-link",{attrs:{to:"/stack-components.html#grafana"}},[e._v("Grafana configuration file")]),e._v(" and fill in your SMTP items"),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('#################################### SMTP / Emailing #####################\n[smtp]\nenabled = false\nhost = localhost:25\nuser =\n# If the password contains # or ; you have to wrap it with triple quotes. Ex """#password;"""\npassword =\ncert_file =\nkey_file =\nskip_verify = false\nfrom_address = admin@grafana.localhost\nfrom_name = Grafana\nehlo_identity =\n\n[emails]\nwelcome_email_on_sign_up = false\ntemplates_pattern = emails/*.html\n')])])])],1),e._v(" "),a("li",[e._v("Restart Service"),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("sudo systemctl restart grafana-server\n")])])])]),e._v(" "),a("li",[e._v("Log in Grafana Console, Open: "),a("strong",[e._v("Alerting")]),e._v(" > "),a("strong",[e._v("Alert Rules")]),e._v(", create new Notification Channel and select the type with "),a("strong",[e._v("Email")]),e._v(" "),a("img",{attrs:{src:"https://libs.websoft9.com/Websoft9/DocsPicture/en/grafana/grafana-sendmails-websoft9.png",alt:"Grafana SMTP"}})]),e._v(" "),a("li",[e._v("Click the "),a("strong",[e._v("Test Connection")]),e._v(", you can get the feedback "),a("em",[e._v('"no errors were..."')]),e._v(" if SMTP is useful")])]),e._v(" "),a("p",[e._v("More SMTP Service(Gmail, Hotmail, QQ mail, Yahoo mail, SendGrid and so on)  settings or Issues with SMTP, please refer to Websoft9's "),a("em",[a("a",{attrs:{href:"https://support.websoft9.com/docs/faq/tech-smtp.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("SMTP Guide"),a("OutboundLink")],1)])])])},[],!1,null,null,null);t.default=s.exports}}]);