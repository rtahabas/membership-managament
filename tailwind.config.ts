import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "light-blue": "#EEF0F4",
        "light-gray": "#F9F9FB",
        "form-completed": "#b1b4bb",
        "form-textarea": "#dde0e5",
        "form-default": "#EBEEF3",
        "form-border": "#d7d8da",
        "form-text": "#222222",
        "form-img-input": "#FAFAFA",
        "form-button-text": "#0b101a",
        "text-dark-3": "#5a616a",
        "form-warning-text": "#FF4D4F",
        "status-text-waiting": "#9a3412",
        "status-text-refusal": "#991b1b",
        "status-text-approval": "#166534",
        "pagination-text-gray": "#a1a1a1",
        primary: "#2a3958",
        dark: "#222222",
      },
    },
  },
  plugins: [],
};
export default config;
