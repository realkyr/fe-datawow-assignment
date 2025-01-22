import { Castoro, Inter, Maitree } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--inter',
});

const castoro = Castoro({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--castoro',
});

export { inter, castoro };
