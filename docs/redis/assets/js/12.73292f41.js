(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{212:function(t,e,a){"use strict";a.r(e);var s=a(0),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"redis-deployment-architecture"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redis-deployment-architecture"}},[t._v("#")]),t._v(" Redis deployment architecture")]),t._v(" "),a("p",[t._v("A picture to see the typical Redis deployment architecture:")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://libs.websoft9.com/Websoft9/DocsPicture/zh/redis-cluster-architecture.png",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"single-database"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#single-database"}},[t._v("#")]),t._v(" Single database")]),t._v(" "),a("p",[t._v("单机是最简单的一种模式")]),t._v(" "),a("h2",{attrs:{id:"ha-database"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ha-database"}},[t._v("#")]),t._v(" HA database")]),t._v(" "),a("p",[t._v("对Redis来说，主从也就是我们所说的主从复制，主服务器数据更新后根据配置和策略，自动同步到备份服务的一种机制。通常也被称之为：Master-Slave，其中Master以写为主，Slave以读为主。")]),t._v(" "),a("p",[t._v("这样做的好处显而易见：")]),t._v(" "),a("ul",[a("li",[t._v("读写分离")]),t._v(" "),a("li",[t._v("容灾恢复")])]),t._v(" "),a("p",[t._v("详细部署方案请参考官方文档：https://redis.io/topics/replication")]),t._v(" "),a("h2",{attrs:{id:"clustered-database"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#clustered-database"}},[t._v("#")]),t._v(" Clustered database")]),t._v(" "),a("p",[t._v("Redis所以很适合用来充当整个互联网架构中各级之间的Cache，为了在大流量访问下提供稳定的业务，Redis集群化是存储的必然形态。\nRedis Cluster 是官方提供的一种集群方案，通常具有 高可用、可扩展性、分布式、容错等特性。")]),t._v(" "),a("p",[t._v("详细部署方案请参考官方文档：https://redis.io/topics/sentinel")]),t._v(" "),a("h2",{attrs:{id:"ha-clustered-database"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ha-clustered-database"}},[t._v("#")]),t._v(" HA Clustered database")]),t._v(" "),a("p",[t._v("高可用性集群即分布式集群，即多个集群组合。")])])}),[],!1,null,null,null);e.default=r.exports}}]);