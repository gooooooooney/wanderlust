import { nextui } from "@nextui-org/theme";
import typographyPlugin from "@tailwindcss/typography";
import { type Config } from "tailwindcss";
import typographyStyles from "./typography";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'size-inherit': "inherit",
      },
      keyframes: {
        imageDiagonalSlide: {
          from: {
            transform: "translateX(0) translateY(0);"
          },
          to: {
            transform: "translateX(100%) translateY(100%);"
          }
        },
        swing:{
          "0%": { transform: "rotate(0deg)" },
          "10%": { transform: "rotate(10deg)" },
          "30%": { transform: "rotate(0deg)" },
          "40%": { transform: "rotate(-10deg)" },
          "50%": { transform: "rotate(0deg)" },
          "60%": { transform: "rotate(5deg)" },
          "70%": { transform: "rotate(0deg)" },
          "80%": { transform: "rotate(-5deg)" },
          "100%": { transform: "rotate(0deg)" }        
        }

      },
      animation: {
        "image-diagonal-slide": "imageDiagonalSlide 40s linear infinite",
        swing: "swing 2s ease-in-out infinite",
      },
    },
    // typography: typographyStyles,
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          layout: {
            
          },
          colors: {
            background: "#FFFDF9", //"#F9F5F6" //"#FFFBF5"
          },
        },
        dark: {
          layout: {}, 
          colors: {
            background: "rgb(15, 23, 42)",
            content1: "#222831",
            content2: "#092635",
          }, 
        },
      },
    }),
    typographyPlugin(),
  ],
} satisfies Config;
