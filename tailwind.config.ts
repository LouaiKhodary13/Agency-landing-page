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
        colors: {
          'soft-red': 'hsl(7, 99%, 70%)',
          yellow: 'hsl(51, 100%, 49%)',
          'dark-desaturated-cyan': 'hsl(167, 40%, 24%)',
          'dark-blue': 'hsl(198, 62%, 26%)',
          'dark-moderate-cyan': 'hsl(168, 34%, 41%)',
          // Neutral colors
          'very-dark-desaturated-blue': 'hsl(212, 27%, 19%)',
          'very-dark-grayish-blue': 'hsl(213, 9%, 39%)',
          'dark-grayish-blue': 'hsl(232, 10%, 55%)',
          'grayish-blue': 'hsl(210, 4%, 67%)',
          white: 'hsl(0, 0%, 100%)',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      fontFamily: {
        barlow: ['Barlow"', 'sans-serif'],
        fraunces: ['Fraunces"', 'serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('/assets/desktop/image-header.jpg')",
        'hero-pattern-mob': "url('/assets/mobile/image-header.jpg')",
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [],
};
export default config;
