(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{226:function(t,a,e){"use strict";e.r(a);var r=e(0),s=Object(r.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"更多"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#更多"}},[t._v("#")]),t._v(" 更多...")]),t._v(" "),e("p",[t._v("下面每一个方案，都经过实践证明行之有效，希望能够对你有帮助")]),t._v(" "),e("h2",{attrs:{id:"域名绑定"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#域名绑定"}},[t._v("#")]),t._v(" 域名绑定")]),t._v(" "),e("p",[t._v("绑定域名的前置条件是：GitLab已经可以通过解析后的域名访问。")]),t._v(" "),e("p",[t._v("虽然如此，从服务器安全和后续维护考量，"),e("strong",[t._v("域名绑定")]),t._v("步骤不可省却")]),t._v(" "),e("p",[t._v("GitLab 域名绑定操作步骤（"),e("a",{attrs:{href:"https://docs.gitlab.com/omnibus/settings/configuration.html#configuring-the-external-url-for-gitlab",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方文档"),e("OutboundLink")],1),t._v("）：")]),t._v(" "),e("ol",[e("li",[t._v("通过 SSH 或 SFTP 登录云服务器")]),t._v(" "),e("li",[t._v("修改 "),e("router-link",{attrs:{to:"/zh/stack-components.html#gitlab"}},[t._v("GitLab 配置文件")]),t._v("："),e("em",[t._v("/etc/gitlab/gitlab.rb")]),t._v("，将其中的 "),e("strong",[t._v("external_url")]),t._v(" 项的值 "),e("em",[t._v("http://gitlab.example.com")]),t._v(" 修改为你的域名"),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('external_url "http://gitlab.example.com" # 改为自定义域名\n...\n')])])])],1),t._v(" "),e("li",[t._v("保存配置文件，重启下面的服务"),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("sudo gitlab-ctl reconfigure\n")])])])])]),t._v(" "),e("h2",{attrs:{id:"迁移"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#迁移"}},[t._v("#")]),t._v(" 迁移")]),t._v(" "),e("p",[t._v("暂无")])])}),[],!1,null,null,null);a.default=s.exports}}]);