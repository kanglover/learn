import type { Metadata } from 'next';
import './globals.css';
import Header from 'components/header';
import Footer from 'components/footer';

export const metadata: Metadata = {
  title: 'Next.js App Router + React Server Components Demo',
  description: 'Hacker News clone built with the Next.js App Router.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <main>
          <Header />
          <div className='page'>
            {children}
            <Footer />
          </div>
        </main>
      </body>
    </html>
  );
}
