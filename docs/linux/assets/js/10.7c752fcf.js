(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{330:function(t,s,e){"use strict";e.r(s);var a=e(33),r=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"磁盘与文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#磁盘与文件"}},[t._v("#")]),t._v(" 磁盘与文件")]),t._v(" "),e("h2",{attrs:{id:"磁盘管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#磁盘管理"}},[t._v("#")]),t._v(" 磁盘管理")]),t._v(" "),e("h3",{attrs:{id:"分区"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#分区"}},[t._v("#")]),t._v(" 分区")]),t._v(" "),e("p",[t._v("磁盘分区就是将物理磁盘划分为多个逻辑区域，例如将一块SSD磁盘划分：sda1、sda2、sda3、sda4等4个分区。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("#查看磁盘分区\nfdisk -l\n")])])]),e("h3",{attrs:{id:"格式化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#格式化"}},[t._v("#")]),t._v(" 格式化")]),t._v(" "),e("p",[t._v("格式化指将磁盘分区格式化成不同的文件系统，以方便操作系统集中组织和管理文件。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("#将/dev下的 sda5 磁盘格式化为 ext2 的格式类型\nmkfs.ext2 /dev/sda5\n")])])]),e("h3",{attrs:{id:"挂载"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#挂载"}},[t._v("#")]),t._v(" 挂载")]),t._v(" "),e("p",[t._v("对于Linux系统来说，挂载是将格式化后的分区与系统中的目录匹配起来，使得访问这个目录就相当于访问这个分区。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("#将 /dev/sda5 挂载到 test 中\nmount /dev/sda5/test\n")])])]),e("h3",{attrs:{id:"文件系统"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#文件系统"}},[t._v("#")]),t._v(" 文件系统")]),t._v(" "),e("p",[t._v("Linux除支持Ext4文件系统外，还支持其他各种不同的文件系统，例如集群文件系统以及加密文件系统等。Linux将各种不同文件系统的操作和管理纳入到一个统一的框架中，使得用户程序可以通过同一个文件系统界面，也就是同一组系统调用，能够对各种不同的文件系统以及文件进行操作。这样，用户程序就可以不关心各种不同文件系统的实现细节，而使用系统提供的统一、抽象、虚拟的文件系统界面。这种统一的框架就是所谓的虚拟文件系统转换（Virtual Filesystem Switch），一般简称虚拟文件系统 (VFS)。虚拟文件系统描述如下所示：")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://libs.websoft9.com/Websoft9/DocsPicture/zh/linux/vfs-websoft9.png",alt:""}})]),t._v(" "),e("p",[t._v("Linux系统核心可以支持十多种文件系统类型，比如Btrfs、JFS、ReiserFS、ext、ext2、ext3、ext4、ISO9660、XFS、Minx、MSDOS、UMSDOS、VFAT、NTFS、HPFS、NFS、SMB、SysV、PROC等。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("#将系统内所有的文件系统列出来\ndf\nFilesystem      1K-blocks      Used Available Use% Mounted on\n/dev/hdc2         9920624   3823112   5585444  41% /\n/dev/hdc3         4956316    141376   4559108   4% /home\n/dev/hdc1          101086     11126     84741  12% /boot\ntmpfs              371332         0    371332   0% /dev/shm\n\n#将系统内的所有特殊文件格式及名称都列出来\n\ndf -aT\nFilesystem    Type 1K-blocks    Used Available Use% Mounted on\n/dev/hdc2     ext3   9920624 3823112   5585444  41% /\nproc          proc         0       0         0   -  /proc\nsysfs        sysfs         0       0         0   -  /sys\ndevpts      devpts         0       0         0   -  /dev/pts\n/dev/hdc3     ext3   4956316  141376   4559108   4% /home\n/dev/hdc1     ext3    101086   11126     84741  12% /boot\ntmpfs        tmpfs    371332       0    371332   0% /dev/shm\nnone   binfmt_misc         0       0         0   -  /proc/sys/fs/binfmt_misc\nsunrpc  rpc_pipefs         0       0         0   -  /var/lib/nfs/rpc_pipefs\n")])])]),e("h2",{attrs:{id:"文件管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#文件管理"}},[t._v("#")]),t._v(" 文件管理")]),t._v(" "),e("h3",{attrs:{id:"拥有者"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#拥有者"}},[t._v("#")]),t._v(" 拥有者")]),t._v(" "),e("p",[t._v("规定文件只能被指定用户访问访问")]),t._v(" "),e("p",[t._v("范例：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("# 修改wwwroot文件夹所属的用户和用户组为nginx\nchown -R nginx.nginx /data/wwwroot\n")])])]),e("h3",{attrs:{id:"权限"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#权限"}},[t._v("#")]),t._v(" 权限")]),t._v(" "),e("p",[t._v("Linux系统对不同的用户访问同一文件（包括目录文件）的权限做了不同的规定。")]),t._v(" "),e("p",[t._v("范例：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("# 分别修改文件和文件夹的读、写、执行权限\nfind /data/wwwroot/default -type f -exec chmod 640 {} \\;\nfind /data/wwwroot/default -type d -exec chmod 750 {} \\;\n")])])]),e("h3",{attrs:{id:"操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#操作"}},[t._v("#")]),t._v(" 操作")]),t._v(" "),e("p",[t._v("对文件典型操作包括：")]),t._v(" "),e("p",[t._v("cp 拷贝文件和目录"),e("br"),t._v("\nrm 移除文件或目录"),e("br"),t._v("\nmv 移动文件与目录，或修改名称")]),t._v(" "),e("p",[t._v("查看文件有多种命令：")]),t._v(" "),e("p",[t._v("cat  由第一行开始显示文件内容"),e("br"),t._v("\ntac  从最后一行开始显示"),e("br"),t._v("\nnl   显示的时候，同时输出行号"),e("br"),t._v("\nmore 一页一页的显示文件内容"),e("br"),t._v("\nless 一页一页的显示文件内容+往前翻页\nhead 只显示头几行"),e("br"),t._v("\ntail 只显示尾几行")]),t._v(" "),e("h3",{attrs:{id:"目录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#目录"}},[t._v("#")]),t._v(" 目录")]),t._v(" "),e("p",[t._v("接下来我们就来看几个常见的处理目录的命令吧：")]),t._v(" "),e("p",[t._v("ls: 列出目录\ncd：切换目录\npwd：显示目前的目录\nmkdir：创建一个新的目录\nrmdir：删除一个空的目录\ncp: 复制文件或目录\nrm: 移除文件或目录\nmv: 移动文件与目录，或修改文件与目录的名称")]),t._v(" "),e("h3",{attrs:{id:"ftp"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ftp"}},[t._v("#")]),t._v(" FTP")]),t._v(" "),e("p",[t._v("FTP就是文件传输协议。用于互联网双向传输，控制文件下载空间在服务器复制文件从本地计算机或本地上传文件复制到服务器上的空间。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://libs.websoft9.com/Websoft9/DocsPicture/zh/linux/sftp-structure-websoft9.png",alt:""}})]),t._v(" "),e("p",[t._v("使用Linux，常见有SFTP和FTP两种文件传输模式。其中SFTP更为广泛，下面先介绍SFTP")]),t._v(" "),e("h4",{attrs:{id:"sftp"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sftp"}},[t._v("#")]),t._v(" SFTP")]),t._v(" "),e("p",[t._v("SFTP 即 SSH File Transfer Protocol，又称之 Secret File Transfer Protocol。SFTP是使用SSH协议的FTP模式，也称之为安全增强型的FTP。SFTP工具是Linux用户最喜欢的一种操作方式，Linux系统默认支持SFTP（即免安装）")]),t._v(" "),e("p",[t._v("下面以WinSCP这款SFTP工具为例，详细说明SFTP的使用。")]),t._v(" "),e("h5",{attrs:{id:"配置winscp"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置winscp"}},[t._v("#")]),t._v(" 配置WinSCP")]),t._v(" "),e("ol",[e("li",[t._v("下载"),e("a",{attrs:{href:"https://winscp.net/",target:"_blank",rel:"noopener noreferrer"}},[t._v("WinSCP"),e("OutboundLink")],1),t._v(" ，安装后，启动并新建一个连接")]),t._v(" "),e("li",[t._v("根据云服务器的 "),e("strong",[t._v("密码验证和秘钥对")]),t._v(" 两种验证方式分别说明：\n"),e("ul",[e("li",[t._v("密码验证方式设置（最常见的方式）\n"),e("img",{attrs:{src:"http://libs.websoft9.com/Websoft9/DocsPicture/zh/winscp/winscp-newsite.png",alt:"密码验证方式"}})]),t._v(" "),e("li",[t._v("秘钥对验证方式设置\n"),e("img",{attrs:{src:"http://libs.websoft9.com/Websoft9/DocsPicture/zh/winscp/winscp-secrets-websoft9.png",alt:"秘钥对验证方式"}})])])]),t._v(" "),e("li",[t._v('验证方式设置好之后，点击"登录"。登录中过程中，系统提示您是否保存登录信息，选择"是"')]),t._v(" "),e("li",[t._v("成功连接后的界面\n"),e("img",{attrs:{src:"http://libs.websoft9.com/Websoft9/DocsPicture/zh/winscp/websoft9-winscp-success.png",alt:"WinSCP管理界面"}})])]),t._v(" "),e("h5",{attrs:{id:"管理文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#管理文件"}},[t._v("#")]),t._v(" 管理文件")]),t._v(" "),e("p",[t._v("WinSCP 通过拖拽，就可以方便上传下载文件，可以对文件（夹）可以对进行多种设置与操作")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("一般来说网站的文件都放在 "),e("em",[t._v("/data/wwwroot")]),t._v(" 目录下夹\n"),e("img",{attrs:{src:"http://libs.websoft9.com/Websoft9/DocsPicture/en/winscp/winscp-dragfile-websoft9.png",alt:"upload files"}})])]),t._v(" "),e("li",[e("p",[t._v("右键单击服务器上一个文件或文件夹，可以对云服务器进行多种操作\n"),e("img",{attrs:{src:"http://libs.websoft9.com/Websoft9/DocsPicture/zh/winscp/websoft9-winscp-youjian.png",alt:"管理文件"}})])]),t._v(" "),e("li",[e("p",[t._v("以修改文件权限为例的相关界面如下")]),t._v(" "),e("p",[e("img",{attrs:{src:"http://libs.websoft9.com/Websoft9/DocsPicture/zh/winscp/websoft9-winscp-quanxian.png",alt:"管理文件"}})])])]),t._v(" "),e("h5",{attrs:{id:"运行命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#运行命令"}},[t._v("#")]),t._v(" 运行命令")]),t._v(" "),e("p",[t._v("WinSCP是自带命令运行功能的，虽然命令功能仅限于运行非交互式命名（即命令执行过程中无需反馈和过程中的输入），但对于初学者确简单实用。")]),t._v(" "),e("ol",[e("li",[t._v("WinSCP登录到服务器，点击菜单来的命令窗口图标（快捷键Ctrl+T也可以）\n"),e("img",{attrs:{src:"http://libs.websoft9.com/Websoft9/DocsPicture/zh/winscp/winscp-ucmd-websoft9.png",alt:"命令行工具"}})]),t._v(" "),e("li",[t._v("在弹出的命令运行窗口执行命令（每次一条命令），以查询内存使用为例，运行命令 "),e("code",[t._v("free -m")]),t._v(" "),e("img",{attrs:{src:"http://libs.websoft9.com/Websoft9/DocsPicture/zh/winscp/wincp-showmemory-websoft9.png",alt:"命令行工具"}})])]),t._v(" "),e("h5",{attrs:{id:"集成putty"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#集成putty"}},[t._v("#")]),t._v(" 集成Putty")]),t._v(" "),e("p",[t._v("在某些特定的常见下，可能需要使用Putty来运行命令。由于Putty是一个命令操作界面，每次使用的时候都需要输入root密码，如果密码比较复杂，会让人感觉比较麻烦。其实WinSCP是可以集成Putty的，集成后，通过WinSCP就可以打开Putty，自动登录到服务器。")]),t._v(" "),e("ol",[e("li",[t._v("打开Winscp-选项-集成-应用程序。Putty/terminal客户端路径这里为你本地putty.exe程序的路径\n"),e("img",{attrs:{src:"http://libs.websoft9.com/Websoft9/DocsPicture/zh/winscp/websoft9-winscp-putty.png",alt:"命令行工具"}})]),t._v(" "),e("li",[t._v("集成成功后，只需要通过Winscp的窗口快捷方式即可打开Putty\n"),e("img",{attrs:{src:"http://libs.websoft9.com/Websoft9/DocsPicture/zh/winscp/websoft9-winscp-puttyopen.png",alt:"命令行工具"}})])]),t._v(" "),e("blockquote",[e("p",[t._v("通过Winscp打开Putty操作与直接打开putty没有区别")])]),t._v(" "),e("h5",{attrs:{id:"ftp-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ftp-2"}},[t._v("#")]),t._v(" FTP")]),t._v(" "),e("p",[t._v("Linux 系统默认情况下，并没有预制安装FTP。如果需要使用FTP，需要手工安装，具体步骤如下：")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("检查所属用户和属组\n检查需要使用FTP上传目录的用户和用户组,假设上传目录为 "),e("code",[t._v("/data/wwwroot/default")])]),t._v(" "),e("p",[t._v("执行命令  "),e("code",[t._v("ls -l /data/wwwroot/")]),t._v("  查看  "),e("code",[t._v("default")]),t._v("  目录的用户和用户组,如下图所示")]),t._v(" "),e("p",[e("img",{attrs:{src:"http://libs.websoft9.com/Websoft9/DocsPicture/zh/lamp/ftp-install-websoft9.png",alt:"1524795775448"}})]),t._v(" "),e("p",[t._v("第一个 "),e("code",[t._v("apache")]),t._v(" 为用户,第二个 "),e("code",[t._v("apache")]),t._v(" 为用户组")])]),t._v(" "),e("li",[e("p",[t._v("安装  "),e("code",[t._v("pure-ftpd")])]),t._v(" "),e("p",[e("code",[t._v("yum -y install pure-ftpd")])])]),t._v(" "),e("li",[e("p",[t._v("配置 "),e("code",[t._v("pure-ftpd")])]),t._v(" "),e("p",[t._v("修改 "),e("code",[t._v("/etc/pure-ftpd/pure-ftpd.conf")]),t._v("  内容如下:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("ChrootEveryone              yes\nMaxClientsNumber            50\nMaxClientsPerIP             8\nDisplayDotFiles             no\nAnonymousOnly               no\nNoAnonymous                 yes\nDontResolve                 yes\nMaxIdleTime                 10\nPureDB                      /etc/pure-ftpd/pureftpd.pdb\nLimitRecursion              2000 10\nAnonymousCanCreateDirs      no\nUmask                       133:022\nAllowUserFXP                no\nAllowAnonymousFXP           no\nProhibitDotFilesWrite       no\nProhibitDotFilesRead        no\nAnonymousCantUpload         yes\nMaxDiskUsage                80\nIPV4Only                    yes\nClientCharset               utf-8\n")])])])]),t._v(" "),e("li",[e("p",[t._v("创建 虚拟用户 生成用户数据 db (可用于创建多用户)")]),t._v(" "),e("p",[t._v("执行命令(创建虚拟用户):")]),t._v(" "),e("p",[e("code",[t._v("pure-pw useradd www_user_name -u apache -d /data/wwwroot/default")])]),t._v(" "),e("blockquote",[e("p",[t._v("执行后会提示设置密码,密码输入不会显示")])]),t._v(" "),e("blockquote",[e("p",[t._v("www_user_name 为虚拟用户名  apache 为步骤1所查看 /data/wwwroot/default 为FTP上传目录")])]),t._v(" "),e("p",[t._v("执行命令(生成用户数据):"),e("br"),t._v(" "),e("code",[t._v("pure-pw mkdb /etc/pure-ftpd/pureftpd.pdb")])])]),t._v(" "),e("li",[e("p",[t._v("开启服务 设置开机启动\n执行一下命令:\n"),e("code",[t._v("systemctl start pure-ftpd.service")]),t._v(" "),e("code",[t._v("systemctl enable pure-ftpd.service")])])])])])}),[],!1,null,null,null);s.default=r.exports}}]);