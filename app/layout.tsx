import { Inter } from 'next/font/google';
import './globals.css';
import DisclaimerPopup from '@/components/DisclaimerPopup';
import GlobalLoader from '@/components/GlobalLoader';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ReactNode } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Narga Engineering | Future Tech',
  description: 'Automotive & Aerospace Solutions',
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DisclaimerPopup />
        <GlobalLoader />
        <Navbar />
        <main className="pt-20 min-h-screen">
          {children}
        </main>
        <Footer />
        
        {/* Global styles for animations */}
        <style>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
          }
        `}</style>
      </body>
    </html>
  );
}