import './globals.css';
import { Inter } from 'next/font/google';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        {children}
        <Footer />

      </body>
    </html>
  );
}
