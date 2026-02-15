import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // This covers app, components, and pages
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-cream': '#F9F8F4',
        'brand-sage': '#9CAF88',
        'brand-terracotta': '#D4A373',
        'brand-walnut': '#3E2F28',
        'brand-blue': '#E0F2FE',
      },
      fontFamily: {
        serif: ['var(--font-cormorant)'],
        sans: ['var(--font-inter)'],
      },
    },
  },
  plugins: [],
};

export default config;