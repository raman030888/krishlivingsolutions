import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Krish Living Solutions | Curtains & Blinds',
  description: 'Quality curtains and blinds for your home by Krish Living Solutions',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Google Ads Tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-11525702527"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-11525702527');
            `,
          }}
        ></script>
      </head>
      <body className={inter.className}>
        {children}
        {/* Optional: Remove the GoogleAnalytics component if redundant */}
      </body>
    </html>
  );
}
