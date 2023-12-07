// postcss.config.cjs
module.exports = {
  plugins: [
    {
      "@unocss/postcss": {},
    },
    function (css) {
      css.walkRules((rule) => {
        if (rule.nodes.find((node) => node.value?.includes("link-hover-color"))) {
          rule.remove()
        }
        if (rule.nodes.find((node) => node.value?.includes("container-width"))) {
          rule.remove()
        }
      })
    },
  ],
}
