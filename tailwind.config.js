/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ff6b81",
        secondary: "#ffd6e0",
        accent: "#7ed957",

        background: "#f9fafb",
        card: "#ffffff",

        textPrimary: "#1f2937",
        textSecondary: "#6b7280",
      },

      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },

      boxShadow: {
        soft: "0 4px 20px rgba(0,0,0,0.05)",
      },

      fontFamily: {
        sans: ["Poppins", "Noto Sans SC", "sans-serif"],
      },
    },
  },
  plugins: [],
}