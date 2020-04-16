(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{280:function(e,t,s){"use strict";s.r(t);var n=s(28),a=Object(n.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"初始化验证"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#初始化验证"}},[e._v("#")]),e._v(" 初始化验证")]),e._v(" "),s("p",[e._v("在云服务器上部署 Memcached 预装包之后，请参考下面的步骤快速入门。")]),e._v(" "),s("h2",{attrs:{id:"准备"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#准备"}},[e._v("#")]),e._v(" 准备")]),e._v(" "),s("ol",[s("li",[e._v("在云控制台获取您的 "),s("strong",[e._v("服务器公网IP地址")])]),e._v(" "),s("li",[e._v("在云控制台安全组中，检查 "),s("strong",[e._v("Inbound（入）规则")]),e._v(" 下的 "),s("strong",[e._v("TCP:6379")]),e._v(" 端口是否开启")]),e._v(" "),s("li",[e._v("若想用域名访问 Memcached，请先到 "),s("strong",[e._v("域名控制台")]),e._v(" 完成一个域名解析")])]),e._v(" "),s("h2",{attrs:{id:"memcached-检验"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#memcached-检验"}},[e._v("#")]),e._v(" Memcached 检验")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("通过 SSH 工具连接 Memcached服务器")])]),e._v(" "),s("li",[s("p",[e._v("运行 telnet 命令，连接 Memcached")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("telnet 127.0.0.1 11211\nTrying 127.0.0.1...\nConnected to 127.0.0.1.\nEscape character is '^]'.\n")])])])]),e._v(" "),s("li",[s("p",[e._v("连接成功，系统进入 Memcached 命令行输入状态，输入命令 "),s("code",[e._v("stats")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("STAT pid 651\nSTAT uptime 891\nSTAT time 1585225158\nSTAT version 1.4.15\nSTAT libevent 2.0.21-stable\nSTAT pointer_size 64\nSTAT rusage_user 0.005846\nSTAT rusage_system 0.017539\nSTAT curr_connections 10\nSTAT total_connections 12\nSTAT connection_structures 11\nSTAT reserved_fds 20\nSTAT cmd_get 0\nSTAT cmd_set 0\nSTAT cmd_flush 0\nSTAT cmd_touch 0\nSTAT get_hits 0\nSTAT get_misses 0\nSTAT delete_misses 0\nSTAT delete_hits 0\nSTAT incr_misses 0\nSTAT incr_hits 0\nSTAT decr_misses 0\nSTAT decr_hits 0\nSTAT cas_misses 0\nSTAT cas_hits 0\nSTAT cas_badval 0\nSTAT touch_hits 0\nSTAT touch_misses 0\nSTAT auth_cmds 0\nSTAT auth_errors 0\nSTAT bytes_read 52\nSTAT bytes_written 21\nSTAT limit_maxbytes 67108864\nSTAT accepting_conns 1\nSTAT listen_disabled_num 0\nSTAT threads 4\nSTAT conn_yields 0\nSTAT hash_power_level 16\nSTAT hash_bytes 524288\nSTAT hash_is_expanding 0\nSTAT bytes 0\nSTAT curr_items 0\nSTAT total_items 0\nSTAT expired_unfetched 0\nSTAT evicted_unfetched 0\nSTAT evictions 0\nSTAT reclaimed 0\nEND\n\n")])])])]),e._v(" "),s("li",[s("p",[e._v("输入命令 "),s("code",[e._v("quit")]),e._v(" 退出系统")])])]),e._v(" "),s("blockquote",[s("p",[e._v("需要了解更多Memcached的使用，请参考："),s("a",{attrs:{href:"https://github.com/memcached/memcached/wiki",target:"_blank",rel:"noopener noreferrer"}},[e._v("Memcached Wiki"),s("OutboundLink")],1)])]),e._v(" "),s("h2",{attrs:{id:"常见问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常见问题"}},[e._v("#")]),e._v(" 常见问题")]),e._v(" "),s("h4",{attrs:{id:"telnet-无法连接-memcached？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#telnet-无法连接-memcached？"}},[e._v("#")]),e._v(" Telnet 无法连接 Memcached？")]),e._v(" "),s("p",[e._v("请检查服务器是否已安装telnet，同时查看11211端口是否开启")]),e._v(" "),s("h4",{attrs:{id:"本部署是否提供web版的可视化管理工具？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#本部署是否提供web版的可视化管理工具？"}},[e._v("#")]),e._v(" 本部署是否提供Web版的可视化管理工具？")]),e._v(" "),s("p",[e._v("没有，我们暂时还没有发现稳定可靠的 Web-GUI for Memcached")])])}),[],!1,null,null,null);t.default=a.exports}}]);