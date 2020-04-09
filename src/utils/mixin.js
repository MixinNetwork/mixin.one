function MixinUtils() {
}

MixinUtils.prototype = {
  environment: function () {
    if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.MixinContext) {
      return 'iOS';
    }
    if (window.MixinContext && (typeof window.MixinContext.getContext === 'function')) {
      let ctx = JSON.parse(window.MixinContext.getContext());
      return ctx.platform || 'Android';
    }
    return undefined;
  },

  conversationId: function () {
    switch (this.environment()) {
      case 'iOS':
        let ctx = prompt('MixinContext.getContext()');
        return JSON.parse(ctx).conversation_id;
      case 'Android':
        let ctx = window.MixinContext.getContext();
        return JSON.parse(ctx).conversation_id;
      case 'Desktop':
        let ctx = window.MixinContext.getContext();
        return JSON.parse(ctx).conversation_id;
      default:
        return undefined;
    }
  },
}

export default new MixinUtils();
