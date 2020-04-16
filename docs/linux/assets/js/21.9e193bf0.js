(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{343:function(a,t,s){"use strict";s.r(t);var e=s(33),r=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"php"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#php"}},[a._v("#")]),a._v(" PHP")]),a._v(" "),s("p",[a._v("一下内容适合于基于yum安装的PHP")]),a._v(" "),s("h2",{attrs:{id:"安装与升级"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装与升级"}},[a._v("#")]),a._v(" 安装与升级")]),a._v(" "),s("h3",{attrs:{id:"安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[a._v("#")]),a._v(" 安装")]),a._v(" "),s("p",[a._v("PHP提供yum安装和源码编译安装方式。\nyum安装方式简单、易升级，故我们推荐此升级方式")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("# Fedora/CentOS/Red Hat Enterprise Linux\n\n\n# Ubuntu/Debian\n\n")])])]),s("blockquote",[s("p",[a._v("如果您使用了Websoft9提供的PHP相关镜像，说明PHP已经存在，请勿再次安装PHP。")])]),a._v(" "),s("h3",{attrs:{id:"版本升级"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#版本升级"}},[a._v("#")]),a._v(" 版本升级")]),a._v(" "),s("p",[a._v("在实际使用过程中，会遇到升级 PHP 大版本的情形，如：从 PHP5.5->PHP5.6 或 PHP5.6->PHP7.0等。对于我们提供的LAMP环境来说，升级方法非常简单。")]),a._v(" "),s("p",[a._v("以PHP5.5->PHP5.6为例，具体如下：")]),a._v(" "),s("ol",[s("li",[a._v("连接到Linux服务器后，依次执行如下命令：")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("//首先，禁用当前 PHP55 源\nyum-config-manager --disable remi-php55   \n\n//然后，启用需升级 PHP56 源\nyum-config-manager --enable remi-php56     \n\n//最后，升级更新\nyum update -y\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[a._v("为了确保升级成功，请检查升级后的 PHP 版本")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("php -v\n")])])]),s("blockquote",[s("p",[a._v("以上方案也适用于 PHP7.0->PHP7.2")])]),a._v(" "),s("h3",{attrs:{id:"版本降级"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#版本降级"}},[a._v("#")]),a._v(" 版本降级")]),a._v(" "),s("p",[a._v("以PHP7.0降级到PHP5.6为例，具体步骤如下：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("//禁用当前7.0版本的下载源\nyum-config-manager --disable remi-php70\n\n//然后，启用需降级的版本 PHP56 源\nyum-config-manager --enable remi-php56     \n\n# 卸载PHP7.0\nyum remove php-* -y\n\n# 安装主要的PHP模块\nyum -y install php-pecl-imagick php php-mysql php-common php-gd php-mbstring php-mcrypt php-devel php-xml php-pdo php-bcmath php-pear php-opcache php-ldap php-odbc php-xmlrpc php-json php-mysqlnd php-pdo php-pdo_dblib php-recode php-snmp php-soap php-pecl-zip php-curl php-imap\n\n# 安装其他包\npear install Mail\npear install net_smtp\n")])])]),s("h2",{attrs:{id:"配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[a._v("#")]),a._v(" 配置")]),a._v(" "),s("p",[a._v("对PHP来说，配置主要通过修改"),s("code",[a._v("php.ini")]),a._v("文件来实现。")]),a._v(" "),s("p",[a._v("当我们在运行PHP应用的时候，常常会碰到类似提示 "),s("strong",[a._v("“超过最大的文件大小”")]),a._v(", "),s("strong",[a._v("“运行超时”")]),a._v(", **“超过内存限制”**等，这个时候就需要php.ini来进行最大值的调整。")]),a._v(" "),s("p",[a._v("以CentOS上的PHP为例，php.ini路径为：/etc/php.ini")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 修改文件大小限制，注意数字后面需要带上单位M")]),a._v("\npost_max_size "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" 16M\nupload_max_filesize "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" 16M\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 修改超时时间限制")]),a._v("\nmax_execution_time "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("90")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 修改内存限制")]),a._v("\nmemory_limit – Minimum: 256M\n")])])]),s("h2",{attrs:{id:"扩展"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#扩展"}},[a._v("#")]),a._v(" 扩展")]),a._v(" "),s("p",[a._v("PHP的扩展（extension）这里应称为“模块（module）”是 C、C++ 编写的功能合集，扩展大多以动态链接 .dll、.so 形式加载。php扩展是php核心并不支持的功能，然后可以通过扩展的方式进行扩展PHP的功能，常见的扩展如MySQL，gb2等等。")]),a._v(" "),s("h3",{attrs:{id:"查询"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查询"}},[a._v("#")]),a._v(" 查询")]),a._v(" "),s("p",[a._v("通过phpinfo()函数 或 执行"),s("code",[a._v("php -m")]),a._v(" 命令可以查看扩展")]),a._v(" "),s("h3",{attrs:{id:"安装-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装-2"}},[a._v("#")]),a._v(" 安装")]),a._v(" "),s("h3",{attrs:{id:"启用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#启用"}},[a._v("#")]),a._v(" 启用")]),a._v(" "),s("h2",{attrs:{id:"包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#包"}},[a._v("#")]),a._v(" 包")]),a._v(" "),s("p",[a._v("包则是直接引入通过 require/include 方式加載")]),a._v(" "),s("h3",{attrs:{id:"composer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#composer"}},[a._v("#")]),a._v(" Composer")]),a._v(" "),s("p",[a._v('Composer 是 PHP 的一个包管理和包依赖管理的工具 ( 官方的定义是 "Dependency Manager for PHP" ), CentOS 的 yum, Node.js 的 npm 和 Python 的 pip.')]),a._v(" "),s("h4",{attrs:{id:"安装-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装-3"}},[a._v("#")]),a._v(" 安装")]),a._v(" "),s("h4",{attrs:{id:"使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[a._v("#")]),a._v(" 使用")]),a._v(" "),s("h4",{attrs:{id:"更新"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#更新"}},[a._v("#")]),a._v(" 更新")]),a._v(" "),s("h3",{attrs:{id:"pear"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pear"}},[a._v("#")]),a._v(" PEAR")]),a._v(" "),s("h2",{attrs:{id:"缓存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#缓存"}},[a._v("#")]),a._v(" 缓存")]),a._v(" "),s("p",[a._v("OPcache\nXCache\nAPCU\neAccelerator")]),a._v(" "),s("h2",{attrs:{id:"开发工具"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开发工具"}},[a._v("#")]),a._v(" 开发工具")])])}),[],!1,null,null,null);t.default=r.exports}}]);