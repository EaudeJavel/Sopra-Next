/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-EP":
          "linear-gradient(313.38deg, #FF54C1 -2.79%, #BE11B3 50.95%, #8206B9 102.51%)",
        "gradient-BL": "linear-gradient(270deg, #017EDD 0%, #9DECFF 100.11%)",
        "gradient-TS":
          "linear-gradient(315.38deg, #FD13EE 0.95%, #FD5E84 51.19%, #FEC038 102.55%)",
        "gradient-OB":
          "linear-gradient(313.38deg, #1540AE -2.79%, #207FD7 50.95%, #29B4FA 102.51%)",
      },
    },
  },
  plugins: [require("daisyui")],
};
