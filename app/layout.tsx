import { Inter } from 'next/font/google';
import './globals.css';
import DisclaimerPopup from '@/components/DisclaimerPopup';
import ProgressLoader from '@/components/ProgressLoader';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ReactNode, Suspense } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Narga Engineering | Future Tech',
  description: 'Automotive & Aerospace Solutions',
};

interface RootLayoutProps {
  children: ReactNode;
}

// Loading component for Suspense fallback
function LoadingFallback() {
  return (
    <div style={loadingStyles.container}>
      <div style={loadingStyles.spinnerWrapper}>
        <div style={loadingStyles.spinnerOuter}></div>
        <div style={loadingStyles.spinnerInner}></div>
        <span style={loadingStyles.text}>Loading...</span>
      </div>
    </div>
  );
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DisclaimerPopup />
        <ProgressLoader />
        <Navbar />
        <main className="pt-20 min-h-screen">
          <Suspense fallback={<LoadingFallback />}>
            {children}
          </Suspense>
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

const loadingStyles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '400px',
    width: '100%',
  },
  spinnerWrapper: {
    position: 'relative' as const,
    width: '60px',
    height: '60px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  spinnerOuter: {
    position: 'absolute' as const,
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    border: '4px solid transparent',
    borderTopColor: '#523831',
    borderRightColor: '#523831',
    animation: 'spin 1.2s linear infinite',
  },
  spinnerInner: {
    position: 'absolute' as const,
    width: '70%',
    height: '70%',
    borderRadius: '50%',
    border: '4px solid transparent',
    borderTopColor: '#523831',
    borderLeftColor: '#523831',
    opacity: 0.7,
    animation: 'spin 1.5s linear infinite reverse',
  },
  text: {
    position: 'absolute' as const,
    top: '70px',
    fontFamily: 'sans-serif',
    fontSize: '14px',
    color: '#523831',
    fontWeight: 600 as const,
    letterSpacing: '1px',
    animation: 'pulse 2s infinite',
  }
};