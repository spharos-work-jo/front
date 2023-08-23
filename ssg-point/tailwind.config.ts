import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'point-img' : 'url("https://m.shinsegaepoint.com/img/point_gradi.d5d9bfaf.png")',
        'gradient': 'linear-gradient(126deg, #F40000 0%, #E6772A 7.29%, #EE9C38 17.71%, #EDAE3D 53.36%, #E78A41 65.63%, #A460C4 79.52%, #9C6BC2 88.98%, #71A2B9 96.55%)',

      },
    },

  },
  plugins: [],
}
export default config
