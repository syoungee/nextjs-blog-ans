import Head from 'next/head';
import './globals.css';
import { Open_Sans } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const sans = Open_Sans({ subsets: ['latin'] });

export const metadata = {
  title: {
    default: '리아의 블로그',
    template: '리아의 블로그 | %s',
  },
  description: '풀스택 개발자 리아 블로그',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <Head>
        <meta charSet="UTF-8" />
        <title>{metadata.title.default}</title>
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href={metadata.icons.icon} />
        <meta property="og:title" content={metadata.title.default} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/path_to_image.png" />
        <meta property="og:url" content="https://yourwebsite.com" />
        <link rel="canonical" href="https://yourwebsite.com" />
      </Head>
      <body className={`flex flex-col w-full max-w-screen-2xl mx-auto ${sans.className}`}>
        <Header />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
