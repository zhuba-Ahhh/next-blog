import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1890ff",
          light: "#40a9ff",
          dark: "#096dd9",
        },
        secondary: {
          DEFAULT: "#36CFC9",
          light: "#17E4DC",
          dark: "#289490",
        },
        dark: {
          DEFAULT: "#001529",
          light: "#002140",
          darker: "#000c17",
        },
        light: "#f0f2f5",
        accent: "#f5222d",
        warning: "#faad14",
        info: "#13c2c2",
        gray: {
          DEFAULT: "#d9d9d9",
          light: "#f5f5f5",
          dark: "#8c8c8c",
        },
      },
    },
  },
  plugins: [],
};

export default config;
