/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        jaarky: {
          charcoal: "#1F2933",
          sand: "#F7F3EB",
          teal: "#0E9BA4",
          orange: "#FF7A3C",
          ink: "#111827",
        },
      },
      boxShadow: {
        "soft-lg": "0 18px 45px rgba(15, 23, 42, 0.18)",
      },
      borderRadius: {
        "2xl": "1.25rem",
      },
    },
  },
  plugins: [],
};