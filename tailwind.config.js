/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      //-------------------------------- ANIMAÇÕES -------------------------------------------------
      keyframes: {
        slideTop: {
          "0%": { opacity: "0", transform: "translateY(10rem)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },

        slideBottom: {
          "0%": { opacity: "0", transform: "translateY(-10rem)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },

        slideLeft: {
          "0%": { opacity: "0", transform: "translateX(10rem)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },

        slideRight: {
          "0%": { opacity: "0", transform: "translateX(-10rem)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },

        zoomIn: {
          "0%": { opacity: "0", transform: "scale(0)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },

        floatImage: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-1rem)" },
        },

        cloudLeft: {
          "0%": { opacity: "1", transform: "translateX(110%)" },
          "100%": { opacity: "1", transform: "translateX(-100vw)" },
        },

        scrolling: {
          "0%": { opacity: "0", transform: "translateY(100%) scale(0.5)" },
          "5%, 20%": {
            opacity: "0.4",
            transform: "translateY(100%) scale(0.7)",
          },
          "25%, 40%": { opacity: "1", transform: "translateY(0%) scale(1)" },
          "45%, 60%": {
            opacity: "0.4",
            transform: "translateY(-100%) scale(0.7)",
          },
          "65%, 100%": {
            opacity: "0",
            transform: "translateY(-100%) scale(0.5)",
          },
        },

        lateralSpin: {
          "0%": { transform: "rotate3d(0, 0, 0, 0)" },

          "100%": { transform: "rotate3d(0, 1, 0, 360deg)" },
        },
      },

      animation: {
        slideTop: "slideTop 1s 0.4s ease forwards",
        slideBottom: "slideBottom 1s 0.4s ease forwards",
        slideLeft: "slideLeft 3s 0.5s ease-in forwards",
        slideRight: "slideRight 3s 0.5s ease forwards",
        zoomIn: "zoomIn 1s 0.2s ease forwards",
        floatImage: "floatImage 3s 0.2s ease-in-out infinite",
        cloudLeft: "cloudLeft 32s linear infinite",
        scrolling: "scrolling 15s linear infinite",
        lateralSpin: "lateralSpin 2.5s 0.1s linear infinite",
      },

      //___________________________________ FIM ANIMAÇÕES ____________________________________________________

      transitionDelay: {
        1500: "1500ms",
        2000: "2000ms",
        2400: "2400ms",
        2600: "2600ms",
        3200: "3200ms",
        4000: "4000ms",
      },

      colors: {
        tallesBlue: "#2c385a",
        tallesBlueLight: "#3399ff",
        tallesGray: "#96989a",
        tallesBlack: "#201e1e",
        tallesBlackBlack: "#1a1919",
        tallesBlackEasy: "#282525",
        tallesGrayLight: "#b5c6d2",
        tallesBlackLight: "#373435",
        tallesBlackLight2: "#4b4b4d",
        "color-text": "#009973",
      },

      screens: {
        // Telas adaptaveis para a NAV
        mobile: { max: "639px" },
        tbl: { max: "900px" },
        lap: { min: "861px" },

        // Telas adaptáveis para o Hero
        lghero: { min: "1550px" },
        deskhero: { max: "1200px" },
        tbhero: { max: "1000px" },
        mobhero: { max: "650px" },
        smhero: { max: "398px" },

        // Telas adaptáveis para o ABOUT
        lgabout: { min: "1600px" },
        tblabout: { max: "1300px" },
        mobabout: { max: "800px" },

        // Telas adaptáveis para o PLANS
        tabplans: { max: "1049px" },
        mobPlans: { max: "660px" },
        smallPlans: { max: "450px" },

        // Telas adaptáveis para RESULTADOS
        tablRes: { max: "1029px" },
        mobRes: { max: "450px" },
        mobileResultado: { max: "325px" },

        // Telas adaptáveis para FEEDBACK
        tablFD: { max: "1023px" },
        mobFD: { max: "639px" },
        deskIcone: { min: "1023px" },
        mobBtn: { max: "700px" },

        // Breakpoints da aba CONQUISTAS
        conqHero: { max: "1400px" },
        conqtbl: { max: "950px" },
        conqdesk: { min: "1300px" },
        conq1: { min: "951px", max: "1100px" },
        conq2: { min: "1101px", max: "1299px" },
        conq3: { min: "1300px", max: "1399px" },
        conq4: { min: "1400px", max: "1600px" },
      },

      spacing: {
        400: "400px",
        500: "500px",
        "5percenet": "5%",
      },

      fontSize: {
        ltt: "12px",
      },

      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
