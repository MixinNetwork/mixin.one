import './index.scss';
import './solo.scss';
import Decimal from 'decimal.js';
import $ from 'zepto-webpack';
import TimeUtils from '../utils/time.js';
import validate from 'uuid-validate';
import blueLogo from '../assets/icons/logo.png';
import viewblockLogo from '../assets/icons/viewblock-logo.svg';

const PartialLoading = require('../loading.html');

function Snapshot(router, api) {
  this.router = router;
  this.api = api;
  this.templateIndex = require('./index.html');
  this.templateSoloAsset = require('./solo_asset.html');
  this.templateSoloChain = require('./solo_chain.html');
  this.templateAsset = require('./asset.html');
  this.templateShow = require('./show.html');
  this.partialHeader = require('./header.html');
  this.partialChains = require('./chains.html');
  this.partialItem = require('./item.html');
}

Snapshot.prototype = {
  index: function(id, order, refresh) {
    const self = this;

    if (id && id.trim() !== '' && id !== 'undefined' && !validate(id)) {
      return self.api.network.search(function (resp) {
        if (resp.error) {
          return;
        }
        if (resp.data.length === 0) {
          resp.error = {code: 404};
          return;
        }
        return self.router.replace('/snapshots/'+resp.data[0].asset_id);
      }, id);
    }

    if (refresh && !($('body').hasClass('index') || !$('body').hasClass(id))) {
      return;
    }
    $('.header.container').addClass('index');
    if (validate(id)) {
      $('.header.container').removeClass('index');
    }

    self.api.network.index(function (resp) {
      if (refresh && !($('body').hasClass('index') || !$('body').hasClass(id))) {
        return;
      }
      if (resp.error) {
        return;
      }
      var network = resp.data;

      if (!validate(id)) {
        if (!refresh) {
          $('body').addClass('index').addClass('undefined');
        }
        self.load(network, 'undefined', '', order, 100);
        return;
      }

      self.api.network.assetsShow(function (resp) {
        if (resp.error) {
          if (resp.error.code === 404) {
            self.show(network, id);
          }
          return resp.error.code === 404;
        }
        if (!refresh) {
          $('body').addClass('index').addClass(id);
        }
        self.load(network, id, '', order, 100, resp.data);
      }, id);
    });
  },

  show: function(network, id) {
    const self = this;
    self.api.network.snapshotsShow(function (resp) {
      if (resp.error) return;
      var s = resp.data;
      s.flow = parseFloat(s.amount) > 0 ? 'in' : 'out';
      let amount = new Decimal(s.amount);
      if (amount.gt(new Decimal('100000000000'))) {
        s.amount_hum = amount.toExponential(12);
      } else {
        s.amount_hum = s.amount;
      }
      s.amount_hum = parseFloat(s.amount) < 0 ? s.amount_hum : '+' + s.amount_hum;
      s.logoURL = blueLogo;
      s.peakTPS = parseInt(network.peak_throughput).toLocaleString(undefined, { maximumFractionDigits: 0 });
      s.snapshotsCount = parseInt(network.snapshots_count).toLocaleString(undefined, { maximumFractionDigits: 0 });
      s.assetsCount = parseInt(network.assets_count).toLocaleString(undefined, { maximumFractionDigits: 0 });
      s.hasHash = !!s.snapshot_hash;
      s.viewblockLink = 'https://viewblock.io/mixin/snapshot/' + s.snapshot_hash;
      s.viewblockIcon = viewblockLogo;
      $('body').attr('class', 'snapshot layout');
      $('title').html('Snapshot ' + id + ' | Mixin - Secure Digital Assets and Messages on Mixin');
      $('#layout-container').html(self.templateShow(s));
      if (!s.hasHash) {
        $('#spinner-container').html(PartialLoading());
        const timer = setInterval(() => {
          self.api.network.snapshotsShow((resp) => {
            if (resp.error) return;
            if (!!resp.data.snapshot_hash) {
              s.hasHash = true;
              s.viewblockLink = 'https://viewblock.io/mixin/snapshot/' + resp.data.snapshot_hash;
              $('#layout-container').html(self.templateShow(s));
              clearInterval(timer);
            }
          }, id);
        }, 3000);
      }
      self.router.updatePageLinks();
    }, id);
  },

  assets: function () {
    const self = this;
    $('title').html('Top Assets | Mixin - Secure Digital Assets and Messages on Mixin');
    self.api.network.index(function (resp) {
      if (resp.error) {
        return;
      }
      var s = resp.data;
      s.peakTPS = parseInt(s.peak_throughput).toLocaleString(undefined, { maximumFractionDigits: 0 });
      s.snapshotsCount = parseInt(s.snapshots_count).toLocaleString(undefined, { maximumFractionDigits: 0 });
      s.assetsCount = parseInt(s.assets_count).toLocaleString(undefined, { maximumFractionDigits: 0 });
      for (let i = 0; i < s.assets.length; i++) {
        let asset = s.assets[i];
        asset.amount = Math.round(parseFloat(asset.amount)).toLocaleString(undefined, { maximumFractionDigits: 0 });
      }
      if (!$('body').hasClass('assets')) {
        $('#layout-container').html(self.templateSoloAsset(s));
        $('body').attr('class', 'assets layout');
      } else {
        $('.assets.count').html(s.assetsCount);
        $('.snapshots.count').html(s.snapshotsCount);
        $('.peak').html(s.peakTPS);
        for (let i = 0; i < s.assets.length; i++) {
          $(`[data-id="${s.assets[i].asset_id}"] .amount`).html(s.assets[i].amount);
        }
      }
      setTimeout(function() { self.assets(); }, 2100);
    });
  },

  chains: function () {
    const self = this;
    $('title').html('All Blockchains | Mixin - Secure Digital Assets and Messages on Mixin');
    self.api.network.index(function (resp) {
      if (resp.error) {
        return;
      }

      for (let i = 0; i < resp.data.chains.length; i++) {
        resp.data.chains[i].deposit_block_height = resp.data.chains[i].deposit_block_height.toLocaleString(undefined, { maximumFractionDigits: 0 });
        resp.data.chains[i].withdrawal_timestamp = TimeUtils.format(resp.data.chains[i].withdrawal_timestamp);
      }
      if (!$('body').hasClass('chains')) {
        $('#layout-container').html(self.templateSoloChain({chains: resp.data.chains}));
        $('body').attr('class', 'chains layout');
      } else {
        for (let i = 0; i < resp.data.chains.length; i++) {
          const chain = resp.data.chains[i];
          $(`[data-id="${chain.chain_id}"] .sync`).removeClass('true false').addClass(`${chain.is_synchronized}`);
          $(`[data-id="${chain.chain_id}"] .height`).html(chain.deposit_block_height);
          $(`[data-id="${chain.chain_id}"] .timestamp`).html(chain.withdrawal_timestamp);
          $(`[data-id="${chain.chain_id}"] .pending.count`).html('['+chain.withdrawal_pending_count+']');
          $(`[data-id="${chain.chain_id}"] .chain-fee`).html(chain.withdrawal_fee);
        }
      }
      setTimeout(function() { self.chains(); }, 2100);
    });
  },

  load: function (network, assetId, offset, order, limit, asset) {
    const self = this;
    if (!$('body').hasClass('index') || !$('body').hasClass(assetId)) {
      return;
    }
    self.api.network.snapshotsIndex(function (resp) {
      if (!$('body').hasClass('index') || !$('body').hasClass(assetId)) {
        return;
      }
      if (resp.error) {
        setTimeout(function() { self.index(assetId, order, true); }, 2100);
        if (order === 'before') {
          return true;
        }
        return;
      }
      if (!$('body').hasClass('snapshot')) {
        $('body').addClass('snapshot');
        $('body').removeClass('loading');
        if ($('body').hasClass('undefined')) {
          $('title').html('Snapshots Explorer | Mixin - Secure Digital Assets and Messages on Mixin');
          $('#layout-container').html(self.templateIndex());
        } else {
          let chains = window.localStorage.getItem('chains') || '{}';
          let chainSet = JSON.parse(chains);
          if (!chainSet[asset.chain_id] || (asset.chain_id === asset.asset_id && chainSet[asset.chain_id]) !== asset.icon_url) {
            self.api.network.index(function (resp) {
              if (resp.data) {
                resp.data.chains.forEach((chain) => {
                  chainSet[chain.chain_id] = chain.icon_url;
                });
              };
              window.localStorage.setItem('chains', JSON.stringify(chainSet));
            });
          };

          let name = asset.name + ' (' + asset.symbol + ')';
          $('title').html(name + ' | Mixin - Secure Digital Assets and Messages on Mixin');
          asset.logoURL = blueLogo;
          asset.chainLogoURL = chainSet[asset.chain_id];
          asset.snapshotsCount = parseInt(asset.snapshots_count).toLocaleString(undefined, { maximumFractionDigits: 0 });
          let amount = new Decimal(asset.amount);
          asset.amount_hum = amount.toFixed(2);
          if (amount.gt(new Decimal('100000000000'))) {
            asset.amount_hum = amount.toExponential(12);
          } else {
            asset.amount_hum = parseFloat(asset.amount_hum);
          }
          $('#layout-container').html(self.templateAsset(asset));
        }
        $('form.search').on('submit', function (event) {
          event.preventDefault();
          var id = $('input', $(this)).val().trim();
          if (id.length > 0) {
            self.router.navigate('/snapshots/' + id);
          }
        });
      }

      if ($('body').hasClass('undefined')) {
        for (var i in network.assets) {
          var a = network.assets[i];
          a.amount = Math.round(parseFloat(a.amount)).toLocaleString(undefined, { maximumFractionDigits: 0 });
        }
        if ($('.header.container').hasClass('render')) {
          $('.assets-amount', '.header.container').html(parseInt(network.assets_count).toLocaleString(undefined, { maximumFractionDigits: 0 }));
          $('.snapshots-count', '.header.container').html(parseInt(network.snapshots_count).toLocaleString(undefined, { maximumFractionDigits: 0 }));
          $('.thoroughput-amount', '.header.container').html(parseInt(network.peak_throughput).toLocaleString(undefined, { maximumFractionDigits: 0 }));
          for (var i in network.assets) {
            var a = network.assets[i];
            $(`.${a.asset_id}-amount`, '.header.container').html(a.amount);
          }
        } else {
          $('.header.container').html(self.partialHeader({
            logoURL: blueLogo,
            assetsCount: parseInt(network.assets_count).toLocaleString(undefined, { maximumFractionDigits: 0 }),
            snapshotsCount: parseInt(network.snapshots_count).toLocaleString(undefined, { maximumFractionDigits: 0 }),
            peakTPS: parseInt(network.peak_throughput).toLocaleString(undefined, { maximumFractionDigits: 0 }),
            assets: network.assets
          }));
          $('.header.container').addClass("render");
        }
        if ($('.chains.container').hasClass('render')) {
          for (var i in network.chains) {
            var c = network.chains[i];
            c.deposit_block_height = c.deposit_block_height.toLocaleString(undefined, { maximumFractionDigits: 0 });
            c.withdrawal_timestamp = TimeUtils.format(c.withdrawal_timestamp);
            $(`.${c.chain_id}-sync`).removeClass('true false').addClass(`${c.is_synchronized}`);
            $(`.${c.chain_id}-height`, '.chains.container').html(c.deposit_block_height);
            $(`.${c.chain_id}-timestamp`, '.chains.container').html(c.withdrawal_timestamp);
            $(`.${c.chain_id}-pending`, '.chains.container').html(`[${c.withdrawal_pending_count}]`);
            $(`.${c.chain_id}-fee`, '.chains.container').html(c.withdrawal_fee);
          }
        } else {
          for (var i in network.chains) {
            var c = network.chains[i];
            c.deposit_block_height = c.deposit_block_height.toLocaleString(undefined, { maximumFractionDigits: 0 });
            c.withdrawal_timestamp = TimeUtils.format(c.withdrawal_timestamp);
          }
          $('.chains.container').html(self.partialChains(network));
          $('.chains.container').addClass("render");
        }
      }

      if (order === 'before') {
        resp.data.reverse();
      }
      for (var i in resp.data) {
        var s = resp.data[i];
        if ($(`.snapshot[data-id="${s.snapshot_id}"]`).length > 0) {
          continue;
        }

        s.created_at_unix = new Date(s.created_at).getTime();
        s.created_at = TimeUtils.format(s.created_at);
        switch (s.source) {
          case 'TRANSFER_INITIALIZED':
          case 'RAW_TRASACTION_INITIALIZED':
          case 'RAW_TRASACTION_RECEIVED':
            s.source = 'energy';
            break;
          case 'DEPOSIT_CONFIRMED':
          case 'WITHDRAWAL_INITIALIZED':
            s.source = 'wallet';
            break;
          case 'WITHDRAWAL_FAILED':
          case 'WITHDRAWAL_FEE_CHARGED':
            s.source = 'layers';
            break;
        }
        s.flow = parseFloat(s.amount) > 0 ? 'in' : 'out';
        let amount = new Decimal(s.amount);
        if (amount.gt(new Decimal('100000000000'))) {
          s.amount_hum = amount.toExponential(12);
        } else {
          s.amount_hum = s.amount;
        }
        s.amount_hum = parseFloat(s.amount) < 0 ? s.amount_hum : '+' + s.amount_hum;
        var items = $('.snapshot.item');
        if (order != 'before' || items.length == 0 || parseInt($(items[0]).attr('data-time')) <= s.created_at_unix) {
          var item = $(self.partialItem(s));
          if (order === 'before') {
            $('.snapshots.list').prepend(item);
          } else {
            $('.snapshots.list').append(item);
          }
        }
      }
      $('.snapshots.list li:nth-of-type(1n+100)').remove();
      order = 'before';
      self.router.updatePageLinks();
      setTimeout(function() { self.index(assetId, order, true); }, 2100);
    }, assetId, offset, limit);
  }
};


export default Snapshot;
