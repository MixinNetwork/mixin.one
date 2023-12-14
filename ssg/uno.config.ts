import {
  defineConfig,
  presetUno,
  transformerVariantGroup,
  transformerDirectives,
} from "unocss"

export default defineConfig({
  content: {
    filesystem: ["**/*.{html,js,ts,jsx,tsx}"],
  },
  presets: [presetUno()],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  rules: [
    [
      /^rw-(\d+)$/,
      ([, num]) => ({ width: `calc(100% - ${+num / 4}rem)` }),
      {
        autocomplete: ["rw-<num>"],
      },
    ],
  ],
  shortcuts: [
    {
      "flex-center": "flex items-center justify-center",
      "absolute-center":
        "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform",
      "absolute-vertical-center": "absolute top-1/2 -translate-y-1/2 transform",
      "absolute-horizontal-center":
        "absolute left-1/2 -translate-x-1/2 transform",
      fill: "absolute inset-0 w-full h-full",
      "title-container": "max-w-3/4 sm:max-w-2/3 mx-auto",
    },
    [
      /^click-area-(\d+)$/,
      ([, num]) =>
        `relative before:content-[''] before:absolute before:-inset-${num}`,
      { autocomplete: ["click-area-<num>"] },
    ],
  ],
  theme: {
    fontWeight: {
      thin: "100",
      extralight: "100",
      light: "200",
      normal: "300",
      medium: "400",
      semibold: "500",
      bold: "600",
      extrabold: "700",
      black: "800",
    },
    animation: {
      keyframes: {
        marquee: `{
          from{transform:translate3d(0,0,0)}
          to{transform:translate3d(calc(-50% - 0.6875rem),0,0)}
        }`,
        "marquee-sm": `{
          from{transform:translate3d(0,0,0)}
          to{transform:translate3d(calc(-50% - 1rem),0,0)}
        }`,
        "marquee-md": `{
          from{transform:translate3d(0,0,0)}
          to{transform:translate3d(calc(-50% - 1.4375rem),0,0)}
        }`,
      },
      durations: {
        marquee: "60s",
        "marquee-sm": "60s",
        "marquee-md": "60s",
        "marquee-lg": "60s",
      },
      counts: {
        marquee: "infinite",
        "marquee-sm": "infinite",
        "marquee-md": "infinite",
        "marquee-lg": "infinite",
      },
    },
    breakpoints: {
      sm: "720px",
      md: "960px",
      lg: "1200px",
    },
  },
})
