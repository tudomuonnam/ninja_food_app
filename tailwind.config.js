module.exports = {
    content: [
    //    './pages/**/*.{html,js}',
        './components/**/*.{html,js}',
        './public/index.html',
      ],
    theme: {
      extend: {
        colors: {
          primary: '#FF6363',
          secondary: {
            100: '#E2E2D5',
            200: '#888883',
          }
        },
        fontFamily: {
          body: ['Nunito']
        }
      },
    },
    plugins: [],
  }