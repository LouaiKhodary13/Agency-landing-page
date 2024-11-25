import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  safelist: [
    'bg-egg-sec',
    'bg-egg-sec-mob',
    'bg-stand-out',
    'bg-stand-out-mob',
    'bg-gallery-sugarcubes-mob',
    'bg-gallery-sugarcubes',
    'order-0',
    'order-1',
    'order-2',
    'order-3',
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
        'graphic-design-desk':
          "url('/assets/desktop/image-graphic-design.jpg')",
        'graphic-design-mob': "url('/assets/mobile/image-graphic-design.jpg')",
        'photography-desk': "url('/assets/desktop/image-photography.jpg')",
        'photography-mob': "url('/assets/mobile/image-photography.jpg')",
        'gallery-cone': "url('/assets/desktop/image-gallery-cone.jpg')",
        'gallery-cone-mob': "url('/assets/mobile/image-gallery-cone.jpg')",
        'gallery-milkbottles':
          "url('/assets/desktop/image-gallery-milkbottles.jpg')",
        'gallery-milkbottles-mob':
          "url('/assets/mobile/image-gallery-milkbottles.jpg')",
        'gallery-orange': "url('/assets/desktop/image-gallery-orange.jpg')",
        'gallery-orange-mob': "url('/assets/mobile/image-gallery-orange.jpg')",
        'gallery-sugarcubes':
          "url('/assets/desktop/image-gallery-sugarcubes.jpg')",
        'gallery-sugarcubes-mob':
          "url('/assets/mobile/image-gallery-sugar-cubes.jpg')",
      },
      boxShadow: {
        'btn-shadow': '0px 16px 24px 1px rgba(0, 0, 0, 0.44)',
      },
    },
  },
  plugins: [],
};

export default config;
