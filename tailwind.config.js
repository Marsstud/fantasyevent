/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#f4d125",
        "secondary": "#7c3aed",
        "accent": "#9d50bb",
        "magic-deep": "#1a0b2e",
        "magic-indigo": "#2d1b4e",
      },
      fontFamily: {
        "display": ["Be Vietnam Pro", "sans-serif"],
        "magic": ["Playfair Display", "serif"]
      },
      borderRadius: {"DEFAULT": "0.75rem", "lg": "1.25rem", "xl": "1.75rem", "2xl": "2.5rem", "3xl": "4rem", "full": "9999px"},
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 8s ease-in-out infinite 2s',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'twinkle': 'twinkle 3s ease-in-out infinite',
        'border-glow': 'border-glow 4s linear infinite',
        'spin-slow': 'spin 12s linear infinite',
        'drift': 'drift 20s linear infinite',
        'orb-float': 'orb-float 10s ease-in-out infinite',
        'hue-shift': 'hue-shift 15s linear infinite',
        'magical-pulse': 'magical-pulse 10s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        twinkle: {
          '0%, 100%': { opacity: 0.3, transform: 'scale(1)' },
          '50%': { opacity: 1, transform: 'scale(1.2)' },
        },
        'border-glow': {
          '0%, 100%': { 'border-color': 'rgba(244, 209, 37, 0.3)' },
          '50%': { 'border-color': 'rgba(124, 58, 237, 0.6)' },
        },
        drift: {
          '0%': { transform: 'translateX(0) translateY(0)' },
          '100%': { transform: 'translateX(-100px) translateY(-50px)' },
        },
        'orb-float': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)', opacity: 0.3 },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)', opacity: 0.6 },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)', opacity: 0.4 },
        },
        'hue-shift': {
          '0%': { filter: 'hue-rotate(0deg)' },
          '100%': { filter: 'hue-rotate(360deg)' },
        },
        'magical-pulse': {
          '0%, 100%': { opacity: 0.3, transform: 'scale(1)' },
          '50%': { opacity: 0.7, transform: 'scale(1.2)' },
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries'),
  ],
}

