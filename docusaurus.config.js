// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

// Set the /<baseUrl>/ pathname under which your site is served
// For GitHub pages deployment, it is often '/<projectName>/'

const baseUrl = process.env.NODE_ENV === "production" ? "/SG2042-Wiki/" : "/";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Sophgo Assembled Wiki",
  tagline: "Duo, Pioneer and SG2042",
  favicon: "//sophon.cn/favicon.ico",

  // Set the production url of your site here
  url: "https://sophgocommunity.github.io",

  baseUrl,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "sophgocommunity", // Usually your GitHub org/user name.
  projectName: "SG2042-Wiki", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  scripts: [baseUrl + `js/wiki.autojump.js`],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: ({ versionDocsDirPath, docPath }) =>
            `https://github.com/sophgocommunity/SG2042-Wiki/tree/docusaurus/${versionDocsDirPath}/${docPath}`,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "",
        logo: {
          alt: "Logo",
          src: "LogoNew.svg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "techSidebar",
            position: "left",
            label: "Technical Docs",
          },
          {
            to: baseUrl + "community",
            label: "Community",
            position: "left",
          },
          {
            type: "search",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs/intro",
              },
              {
                label: "SOPHGO Official Website",
                href: "https://en.sophgo.com/",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Technical Forum",
                href: "https://forum.sophgo.com/",
              },
              {
                label: "Duo Group",
                href: "https://github.com/sophgocommunity/Duo_Doc",
              },
              {
                label: "Pioneer Group",
                href: "https://github.com/sophgocommunity/Pioneer_Doc",
              },
            ],
          },
          {
            title: "Source Code",
            items: [
              {
                label: "SOPHGO Official Github",
                href: "https://github.com/sophgo",
              },
              {
                label: "SOPHGO Community",
                href: "https://github.com/orgs/sophgocommunity",
              },
            ],
          },
          {
            title: "Contact Us",
            items: [
              {
                html:
                  '<div class="ft-flex"><span>Email:</span><div>' +
                  ["global.sales@sophgo.com", "global.support@sophgo.com"]
                    .map((l) => `<a href="mailto:${l}">${l}</a>`)
                    .join("<br>") +
                  "</div>",
              },
              {
                html:
                  '<div class="ft-flex"><span>Hotline:</span><div>' +
                  ["+86-10-57590723", "+86-10-57590724"].map((l) => `<a href="tel:${l}">${l}</a>`).join("<br>") +
                  "</div>",
              },
              {
                html:
                  '<div class="ft-flex"><span class="ft-follow">Follow Us:</span><div class="ft-icons">' +
                  [
                    {
                      icon: "weibo",
                      href: "https://m.weibo.cn/u/7729472519",
                    },
                    {
                      icon: "facebook",
                      href: "https://www.facebook.com/SophonAI",
                    },
                    {
                      icon: "twitter",
                      href: "https://www.twitter.com/SophonAI",
                    },
                  ]
                    .map(
                      (o) =>
                        `<a href="${o.href} title=${o.icon}"><span class="glyphicon glyphicon-${o.icon}"></span></a>`
                    )
                    .join(" ") +
                  "</div>",
              },
              {
                label: "Collaboration",
                href: "mailto:xintong.wang@sophgo.com",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Sophgo, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
