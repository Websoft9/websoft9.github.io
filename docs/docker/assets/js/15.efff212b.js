(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{214:function(e,t,r){"use strict";r.r(t);var a=r(28),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"parameters"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[e._v("#")]),e._v(" Parameters")]),e._v(" "),r("p",[e._v('The Docker deployment package contains a sequence software (referred to as "components") required for Docker to run. The important information such as the component name, installation directory path, configuration file path, port, version, etc. are listed below.')]),e._v(" "),r("blockquote",[r("p",[e._v("Docker-Server, Docker-Agent, Docker-Web have included for this deployment solution")])]),e._v(" "),r("h2",{attrs:{id:"path"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#path"}},[e._v("#")]),e._v(" Path")]),e._v(" "),r("h3",{attrs:{id:"docker"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#docker"}},[e._v("#")]),e._v(" Docker")]),e._v(" "),r("p",[e._v("Docker root directory: "),r("em",[e._v("/var/lib/docker")]),r("br"),e._v("\nDocker image directory: "),r("em",[e._v("/var/lib/docker/image")]),r("br"),e._v("\nDocker daemon.json: please create it when you need and save to to the directory "),r("em",[e._v("/etc/docker")])]),e._v(" "),r("h3",{attrs:{id:"portainer"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#portainer"}},[e._v("#")]),e._v(" Portainer")]),e._v(" "),r("p",[e._v("Portainer Volume: "),r("em",[e._v("/var/lib/docker/volumes/portainer_data/_data")])]),e._v(" "),r("h2",{attrs:{id:"ports"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ports"}},[e._v("#")]),e._v(" Ports")]),e._v(" "),r("p",[e._v("You can control(open or shut down) ports by "),r("strong",[r("a",{attrs:{href:"https://support.websoft9.com/docs/faq/tech-instance.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Security Group Setting"),r("OutboundLink")],1)]),e._v(" of your Cloud Server whether the port can be accessed from Internet.")]),e._v(" "),r("p",[e._v("These ports should be opened for this application:")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("Name")]),e._v(" "),r("th",[e._v("Number")]),e._v(" "),r("th",[e._v("Use")]),e._v(" "),r("th",[e._v("Necessity")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("Portainer")]),e._v(" "),r("td",[e._v("9000")]),e._v(" "),r("td",[e._v("Remote connect Portainer")]),e._v(" "),r("td",[e._v("Optional")])])])]),e._v(" "),r("h2",{attrs:{id:"version"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#version"}},[e._v("#")]),e._v(" Version")]),e._v(" "),r("p",[e._v("You can see the version from product page of Marketplace. However, after being deployed to your server, the components will be automatically updated, resulting in a certain change in the version number. Therefore, the exact version number should be viewed by running the command on the server:")]),e._v(" "),r("div",{staticClass:"language-shell extra-class"},[r("pre",{pre:!0,attrs:{class:"language-shell"}},[r("code",[r("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Linux Version")]),e._v("\nlsb_release -a\n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Docker Version")]),e._v("\ndocker -v\n")])])])])}),[],!1,null,null,null);t.default=o.exports}}]);