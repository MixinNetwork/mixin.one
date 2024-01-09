// postcss.config.cjs
module.exports = {
  plugins: [
    {
      "@unocss/postcss": {},
    },
    function (css) {
      css.walkRules((rule) => {
        ;[
          "--ifm-table",
          "--ifm-link",
          "--ifm-navbar-link",
          "--ifm-container",
        ].forEach((item) => {
          if (rule.nodes.find((node) => node.value?.includes(item))) {
            rule.remove()
          }
        })
      })
    },
  ],
}
