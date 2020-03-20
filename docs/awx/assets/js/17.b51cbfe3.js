(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{261:function(e,t,s){"use strict";s.r(t);var r=s(28),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"parameters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[e._v("#")]),e._v(" Parameters")]),e._v(" "),s("p",[e._v('The AWX deployment package contains a sequence software (referred to as "components") required for AWX to run. The important information such as the component name, installation directory path, configuration file path, port, version, etc. are listed below.')]),e._v(" "),s("p",[e._v("Use "),s("strong",[e._v("SSH")]),e._v(" to connect Server and run the command "),s("code",[e._v("docker ps")]),e._v(", you can list all containers that need for AWX:")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                                NAMES\ne240ed8209cd        awx_task:1.0.0.8    "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"/tini -- /bin/sh ..."')]),e._v("   "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v(" minutes ago       Up About a minute   "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("8052")]),e._v("/tcp                             awx_task\n1cfd02601690        awx_web:1.0.0.8     "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"/tini -- /bin/sh ..."')]),e._v("   "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v(" minutes ago       Up About a minute   "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("0.0")]),e._v(".0.0:443-"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("8052")]),e._v("/tcp                 awx_web\n55a552142bcd        memcached:alpine    "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"docker-entrypoint..."')]),e._v("   "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v(" minutes ago       Up "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v(" minutes        "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("11211")]),e._v("/tcp                            memcached\n84011c072aad        rabbitmq:3          "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"docker-entrypoint..."')]),e._v("   "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v(" minutes ago       Up "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v(" minutes        "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("4369")]),e._v("/tcp, "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("5671")]),e._v("-5672/tcp, "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("25672")]),e._v("/tcp   rabbitmq\n97e196120ab3        postgres:9.6        "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"docker-entrypoint..."')]),e._v("   "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v(" minutes ago       Up "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v(" minutes        "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("5432")]),e._v("/tcp                             postgres\n")])])]),s("h2",{attrs:{id:"path"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#path"}},[e._v("#")]),e._v(" Path")]),e._v(" "),s("h3",{attrs:{id:"docker-storage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#docker-storage"}},[e._v("#")]),e._v(" Docker storage")]),e._v(" "),s("p",[e._v("Run the command "),s("code",[e._v("sudo docker volume ls")]),e._v(" to list all volumes:")]),e._v(" "),s("p",[e._v("awx_postgres volume mount: "),s("em",[e._v("/var/lib/postgresql/data")]),s("br"),e._v("\nawx_rabbitmq volume mount: "),s("em",[e._v("/var/lib/rabbitmq")]),s("br"),e._v("\nawx_web volume mount: "),s("em",[e._v("/var/lib/nginx")]),s("br"),e._v("\nawx_task volume mount: "),s("em",[e._v("/var/lib/nginx")])]),e._v(" "),s("h3",{attrs:{id:"docker"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#docker"}},[e._v("#")]),e._v(" Docker")]),e._v(" "),s("p",[e._v("Docker root directory: "),s("em",[e._v("/var/lib/docker")]),s("br"),e._v("\nDocker image directory: "),s("em",[e._v("/var/lib/docker/image")]),s("br"),e._v("\nDocker volumes: "),s("em",[e._v("/var/lib/docker/volumes")]),s("br"),e._v("\nDocker daemon.json: you should create this file in the directory of "),s("em",[e._v("/etc/docker")]),e._v(" by yourself")]),e._v(" "),s("h3",{attrs:{id:"docker-compose"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose"}},[e._v("#")]),e._v(" Docker Compose")]),e._v(" "),s("p",[e._v("This environment uses Docker Compose as a container orchestration (scheduling) tool for managing multiple container configurations, launches, and service connections.")]),e._v(" "),s("p",[e._v("Docker Compose configuration file "),s("em",[e._v("/usr/local/bin/docker-compose")]),s("br"),e._v("\nDocker Compose command directory "),s("em",[e._v("/data/awx/awxcompose")])]),e._v(" "),s("h3",{attrs:{id:"postgresql"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#postgresql"}},[e._v("#")]),e._v(" PostgreSQL")]),e._v(" "),s("p",[e._v("PostgreSQL data storage: "),s("em",[e._v("/data/pgdocker")])]),e._v(" "),s("h2",{attrs:{id:"ports"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ports"}},[e._v("#")]),e._v(" Ports")]),e._v(" "),s("p",[e._v("These Ports is need when use AWX, refer to "),s("a",{attrs:{href:"https://support.websoft9.com/docs/faq/tech-instance.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Safe Group Setting on Cloud Console"),s("OutboundLink")],1)]),e._v(" "),s("table",[s("thead",[s("tr",[s("th",[e._v("Name")]),e._v(" "),s("th",[e._v("Number")]),e._v(" "),s("th",[e._v("Use")]),e._v(" "),s("th",[e._v("Necessity")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("PostgreSQL")]),e._v(" "),s("td",[e._v("5432")]),e._v(" "),s("td",[e._v("Remote connect PostgreSQL")]),e._v(" "),s("td",[e._v("Optional")])]),e._v(" "),s("tr",[s("td",[e._v("HTTP")]),e._v(" "),s("td",[e._v("80")]),e._v(" "),s("td",[e._v("HTTP requests for AWX")]),e._v(" "),s("td",[e._v("Required")])]),e._v(" "),s("tr",[s("td",[e._v("HTTPS")]),e._v(" "),s("td",[e._v("443")]),e._v(" "),s("td",[e._v("HTTPS requests AWX")]),e._v(" "),s("td",[e._v("Optional")])])])]),e._v(" "),s("h2",{attrs:{id:"version"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#version"}},[e._v("#")]),e._v(" Version")]),e._v(" "),s("p",[e._v("You can see the version from product page of Marketplace. However, after being deployed to your server, the components will be automatically updated, resulting in a certain change in the version number. Therefore, the exact version number should be viewed by running the command on the server:")]),e._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Linux Version")]),e._v("\nlsb_release -a\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Python Version")]),e._v("\npython --version\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Docker Version")]),e._v("\ndocker -v\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Docker image lists(includes version)")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" docker images\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Docker Compose Version")]),e._v("\ndocker-compose --version\n")])])])])}),[],!1,null,null,null);t.default=a.exports}}]);