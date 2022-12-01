function MixinUtils() {
}

MixinUtils.prototype = {
  environment: function () {
    if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.MixinContext) {
      return 'iOS';
    }
    if (window.MixinContext && (typeof window.MixinContext.getContext === 'function')) {
      var ctx = JSON.parse(window.MixinContext.getContext());
      return ctx.platform || 'Android';
    }
    return undefined;
  },

  conversationId: function () {
    switch (this.environment()) {
      case 'iOS':
        var ctx = prompt('MixinContext.getContext()');
        return JSON.parse(ctx).conversation_id;
      case 'Android':
        var ctx = window.MixinContext.getContext();
        return JSON.parse(ctx).conversation_id;
      case 'Desktop':
        var ctx = window.MixinContext.getContext();
        return JSON.parse(ctx).conversation_id;
      default:
        return undefined;
    }
  },
}

export default new MixinUtils();
