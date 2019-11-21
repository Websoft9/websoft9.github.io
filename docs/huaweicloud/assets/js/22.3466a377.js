(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{197:function(t,a,s){"use strict";s.r(a);var r=s(0),e=Object(r.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"快照与镜像"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#快照与镜像","aria-hidden":"true"}},[t._v("#")]),t._v(" 快照与镜像")]),t._v(" "),s("p",[t._v("之所以我们把快照和镜像放在一起描述，是因为这两者有一定的关联，甚至说有互生关系。")]),t._v(" "),s("h2",{attrs:{id:"关系"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#关系","aria-hidden":"true"}},[t._v("#")]),t._v(" 关系")]),t._v(" "),s("p",[t._v("此处不对快照和镜像进行抽象概念描述，只列出如下几个关键信息点：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("基于磁盘可以创建一个快照。")]),t._v(" "),s("p",[t._v("快照是对磁盘进行“拍照”，顾名思义就是备份某个时间点卷（磁盘）的数据，是一种备份手段")])]),t._v(" "),s("li",[s("p",[t._v("基于快照可以创建一个镜像，而镜像无法直接转换成快照。")])]),t._v(" "),s("li",[s("p",[t._v("基于镜像可以直接创建一个实例，基于实例也可以直接创建一个镜像")])])]),t._v(" "),s("p",[t._v("总结：（磁盘--\x3e快照） --\x3e （镜像--实例）")]),t._v(" "),s("h2",{attrs:{id:"创建快照"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建快照","aria-hidden":"true"}},[t._v("#")]),t._v(" 创建快照")]),t._v(" "),s("p",[t._v("对于阿里云来说，基于磁盘来创建快照")]),t._v(" "),s("ol",[s("li",[t._v("登录到阿里云控制台->ECS，点击"),s("strong",[t._v("存储与快照")]),t._v("下的"),s("strong",[t._v("云盘")])]),t._v(" "),s("li",[t._v("点击“创建快照”操作\n"),s("img",{attrs:{src:"https://libs.websoft9.com/Websoft9/DocsPicture/zh/aliyun/aliyun-disktosnapshot-websoft9.png",alt:"img"}})]),t._v(" "),s("li",[t._v("根据提示完成后续步骤")])]),t._v(" "),s("h2",{attrs:{id:"创建镜像"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建镜像","aria-hidden":"true"}},[t._v("#")]),t._v(" 创建镜像")]),t._v(" "),s("p",[t._v("前面讲过，基于快照可以创建镜像，基于实例也可以创建镜像")]),t._v(" "),s("h3",{attrs:{id:"实例创建镜像"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实例创建镜像","aria-hidden":"true"}},[t._v("#")]),t._v(" 实例创建镜像")]),t._v(" "),s("ol",[s("li",[t._v("登录到阿里云控制台->ECS，找到需要操作的目标实例")]),t._v(" "),s("li",[t._v("依次打开：更多->磁盘和镜像->创建自定义镜像\n"),s("img",{attrs:{src:"https://libs.websoft9.com/Websoft9/DocsPicture/zh/aliyun/aliyun-createimage-websoft9.png",alt:"创建自定义镜像"}})]),t._v(" "),s("li",[t._v("根据提示完成后续操作")])]),t._v(" "),s("h3",{attrs:{id:"快照创建镜像"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#快照创建镜像","aria-hidden":"true"}},[t._v("#")]),t._v(" 快照创建镜像")]),t._v(" "),s("ol",[s("li",[t._v("登录到阿里云控制台->ECS，点击"),s("strong",[t._v("存储与快照")]),t._v("下的"),s("strong",[t._v("快照")])]),t._v(" "),s("li",[t._v("选择所需的快照，对它进行“创建自定义镜像”操作\n"),s("img",{attrs:{src:"https://libs.websoft9.com/Websoft9/DocsPicture/zh/aliyun/aliyun-snapshottoimage-websoft9.png",alt:"打开快照"}})]),t._v(" "),s("li",[t._v("根据提示完成后续操作")])])])},[],!1,null,null,null);a.default=e.exports}}]);