'use client';
import { useState } from 'react';
import { CreditCard, Loader2 } from 'lucide-react';

export default function BuyNowButton({ product }) {
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    setLoading(true);
    
    // SIMULATION OF PAYMENT GATEWAY HANDOFF
    // In a real app, you would fetch('/api/checkout') here
    try {
      console.log(`Processing payment for ${product.name} - ₹${product.price}`);
      
      // Simulating API delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Redirect to Stripe/PayPal URL (Mock)
      alert("Redirecting to Secure Payment Gateway (Stripe/PayPal)...");
      
    } catch (error) {
      console.error("Payment initialization failed", error);
      alert("Something went wrong. Please try Amazon or Flipkart.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button 
      onClick={handlePayment}
      disabled={loading}
      className="w-full sm:w-auto flex items-center justify-center gap-2 bg-linear-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-green-500/25 transition-all disabled:opacity-70"
    >
      {loading ? <Loader2 className="animate-spin" /> : <CreditCard />}
      Buy Now - ₹{product.price.toLocaleString('en-IN')}
    </button>
  );
}