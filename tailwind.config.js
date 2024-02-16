/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '481px',
        'desktop': '1365px',
      },
      backgroundImage: {
        'heropattern': "url('assets/images/png/HeroBg.png')",
        'aboutpattern': "url('assets/images/png/TimerBg.png')",
        'contractpattern': "url('assets/images/png/SmartContractBgLayer.png')",
        'tokenpattern': "url('assets/images/png/TokenblueBg.png')",
        'audittpattern': "url('assets/images/png/AuditBgLayer.png')",
        'faqpattern': "url('assets/images/png/FaqBgLayer.png')",
        'oursocial': "url('assets/images/png/OurSocials.png')",
        'footer': "url('assets/images/png/FooterLayer.png')",
        'yellowoverlay': "url('assets/images/png/YellowOverLay.png')",
        'roadmappattern': "url('assets/images/png/Roadmaps.png')",
        'navpattern': "url('assets/images/png/Navbg.png')",
      },
      backgroundSize: {
        'full': "100% 100%",
      }
    },

  },
  plugins: [],
}

