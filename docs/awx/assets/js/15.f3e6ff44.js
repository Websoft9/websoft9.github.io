(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{215:function(e,a,t){"use strict";t.r(a);var s=t(0),r=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"update-upgrade"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#update-upgrade"}},[e._v("#")]),e._v(" Update & Upgrade")]),e._v(" "),t("p",[e._v("Updates and upgrades are one of the maintenance tasks for sytem. Programs that are not upgraded for a long time, like buildings that are not maintained for a long time, will accelerate aging and gradually lose functionality until they are unavailable.")]),e._v(" "),t("p",[e._v("You should know the differences between the terms "),t("strong",[e._v("Update")]),e._v(" and "),t("strong",[e._v("Upgrade")]),e._v("("),t("a",{attrs:{href:"https://support.websoft9.com/docs/faq/tech-upgrade.html#update-vs-upgrade",target:"_blank",rel:"noopener noreferrer"}},[e._v("Extended reading"),t("OutboundLink")],1),e._v(")")]),e._v(" "),t("ul",[t("li",[e._v("Operating system patching is "),t("strong",[e._v("Update")]),e._v(", Ubuntu16.04 to Ubuntu18.04 is "),t("strong",[e._v("Upgrade")])]),e._v(" "),t("li",[e._v("MySQL5.6.25 to MySQL5.6.30 is "),t("strong",[e._v("Update")]),e._v(", MySQL5.6 to MySQL5.7 is "),t("strong",[e._v("Upgrade")])])]),e._v(" "),t("p",[e._v("For AWX maintenance, focus on the following two Update & Upgrade jobs")]),e._v(" "),t("ul",[t("li",[e._v("Sytem update(Operating System and Running Environment)")]),e._v(" "),t("li",[e._v("AWX upgrade")])]),e._v(" "),t("h2",{attrs:{id:"system-update"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#system-update"}},[e._v("#")]),e._v(" System Update")]),e._v(" "),t("p",[e._v("Run an update command to complete the system update:")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#For Ubuntu")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt")]),e._v(" update "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt")]),e._v(" upgrade -y\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#For Centos&Redhat")]),e._v("\nyum update -y\n")])])]),t("blockquote",[t("p",[e._v("This deployment package is pre-configured with a scheduled task for automatic updates. If you want to remove the automatic update, please delete the corresponding Cron")])]),e._v(" "),t("h2",{attrs:{id:"awx-upgrade"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#awx-upgrade"}},[e._v("#")]),e._v(" AWX Upgrade")]),e._v(" "),t("p",[e._v("Upgrading AWX involves rerunning the install playbook. Download a newer release from https://github.com/ansible/awx/releases and re-populate the inventory file with your customized variables.")]),e._v(" "),t("p",[e._v("For convenience, you can create a file called "),t("em",[e._v("update-vars.yml")]),e._v(":")]),e._v(" "),t("ol",[t("li",[e._v("Use "),t("strong",[e._v("SFTP")]),e._v(" to connect Server")]),e._v(" "),t("li",[e._v("Go to the directory "),t("em",[e._v("/data/awx/")]),e._v(" and update this repository from Github"),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("sudo cd /data/awx && git pull\n")])])])]),e._v(" "),t("li",[e._v("Go to the directory: "),t("em",[e._v("/data/awx/installer")])]),e._v(" "),t("li",[e._v("Create new file named "),t("em",[e._v("update-vars.yml")]),e._v(" and add the template to it like below(make sure all password is your correct password)"),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("admin_password: 'adminpass'\npg_password: 'pgpass'\nrabbitmq_password: 'rabbitpass'\nsecret_key: 'mysupersecret'\n")])])])]),e._v(" "),t("li",[e._v("Run the update commands like below"),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("ansible-playbook -i inventory install.yml -e @update-vars.yml\n")])])])])])])}),[],!1,null,null,null);a.default=r.exports}}]);