// postcss.config.cjs
module.exports = {
  plugins: [
    {
      "@unocss/postcss": {},
    },
    function (css) {
      css.walkRules((rule) => {
        ;["--ifm-table", "link-hover-color", "container-width"].forEach(
          (item) => {
            if (rule.nodes.find((node) => node.value?.includes(item))) {
              rule.remove()
            }
          },
        )
      })
    },
  ],
}
