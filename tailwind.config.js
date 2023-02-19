/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Configure your color palette here
        "primary-violet": "#6B5CF6",
        "primary-green": "#95D354",
        "primary-pink": "#EE71C7",
        "primary-cyan": "#50C4EE",
        "primary-text": "#333333",
        "secondary-violet": "#F1F0FF",
        "secondary-text": "#929199",
      },
    },
  },
  plugins: [],
};
