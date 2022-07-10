function withOpacity(cssVariable) {
  return ({ opacityValue }) => {
    return opacityValue ? `rgba(var(${cssVariable}), ${opacityValue})` : `rgb(var(${cssVariable}))`
  }
}

const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    colors: {
      'primary': withOpacity('--color-primary'), // 10, 10, 10
      'secondary': withOpacity('--color-secondary'), // 210, 208, 207
      'accent': withOpacity('--color-accent') // 252, 72, 55
    },
    fontFamily: {
      sans: ['Overpass', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      handwriting: ['Pacifico'],
      mono: ['Overpass Mono']
    },
    extend: {
      lineHeight: {
        'extra-loose': '2.5',
        '12': '3rem',
      },
      aspectRatio: {
        '4/3': '4 / 3',
        '16/9': '16 / 9'
      },
    }
  },

  plugins: []
};

module.exports = config;
