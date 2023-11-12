import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from './components/navigation';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Let's Dance",
  description: 'Swing dance schedule in Montreal',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Navigation />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
