"use strict";(self.webpackChunksophgo_wiki_1=self.webpackChunksophgo_wiki_1||[]).push([[9955],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var i=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=i.createContext({}),c=function(e){var n=i.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},s=function(e){var n=c(e.components);return i.createElement(p.Provider,{value:n},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(t),u=o,m=d["".concat(p,".").concat(u)]||d[u]||f[u]||a;return t?i.createElement(m,r(r({ref:n},s),{},{components:t})):i.createElement(m,r({ref:n},s))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,r=new Array(a);r[0]=u;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[d]="string"==typeof e?e:o,r[1]=l;for(var c=2;c<a;c++)r[c]=t[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},1639:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>r,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var i=t(7462),o=(t(7294),t(3905));const a={},r="Configuration Info in conf.ini",l={unversionedId:"sg2042/Configuration Info in INI file",id:"sg2042/Configuration Info in INI file",title:"Configuration Info in conf.ini",description:"1. Introduction of conf.ini",source:"@site/docs/sg2042/Configuration Info in INI file.md",sourceDirName:"sg2042",slug:"/sg2042/Configuration Info in INI file",permalink:"/SG2042-Wiki/docs/sg2042/Configuration Info in INI file",draft:!1,editUrl:"https://github.com/sophgocommunity/SG2042-Wiki/tree/docusaurus/docs/sg2042/Configuration Info in INI file.md",tags:[],version:"current",frontMatter:{},sidebar:"techSidebar",previous:{title:"A Simple Method to Install Ubuntu Image on SG2042 EVB",permalink:"/SG2042-Wiki/docs/sg2042/A simple way to install ubuntu on SG2042 EVB"},next:{title:"FAQ",permalink:"/SG2042-Wiki/docs/sg2042/FAQ"}},p={},c=[{value:"1. Introduction of <code>conf.ini</code>",id:"1-introduction-of-confini",level:2},{value:"2. Information in <code>conf.ini</code>",id:"2-information-in-confini",level:2},{value:"Example",id:"example",level:3},{value:"3. Location of <code>conf.ini</code>",id:"3-location-of-confini",level:2},{value:"microSD Card",id:"microsd-card",level:3},{value:"SPI Flash",id:"spi-flash",level:3}],s={toc:c},d="wrapper";function f(e){let{components:n,...t}=e;return(0,o.kt)(d,(0,i.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"configuration-info-in-confini"},"Configuration Info in ",(0,o.kt)("inlineCode",{parentName:"h1"},"conf.ini")),(0,o.kt)("h2",{id:"1-introduction-of-confini"},"1. Introduction of ",(0,o.kt)("inlineCode",{parentName:"h2"},"conf.ini")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"conf.ini")," is an artificial configuration file that contains\nnecessary evaluation board information for SG2042. The file consists of\ntext-based content with a structure and syntax comprising key-value\npairs for properties, and sections that organize the properties."),(0,o.kt)("p",null,"If you want to know more about the INI file, please access ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/INI_file"},"the\nintroduction link"),"."),(0,o.kt)("h2",{id:"2-information-in-confini"},"2. Information in ",(0,o.kt)("inlineCode",{parentName:"h2"},"conf.ini")),(0,o.kt)("p",null,"The convention is that the ",(0,o.kt)("inlineCode",{parentName:"p"},"conf.ini")," must start at byte 0 with a\nsection called ",(0,o.kt)("inlineCode",{parentName:"p"},"sophgo-config"),", and end with a section called ",(0,o.kt)("inlineCode",{parentName:"p"},"eof"),". In\naddition, the current ",(0,o.kt)("inlineCode",{parentName:"p"},"conf.ini")," contains the sections listed in the\nfollowing table."),(0,o.kt)("hr",null),(0,o.kt)("p",null,"  Section             Key - Vaule                          Permission"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"  ","[","sophgo-config","]","                                        Compulsory"),(0,o.kt)("p",null,"  ","[","devicetree","]","      name = XXX.dtb                       Compulsory"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"                  addr = 0xAAAAAAAA                    Optional\n")),(0,o.kt)("p",null,"  ","[","mac-address","]","     mac0 = 0xAAAAAAAAAAAA                Compulsory"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"                  mac1 = 0xAAAAAAAAAAAA                Compulsory\n")),(0,o.kt)("p",null,"  ","[","kernel","]","          name = u-boot.bin / riscv64_Image    Optional"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"                  addr = 0xAAAAAAAA                    Optional\n")),(0,o.kt)("p",null,"  ","[","firmware","]","        name = fw_jump.bin                   Optional"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"                  addr = 0xAAAAAAAA                    Optional\n")),(0,o.kt)("p",null,"  ","[","ramfs","]","           name = initrd.img                    Optional"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"                  addr = 0xAAAAAAAA                    Optional\n")),(0,o.kt)("p",null,"  ","[","eof","]","                                                  Compulsory"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Except for the section that is mandatory to be added to ",(0,o.kt)("inlineCode",{parentName:"p"},"conf.ini"),",\nother sections or key-value pairs can be added as required, if not, with\ndefault values."),(0,o.kt)("h3",{id:"example"},"Example"),(0,o.kt)("p",null,"Here is an example."),(0,o.kt)("blockquote",null,(0,o.kt)("pre",{parentName:"blockquote"},(0,o.kt)("code",{parentName:"pre",className:"language-ini"},"[sophgo-config]\n\n[devicetree]\nname = mango-sophgo-x8evb.dtb\n; addr = 0x20000000\n\n[mac-address]\nmac0 = 0xAAAAAAAAAAAA\nmac1 = 0xAAAAAAAAAAAA\n\n[kernel]\nname = riscv64_Image\n; name = u-boot.bin\n; addr = 0x02000000\n\n[eof]\n"))),(0,o.kt)("h2",{id:"3-location-of-confini"},"3. Location of ",(0,o.kt)("inlineCode",{parentName:"h2"},"conf.ini")),(0,o.kt)("p",null,"At the stage of ",(0,o.kt)("inlineCode",{parentName:"p"},"ZSBL"),", we use the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/benhoyt/inih"},"inih"),", an INI parser to parse the\n",(0,o.kt)("inlineCode",{parentName:"p"},"conf.ini")," file. The ",(0,o.kt)("inlineCode",{parentName:"p"},"conf.ini")," can be stored in either of the following\ntwo locations. Read the INI file from miscoSD Card first. If the file is\nnot found, read it from SPI Flash0."),(0,o.kt)("h3",{id:"microsd-card"},"microSD Card"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"conf.ini")," is saved in the ",(0,o.kt)("inlineCode",{parentName:"p"},"0:riscv64/")," of a miscoSD Card."),(0,o.kt)("h3",{id:"spi-flash"},"SPI Flash"),(0,o.kt)("p",null,"There are two mtd devices on SG2042, namely SPI Flash0 (",(0,o.kt)("inlineCode",{parentName:"p"},"0x7000180000"),",\n",(0,o.kt)("inlineCode",{parentName:"p"},"/dev/mtd0"),") and SPI Flash1 (",(0,o.kt)("inlineCode",{parentName:"p"},"0x7002180000"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"/dev/mtd1"),"). The\n",(0,o.kt)("inlineCode",{parentName:"p"},"firmware.bin")," are written in the SPI Flash1, and the ",(0,o.kt)("inlineCode",{parentName:"p"},"conf.ini")," is\nwritten in the SPI Flash0."),(0,o.kt)("p",null,"Use the following commands to update the flash:"),(0,o.kt)("blockquote",null,(0,o.kt)("pre",{parentName:"blockquote"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"# install userspace utilities package: mtd-utils\nsudo apt-get install mtd-utils\n\n# write data into the flash0\nsudo flashcp conf.ini /dev/mtd0\n"))))}f.isMDXComponent=!0}}]);