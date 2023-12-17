module.exports = {
    future: {
      // removeDeprecatedGapUtilities: true,
      // purgeLayersByDefault: true,
    },
    purge: {
      mode: 'jit',
      content: [
        'dist/**/*.html',
        'src/**/*.vue',
      ],
      options: {
          safelist: [/^wsr-/]
      },
    },
    theme: {
      extend: {
          colors: {
              'blue': {
                  'light-4': '#F5F6FB',
                  'light-8': '#ECEEF9',
                  'light-12': '#E2E4F5',
                  'light-16': '#D8DBF2',
                  'light-32': '#B1B7E5',
                  DEFAULT: '#0D20AF',
                  'dark-12':'#0B1C99',
                  'dark-16': '#0A1A92',
                  'opacity-8': '#0D20AF14',
                  'opacity-12': '#0D20AF1F',
                  'opacity-16': '#0D20AF29',
              },
          },

          fontFamily: {
              'unispace': ["Unispace"],
          },

          screens: {
              'xs': '320px',
              'sm': '600px',
              'md': '905px',
              'lg': '1240px',
              'xl': '1440px',
          },

          maxWidth: {
              'screen-xl': '1440px',
              'screen-lg': '1240px',
              'screen-md': '905px',
              'screen-sm': '600px',
              'screen-xs': '320px',
              'text-field': '480px',
          },
      },
    },
    variants: {
      extend: {
        backgroundColor: ['active'],
        borderWidth: ['hover', 'active', 'focus'],
      },
    },
    plugins: [],
    prefix: 'wsr-',
  }
