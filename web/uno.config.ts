import { defineConfig, presetUno, transformerVariantGroup, transformerDirectives, presetWebFonts } from "unocss"

export default defineConfig({
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
    [/^rw-(\d+)$/, (match) => ({ width: `calc(100% - ${+match[1] / 4}rem)` })],
    [
      /^marquee-(\d+(\.\d+)?)$/,
      (match) => ({
        animation: `marquee 15s linear infinite`,
        "@keyframes marquee": `{
          from {
            transform: translate3d(0, 0, 0);
          }
          to {
            transform: translate3d(calc(-51% - ${+match[1] / 8}rem), 0, 0)
          }
      }`,
      }),
    ],
  ],
  shortcuts: {
    "flex-center": "flex items-center justify-center",
  },
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
