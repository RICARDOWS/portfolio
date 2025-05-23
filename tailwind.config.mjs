/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        tertiary: "var(--color-tertiary)",
        colorUnderline: "var(--color-underline)",
      },
    },
  },
  darkMode: "class",
  plugins: [
		function ({ addVariant }) {
			addVariant("any-hover", "@media (any-hover: hover) { &:hover }")
		},
	],
};
