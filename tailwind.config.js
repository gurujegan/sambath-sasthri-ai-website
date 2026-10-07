import typography from '@tailwindcss/typography'

/*
 * Palette drawn from the site's own photography: kumkum maroon, saffron cloth,
 * turmeric/brass gold, sandalwood paste and banana-leaf green.
 */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/components/**/*.{js,vue,ts}',
    './app/layouts/**/*.vue',
    './app/pages/**/*.vue',
    './app/plugins/**/*.{js,ts}',
    './app/app.vue',
    './content/**/*.md',
    './nuxt.config.{js,ts}'
  ],
  theme: {
    extend: {
      colors: {
        kumkum: {
          50: '#FBF1EF',
          100: '#F4DCD7',
          600: '#9E3326',
          700: '#82271D',
          800: '#661E17',
          900: '#4A1611',
          950: '#2E0D0A'
        },
        saffron: {
          50: '#FEF5EC',
          100: '#FCE6CF',
          200: '#F8C994',
          400: '#EE9440',
          500: '#E07A1F',
          600: '#B4560F',
          700: '#93440C'
        },
        gold: {
          200: '#F1DDA4',
          300: '#E8C978',
          400: '#DDB24A',
          500: '#C99622',
          600: '#A07617'
        },
        sandal: {
          50: '#FFFBF5',
          100: '#FBF3E6',
          200: '#F4E6CF',
          300: '#E9D3AF'
        },
        ink: {
          DEFAULT: '#3A2419',
          muted: '#6E5547'
        },
        leaf: {
          600: '#2F6B3A'
        }
      },
      fontFamily: {
        display: ['Marcellus', '"Noto Serif Tamil"', 'Georgia', 'serif'],
        sans: ['"Hind Madurai"', '"Noto Sans Tamil"', 'system-ui', 'sans-serif'],
        tamil: ['"Noto Serif Tamil"', '"Hind Madurai"', 'serif']
      },
      borderRadius: {
        arch: '999px 999px 1.25rem 1.25rem'
      },
      typography: ({ theme }) => ({
        temple: {
          css: {
            '--tw-prose-body': theme('colors.ink.DEFAULT'),
            '--tw-prose-headings': theme('colors.kumkum.800'),
            '--tw-prose-links': theme('colors.kumkum.700'),
            '--tw-prose-bold': theme('colors.ink.DEFAULT'),
            '--tw-prose-counters': theme('colors.saffron.600'),
            '--tw-prose-bullets': theme('colors.saffron.500'),
            '--tw-prose-hr': theme('colors.gold.300'),
            '--tw-prose-captions': theme('colors.ink.muted'),
            '--tw-prose-th-borders': theme('colors.gold.400'),
            '--tw-prose-td-borders': theme('colors.sandal.300')
          }
        }
      })
    }
  },
  plugins: [typography]
}
