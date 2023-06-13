import './globals.css';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

const links = [
  {
    label: 'home',
    route: '/',
  },
  {
    label: 'about',
    route: '/about',
  },
];

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <nav>
            {links.map(({ label, route }) => (
              <li key={label}>
                <Link href={route}>{label}</Link>
              </li>
            ))}
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
