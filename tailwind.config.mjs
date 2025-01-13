/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brandOffWhite: "#D6D5D5",
        brandRed: "#E5484D",
        brandGrey: "#BFBFBF",
      },
      fontFamily: {
        impact: ["var(--font-impact)","sans-serif"],
        BSD : ["var(--font-big-shoulders-display)", "cursive"],
        ibm: ["var(--font-ibm)", "monospace"],
      },
    },
  },
  plugins: [],
};
