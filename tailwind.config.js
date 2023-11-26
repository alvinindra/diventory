/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      colors: {
        diventory: {
          primary: {
            DEFAULT: '#2A68C1',
            50: '#f0f5fe',
            100: '#D6E6FC',
            200: '#AECDF9',
            300: '#85B4F7',
            400: '#5D9BF4',
            500: '#2E47BA',
            600: '#2A68C1',
            700: '#1F4E91',
            800: '#153460',
            900: '#0A1A30',
            950: '#192452',
          },
          secondary: {
            100: '#CCF3F3',
            200: '#99E8E8',
            300: '#66DCDC',
            400: '#33D1D1',
            500: '#00C5C5',
            600: '#009E9E',
            700: '#007676',
            800: '#004F4F',
            900: '#002727',
          },
          tertiary: {
            100: '#FEECD5',
            200: '#FDD8AB',
            300: '#FBC580',
            400: '#FAB156',
            500: '#F99E2C',
            600: '#C77E23',
            700: '#955F1A',
            800: '#643F12',
            900: '#322009',
          },
          black: {
            primary: '#3A3A3C',
            secondary: '#3a3a3c99',
            tertiary: '#3a3a3c66',
            quartenary: '#3a3a3c33',
          },
          white: {
            primary: '#FFFFFF',
            secondary: '#FDFDFE',
            tertiary: '#F7F8FC',
            quartenary: '#DCDCDC',
          },
        },
      },
    },
  },
  plugins: [],
}
