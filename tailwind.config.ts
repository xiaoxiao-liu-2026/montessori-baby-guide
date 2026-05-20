import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FAF9F5",
        oatmeal: "#E3DED5",
        sage: "#6F806D",
        sageDark: "#315B43",
        olive: "#263F31",
        apricot: "#DDBE96",
        mist: "#E8F0E9",
        stone: "#F1EFEA",
        ink: "#252A27"
      },
      fontFamily: {
        sans: [
          "var(--font-sans)",
          "ui-sans-serif",
          "system-ui",
          "sans-serif"
        ],
        serif: [
          "var(--font-serif)",
          "ui-serif",
          "Georgia",
          "serif"
        ]
      },
      boxShadow: {
        soft: "0 18px 45px rgba(79, 111, 85, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
