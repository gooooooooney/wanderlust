import {nextui} from '@nextui-org/theme'
import typographyPlugin from '@tailwindcss/typography'
import { type Config } from 'tailwindcss'
import typographyStyles from './typography'




export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {},
    typography: typographyStyles,
  },
  darkMode: "class",
  plugins: [nextui(), typographyPlugin()],
}  satisfies Config
