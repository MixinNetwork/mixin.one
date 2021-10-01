import './index.scss';
import $ from 'jquery';
import assets from './assets';
import header from '../partials/header';
import footer from '../partials/footer';

function Ecosystem(router, api) {
  this.router = router;
  this.templateIndex = require('./index.html');
}

Ecosystem.prototype = {
  index: function () {
    let self = this;

    $('title').html('Mixin Official Website');
    $('body').attr('class', 'ecosystem layout');

    let wallets = [
      {
        logo: assets.mixin_logo,
        cover: assets.mixin,
        name: "ecosystem.messenger.name",
        description: "ecosystem.messenger.description",
        address: "/messenger",
      },
      {
        class: "revert",
        logo: assets.fennec,
        cover: assets.poolin_wallet,
        name: "ecosystem.fennec.name",
        description: "ecosystem.fennec.description",
        address: "https://github.com/fox-one/fennec",
      },
    ];

    let defi = [
      {
        logo: assets.foxswap,
        name: "ecosystem.4swap.name",
        description: "ecosystem.4swap.description",
      },
      {
        logo: assets.leaf,
        name: "ecosystem.leaf.name",
        description: "ecosystem.leaf.description",
      },
      {
        logo: assets.rings,
        name: "ecosystem.rings.name",
        description: "ecosystem.rings.description",
      },
      {
        logo: assets.mixswap,
        name: "ecosystem.mixswap.name",
        description: "ecosystem.mixswap.description",
      },
      {
        logo: assets.exinlocal_defi,
        name: "ecosystem.exinlocal.name",
        description: "ecosystem.exinlocal.description",
      },
      {
        logo: assets.optiondance,
        name: "ecosystem.optiondance.name",
        description: "ecosystem.optiondance.description",
      },
    ];

    let datas = [0, 0, 0 , 0, 0];
    let partners = [
      {
        class: "brands",
        data: datas.fill([
          {
            logo: assets.links,
            name: "Links",
          },
          {
            logo: assets.poolin,
            name: "Poolin",
          },
          {
            logo: assets.exinone,
            name: "Exin",
          },
          {
            logo: assets.fox,
            name: "Fox",
          },
          {
            logo: assets.quorum,
            name: "Quorum",
          },
          {
            logo: assets.bigone,
            name: "BigONE",
          },
        ]).flat(),
      },
      {
        class: "ecosystems",
        data: datas.fill([
          {
            logo: assets.exinearn,
            name: "ExinEarn",
          },
          {
            logo: assets.coinview,
            name: "CoinView",
          },
          {
            logo: assets.pando,
            name: "Pando",
          },
          {
            logo: assets.blockchair,
            name: "BlockChair",
          },
        ]).flat(),
      },
      {
        class: "coins",
        data: datas.fill([
          {
            logo: assets.tron,
            name: "Tron",
          },
          {
            logo: assets.hzn,
            name: "Horizen",
          },
          {
            logo: assets.dot,
            name: "Polkadot",
          },
          {
            logo: assets.mob,
            name: "MobileCoin",
          },
          {
            logo: assets.vcash,
            name: "VCash",
          },
        ]).flat(),
      }
    ]

    let apps = [
      {
        logo: assets.links,
        type: "ecosystem.links.type",
        name: "ecosystem.links.name",
        description: "ecosystem.links.description",
      },
      {
        logo: assets.exinearn,
        type: "ecosystem.exinearn.type",
        name: "ecosystem.exinearn.name",
        description: "ecosystem.exinearn.description",
      },
      {
        logo: assets.exinone,
        type: "ecosystem.exinone.type",
        name: "ecosystem.exinone.name",
        description: "ecosystem.exinone.description",
      },
      {
        logo: assets.blockchair,
        type: "ecosystem.blockchair.type",
        name: "ecosystem.blockchair.name",
        description: "ecosystem.blockchair.description",
      },
      {
        logo: assets.bwatch,
        type: "ecosystem.bwatch.type",
        name: "ecosystem.bwatch.name",
        description: "ecosystem.bwatch.description",
      },
      {
        logo: assets.exinlocal,
        type: "ecosystem.exinlocal.type",
        name: "ecosystem.exinlocal.name",
        description: "ecosystem.exinlocal.description",
      },
      {
        logo: assets.oceanone,
        type: "ecosystem.oceanone.type",
        name: "ecosystem.oceanone.name",
        description: "ecosystem.oceanone.description",
      },
      {
        logo: assets.bigdex,
        type: "ecosystem.bigdex.type",
        name: "ecosystem.bigdex.name",
        description: "ecosystem.bigdex.description",
      },
      {
        logo: assets.coinview,
        type: "ecosystem.coinview.type",
        name: "ecosystem.coinview.name",
        description: "ecosystem.coinview.description",
      },
    ];

    let index = self.templateIndex({
      slogan: 'ecosystem.slogan',
      wallets: wallets,
      partners: partners,
      defi: defi,
      apps: apps,
      ...header,
      ...footer
    });

    $('#layout-container').html(index);
    self.router.updatePageLinks();

    $('.ic_down').click(function() {
      $([document.documentElement, document.body]).animate({
        scrollTop: $(".wallets").offset().top
      }, 1000);
    });
  },
};

export default Ecosystem;
