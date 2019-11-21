(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{200:function(e,t,a){"use strict";a.r(t);var o=a(0),n=Object(o.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"backup-restore"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#backup-restore","aria-hidden":"true"}},[e._v("#")]),e._v(" Backup & Restore")]),e._v(" "),a("h2",{attrs:{id:"why"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#why","aria-hidden":"true"}},[e._v("#")]),e._v(" Why")]),e._v(" "),a("p",[e._v('Users with experience in Cloud Server operation and maintenance understand the truth: "IT systems can\'t maintain 100% stability for a long time. Any system may fail, but the probability of failure is different and the degree of harm is different."')]),e._v(" "),a("p",[e._v("When system failure, we first seek the help of a professional to quickly repair and recovery it, but unfortunately, some failure cannot be solved smoothly or even in the expected time period.")]),e._v(" "),a("p",[e._v("Obviously, there is a backup is so important, it can guarantee that the system can be restored to the normal state through the existing backup file when the failure occurs, which means that the huge loss due to the unrecoverable can be avoided.")]),e._v(" "),a("blockquote",[a("p",[e._v("Must develop the habit of backup, there is no luck")])]),e._v(" "),a("h2",{attrs:{id:"how"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how","aria-hidden":"true"}},[e._v("#")]),e._v(" How")]),e._v(" "),a("p",[e._v("From the specific backup object, due to the existence of four backup objects on the server: "),a("strong",[e._v("operating system, environment software, database and application")]),e._v(", each object may have unpredictable failures that cannot be solved as expected.")]),e._v(" "),a("p",[e._v("Based on the backup object, we believe that the following two backup measures are necessary:")]),e._v(" "),a("h3",{attrs:{id:"automation-backup-for-instance"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#automation-backup-for-instance","aria-hidden":"true"}},[e._v("#")]),e._v(" Automation Backup for Instance")]),e._v(" "),a("p",[e._v("Automation Backups for Instance is using the "),a("strong",[e._v("Snapshot")]),e._v(" or "),a("strong",[e._v("Cloud Server Backup Service")]),e._v(" on your Cloud Platform, A snapshot is a full, read-only copy of a disk. You can take a snapshot of an OS or data disk to use as a backup, or to troubleshoot instance issues.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("- Backup scope: All data on a Disk\n- Backup effect: Very Good\n- Backup frequency: Automatic backup per hour if you need\n- Recovery methond: One key recovery on Cloud platform\n- Skill requirement: Very easy \n- Automation or Manual: Fully automated on backup strategy\n")])])]),a("p",[e._v("Different Cloud Platform's snapshot settings slightly different, refer to "),a("a",{attrs:{href:"https://support.websoft9.com/docs/faq/tech-instance.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cloud platform backup solution"),a("OutboundLink")],1)]),e._v(" "),a("h3",{attrs:{id:"manual-backup-for-application"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#manual-backup-for-application","aria-hidden":"true"}},[e._v("#")]),e._v(" Manual backup for application")]),e._v(" "),a("p",[e._v("Manual backup for application is based on the "),a("strong",[e._v("Exporting source code and database of application")]),e._v(" to achieve a minimized backup scheme.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("- Backup scope: Source code and database of application\n- Backup effect: Good\n- Backup frequency: You can operate when you need\n- Recovery methond: Import\n- Skill requirement: Easy \n- Automation: manual\n")])])]),a("p",[e._v("The general manual backup operation steps are as follows:")]),e._v(" "),a("ol",[a("li",[e._v("Compress and download the entire "),a("em",[e._v("/data/wwwroot/nextcloud")]),e._v(" directory by SFTP")]),e._v(" "),a("li",[e._v("Compress and download the entire "),a("em",[e._v("/data/wwwroot/nextcloud/data")]),e._v(" directory by SFTP")]),e._v(" "),a("li",[e._v("Export Nextcloud's database by "),a("router-link",{attrs:{to:"/admin-mysql.html"}},[e._v("phpMyAdmin")]),e._v(" "),a("img",{attrs:{src:"https://libs.websoft9.com/Websoft9/DocsPicture/en/phpmyadmin/phpmyadmin-export-websoft9.png",alt:""}})],1),e._v(" "),a("li",[e._v("Put the source code file, data file and database file in the same folder, named according to the date")]),e._v(" "),a("li",[e._v("Backup completed")])]),e._v(" "),a("h3",{attrs:{id:"nextcloud-online-backup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nextcloud-online-backup","aria-hidden":"true"}},[e._v("#")]),e._v(" Nextcloud online backup")]),e._v(" "),a("p",[e._v("This section provides Nextcloud online backup solution")]),e._v(" "),a("ol",[a("li",[e._v("Log in Nextcloud console as administrator, install "),a("strong",[a("a",{attrs:{href:"https://apps.nextcloud.com/apps/ownbackup",target:"_blank",rel:"noopener noreferrer"}},[e._v("OwnBackup"),a("OutboundLink")],1)]),e._v(" "),a("img",{attrs:{src:"https://libs.websoft9.com/Websoft9/DocsPicture/en/nextcloud/nextcloud-backupapps-websoft9.png",alt:""}})]),e._v(" "),a("li",[e._v("Go to【Admin】>【OwnBackup】, start backup, and you can restore it also\n"),a("img",{attrs:{src:"https://libs.websoft9.com/Websoft9/DocsPicture/en/nextcloud/nextcloud-backupapp002-websoft9.png",alt:""}})])])])},[],!1,null,null,null);t.default=n.exports}}]);