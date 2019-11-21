(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{214:function(e,t,o){"use strict";o.r(t);var a=o(0),n=Object(a.a)({},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"more"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#more","aria-hidden":"true"}},[e._v("#")]),e._v(" More")]),e._v(" "),o("p",[e._v("Each of the following solutions has been proven to be effective and we hope to be helpful to you.")]),e._v(" "),o("h2",{attrs:{id:"domain-binding"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#domain-binding","aria-hidden":"true"}},[e._v("#")]),e._v(" Domain binding")]),e._v(" "),o("p",[e._v("The precondition for "),o("strong",[e._v("Domain binding")]),e._v(" is have completed the "),o("strong",[e._v("Domain resolution")]),e._v(" for Joomla Instance.")]),e._v(" "),o("p",[e._v("From the perspective of server security and subsequent maintenance considerations, the "),o("strong",[e._v("Domain Binding")]),e._v(" step cannot be omitted.")]),e._v(" "),o("p",[e._v("Joomla domain name binding steps:")]),e._v(" "),o("ol",[o("li",[e._v("Connect your Cloud Server")]),e._v(" "),o("li",[e._v("Modify "),o("router-link",{attrs:{to:"/stack-components.html#apache"}},[e._v("vhost configuration file")]),e._v(", change the domain name item for you"),o("div",{staticClass:"language-text extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v('#### Joomla (LAMP) bind domain #### \n\n  <VirtualHost *:80>\n  ServerName joomla.mydomain.com # modify it for you\n  DocumentRoot "/data/wwwroot/Joomla"\n  ...\n  \n#### Joomla (LEMP) bind domain #### \n\n  server {\n   listen 80;\n   server_name joomla.example.com; # modify it for you\n  ...\n\n')])])])],1),e._v(" "),o("li",[e._v("Save it and restart "),o("router-link",{attrs:{to:"/admin-services.html#apache"}},[e._v("Web Service")])],1)]),e._v(" "),o("h2",{attrs:{id:"joomla-languages"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#joomla-languages","aria-hidden":"true"}},[e._v("#")]),e._v(" Joomla languages")]),e._v(" "),o("p",[e._v("Joomla supports multiple languages. Here are the main steps to install and set up multiple languages:")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Log in Joomla, go to【Extension】>【Language(s)】>【installed】, install the languages you want\n"),o("img",{attrs:{src:"https://libs.websoft9.com/Websoft9/DocsPicture/en/joomla/joomla-bkinstalllan-websoft9.png",alt:""}})])]),e._v(" "),o("li",[o("p",[e._v("Then set your default language of Joomla Site or Administrator\n"),o("img",{attrs:{src:"https://libs.websoft9.com/Websoft9/DocsPicture/en/joomla/joomla-bkenablelang-websoft9.png",alt:""}})])])]),e._v(" "),o("h2",{attrs:{id:"joomla-extension"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#joomla-extension","aria-hidden":"true"}},[e._v("#")]),e._v(" Joomla extension")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://extensions.joomla.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Joomla! Extensions Directory™"),o("OutboundLink")],1),e._v(" provided lots of extensions for you:")]),e._v(" "),o("ol",[o("li",[e._v("Log in Joomla")]),e._v(" "),o("li",[e._v("Go to【Extensions】>【Install】>【Install from Web】and search the extensions\n"),o("img",{attrs:{src:"https://libs.websoft9.com/Websoft9/DocsPicture/en/joomla/joomla-bkinstallext-websoft9.png",alt:""}})]),e._v(" "),o("li",[e._v("Install them online")])]),e._v(" "),o("h2",{attrs:{id:"joomla-install-template"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#joomla-install-template","aria-hidden":"true"}},[e._v("#")]),e._v(" Joomla install template")]),e._v(" "),o("p",[e._v("You can upload your template package to install it:")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Prepare your template (.zip file)")])]),e._v(" "),o("li",[o("p",[e._v("Log in Joomla backend")])]),e._v(" "),o("li",[o("p",[e._v("Open 【Extensions】>【Install】, select the tab【Upload package file】to install template\n"),o("img",{attrs:{src:"https://libs.websoft9.com/Websoft9/DocsPicture/en/joomla/joomla-upload_install.png",alt:""}})])]),e._v(" "),o("li",[o("p",[e._v("When have completed the installation, go to 【Extensions】>【Templates】>【Styles】, enable your template as default template\n"),o("img",{attrs:{src:"https://libs.websoft9.com/Websoft9/DocsPicture/en/joomla/joomla-bkenabletemplate-websoft9.png",alt:""}})])])]),e._v(" "),o("blockquote",[o("p",[e._v("Some template zip package may have the Joomla source code, at this time "),o("strong",[e._v("Install template=Install Joomla")])])]),e._v(" "),o("h2",{attrs:{id:"joomla-cache"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#joomla-cache","aria-hidden":"true"}},[e._v("#")]),e._v(" Joomla Cache")]),e._v(" "),o("p",[e._v("Joomla backend have cache management function, refer to this picture:")]),e._v(" "),o("p",[o("img",{attrs:{src:"https://libs.websoft9.com/Websoft9/DocsPicture/en/joomla/joomla-opencache-websoft9.png",alt:""}})]),e._v(" "),o("h2",{attrs:{id:"joomla-reset-administrator-password"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#joomla-reset-administrator-password","aria-hidden":"true"}},[e._v("#")]),e._v(" Joomla reset administrator password")]),e._v(" "),o("p",[e._v("If you don't remember your administrator password, please refer to the docs "),o("a",{attrs:{href:"https://docs.joomla.org/How_do_you_recover_or_reset_your_admin_password%3F/",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),o("OutboundLink")],1),e._v(" to reset it")])])},[],!1,null,null,null);t.default=n.exports}}]);