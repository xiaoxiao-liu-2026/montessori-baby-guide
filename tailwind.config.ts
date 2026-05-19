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
        cream: "#FBF7EF",
        oatmeal: "#F2E8D8",
        sage: "#7F9B82",
        sageDark: "#4F6F55",
        apricot: "#F2C9A5",
        mist: "#E7F0EC",
        ink: "#2F332F"
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
