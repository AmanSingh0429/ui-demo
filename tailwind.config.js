/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        bgSoft: '#28E3E9',
        textDark: '#045A5C',
        textSoft: '#62C3C6',
        accentblue: '#28E3E9',
        redText: '#A10C0C'
      },
      fontFamily: {
        sora: ['Sora']
      }
    },
  },
  plugins: [],
};
