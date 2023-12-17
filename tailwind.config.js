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
            'purple': {
                'light-80': '#f6e7fd',
                'light-60': '#d387f7',
                'light-40': '#b028f0',
                'light-20': '#750ca6',
                DEFAULT: '#320547',
                'opacity-8': '#32054714',
                'opacity-12': '#3205471F',
                'opacity-16': '#32054729',
            },
            'blue': {
                'light-20': '#f2fbff',
                DEFAULT: '#8edffd',
                'dark-20':'#2ac3fb',
                'dark-40': '#038abc',
                'opacity-8': '#8edffd14',
                'opacity-12': '#8edffd1F',
                'opacity-16': '#8edffd29',
            },
            'rose': {
              'light-40': '#fbc1d7',
              'light-20': '#f56199',
                DEFAULT: '#e20e5e',
                'dark-20':'#820836',
                'dark-40': '#22020ec',
                'opacity-8': '#e20e5e14',
                'opacity-12': '#e20e5e1F',
                'opacity-16': '#e20e5e29',
            }
          },

          fontFamily: {
              'unispace': ["Unispace"],
              'consolas': ["Consolas"],
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
