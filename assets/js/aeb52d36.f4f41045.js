"use strict";(self.webpackChunksophgo_wiki_1=self.webpackChunksophgo_wiki_1||[]).push([[8278],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),g=o,f=p["".concat(s,".").concat(g)]||p[g]||d[g]||i;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},1535:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const i={},a="How to build and config GRUB2",l={unversionedId:"sg2042/How to build and config grub2",id:"sg2042/How to build and config grub2",title:"How to build and config GRUB2",description:"1. How to build grub2",source:"@site/docs/sg2042/How to build and config grub2.md",sourceDirName:"sg2042",slug:"/sg2042/How to build and config grub2",permalink:"/SG2042-Wiki/docs/sg2042/How to build and config grub2",draft:!1,editUrl:"https://github.com/sophgocommunity/SG2042-Wiki/tree/docusaurus/docs/sg2042/How to build and config grub2.md",tags:[],version:"current",frontMatter:{},sidebar:"techSidebar",previous:{title:"How to build bsp",permalink:"/SG2042-Wiki/docs/sg2042/How to build SG2042 bsp"},next:{title:"SG2042 Boot Flow",permalink:"/SG2042-Wiki/docs/sg2042/bootflow"}},s={},c=[{value:"1. How to build grub2",id:"1-how-to-build-grub2",level:2},{value:"1.1 Clone source",id:"11-clone-source",level:3},{value:"1.2 Install related dependencies",id:"12-install-related-dependencies",level:3},{value:"1.3 Create related file and folder",id:"13-create-related-file-and-folder",level:3},{value:"1.4 Write compilation script",id:"14-write-compilation-script",level:3},{value:"1.5 Run the script and show the results",id:"15-run-the-script-and-show-the-results",level:3},{value:"2 How to config grub.cfg",id:"2-how-to-config-grubcfg",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"how-to-build-and-config-grub2"},"How to build and config GRUB2"),(0,o.kt)("h2",{id:"1-how-to-build-grub2"},"1. How to build grub2"),(0,o.kt)("h3",{id:"11-clone-source"},"1.1 Clone source"),(0,o.kt)("blockquote",null,(0,o.kt)("pre",{parentName:"blockquote"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ git clone git://git.savannah.gnu.org/grub.git\n$ pushd grub\n$ git remote add github.com_tekkamanninja https://github.com/tekkamanninja/grub.git\n$ git fetch github.com_tekkamanninja\n$ git checkout github.com_tekkamanninja/riscv_devel_Nikita_V3\n$ popd\n"))),(0,o.kt)("h3",{id:"12-install-related-dependencies"},"1.2 Install related dependencies"),(0,o.kt)("blockquote",null,(0,o.kt)("pre",{parentName:"blockquote"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ sudo apt install bison autoconf libopts25-dev flex automake pkg-config gettext autopoint\n$ sudo apt install libdevmapper-dev\n"))),(0,o.kt)("h3",{id:"13-create-related-file-and-folder"},"1.3 Create related file and folder"),(0,o.kt)("blockquote",null,(0,o.kt)("pre",{parentName:"blockquote"},(0,o.kt)("code",{parentName:"pre"},"$ mkdir grubriscv64\n$ cd grubriscv64\n$ touch default.cfg\n"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Content of default.cfg")),(0,o.kt)("blockquote",null,(0,o.kt)("pre",{parentName:"blockquote"},(0,o.kt)("code",{parentName:"pre"},"search -f /grub.cfg -s root\nset prefix=($root)\n"))),(0,o.kt)("h3",{id:"14-write-compilation-script"},"1.4 Write compilation script"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"building_grub2.sh")),(0,o.kt)("blockquote",null,(0,o.kt)("pre",{parentName:"blockquote"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'pushd $RV_GRUB_SRC_DIR\n\n#setup build env\nGRUB_INSTALL_DIR=${RV_GRUB_BUILD_DIR}/rootfs\n\nmkdir -p $GRUB_INSTALL_DIR\nGRUB_DEFAULT_CFG_RISCV=${RV_GRUB_BUILD_DIR}/default.cfg\necho "search -f /grub.cfg -s root" > $GRUB_DEFAULT_CFG_RISCV\n# Use single quotes to prevent variables from being substituted\necho \'set prefix=($root)\' >> $GRUB_DEFAULT_CFG_RISCV\n\nGRUB_BINARY_NAME_RISCV=grubriscv64.efi\nGRUB_BINARY_FORMAT_RISCV=riscv64-efi\nGRUB_PREFIX_DIR_RISCV=efi\nGRUB_UEFI_IMAGE_MODULES_RISCV=\'acpi adler32 affs afs afsplitter all_video archelp bfs bitmap bitmap_scale blocklist boot bswap_test btrfs bufio cat cbfs chain cmdline_cat_test cmp cmp_test configfile cpio_be cpio crc64 cryptodisk crypto ctz_test datehook date datetime diskfilter disk div div_test dm_nv echo efifwsetup efi_gop efinet elf eval exfat exfctest ext2 extcmd f2fs fat fdt file font fshelp functional_test gcry_arcfour gcry_blowfish gcry_camellia gcry_cast5 gcry_crc gcry_des gcry_dsa gcry_idea gcry_md4 gcry_md5 gcry_rfc2268 gcry_rijndael gcry_rmd160 gcry_rsa gcry_seed gcry_serpent gcry_sha1 gcry_sha256 gcry_sha512 gcry_tiger gcry_twofish gcry_whirlpool geli gettext gfxmenu gfxterm_background gfxterm_menu gfxterm gptsync gzio halt hashsum hello help hexdump hfs hfspluscomp hfsplus http iso9660 jfs jpeg json keystatus ldm linux loadenv loopback lsacpi lsefimmap lsefi lsefisystab lsmmap ls lssal luks2 luks lvm lzopio macbless macho mdraid09_be mdraid09 mdraid1x memdisk memrw minicmd minix2_be minix2 minix3_be minix3 minix_be minix mmap mpi msdospart mul_test net newc nilfs2 normal ntfscomp ntfs odc offsetio part_acorn part_amiga part_apple part_bsd part_dfly part_dvh part_gpt part_msdos part_plan part_sun part_sunpc parttool password password_pbkdf2 pbkdf2 pbkdf2_test pgp png priority_queue probe procfs progress raid5rec raid6rec read reboot regexp reiserfs romfs scsi search_fs_file search_fs_uuid search_label search serial setjmp setjmp_test sfs shift_test signature_test sleep sleep_test smbios squash4 strtoull_test syslinuxcfg tar terminal terminfo test_blockarg testload test testspeed tftp tga time tpm trig tr true udf ufs1_be ufs1 ufs2 video_colors video_fb videoinfo video videotest_checksum videotest xfs xnu_uuid xnu_uuid_test xzio zfscrypt zfsinfo zfs zstd\'\n\n#bootstrap, download gunlib...\n./bootstrap\n#auto generate the config files\n./autogen.sh\n#auto config and generate Makefile\n# e.g. $RISCV64_LINUX_CROSS_COMPILE=./gcc-riscv/gcc-riscv64-unknown-linux-gnu/bin/riscv64-unknown-linux-gnu-\nTARGET_CC="${RISCV64_LINUX_CROSS_COMPILE}gcc" \\\nTARGET_OBJCOPY="${RISCV64_LINUX_CROSS_COMPILE}objcopy" \\\nTARGET_STRIP="${RISCV64_LINUX_CROSS_COMPILE}strip" \\\nTARGET_NM="${RISCV64_LINUX_CROSS_COMPILE}nm" \\\nTARGET_RANLIB="${RISCV64_LINUX_CROSS_COMPILE}ranlib" \\\nTARGET_CFLAGS=\'-Os -march=rv64imac_zicsr_zifencei\' \\\n./configure --target=riscv64-unknown-linux-gnu --with-platform=efi --prefix=$GRUB_INSTALL_DIR\n#build and install to ${RISCV_ROOTFS}\nmake install -j$(nproc)\n\n#make executable efi file\npushd ${GRUB_INSTALL_DIR}\n./bin/grub-mkimage -v \\\n                   -o ${GRUB_BINARY_NAME_RISCV} \\\n                   -O ${GRUB_BINARY_FORMAT_RISCV} \\\n                   -p ${GRUB_PREFIX_DIR_RISCV}  \\\n                   -c ${GRUB_DEFAULT_CFG_RISCV} ${GRUB_UEFI_IMAGE_MODULES_RISCV}\npopd\npopd\n'))),(0,o.kt)("h3",{id:"15-run-the-script-and-show-the-results"},"1.5 Run the script and show the results"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"run")),(0,o.kt)("blockquote",null,(0,o.kt)("pre",{parentName:"blockquote"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"source building_grub2.sh\n"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"results")),(0,o.kt)("blockquote",null,(0,o.kt)("pre",{parentName:"blockquote"},(0,o.kt)("code",{parentName:"pre"},".\n\u2514\u2500\u2500 grub\n\u2514\u2500\u2500 building_grub2.sh\n\u2514\u2500\u2500 grubriscv64\n    \u251c\u2500\u2500 default.cfg\n    \u2514\u2500\u2500 rootfs\n        \u251c\u2500\u2500 bin\n        \u251c\u2500\u2500 etc\n        \u251c\u2500\u2500 grubriscv64.efi\n        \u251c\u2500\u2500 lib\n        \u251c\u2500\u2500 sbin\n        \u2514\u2500\u2500 share\n"))),(0,o.kt)("h2",{id:"2-how-to-config-grubcfg"},"2 How to config grub.cfg"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"source")),(0,o.kt)("blockquote",null,(0,o.kt)("pre",{parentName:"blockquote"},(0,o.kt)("code",{parentName:"pre"},'set default=0\nset timeout_style=menu\nset timeout=10\n\nset debug="linux,loader,mm"\nset term="vt100"\n\nmenuentry \'ubuntu vmlinuz-6.1.31\' {\n        root=hd0,msdos2\n        linux /boot/vmlinuz-6.1.31 root=/dev/mmcblk1p2 console=ttyS0,115200 earlycon\n        initrd /boot/initrd.img-6.1.31\n        root=hd0,msdos1\n        devicetree /riscv64/mango-sophgo-x8evb.dtb\n}\n'))),(0,o.kt)("p",null,"::: note\n::: title\nNote\n:::"),(0,o.kt)("p",null,"The above is a sample configuration file for grub2 to boot an ubuntu\nimage using Micro SD card.\n:::"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"introduction"),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},"menuentry \\'title\\'{ }: ",(0,o.kt)("strong",{parentName:"li"},"define")," a grub menu item named\ntitle. When this menu item is selected at boot time, the list\nof commands in curly brackets is executed, and if all commands\nup to the last one are executed successfully and the\ncorresponding kernel is successfully loaded, the boot command\nis executed. grub then hands over control to the operating\nsystem kernel."),(0,o.kt)("li",{parentName:"ul"},"root = hard disk, partition: ",(0,o.kt)("strong",{parentName:"li"},"specify")," the current working\npath for loading related files"),(0,o.kt)("li",{parentName:"ul"},"linux\u3001initrd\u3001devicetree: ",(0,o.kt)("strong",{parentName:"li"},"load")," the corresponding\nresource, pay attention to the path where the resource is\nlocated"))))),(0,o.kt)("p",null,"::: note\n::: title\nNote\n:::"),(0,o.kt)("p",null,"The above three points are important for grub2 to boot load the kernel.\nFor more on writing the grub.cfg configuration file, please refer to\n",(0,o.kt)("a",{parentName:"p",href:"https://www.gnu.org/software/grub/manual/html_node/Shell_002dlike-scripting.html#Shell_002dlike-scripting"},"the official GRUB\ndocumentation"),"\n.\n:::"))}d.isMDXComponent=!0}}]);