import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'soft-red': 'hsl(7, 99%, 70%)',
        'dark-desaturated-cyan': 'hsl(167, 40%, 24%)',
        'dark-blue': 'hsl(198, 62%, 26%)',
        'dark-moderate-cyan': 'hsl(168, 34%, 41%)',
        'very-dark-desaturated-blue': 'hsl(212, 27%, 19%)',
        'very-dark-grayish-blue': 'hsl(213, 9%, 39%)',
        'dark-grayish-blue': 'hsl(232, 10%, 55%)',
        'grayish-blue': 'hsl(210, 4%, 67%)',
        'nav-hover-mob': 'hsl(51, 100%, 49%)',
        white: 'hsl(0, 0%, 100%)',
      },
      fontFamily: {
        barlow: ['Barlow', 'sans-serif'],
        fraunces: ['Fraunces', 'serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('/assets/desktop/image-header.jpg')",
        'hero-pattern-mob': "url('/assets/mobile/image-header.jpg')",
        'egg-sec': "url('/assets/desktop/image-transform.jpg')",
        'egg-sec-mob': "url('/assets/mobile/image-transform.jpg')",
        'stand-out': "url('/assets/desktop/image-stand-out.jpg')",
        'stand-out-mob': "url('/assets/mobile/image-stand-out.jpg')",
      },
      boxShadow: {
        'btn-shadow': '0px 16px 24px 1px rgba(0, 0, 0, 0.44)',
      },
    },
  },
  plugins: [],
};

export default config;
