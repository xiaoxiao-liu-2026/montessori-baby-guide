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
        cream: "#F7F4EE",
        oatmeal: "#E5DED2",
        sage: "#75866D",
        sageDark: "#3F5F48",
        apricot: "#F2C9A5",
        mist: "#E5ECE5",
        ink: "#2B302B"
      },
      fontFamily: {
        sans: [
          "var(--font-sans)",
          "ui-sans-serif",
          "system-ui",
          "sans-serif"
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
