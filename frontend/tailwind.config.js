
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      },
      backgroundImage: {
        "fade-x-right":
          "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
          "fade-x-left":
          "linear-gradient(to left, transparent, black 20%, black 80%, transparent)",
      },
      fontSize: {
        xs: ["0.75rem", "1rem"],   
        sm: ["0.875rem", "1.25rem"], 
        base: ["1rem", "1.5rem"],  
        lg: ["1.125rem", "1.75rem"], 
        xl: ["1.25rem", "1.75rem"],
        "2xl": ["1.5rem", "2rem"],
        "3xl": ["1.875rem", "2.25rem"],
        "4xl": ["2.25rem", "2.5rem"],   
        "5xl": ["3rem", "1"],         
      },
      letterSpacing: {
        tightest: "-2.75px",
        tighter: "-1.04px",
        tight: "-0.32px",
        normal: "-0.14px",
        wide: "0.12px",
      },      
      boxShadow: {
        xs: "0px 1px 2px rgba(16,24,40,0.05)",
        sm: "0px 1px 3px rgba(16,24,40,0.1), 0px 1px 2px rgba(16,24,40,0.06)",
        md: "0px 4px 6px rgba(0,0,0,0.1), 0px 2px 4px rgba(0,0,0,0.1)",
        lg: "0px 12px 16px -4px rgba(16,24,40,0.08), 0px 4px 6px -2px rgba(16,24,40,0.03)",
        feature: "0 4px 34px 26px #fcfcfc inset",
      },      
      borderRadius: {
        sm: "0.375rem",
        md: "0.5rem",
        lg: "0.75rem",
        xl: "1rem",
        "2xl": "1.5rem",
      },      
      colors: {
        primary: {
          DEFAULT: "#465FFF",
          25: "#F2F7FF",
          50: "#ECF3FF",
          100: "#DDE9FF",
          200: "#C2D6FF",
          300: "#9CB9FF",
          400: "#7B90B5",
          500: "#465FFF",
          600: "#3641F5",
        },
      
        gray: {
          25: "#FCFCFD",
          50: "#F9FAFB",
          100: "#F2F4F7",
          200: "#E4E7EC",
          300: "#D0D5DD",
          400: "#98A2B3",
          500: "#667085",
          600: "#475467",
          700: "#344054",
          800: "#1D2939",
          900: "#101828",
        },
      
        success: {
          50: "#ECFDF3",
          500: "#12B76A",
          600: "#039855",
          700: "#027A48",
        },
      
        error: {
          50: "#FEF3F2",
          500: "#F04438",
          600: "#D92D20",
          700: "#B42318",
        },
      
        warning: {
          25: "#FFFCF5",
          50: "#FFFAEB",
          500: "#F79009",
          600: "#DC6803",
          700: "#B54708",
        },
      
        title: "#1D2939",
        text: "#344054",
        "text-secondary": "#667085",
        "text-tertiary": "#98A2B3",
        stroke: "#E4E7EC",
        "stroke-secondary": "#F2F4F7",
        "stroke-tertiary": "#D0D5DD",
      }
    },
  },
  plugins: []
};