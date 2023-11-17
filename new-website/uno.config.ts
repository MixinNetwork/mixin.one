import { defineConfig, presetUno, transformerVariantGroup, transformerDirectives, presetWebFonts } from "unocss"

export default defineConfig({
  // content: {
  //   filesystem: ["**/*.{html,js,ts,jsx,tsx}"],
  // },
  presets: [
    presetUno(),
    presetWebFonts({
      provider: "bunny",
      fonts: {
        default: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
    }),
  ],
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
      "absolute-center": "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform",
      "absolute-vertical-center": "absolute top-1/2 -translate-y-1/2 transform",
      "absolute-horizontal-center": "absolute left-1/2 -translate-x-1/2 transform",
      fill: "absolute inset-0 w-full h-full",
    },
    [/^click-area-(\d+)$/, ([, num]) => `relative before:content-[''] before:absolute before:-inset-${num}`, { autocomplete: ["click-area-<num>"] }],
  ],
  theme: {
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
      md: "920px",
      lg: "1200px",
    },
  },
})