const { urlObjectKeys } = require("next/dist/shared/lib/utils");

module.exports = {  
  content: [   
      "./pages/**/*.{js,ts,jsx,tsx}",   
      "./components/**/*.{js,ts,jsx,tsx}",  
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}