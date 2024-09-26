module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#f5f6fa', // Light gray background
        secondary: '#1b1f3b', // Dark navy
        accentBlue: '#00a8ff', // Vibrant blue for buttons and accents
        accentGreen: '#dc2626', // Vibrant green for sections
        textPrimary: '#2f3640', // Dark gray text
        hoverBlue: '#273c75', // Dark blue for hover
      },
      animation: {
        fadeIn: 'fadeIn 1.5s ease-in forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
};
