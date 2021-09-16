import './index.scss';
import $ from 'jquery';
import assets from './assets';
import header from '../partials/header';
import footer from '../partials/footer';


function Homepage(router, api) {
  this.router = router;
  this.templateIndex = require('./index.html');
}

Homepage.prototype = {
  index: function () {
    let self = this;

    $('title').html('Mixin Official Website');
    $('body').attr('class', 'home renewal');

    let products = [
      {
        title: "homepage.mn.title",
        description: "homepage.mn.description",
        class: "mn",
        features: [
          {
            title: "homepage.mn.pos.title",
            description: "homepage.mn.pos.description",
            cover: assets.mn_kernal_url,
          },
          {
            title: "homepage.mn.layer2.title",
            description: "homepage.mn.layer2.description",
            cover: assets.mn_domain_url,
            class: "revert",
          },
          {
            title: "homepage.mn.dag.title",
            description: "homepage.mn.dag.description",
            cover: assets.mn_dag_url,
          },
          {
            title: "homepage.mn.tee.title",
            description: "homepage.mn.tee.description",
            cover: assets.mn_tee_url,
            class: "revert",
          },
          {
            title: "homepage.mn.crypto_note.title",
            description: "homepage.mn.crypto_note.description",
            cover: assets.mn_crypto_note_url,
          },
        ],
      },
      {
        title: "homepage.mtg.title",
        description: "homepage.mtg.description",
        class: "mtg",
        features: [
          {
            title: "homepage.mtg.security.title",
            description: "homepage.mtg.security.description",
            cover: assets.mtg_security_url,
            class: "revert",
          },
          {
            title: "homepage.mtg.flexible.title",
            description: "homepage.mtg.flexible.description",
            cover: assets.mtg_flexible_url,
          },
        ],
      },
      {
        title: "homepage.tip.title",
        description: "homepage.tip.description",
        class: "tip",
        features: [
          {
            title: "homepage.tip.network.title",
            description: "homepage.tip.network.description",
            cover: assets.tip_network_url,
          },
          {
            title: "homepage.tip.manager.title",
            description: "homepage.tip.manager.description",
            cover: assets.tip_manager_url,
            class: "revert",
          },
          {
            title: "homepage.tip.pin.title",
            description: "homepage.tip.pin.description",
            cover: assets.tip_password_url,
          },
        ],
      },
      {
        title: "homepage.mm.title",
        description: "homepage.mm.description",
        class: "mm",
        features: [
          {
            title: "homepage.mm.chat.title",
            description: "homepage.mm.chat.description",
            cover: assets.mm_chat_url,
            class: "revert",
          },
          {
            title: "homepage.mm.wallet.title",
            description: "homepage.mm.wallet.description",
            cover: assets.mm_wallet_url,
          },
          {
            title: "homepage.mm.bot.title",
            description: "homepage.mm.bot.description",
            cover: assets.mm_bot_url,
            class: "revert",
          },
        ],
      }
    ];

    let index = self.templateIndex({
      slogan: 'homepage.slogan',
      products: products,
      ...header,
      ...footer
    });

    $('#layout-container').html(index);
    self.router.updatePageLinks();

    $('.ic_down').click(function() {
      $([document.documentElement, document.body]).animate({
        scrollTop: $(".product.mn").offset().top
      }, 1000);
    });
  },
};

export default Homepage;
