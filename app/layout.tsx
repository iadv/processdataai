import { Analytics } from '@vercel/analytics/react';
import { Open_Sans } from 'next/font/google';
import { Footer } from './components/footer';
import { Header } from './components/header';
import { GoogleTagManager } from '@next/third-parties/google'
import './globals.css';

const open_sans = Open_Sans({ subsets: ['latin'] });

export const metadata = {
  title: 'Prodata - Superintelligence to your operations workflows',
  description:
    "Prodata.ai's landing page created by Nithin and Ian",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={open_sans.className}>
      <head>
        <meta
          name='viewport'
          content='width=device-width, height=device-height, initial-scale=1'
        />
      </head>
      <body>
        <div>
          <Header />
          <main className='mb-16 overflow-hidden bg-page-gradient pt-[var(--navigation-height)]'>
            {children}
          </main>
          <Footer />
        </div>
        <Analytics />
        <GoogleTagManager gtmId='GTM-5KB39WTZ' />
      </body>
    </html>
  );
}
