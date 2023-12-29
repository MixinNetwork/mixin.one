import {
  defineConfig,
  presetUno,
  transformerVariantGroup,
  transformerDirectives,
  DynamicShortcutMatcher,
} from "unocss"

const responsiveDynamicShortcutMatcher: DynamicShortcutMatcher<{
  breakpoints: Record<string, string>
}> = ([, prefix, lowest, highest]: string[], { theme }) => {
  const breakpoints = Object.entries(theme.breakpoints)
    .map(([key, value]) => [key, value.match(/\d+/)[0]])
    .sort((a, b) => +a[1] - +b[1])
    .map(([key]) => key)
    .filter((key) => ["sm", "md", "lg"].includes(key))

  const totalGears = breakpoints.length + 1
  const step = (+highest - +lowest) / (totalGears - 1)

  const result = [
    `${prefix}-${lowest}`,
    ...breakpoints.map(
      (key, i) => `${key}:${prefix}-${+lowest + step * (i + 1)}`,
    ),
  ]
  return result
}

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
      "title-container": "max-w-239 mx-auto",
      shadow: "shadow-[0_4px_20px_0_rgba(0,0,0,0.06)]",
    },
    [
      /^click-area-(\d+)$/,
      ([, num]) =>
        `relative before:content-[''] before:absolute before:-inset-${num}`,
      { autocomplete: ["click-area-<num>"] },
    ],
    [
      /^((?:(?:p|m)(?:[rltbsexy])?)|(?:text|left|right|top|bottom|font)|(?:[w|h])|(?:(?:gap|space)(?:-[xy])?))-(-?\d+(?:\.\d+)?)-(-?\d+(?:\.\d+)?)$/,
      responsiveDynamicShortcutMatcher,
      {
        autocomplete: [
          "p<directions>-<num>-<num>",
          "p(xy)-<num>-<num>",
          "p-<num>-<num>",
          "m<directions>-<num>-<num>",
          "m(xy)-<num>-<num>",
          "m-<num>-<num>",
          "text-<num>-<num>",
          "gap-<num>-<num>",
          "gap-(xy)-<num>-<num>",
          "space-<num>-<num>",
          "space-(xy)-<num>-<num>",
          "w-<num>-<num>",
          "h-<num>-<num>",
          "left-<num>-<num>",
          "right-<num>-<num>",
          "top-<num>-<num>",
          "bottom-<num>-<num>",
          "font-<num>-<num>",
        ],
      },
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
      sm: "680px",
      md: "1000px",
      lg: "1240px",
    },
  },
})
