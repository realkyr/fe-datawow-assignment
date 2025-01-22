import type { Metadata } from 'next';
import './globals.css';
import { castoro, inter } from '@/utils/font';
export const metadata: Metadata = {
  title: 'A Board',
  description: 'Blog post app create by nextjs',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${castoro.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
