import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        surface: {
          DEFAULT: "rgb(var(--surface-rgb) / <alpha-value>)",
          subtle: "rgb(var(--surface-rgb) / <alpha-value>)",
          card: "var(--card-bg-start)",
          elevated: "var(--card-bg-end)",
          border: "var(--border-color)",
          borderHover: "var(--border-gold)",
        },
        amber: {
          gold: "rgb(var(--accent-rgb) / <alpha-value>)",
          light: "#ffd48e",
          muted: "#9e7d44",
        },
        coral: {
          accent: "#f26e4b",
          deep: "#872103",
        },
        text: {
          platinum: "var(--text-primary)",
          muted: "var(--text-secondary)",
          dim: "var(--text-tertiary)",
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        serif: ['"Newsreader"', 'Georgia', 'serif'],
        mono: ['"Space Grotesk"', 'monospace'],
        body: ['"Manrope"', 'sans-serif'],
      },
      boxShadow: {
        'glow-gold': '0 0 40px -10px rgba(226, 184, 115, 0.25)',
        'glow-subtle': '0 20px 40px -15px rgba(0, 0, 0, 0.7)',
      },
    },
  },
  plugins: [],
} satisfies Config;
