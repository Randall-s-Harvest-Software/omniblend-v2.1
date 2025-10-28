/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '375px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1920px',
      '4xl': '2560px',
      'asusscreen': '1366px', // Common resolution for 15.6" ASUS laptops
    },
    extend: {
      keyframes: {
        rotateOnce: {
          "0%": { transform: "rotate(7deg)" },
          "100%": { transform: "rotate(-7deg)" },
        },
        floatY: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-15px)" },
        },
        zoomRotate: {
          "0%": { transform: "scale(0.8) rotate(0deg)", opacity: "0" },
          "100%": { transform: "scale(1) rotate(15deg)", opacity: "0.5" },
        },
        dropIn: {
          "0%": { transform: "translateY(-100vh)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        fadeDrop: {
          "0%": { transform: "translateY(-40px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        "float-y": "floatY 3s ease-in-out infinite",
        "zoom-rotate-once": "zoomRotate 2s ease-out forwards",
        "drop-in": "dropIn 1.2s ease-out forwards",
        "drop-then-float": "dropIn 1.2s ease-out forwards, floatY 3s ease-in-out infinite 1.2s",
        "fade-drop": "fadeDrop 1s ease-out forwards",
        "rotate-once": "rotateOnce 1s ease-out forwards",
      },
      fontFamily: {
        michroma: ["Michroma", "sans-serif"],
        andika: ["'Andika New Basic'", "sans-serif"],
        albert: ["Albert Sans", "sans-serif"],
        afacad: ["Afacad", "Helvetica Neue", "Arial", "sans-serif"],
        pethra: ["Pethra", "serif"],
      },
    },
  },
  plugins: [],
}
