/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {

      //-------------------------------- ANIMAÇÕES -------------------------------------------------
      keyframes: {
        slideTop: {
          '0%': { opacity: '0', transform: 'translateY(10rem)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },

        slideBottom: {
          '0%': { opacity: '0', transform: 'translateY(-10rem)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },

        slideLeft: {
          '0%': { opacity: '0', transform: 'translateX(10rem)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },

        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-10rem)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },

        zoomIn: {
          '0%': { opacity: '0', transform: 'scale(0)' },
          '100%': { opacity: '1', transform: 'scale(1)' }
        },

        floatImage: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-3.5rem)' }
        },

        cloudLeft: {
          '0%': { opacity: '1', transform: 'translateX(110%)' },
          '100%': { opacity: '1', transform: 'translateX(-100vw)' }
        }

      },

      animation: {
        slideTop: 'slideTop 1s 0.4s ease forwards',
        slideBottom: 'slideBottom 1s 0.4s ease forwards',
        slideLeft: 'slideLeft 3s 0.5s ease-in forwards',
        slideRight: 'slideRight 3s 0.5s ease forwards',
        zoomIn: 'zoomIn 1s 0.2s ease forwards',
        floatImage: 'floatImage 4s 0.2s ease-in-out infinite',
        cloudLeft: 'cloudLeft 32s linear infinite',

      },

      //___________________________________ FIM ANIMAÇÕES ____________________________________________________


      transitionDelay: {
        '1500': '1500ms',
        '2000': '2000ms',
        '2400': '2400ms',
        '2600': '2600ms',
        '3200': '3200ms',
        '4000': '4000ms',
      },


      colors: {
        tallesBlue: '#2c385a',
        tallesBlueLight: '#3399ff',
        tallesGray: '#96989a',
        tallesBlack: '#201e1e',
        tallesBlackBlack: '#1a1919',
        tallesBlackEasy: '#282525',
        tallesGrayLight: '#b5c6d2',
        tallesBlackLight: '#373435',
        tallesBlackLight2: '#4b4b4d',
        'color-text': '#009973'
      },

      screens: {
        // Telas adaptaveis para a NAV
        'mobile': { 'max': '639px' },
        'tbl': { 'max': '900px' },
        'lap': { 'min': '861px' },

        // Telas adaptáveis para o Hero 
        'lghero': { 'min': '1550px' },
        'deskhero': { 'max': '1200px' },
        'tbhero': { 'max': '1000px' },
        'mobhero': { 'max': '650px' },
        'smhero': { max: '398px' },


        // Telas adaptáveis para o ABOUT 
        'lgabout': { 'min': '1600px' },
        'tblabout': { 'max': '1300px' },
        'mobabout': { 'max': '800px' }


      },

      spacing: {
        '400': '400px',
        '5percenet': '5%'
      },

      fontSize: {
        'ltt': '12px'
      },

      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      },

    },
  },
  plugins: [],
}

