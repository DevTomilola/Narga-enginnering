'use client';

import React, { useState, useEffect, useRef } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

/**
 * A "Smart" Global Loader for Next.js App Router.
 * Features:
 * 1. Triggers on all internal link clicks (Soft Navigation)
 * 2. Enforces a minimum display time (500ms) to prevent fast flashes
 * 3. Auto-hides when the route (pathname or query) changes
 * 4. Accessible with proper ARIA attributes
 */
const GlobalLoader = () => {
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  // Refs to track loading state and timeouts
  const loadingStartTime = useRef<number | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const MINIMUM_LOADING_TIME = 500;

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Stop loading when the route changes
  useEffect(() => {
    if (isLoading && loadingStartTime.current) {
      const elapsedTime = Date.now() - loadingStartTime.current;
      const remainingTime = Math.max(MINIMUM_LOADING_TIME - elapsedTime, 0);

      // Clear any existing timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      // Set new timeout to hide loader
      timeoutRef.current = setTimeout(() => {
        setIsLoading(false);
        loadingStartTime.current = null;
      }, remainingTime);

      return () => {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      };
    }
  }, [pathname, searchParams, isLoading]);

  // Start loading when internal links are clicked
  useEffect(() => {
    const handleAnchorClick = (event: MouseEvent) => {
      const anchor = (event.target as Element).closest('a');

      if (!anchor || !anchor.href) return;

      // Ignore external links, modifier clicks, and same-page anchors
      const isExternal = anchor.target === '_blank' || 
                        anchor.hostname !== window.location.hostname;
      const isModifierClick = event.ctrlKey || event.metaKey || event.shiftKey;
      const isSamePageAnchor = anchor.hash && 
                              anchor.pathname === window.location.pathname;

      if (isExternal || isModifierClick || isSamePageAnchor) {
        return;
      }

      const targetUrl = new URL(anchor.href);
      const currentUrl = new URL(window.location.href);

      // Only trigger for actual navigation
      if (targetUrl.pathname !== currentUrl.pathname || 
          targetUrl.search !== currentUrl.search) {
        loadingStartTime.current = Date.now();
        setIsLoading(true);
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  if (!isLoading) return null;

  return (
    <div 
      style={styles.container}
      role="status"
      aria-live="polite"
      aria-label="Loading page content"
    >
      <div style={styles.spinnerWrapper}>
        <div style={styles.spinnerOuter}></div>
        <div style={styles.spinnerInner}></div>
        <span style={styles.text}>Loading...</span>
      </div>

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
    </div>
  );
};

const styles = {
  container: {
    position: 'fixed' as const,
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    zIndex: 9999,
    backdropFilter: 'blur(4px)',
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

export default GlobalLoader;