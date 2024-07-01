/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        whitesmoke: {
          "100": "#f5f5f5",
          "200": "#f0f0f0",
        },
        "primary-color": "#088fe1",
        cornflowerblue: "#21a8fa",
        "not-selected": "#6a6a6a",
        "off-balck": "#141218",
        darkslategray: "#444",
        black: "#000",
        "input-field": "#cacaca",
      },
      spacing: {},
      fontFamily: {
        callout: "Poppins",
        lato: "Lato",
      },
      borderRadius: {
        mid: "17px",
        xl: "20px",
      },
    },
    fontSize: {
      base: "16px",
      "5xl": "24px",
      lgi: "19px",
      xl: "20px",
      "29xl": "48px",
      "19xl": "38px",
      "10xl": "29px",
      xs: "12px",
      inherit: "inherit",
    },
    screens: {
      mq1350: {
        raw: "screen and (max-width: 1350px)",
      },
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
