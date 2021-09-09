import Polyglot from 'node-polyglot';

function Locale(lang) {
  var locale = 'en-US';
  if (lang && lang.indexOf('zh') >= 0) {
    locale = 'zh-Hans';
  /*
  } else if (lang && lang.indexOf('ja') >= 0) {
    locale = 'ja-JP';
  */
  }
  this.polyglot = new Polyglot({locale: locale});
  this.polyglot.extend(require('./' + locale + '.json'));
  this.locale = locale;
}

Locale.prototype = {
  t: function(key, options) {
    return this.polyglot.t(key, options);
  }
};

export default Locale;
