/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "studiohaus-orange": "#FF9057"
      },
      gridTemplateColumns: {
        "3/2": "3fr 2fr",
        "2/3": "2fr 3fr",
        "3/1/3": "3fr 1fr 3fr"
      },
      aspectRatio: {
        "5/6": "5 / 6"
      },
      fontSize: {
        "superxl": ["10rem", "0.9"]
      },
      backgroundImage: {
        "magnethaus-bg": "url('/assets/magnethaus.jpg')"
      }
    }
  },
  plugins: [],
};
