import './footer.scss';
import assets from './assets';

let socials = [
  {
    cover: assets.ic_medium,
    address: "https://medium.com/mixinnetwork",
  },
  {
    cover: assets.ic_twitter,
    address: "https://twitter.com/Mixin_Network",
  },
  {
    cover: assets.ic_reddit,
    address: "https://www.reddit.com/r/mixin",
  },
  {
    cover: assets.ic_telgram,
    address: "https://t.me/MixinCommunity",
  },
  {
    cover: assets.ic_youtube,
    address: "https://www.youtube.com/channel/UCLWQ94gw7wRK-S5qy4LAVrA",
  },
];

let nodes = [
  {
    title: "general.footer.general",
    class: "",
    list: [
      {
        name: "general.footer.contact",
        address: "mailto:contact@mixin.one",
      },
      {
        name: "general.footer.faq",
        address: "https://mixinmessenger.zendesk.com/hc/en-us/categories/360001142932-FAQ-Guidebook",
      },
      {
        name: "general.footer.term",
        address: "/pages/terms",
      },
      {
        name: "general.footer.privacy",
        address: "/pages/privacy",
      },
    ],
  },
  {
    title: "general.footer.technology",
    class: "divide",
    list: [
      {
        name: "general.footer.documentation",
        address: "https://developers.mixin.one/document",
      },
      {
        name: "general.footer.token",
        address: "/xin",
      },
      {
        name: "general.footer.whitepaper",
        address: "/assets/Mixin-Draft-2018-07-01.pdf",
      },
    ],
  },
  {
    title: "general.footer.community",
    class: "divide",
    list: [
      {
        name: "general.footer.chat",
        address: "https://en.mixin.group",
      },
      {
        name: "general.footer.press",
        address: "/assets/Mixin-Logo.zip",
      },
    ]
  }
];

export default { socials: socials, nodes: nodes };
