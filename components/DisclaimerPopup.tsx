'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export default function DisclaimerPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [accepted, setAccepted] = useState(false);

  useEffect(() => {
    // Check if user already accepted disclaimer
    const hasAccepted = localStorage.getItem('disclaimer-accepted');
    if (!hasAccepted) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('disclaimer-accepted', 'true');
    setAccepted(true);
    setIsVisible(false);
  };

  const handleDecline = () => {
    // Redirect away or show message
    window.location.href = 'https://google.com';
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-100 flex items-center justify-center bg-black/50 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 p-6 relative"
          >
            {/* Close Button */}
            <button
              onClick={handleDecline}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X size={20} />
            </button>

            {/* Content */}
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Important Disclaimer
              </h2>
              
              <div className="text-sm text-gray-600 text-left space-y-3 mb-6 max-h-60 overflow-y-auto">
                <p>
                  Welcome to Narga Engineering. By accessing this website, you acknowledge and agree to the following terms:
                </p>
                
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>All product specifications and information are subject to change without notice</li>
                  <li>Prices are indicative and may vary based on configuration and market conditions</li>
                  <li>Technical drawings and specifications are proprietary and confidential</li>
                  <li>Products may be subject to export controls and regulations</li>
                  <li>Performance data is based on laboratory testing under controlled conditions</li>
                </ul>

                <p className="font-medium text-[#523831]">
                  For detailed technical specifications and commercial inquiries, please contact our sales team.
                </p>
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                <button
                  onClick={handleDecline}
                  className="flex-1 py-3 px-4 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                >
                  Decline & Exit
                </button>
                <button
                  onClick={handleAccept}
                  className="flex-1 py-3 px-4 bg-[#523831] text-white rounded-lg hover:bg-[#3a2925] transition-colors font-medium"
                >
                  Accept & Continue
                </button>
              </div>

              <p className="text-xs text-gray-500 mt-4">
                By continuing, you agree to our Terms of Service and Privacy Policy
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}