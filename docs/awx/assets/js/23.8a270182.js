(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{223:function(s,t,a){"use strict";a.r(t);var e=a(0),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"服务启停"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#服务启停"}},[s._v("#")]),s._v(" 服务启停")]),s._v(" "),a("p",[s._v("使用由Websoft9提供的AWX部署方案，可能需要用到的服务如下：")]),s._v(" "),a("h2",{attrs:{id:"docker-compose"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose"}},[s._v("#")]),s._v(" Docker Compose")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#创建容器")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" docker-compose up\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#创建容器并重建有变化的容器")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" docker-compose up -d\n")])])]),a("h2",{attrs:{id:"docker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker"}},[s._v("#")]),s._v(" Docker")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl start docker\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl restart docker\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl stop docker\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl status docker\n")])])]),a("h3",{attrs:{id:"awx-容器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#awx-容器"}},[s._v("#")]),s._v(" AWX 容器")]),s._v(" "),a("blockquote",[a("p",[s._v("终止命令 "),a("code",[s._v("stop")]),s._v(" 会从进程中释放容器的资源，但不会删除容器")])]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#AWX-主程序")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" docker pause awx_task\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" docker stop awx_task\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" docker restart awx_task\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#AWX-Web界面")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" docker pause awx_web\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" docker stop awx_web\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" docker restart awx_web\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#RabbitMQ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" docker pause awx_rabbitmq\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" docker stop awx_rabbitmq\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" docker restart awx_rabbitmq\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#PostgreSQL")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" docker pause awx_postgres\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" docker stop awx_postgres\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" docker restart awx_postgres\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#PostgreSQL")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" docker pause awx_Memcached\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" docker stop awx_Memcached\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" docker restart awx_Memcached\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);