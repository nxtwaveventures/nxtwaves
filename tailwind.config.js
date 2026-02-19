module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      borderRadius: {
        // 24px radius used across cards & buttons
        'custom-24': '24px'
      },
      backgroundImage: {
        // subtle sunlight gradient for page background
        'sun-gradient': "linear-gradient(135deg,#fffbeb 0%,#fde68a 40%,#fbbf24 100%)"
      },
      colors: {
        // Clinical palette
        'clinical-bg': '#F8F9FA',
        'clinical-text': '#202124',
        // Sunlight accents (warm / amber palette)
        sun: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706'
        },
        'indigo-pulse': '#6366F1',
        // keep/use Tailwind named accents but ensure the clinical shades
        teal: {
          600: '#0D9488'
        },
        slate: {
          600: '#475569'
        }
      }
    }
  },
  plugins: []
};
