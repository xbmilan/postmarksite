/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Lato', 'sans-serif'],
      },
      colors: {
        cream: {
          50: '#fefcf8',
          100: '#fdf9f0',
          200: '#faf2e1',
          300: '#f6e8c8',
          400: '#f0d9a8',
          500: '#e8c688',
        },
        parchment: {
          50: '#fdfbf7',
          100: '#faf6ee',
          200: '#f4ead5',
          300: '#ecdab8',
          400: '#e1c595',
          500: '#d4ad6f',
        },
        ink: {
          600: '#1e3a5f',
          700: '#1a2f4f',
          800: '#15253f',
          900: '#0f1a2f',
        },
        vintage: {
          red: '#8b2635',
          gold: '#b8860b',
        }
      },
      backgroundImage: {
        'hero-pattern': "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23f6e8c8\" fill-opacity=\"0.1\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"2\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
      }
    },
  },
  plugins: [],
}
