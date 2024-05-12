import type {Config} from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0e1016",
        secondary: "#212531",
        accent: "#e4ded7",
        orange: "#e4ded7",
        //orange: "#6FA1E5",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
export default config;
