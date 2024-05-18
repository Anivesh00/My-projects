/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "ani-default-dark": "#212A31",
        "ani-primary-color": "#124E66",
        "ani-primary-light-color": "#748D92",
        "ani-secondry-color": "#2E3944",
        "ani-secondry-light-color": "#D3D9D4",
      },
      boxShadow: {
        "ani-default-shadow": "0 0 16px 4px #2E3944",
      },
    },
  },
  plugins: [],
};
