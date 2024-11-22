import type { Metadata } from 'next';
import { Barlow, Fraunces } from 'next/font/google';
import Navbar from '@/components/Navbar';
import './globals.css';

const barlow = Barlow({
  subsets: ['latin'],
  weight: '600',
});
const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['700', '900'],
});
export const metadata: Metadata = {
  title: 'Agency landing page',
  description: 'FrontendMentor Challenge',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${barlow.className} ${fraunces.className} `}>
        <div className='relative'>
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
