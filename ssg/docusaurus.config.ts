import { themes as prismThemes } from "prism-react-renderer"
import type { Config } from "@docusaurus/types"
import type * as Preset from "@docusaurus/preset-classic"

const config: Config = {
  title: "Mixin - Grow and Secure Your Crypto Wealth with Decentralized Solutions",

  favicon: "img/favicon.png",

  // Set the production url of your site here
  url: "https://Mixin.one/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Mixin", // Usually your GitHub org/user name.
  projectName: "Mixin.one", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en", "zh"],
  },

  presets: [
    [
      "classic",
      {
        // docs: {
        //   sidebarPath: "./sidebars.ts",
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl: "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        // },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl: "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        // },
        theme: {
          customCss: ["./src/css/inter.css", "./src/css/custom.css"],
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "Mixin",
      items: [
        // {
        //   type: "docSidebar",
        //   sidebarId: "tutorialSidebar",
        //   position: "left",
        //   label: "Tutorial",
        // },
        // { to: "/blog", label: "Blog", position: "left" },
        // {
        //   href: "https://github.com/facebook/docusaurus",
        //   label: "GitHub",
        //   position: "right",
        // },
        {
          label: "Technology",
          to: "/how-it-secures",
        },
        {
          label: "Pricing",
          to: "/pricing",
        },
        {
          label: "Company",
          items: [
            {
              label: "Contact Us",
              to: "/contact",
              description: "If you have any questions, please contact us",
              icon: "/img/common/nav/contact.svg",
            },
            {
              label: "About Us",
              to: "/about",
              description: "Mixin helps you secure and grow your wealth",
              icon: "/img/common/nav/about.svg",
            },
          ],
          position: "left",
        },
        {
          label: "Get Started",
          to: "/pricing",
          position: "right",
          className: "px-6 py-3 dark:bg-white dark:text-zinc-800 bg-zinc-800 text-white rounded-sm font-medium leading-none",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Products",
          items: [
            {
              label: "Mixin Messenger",
              to: "https://messenger.mixin.one/",
            },
            {
              label: "Mixin Safe",
              href: "https://safe.mixin.one/",
            },
            {
              label: "Mixin Wealth",
              to: "https://wealth.mixin.one/",
            },
          ],
        },
        {
          title: "Social",
          items: [
            {
              label: "Twitter",
              href: "https://twitter.com/MixinKernel",
            },
            {
              label: "Medium",
              href: "https://medium.com/mixinnetwork",
            },
            {
              label: "Reddit",
              href: "https://www.reddit.com/r/mixin/",
            },
          ],
        },
        {
          title: "Developers",
          items: [
            {
              label: "Developer Center",
              href: "https://developers.mixin.one/",
            },
            {
              label: "Open Source",
              href: "https://github.com/MixinNetwork",
            },
            {
              label: "Mixin Route",
              href: "https://route.mixin.one/",
            },
            {
              label: "Mixin Messenger",
              href: "https://messenger.mixin.one/",
            },
            {
              label: "Mixin Network",
              href: "https://mixin.network/",
            },
            {
              label: "Mixin Trusted Group",
              href: "https://developers.mixin.one/docs/mainnet/mtg/overview/",
            },
            {
              label: "Mixin Virtual Machine",
              href: "https://mvm.app/",
            },
            {
              label: "Throttled Identity Protocol",
              href: "https://tip.id/",
            },
          ],
        },
        {
          title: "Company",
          items: [
            {
              label: "Our Mission",
              to: "/about",
            },
            {
              label: "Contact Us",
              to: "/contact",
            },
            {
              label: "Media Kit",
              to: "https://mixin.one/assets/Mixin-Logo.zip",
            },
            {
              label: "Join us",
              to: "https://mixin.one/jobs",
            },
            {
              label: "Licenses",
              to: "/features/compliance",
            },
            {
              label: "Privacy Police",
              to: "https://mixin.one/pages/privacy",
            },
            {
              label: "Terms of Use",
              to: "https://mixin.one/pages/terms",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Mixin`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,

  plugins: [
    () => ({
      name: "docusaurus-unocss",
      configurePostCss(postcssOptions) {
        postcssOptions.plugins.push(require("@unocss/postcss"))
        return postcssOptions
      },
    }),
    () => ({
      name: "docusaurus-plugin-mixin-assets",
      loadContent: async () => {
        const {
          data: assets,
        }: {
          data: {
            name: string
            symbol: string
            icon_url: string
            chain_id: string
          }[]
        } = await (await fetch("https://api.mixin.one/network/assets/top")).json()

        const array = Array.from(
          assets
            .filter((asset) => !/(Pando Rings|4swap |ExinSwap |Pando Innovation ETF|LP Token)/i.test(asset.name) && asset.chain_id !== "17f78d7c-ed96-40ff-980c-5dc62fecbc85")
            .reduce((acc, cur) => acc.set(cur.icon_url, cur), new Map())
            .values()
        )
        const chunkSize = Math.ceil(array.length / 3)

        const result: {
          symbol: string
          icon_url: string
        }[][] = []
        for (let i = 0; i < array.length; i += chunkSize) {
          const chunk = array.slice(i, i + chunkSize)
          result.push(chunk)
        }

        const length = result.map((item) => item.length).reduce((acc, cur) => Math.min(acc, cur), Infinity)
        result.forEach((item) => (item.length = length))
        return result
      },
      contentLoaded: ({ content, actions }) => actions.setGlobalData(content),
    }),
  ],
}

export default config
