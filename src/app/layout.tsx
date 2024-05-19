import './globals.css';
import { Plus_Jakarta_Sans } from 'next/font/google';
import QueryProvider from './providers/QueryProvider';

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
