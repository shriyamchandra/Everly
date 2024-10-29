// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ensure all component paths are included
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1E3A8A', // Deep Blue
          light: '#3B82F6',   // Optional lighter variant
          dark: '#1E40AF',    // Optional darker variant
        },
        secondary: {
          DEFAULT: '#F3F4F6', // Light Gray
        },
        accent: {
          coral: '#F97316',    // Coral
          emerald: '#10B981',  // Emerald Green
        },
        text: {
          DEFAULT: '#374151', // Dark Slate
          light: '#6B7280',    // Optional lighter text
        },
        background: {
          DEFAULT: '#FFFFFF', // White
          light: '#F9FAFB',   // Optional background variant
        },
        border: {
          DEFAULT: '#D1D5DB', // Medium Gray
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Ensure Inter is installed or linked
      },
    },
  },
  plugins: [],
};
