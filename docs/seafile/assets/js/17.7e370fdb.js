(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{261:function(e,t,r){"use strict";r.r(t);var s=r(28),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"parameters"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[e._v("#")]),e._v(" Parameters")]),e._v(" "),r("p",[e._v('The Seafile deployment package contains a sequence software (referred to as "components") required for Seafile to run. The important information such as the component name, installation directory path, configuration file path, port, version, etc. are listed below.')]),e._v(" "),r("p",[e._v("The deployment solution is based Docker, run the command"),r("code",[e._v("docker ps")]),e._v(" to list all Containers running:")]),e._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[e._v("CCONTAINER ID        IMAGE                          COMMAND                  CREATED             STATUS              PORTS                                         NAMES\ncb57bbd9f1ef        onlyoffice/documentserver      "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v('"/bin/sh -c /app/ds/…"')]),e._v("   "),r("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v(" hours ago         Up "),r("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v(" hours          "),r("span",{pre:!0,attrs:{class:"token number"}},[e._v("0.0")]),e._v(".0.0:9002-"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),r("span",{pre:!0,attrs:{class:"token number"}},[e._v("80")]),e._v("/tcp, "),r("span",{pre:!0,attrs:{class:"token number"}},[e._v("0.0")]),e._v(".0.0:9003-"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),r("span",{pre:!0,attrs:{class:"token number"}},[e._v("443")]),e._v("/tcp   documentserver\n3878b29258e2        seafileltd/seafile-mc:latest   "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v('"/sbin/my_init -- /s…"')]),e._v("   "),r("span",{pre:!0,attrs:{class:"token number"}},[e._v("5")]),e._v(" hours ago         Up About an hour    "),r("span",{pre:!0,attrs:{class:"token number"}},[e._v("0.0")]),e._v(".0.0:80-"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),r("span",{pre:!0,attrs:{class:"token number"}},[e._v("80")]),e._v("/tcp                            seafile\n4974ad7c20e8        memcached:1.5.6                "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v('"memcached -m 256"')]),e._v("       "),r("span",{pre:!0,attrs:{class:"token number"}},[e._v("5")]),e._v(" hours ago         Up "),r("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v(" hours          "),r("span",{pre:!0,attrs:{class:"token number"}},[e._v("11211")]),e._v("/tcp                                     seafile-memcached\nc8d87bd732d7        mariadb:10.1                   "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v('"docker-entrypoint.s…"')]),e._v("   "),r("span",{pre:!0,attrs:{class:"token number"}},[e._v("5")]),e._v(" hours ago         Up "),r("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v(" hours          "),r("span",{pre:!0,attrs:{class:"token number"}},[e._v("3306")]),e._v("/tcp                                      seafile-mysql\n\n")])])]),r("h2",{attrs:{id:"path"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#path"}},[e._v("#")]),e._v(" Path")]),e._v(" "),r("p",[e._v("The following mainly lists the parameters related to Docker:")]),e._v(" "),r("h3",{attrs:{id:"docker-compose"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose"}},[e._v("#")]),e._v(" Docker Compose")]),e._v(" "),r("p",[e._v("This environment uses Docker Compose as a container orchestration (scheduling) tool for managing multiple container configurations, launches, and service connections.")]),e._v(" "),r("p",[e._v("Docker Compose configuration file:  "),r("em",[e._v("/data/docker-compose.yml")]),r("br"),e._v("\nDocker Compose command directory: "),r("em",[e._v("/usr/local/bin/docker-compose")])]),e._v(" "),r("h3",{attrs:{id:"seafile"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#seafile"}},[e._v("#")]),e._v(" Seafile")]),e._v(" "),r("p",[e._v("Seafile install directory: "),r("em",[e._v("/data/seafile")]),r("br"),e._v("\nSeafile logs directory: "),r("em",[e._v("/data/seafile/logs")]),r("br"),e._v("\nSeafile ssl files directory: "),r("em",[e._v("/data/seafile/ssl")])]),e._v(" "),r("p",[e._v("Seafile installation directory includes: conf,seafile-data and other important folder")]),e._v(" "),r("h3",{attrs:{id:"mysql"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#mysql"}},[e._v("#")]),e._v(" MySQL")]),e._v(" "),r("p",[e._v("MySQL data storage: "),r("em",[e._v("/data/mysql")])]),e._v(" "),r("h3",{attrs:{id:"onlyoffice-document-server"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#onlyoffice-document-server"}},[e._v("#")]),e._v(" OnlyOffice Document Server")]),e._v(" "),r("p",[e._v("OnlyOffice Document Server certs storage: "),r("em",[e._v("/data/certs/onlyoffice_DocumentServer")]),r("br"),e._v("\nOnlyOffice Document Server logs storage: "),r("em",[e._v("/data/logs/onlyoffice_DocumentServer")]),r("br"),e._v("\nOnlyOffice Document Server data storage: "),r("em",[e._v("/data/wwwroot/onlyoffice_DocumentServer/data")]),r("br"),e._v("\nOnlyOffice Document Server lib storage: "),r("em",[e._v("/data/wwwroot/onlyoffice_DocumentServer/lib")]),r("br"),e._v("\nOnlyOffice Document Server database storage: "),r("em",[e._v("data/onlyoffice_DocumentServer_postgresql")])]),e._v(" "),r("h3",{attrs:{id:"docker"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#docker"}},[e._v("#")]),e._v(" Docker")]),e._v(" "),r("p",[e._v("Docker root directory: "),r("em",[e._v("/var/lib/docker")]),r("br"),e._v("\nDocker image directory: "),r("em",[e._v("/var/lib/docker/image")]),r("br"),e._v("\nDocker storage: "),r("em",[e._v("/var/lib/docker/volumes")]),r("br"),e._v("\nDocker daemon.json: It is not created by default, please go to the * /etc/docker* to create it yourself as needed")]),e._v(" "),r("h2",{attrs:{id:"ports"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ports"}},[e._v("#")]),e._v(" Ports")]),e._v(" "),r("p",[e._v("These Ports is need when use Seafile, refer to "),r("a",{attrs:{href:"https://support.websoft9.com/docs/faq/tech-instance.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Safe Group Setting on Cloud Console"),r("OutboundLink")],1)]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("Name")]),e._v(" "),r("th",[e._v("Number")]),e._v(" "),r("th",[e._v("Use")]),e._v(" "),r("th",[e._v("Necessity")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("PostgreSQL")]),e._v(" "),r("td",[e._v("5432")]),e._v(" "),r("td",[e._v("Remote connect PostgreSQL")]),e._v(" "),r("td",[e._v("Optional")])]),e._v(" "),r("tr",[r("td",[e._v("HTTP")]),e._v(" "),r("td",[e._v("80")]),e._v(" "),r("td",[e._v("HTTP requests for Seafile")]),e._v(" "),r("td",[e._v("Required")])]),e._v(" "),r("tr",[r("td",[e._v("HTTPS")]),e._v(" "),r("td",[e._v("443")]),e._v(" "),r("td",[e._v("HTTPS requests Seafile")]),e._v(" "),r("td",[e._v("Optional")])]),e._v(" "),r("tr",[r("td",[e._v("HTTP")]),e._v(" "),r("td",[e._v("9002")]),e._v(" "),r("td",[e._v("HTTP requests OnlyOffice Document Server")]),e._v(" "),r("td",[e._v("Optional")])]),e._v(" "),r("tr",[r("td",[e._v("HTTPS")]),e._v(" "),r("td",[e._v("9003")]),e._v(" "),r("td",[e._v("HTTPS requests OnlyOffice Document Server")]),e._v(" "),r("td",[e._v("Optional")])])])]),e._v(" "),r("h2",{attrs:{id:"version"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#version"}},[e._v("#")]),e._v(" Version")]),e._v(" "),r("p",[e._v("You can see the version from product page of Marketplace. However, after being deployed to your server, the components will be automatically updated, resulting in a certain change in the version number. Therefore, the exact version number should be viewed by running the command on the server:")]),e._v(" "),r("div",{staticClass:"language-shell extra-class"},[r("pre",{pre:!0,attrs:{class:"language-shell"}},[r("code",[r("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Linux Version")]),e._v("\nlsb_release -a\n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Python Version")]),e._v("\npython --version\n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Docker Version")]),e._v("\ndocker -v\n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Docker image lists(includes version)")]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" docker images\n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Docker Compose Version")]),e._v("\ndocker-compose --version\n")])])])])}),[],!1,null,null,null);t.default=a.exports}}]);