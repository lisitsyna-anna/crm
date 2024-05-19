import { Plus_Jakarta_Sans } from 'next/font/google';
import { Metadata } from 'next';
import QueryProvider from './providers/QueryProvider';

import './globals.css';

export const metadata: Metadata = {
  title: 'TruScape',
  icons: {
    icon: 'icon.ico',
  },
};

const font = Plus_Jakarta_Sans({ subsets: ['latin'] });

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <html lang="en">
    <body className={font.className}>
      <QueryProvider>{children}</QueryProvider>
    </body>
  </html>
);

export default RootLayout;
