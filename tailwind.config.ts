// tailwind.config.ts
import type { Config } from 'tailwindcss';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import aspectRatio from '@tailwindcss/aspect-ratio';
import scrollbar from 'tailwind-scrollbar';

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF2D55',
          50: '#FFE3EA',
          100: '#FFB3C1',
          200: '#FF8097',
          300: '#FF4D6D',
          400: '#FF2351',
          500: '#FF2D55',
          600: '#E6284E',
          700: '#B7203C',
          800: '#86172B',
          900: '#5B101C',
        },
        secondary: {
          DEFAULT: '#00F2EA',
          50: '#E0FFFF',
          100: '#B3FFFF',
          200: '#80FFFB',
          300: '#4DFFF8',
          400: '#1EFFF3',
          500: '#00F2EA',
          600: '#00CABE',
          700: '#00938F',
          800: '#00665D',
          900: '#003929',
        },
        dark: {
          DEFAULT: '#121212',
          100: '#1A1A1A',
          200: '#1F1F1F',
          300: '#262626',
          400: '#2F2F2F',
          500: '#383838',
        },
        light: '#FFFFFF',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        serif: ['Merriweather', 'serif'],
        mono: ['Fira Mono', 'monospace'],
      },
      boxShadow: {
        soft: '0 4px 14px rgba(0, 0, 0, 0.1)',
        focus: '0 0 0 3px rgba(255, 45, 85, 0.4)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        pop: {
          '0%': { transform: 'scale(0.95)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-out forwards',
        pop: 'pop 0.3s ease-out forwards',
      },
    },
  },
  plugins: [
    forms,
    typography,
    aspectRatio,
    scrollbar,
  ],
};

export default config;
