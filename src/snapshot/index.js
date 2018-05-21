import './index.scss';
import $ from 'jquery';
import jQueryColor from '../jquery-color-plus-names.js';
import TimeUtils from '../utils/time.js';
import URLUtils from '../utils/url.js';
import Animator from './animator.js';
var validate = require('uuid-validate');

function Snapshot(router, api) {
  this.router = router;
  this.api = api;
  this.templateIndex = require('./index.html');
  this.templateAsset = require('./asset.html');
  this.templateShow = require('./show.html');
  this.partialItem = require('./item.html');
  this.animator = new Animator();
  jQueryColor($);
}

Snapshot.prototype = {
  index: function(id) {
    const self = this;

    self.api.network.index(function (resp) {
      if (resp.error) {
        return;
      }
      var network = resp.data;

      if (!id) {
        var assetId = 'undefined';
        $('body').addClass('index').addClass(assetId);
        self.load(network, assetId, '', 'after', 100);
        return;
      }

      self.api.network.assetsShow(function (resp) {
        if (resp.error) {
          if (resp.error.code === 404) {
            self.show(network, id);
          }
          return resp.error.code === 404;
        }
        $('body').addClass('index').addClass(id);
        self.load(network, id, '', 'after', 100, resp.data);
      }, id);
    });
  },

  show: function(network, id) {
    const self = this;
    self.api.network.snapshotsShow(function (resp) {
      if (resp.error) {
        return;
      }
      var s = resp.data;
      s.flow = parseFloat(s.amount) > 0 ? 'in' : 'out';
      s.amount = parseFloat(s.amount) < 0 ? s.amount : '+' + s.amount;
      s.logoURL = require('../home/logo.png');
      s.peakTPS = parseInt(network.peak_throughput).toLocaleString(undefined, { minimumFractionDigits: 0 });
      s.snapshotsCount = parseInt(network.snapshots_count).toLocaleString(undefined, { minimumFractionDigits: 0 });
      s.assetsCount = parseInt(network.assets_count).toLocaleString(undefined, { minimumFractionDigits: 0 });
      $('body').attr('class', 'snapshot layout');
      $('title').html('Mixin Network');
      $('#layout-container').html(self.templateShow(s));
      self.animator.init($('.particles.container')[0]);
      self.animator.animate();
      self.router.updatePageLinks();
    }, id);
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
        setTimeout(function() { self.load(network, assetId, offset, order, limit, asset); }, 2100);
        if (order === 'before') {
          return true;
        }
        return;
      }
      if (!$('body').hasClass('snapshot')) {
        $('body').addClass('snapshot');
        $('body').removeClass('loading');
        $('title').html('Mixin Network');
        if (validate(assetId)) {
          asset.logoURL = require('../home/logo.png');
          asset.snapshotsCount = parseInt(asset.snapshots_count).toLocaleString(undefined, { minimumFractionDigits: 0 });
          asset.amount = Math.round(parseFloat(asset.amount)).toLocaleString(undefined, { minimumFractionDigits: 0 });
          $('#layout-container').html(self.templateAsset(asset));
        } else {
          for (var i in network.assets) {
            var a = network.assets[i];
            a.amount = Math.round(parseFloat(a.amount)).toLocaleString(undefined, { minimumFractionDigits: 0 });
          }
          for (var i in network.chains) {
            var c = network.chains[i];
            c.deposit_block_height = c.deposit_block_height.toLocaleString(undefined, { minimumFractionDigits: 0 });
            c.withdrawal_timestamp = TimeUtils.format(c.withdrawal_timestamp);
          }

          $('#layout-container').html(self.templateIndex({
            logoURL: require('../home/logo.png'),
            assetsCount: parseInt(network.assets_count).toLocaleString(undefined, { minimumFractionDigits: 0 }),
            snapshotsCount: parseInt(network.snapshots_count).toLocaleString(undefined, { minimumFractionDigits: 0 }),
            peakTPS: parseInt(network.peak_throughput).toLocaleString(undefined, { minimumFractionDigits: 0 }),
            assets: network.assets,
            chains: network.chains
          }));
        }
        $('form.search').on('submit', function (event) {
          event.preventDefault();
          var id = $('input', $(this)).val().trim();
          if (id.length > 0) {
            self.router.navigate('/snapshots/' + id);
          }
        });
        self.animator.init($('.particles.container')[0]);
        self.animator.animate();
      }
      if (order === 'before') {
        resp.data.reverse();
      }
      for (var i in resp.data) {
        var s = resp.data[i];
        s.created_at = TimeUtils.format(s.created_at);
        switch (s.source) {
          case 'TRANSFER_INITIALIZED':
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
        s.amount = parseFloat(s.amount) < 0 ? s.amount : '+' + s.amount;
        if ($('.snapshot[data-id=' + s.snapshot_id + ']').length === 0) {
          var item = $(self.partialItem(s)).css('background-color', 'rgba(0,176,233,0.3)');
          item = $(item).animate({ backgroundColor: 'transparent' }, 500);
          if (order === 'before') {
            $('.snapshots.list').prepend(item);
          } else {
            $('.snapshots.list').append(item);
          }
        }
      }
      order = 'before';
      self.router.updatePageLinks();
      setTimeout(function() { self.load(network, assetId, offset, order, limit, asset); }, 2100);
    }, assetId, offset, limit);
  }
};


export default Snapshot;
