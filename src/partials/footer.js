import assets from './assets';

let socials = [
  {
    cover: assets.ic_medium,
    address: "https://medium.com/mixinnetwork"
  },
  {
    cover: assets.ic_twitter,
    address: "https://twitter.com/Mixin_Network"
  },
  {
    cover: assets.ic_reddit,
    address: "https://www.reddit.com/r/mixin"
  },
  {
    cover: assets.ic_telgram,
    address: "https://t.me/MixinCommunity"
  },
  {
    cover: assets.ic_youtube,
    address: "https://www.youtube.com/channel/UCLWQ94gw7wRK-S5qy4LAVrA"
  },
];

let nodes = [
  {
    class: "",
    list: [
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
    class: "divide",
    list: [
      {
        name: "general.footer.document",
        address: "https://developers.mixin.one/",
      },
      {
        name: "general.footer.whitepaper",
        address: "/assets/Mixin-Draft-2018-07-01.pdf",
      },
      {
        name: "general.footer.press",
        address: "/assets/Mixin-Logo.zip",
      },
    ],
  },
  {
    class: "divide",
    list: [
      {
        name: "general.footer.contact",
        address: "mailto:contact@mixin.one",
      },
      {
        name: "general.footer.token",
        address: "/xin",
      },
    ]
  }
];

export default { socials: socials, nodes: nodes };
