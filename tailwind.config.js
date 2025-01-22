/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(30%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        slideUp: 'slideUp 0.6s cubic-bezier(0.2,0.6,0.2,1)',
      },
      colors: {
        primary: '#56C596',
        secondary: '#7CD6B0',
        textMain: '#333333',
        textLight: '#666666',
        background: '#FFFFFF',
        accent: '#FF5733',
      },
    },
  },
  plugins: [],
}

