import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'E-Commerce Catalog',
  description: 'Next.js Demo App',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-blue-500 p-4 text-white">
          <a href="/" className="mr-4">Home</a>
          <a href="/dashboard" className="mr-4">Dashboard</a>
          <a href="/admin" className="mr-4">Admin</a>
          <a href="/recommendations">Recommendations</a>
        </nav>
        {children}
      </body>
    </html>
  );
}
