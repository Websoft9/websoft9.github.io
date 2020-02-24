(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{212:function(e,t,a){"use strict";a.r(t);var n=a(0),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"more"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#more"}},[e._v("#")]),e._v(" More")]),e._v(" "),a("p",[e._v("Each of the following solutions has been proven to be effective and we hope to be helpful to you.")]),e._v(" "),a("h2",{attrs:{id:"domain-binding"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#domain-binding"}},[e._v("#")]),e._v(" Domain binding")]),e._v(" "),a("p",[e._v("The precondition for binding a domain is that Redmine can accessed by domain name.")]),e._v(" "),a("p",[e._v("Nonetheless, from the perspective of server security and subsequent maintenance considerations, the "),a("strong",[e._v("Domain Binding")]),e._v(" step cannot be omitted.")]),e._v(" "),a("p",[e._v("Redmine domain name binding steps:")]),e._v(" "),a("ol",[a("li",[e._v("Use WinSCP to edit the file: "),a("em",[e._v("/data/wwwroot/redmine/config/configuration.yml")])]),e._v(" "),a("li",[e._v("Modify the domain name related items and save it")]),e._v(" "),a("li",[e._v("Restart services"),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("sudo systemctl restart nginx\nsudo systemctl restart redmine\n")])])])])]),e._v(" "),a("h2",{attrs:{id:"plugin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#plugin"}},[e._v("#")]),e._v(" Plugin")]),e._v(" "),a("p",[e._v("You can use the Redmine's "),a("a",{attrs:{href:"https://www.redmine.org/plugins",target:"_blank",rel:"noopener noreferrer"}},[e._v("plugins"),a("OutboundLink")],1),e._v(" to extend functions:")]),e._v(" "),a("h3",{attrs:{id:"install-plugin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-plugin"}},[e._v("#")]),e._v(" Install plugin")]),e._v(" "),a("ol",[a("li",[e._v("Use the SFTP to connect server")]),e._v(" "),a("li",[e._v("Download the plugin to the directory: "),a("em",[e._v("/data/wwwroot/redmine/plugins")])]),e._v(" "),a("li",[e._v("cd to the directory "),a("em",[e._v("/data/wwwroot/redmine")]),e._v(" and excuse the following command"),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("bundle exec rake redmine:plugins:migrate RAILS_ENV=production\n")])])])]),e._v(" "),a("li",[e._v("Restart services"),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("sudo systemctl restart nginx\nsudo systemctl restart redmine\n")])])])]),e._v(" "),a("li",[e._v("Login to Redmine to check your plugin")])]),e._v(" "),a("h3",{attrs:{id:"uninstall-plugin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#uninstall-plugin"}},[e._v("#")]),e._v(" Uninstall plugin")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Use the SFTP to connect server")])]),e._v(" "),a("li",[a("p",[e._v("cd to the directory "),a("em",[e._v("/data/wwwroot/redmine")]),e._v(" and excuse the following command")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("bundle exec rake redmine:plugins:migrate NAME=plugin_name VERSION=0 RAILS_ENV=production   #  plugin_name 为插件名称\n")])])])]),e._v(" "),a("li",[a("p",[e._v("Use SFTP to delete your plugin in the directory: "),a("em",[e._v("/data/wwwroot/redmine/plugins")])])]),e._v(" "),a("li",[a("p",[e._v("Restart services")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("sudo systemctl restart nginx\nsudo systemctl restart redmine\n")])])])])]),e._v(" "),a("h2",{attrs:{id:"change-database-connection"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#change-database-connection"}},[e._v("#")]),e._v(" Change database connection")]),e._v(" "),a("p",[e._v("When you changed database engin(e.g. MySQL to PostreSQL) or modify the database's password, your Redmine may be out of service.\nHow to fix it? You need to modify the "),a("strong",[e._v("database connection items")]),e._v(" in the Redmine's database configuration file*/data/wwwroot/redmine/config/database.yml*")]),e._v(" "),a("h2",{attrs:{id:"ldap"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ldap"}},[e._v("#")]),e._v(" LDAP")]),e._v(" "),a("p",[e._v("Please read the official docs: https://www.redmine.org/projects/redmine/wiki/RedmineLDAP")])])}),[],!1,null,null,null);t.default=s.exports}}]);