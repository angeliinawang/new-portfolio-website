import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-text': 'linear-gradient(to right, #25564D, #93D7CA)',
        'gradient-purple': 'linear-gradient(to right, #FFFFFF 0%, #6231D8 38%)',
        'gradient-dark-blue': 'linear-gradient(to right, #FFFFFF 0%, #3F6CF1 20%)',
        'gradient-light-blue': 'linear-gradient(to right, #FFFFFF 0%, #2284B8 28%)',
        'gradient-green': 'linear-gradient(to right, #FFFFFF 0%, #046F4A 20%)',
        'gradient-pink': 'linear-gradient(to right, #FFFFFF 0%, #AD1ECA 28%)',
        'gradient-yellow': 'linear-gradient(to right, #FFFFFF 0%, #F3982E 18%)',
        'gradient-teal': 'linear-gradient(to right, #FFFFFF 0%, #2ABFA2 20%)',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
