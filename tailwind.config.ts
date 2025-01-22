import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        castoro: 'var(--castoro)',
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        'dark-green': '#243831',
        'gray-app-100': '#BBC2C0',
        'green-app': '#2B5F44',
        success: '#49A569',
      },
    },
  },
  plugins: [],
} satisfies Config;
