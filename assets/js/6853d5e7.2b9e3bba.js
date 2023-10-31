"use strict";(self.webpackChunksophgo_wiki_1=self.webpackChunksophgo_wiki_1||[]).push([[6254],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,l=function(e,t){if(null==e)return{};var n,o,l={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=o.createContext({}),s=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=s(e.components);return o.createElement(u.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},b=o.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,u=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),c=s(n),b=l,m=c["".concat(u,".").concat(b)]||c[b]||d[b]||i;return n?o.createElement(m,r(r({ref:t},p),{},{components:n})):o.createElement(m,r({ref:t},p))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,r=new Array(i);r[0]=b;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a[c]="string"==typeof e?e:l,r[1]=a;for(var s=2;s<i;s++)r[s]=n[s];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}b.displayName="MDXCreateElement"},566:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>s});var o=n(7462),l=(n(7294),n(3905));const i={},r="How to build bsp",a={unversionedId:"sg2042/How to build SG2042 bsp",id:"sg2042/How to build SG2042 bsp",title:"How to build bsp",description:"1. Install dependencies",source:"@site/docs/sg2042/How to build SG2042 bsp.md",sourceDirName:"sg2042",slug:"/sg2042/How to build SG2042 bsp",permalink:"/SG2042-Wiki/docs/sg2042/How to build SG2042 bsp",draft:!1,editUrl:"https://github.com/sophgocommunity/SG2042-Wiki/tree/docusaurus/docs/sg2042/How to build SG2042 bsp.md",tags:[],version:"current",frontMatter:{},sidebar:"techSidebar",previous:{title:"How to Adapt Anolis OS on SG2042 EVB",permalink:"/SG2042-Wiki/docs/sg2042/How to Adapt Anolis OS on SG2042 EVB"},next:{title:"How to build and config GRUB2",permalink:"/SG2042-Wiki/docs/sg2042/How to build and config grub2"}},u={},s=[{value:"1. Install dependencies",id:"1-install-dependencies",level:2},{value:"2. Build all from source",id:"2-build-all-from-source",level:2},{value:"3. Build perf tool on Ubuntu",id:"3-build-perf-tool-on-ubuntu",level:2}],p={toc:s},c="wrapper";function d(e){let{components:t,...n}=e;return(0,l.kt)(c,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"how-to-build-bsp"},"How to build bsp"),(0,l.kt)("h2",{id:"1-install-dependencies"},"1. Install dependencies"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"on Fedora")),(0,l.kt)("blockquote",null,(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre",className:"language-sh"},'$ sudo dnf install autoconf automake curl python3 libmpc-devel mpfr-devel gmp-devel gawk bison flex texinfo gperf libtool patchutils bc openssl dkms libudev-devel golang-bin zlib-devel qemu-user-binfmt  qemu-user-static ncurses-devel expat-devel elfutils-libelf-devel pciutils-devel openssl-devel binutils-devel qemu-system-riscv-core\n$ sudo dnf groupinstall "Development Tools" "C Development Tools and Libraries"\n'))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"on Ubuntu")),(0,l.kt)("blockquote",null,(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"$ sudo apt-get install autoconf automake autotools-dev curl python3 libmpc-dev libmpfr-dev libgmp-dev gawk build-essential bison flex texinfo gperf libtool patchutils bc zlib1g-dev libexpat-dev libncurses-dev openssl libiberty-dev libssl-dev dkms libelf-dev libudev-dev libpci-dev golang-go qemu-user-static\n"))),(0,l.kt)("p",null,"To build uroot, you need to install ",(0,l.kt)("strong",{parentName:"p"},"go 1.17"),", refer to\n",(0,l.kt)("a",{parentName:"p",href:"https://tecadmin.net/how-to-install-go-on-ubuntu-20-04/"},"https://tecadmin.net/how-to-install-go-on-ubuntu-20-04/"),". You can use\nthe following reference to check the ",(0,l.kt)("strong",{parentName:"p"},"go")," version."),(0,l.kt)("blockquote",null,(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"$ go version\n\ngo version go1.17 linux/amd64\n"))),(0,l.kt)("h2",{id:"2-build-all-from-source"},"2. Build all from source"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Download source code")),(0,l.kt)("blockquote",null,(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"$ git clone https://github.com/sophgo/bootloader-riscv.git\n$ git clone https://github.com/sophgo/zsbl.git\n$ git clone https://github.com/sophgo/opensbi.git\n$ git clone https://github.com/sophgo/linux-riscv.git\n\n# clone u-boot\n$ git clone https://github.com/sophgo/u-boot.git\n# clone grub\n$ git clone git://git.savannah.gnu.org/grub.git\n$ pushd grub\n$ git remote add github.com_tekkamanninja https://github.com/tekkamanninja/grub.git\n$ git fetch github.com_tekkamanninja\n$ git checkout github.com_tekkamanninja/riscv_devel_Nikita_V3\n$ popd\n"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Build Cross toolchain for bsp"),(0,l.kt)("p",{parentName:"li"},"Enter the bsp directory which is the same level as\n",(0,l.kt)("inlineCode",{parentName:"p"},"bootloader-riscv"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"zsbl"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"opensbi"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"u-boot"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"grub2")," and\n",(0,l.kt)("inlineCode",{parentName:"p"},"linux-riscv"),", and build Cross toolchain by the following command:"))),(0,l.kt)("blockquote",null,(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"$ CHIP=mango\n$ source bootloader-riscv/scripts/envsetup.sh\n$ build_rv_gcc\n\n# get the following folders:\n.\n\u251c\u2500\u2500 bootloader-riscv\n\u251c\u2500\u2500 zsbl\n\u251c\u2500\u2500 opensbi\n\u251c\u2500\u2500 linux-riscv\n\u251c\u2500\u2500 u-boot\n\u251c\u2500\u2500 grub\n\u2514\u2500\u2500 gcc-riscv\n      \u251c\u2500\u2500 gcc-riscv64-unknown-elf\n      \u2514\u2500\u2500 gcc-riscv64-unknown-linux-gnu\n"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Build all")),(0,l.kt)("blockquote",null,(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"# build single CHIP:\n$ CHIP_NUM=single\n$ source bootloader-riscv/scripts/envsetup.sh\n$ build_rv_all\n\n# build multi chip:\n$ CHIP_NUM=multi\n$ source bootloader-riscv/scripts/envsetup.sh\n$ build_rv_all\n"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"If you have chosen a single chip, the output files will be located\nin the install/soc_mango/single_chip directory."),(0,l.kt)("li",{parentName:"ul"},"If you have chosen multiple chips, the output files will be located\nin the install/soc_mango/multi_chip directory.")),(0,l.kt)("blockquote",null,(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre",className:"language-sh"},".\n\u251c\u2500\u2500 bsp-debs\n\u2502      \u251c\u2500\u2500 linux-headers-6.1.31.deb\n\u2502      \u251c\u2500\u2500 linux-image-6.1.31.deb\n\u2502      \u2514\u2500\u2500 linux-libc-dev_6.1.31.deb\n\u251c\u2500\u2500 firmware\n\u2502      \u251c\u2500\u2500 fip.bin\n\u2502      \u251c\u2500\u2500 firmware.bin\n\u2502      \u251c\u2500\u2500 fw_jump.bin\n\u2502      \u251c\u2500\u2500 fw_jump.elf\n\u2502      \u251c\u2500\u2500 initrd.img\n\u2502      \u251c\u2500\u2500 mango-milkv-pioneer.dtb\n\u2502      \u251c\u2500\u2500 mango-sophgo-pisces.dtb\n\u2502      \u251c\u2500\u2500 mango-sophgo-x4evb.dtb\n\u2502      \u251c\u2500\u2500 mango-sophgo-x8evb.dtb\n\u2502      \u251c\u2500\u2500 riscv64_Image\n\u2502      \u251c\u2500\u2500 zsbl.bin\n\u2502      \u251c\u2500\u2500 u-boot.bin\n\u2502      \u251c\u2500\u2500 grubriscv64.efi\n\u2502      \u251c\u2500\u2500 grub.cfg\n\u251c\u2500\u2500 tools\n\u2502      \u2514\u2500\u2500 perf\n\u2502            \u251c\u2500\u2500 build-perf.sh\n\u2502            \u251c\u2500\u2500 perf-6.1.31\n\u2502            \u2514\u2500\u2500 perf-6.1.31.tar\n\u2514\u2500\u2500 ubuntu-sophgo.img\n"))),(0,l.kt)("p",null,"::: note\n::: title\nNote\n:::"),(0,l.kt)("p",null,"If you need to compile a file separately, type the ",(0,l.kt)("inlineCode",{parentName:"p"},"show_rv_functions"),"\ncommand to get the relevant instructions.\n:::"),(0,l.kt)("h2",{id:"3-build-perf-tool-on-ubuntu"},"3. Build perf tool on Ubuntu"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Use the following commands to extract the perf source package from\n",(0,l.kt)("inlineCode",{parentName:"li"},"linux-riscv")," and get the build script.")),(0,l.kt)("blockquote",null,(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"$ CHIP=mango\n$ source bootloader-riscv/scripts/envsetup.sh\n$ build_rv_ubuntu_perf_tool\n"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Find the previously mentioned files in\n",(0,l.kt)("inlineCode",{parentName:"li"},"install/soc_mango/riscv64/tools/perf")," directory.")),(0,l.kt)("blockquote",null,(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre",className:"language-sh"},".\n\u2514\u2500\u2500 tools\n       \u2514\u2500\u2500 perf\n             \u251c\u2500\u2500 build-perf.sh\n             \u251c\u2500\u2500 perf-6.1.22\n             \u2514\u2500\u2500 perf-6.1.22.tar\n"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Copy the ",(0,l.kt)("inlineCode",{parentName:"li"},"tools")," directory to the SG2042 EVB, and execute the\n",(0,l.kt)("inlineCode",{parentName:"li"},"build-perf.sh")," to make and install perf tool. If you use the latest\n",(0,l.kt)("inlineCode",{parentName:"li"},"ubuntu-sophgo.img"),", the ",(0,l.kt)("inlineCode",{parentName:"li"},"tools")," exists in the ",(0,l.kt)("inlineCode",{parentName:"li"},"/home/ubuntu"),"\ndirectory.")),(0,l.kt)("blockquote",null,(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"$ cd tools/perf/\n$ source build-scripts.sh\n"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Use the perf tool.")),(0,l.kt)("blockquote",null,(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"$ perf list\n$ perf stat\n$ perf bench\n"))))}d.isMDXComponent=!0}}]);