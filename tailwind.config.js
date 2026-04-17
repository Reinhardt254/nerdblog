const plugin = require('tailwindcss/plugin')

module.exports = {

  content: [
    './resources/**/*.antlers.html',
    './resources/**/*.blade.php',
    './content/**/*.md'
  ],
  theme: {
    extend: {
        colors: {
            'black': '#12151E',
            'hot-pink': '#2f80ed'
        },
        fontFamily: {
            display: "var(--font-display)",
            body: "var(--font-body)",
        }
    },

  },
  plugins: [
    require('@tailwindcss/typography'),
      plugin(function({ addBase, theme }) {
          addBase({
              'h1': {
                  fontSize: '3.75rem',
                  letterSpacing: '-2px',
                  lineHeight: '1.083',
                  fontWeight: 700
              },
          })
      })
  ],
  important: true
}
