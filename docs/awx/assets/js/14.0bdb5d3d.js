(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{212:function(t,a,e){"use strict";e.r(a);var o=e(0),s=Object(o.a)({},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"owncloud-migrate-to-data-disk"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#owncloud-migrate-to-data-disk","aria-hidden":"true"}},[t._v("#")]),t._v(" OwnCloud migrate to data disk")]),t._v(" "),e("p",[t._v("OwnCloud is installed in the system disk default,if there not enough storage space for this disk,you must delete unused files or add data disk for OwnCloud,then migrate all data to data disk")]),t._v(" "),e("blockquote",[e("p",[t._v("Be sure to make a snapshot backup before migrating data, otherwise the consequences of the migration will be unimaginable.")])]),t._v(" "),e("p",[t._v("To migrate to the data disk, we offer two options:")]),t._v(" "),e("p",[e("a",{attrs:{name:"38c5814d"}})]),t._v(" "),e("h3",{attrs:{id:"solution1-change-the-storage-path-of-owncloud-to-the-data-disk"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#solution1-change-the-storage-path-of-owncloud-to-the-data-disk","aria-hidden":"true"}},[t._v("#")]),t._v(" Solution1:Change the storage path of OwnCloud to the data disk")]),t._v(" "),e("p",[t._v("OwnCloud's document data is stored by default to: /data/wwwroot/owncloud/data. This solution implements the target by adding a directory (corresponding to the data disk) under OwnCloud and then modifying the default storage path. The specific operations are as follows:")]),t._v(" "),e("ol",[e("li",[t._v("Buy the data disk in advance, and then go to the cloud vendor console to do a data disk mount to the server")]),t._v(" "),e("li",[t._v("Stop the Apache Service")])]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("systemctl stop httpd\n")])])]),e("ol",[e("li",[t._v("Create a new folder in the /data/wwwroot/owncloud directory via the SFTP tool. The name suggests: bigdata，this bigdata folder is the default document storage location after migration.")]),t._v(" "),e("li",[t._v("Mount the data disk to: "),e("em",[t._v("/data/wwwroot/owncloud/bigdata")])]),t._v(" "),e("li",[t._v("Copy or Cut "),e("em",[t._v("owncloud/data")]),t._v("  to "),e("em",[t._v("owncloud/bigdata")])])]),t._v(" "),e("blockquote",[e("p",[t._v("If the data is large, clipping or copying may fail.")])]),t._v(" "),e("ol",[e("li",[t._v("Modify the data storage directory location in the Owncloud configuration file("),e("em",[t._v("/data/wwwroot/owncloud/config")]),t._v(")")]),t._v(" "),e("li",[t._v("Enable the Apache Service")])]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("systemctl start httpd\n")])])]),e("p",[e("a",{attrs:{name:"b512eb42"}})]),t._v(" "),e("h3",{attrs:{id:"solution2-transfer-the-server-s-data-directory-to-the-data-disk"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#solution2-transfer-the-server-s-data-directory-to-the-data-disk","aria-hidden":"true"}},[t._v("#")]),t._v(" Solution2:Transfer the server's /data directory to the data disk")]),t._v(" "),e("p",[t._v("This scenario will transfer all the sites (including OwnCloud) and databases on the server to the data disk.")])])},[],!1,null,null,null);a.default=s.exports}}]);