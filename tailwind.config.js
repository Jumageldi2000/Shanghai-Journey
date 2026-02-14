// tailwind.config.js - v3版本
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          'from': { boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)' },
          'to': { boxShadow: '0 0 30px rgba(59, 130, 246, 0.8)' },
        },
      },
      backgroundImage: {
        'shanghai-skyline': "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070')",
      }
    },
  },
  plugins: [],
}