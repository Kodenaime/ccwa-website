import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

declare global {
  interface Window {
    PaystackPop: any;
  }
}

export const DonationForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState<string>('');

  const [errors, setErrors] = useState<{name?: string, email?: string, amount?: string}>({});
  
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [paymentCancelled, setPaymentCancelled] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [devModeNotice, setDevModeNotice] = useState('');

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://js.paystack.co/v1/inline.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const validate = () => {
    const newErrors: {name?: string, email?: string, amount?: string} = {};
    if (!name.trim()) newErrors.name = 'Full Name is required';
    if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email)) newErrors.email = 'Valid Email Address is required';
    if (!amount || isNaN(Number(amount)) || Number(amount) < 100) newErrors.amount = 'Amount must be at least 100 Naira';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPaymentCancelled(false);
    setDevModeNotice('');

    if (!validate()) return;
    
    setIsProcessing(true);

    const publicKey = import.meta.env.VITE_PAYSTACK_PUBLIC_KEY;
    
    if (!publicKey || publicKey.startsWith('pk_test') || publicKey === '') {
      setTimeout(() => {
        setDevModeNotice('Paystack not configured — running in preview mode.');
        setPaymentSuccess(true);
        setIsProcessing(false);
      }, 1500);
      return;
    }

    const handler = window.PaystackPop.setup({
      key: publicKey,
      email: email,
      amount: Number(amount) * 100, // in kobo
      currency: 'NGN',
      ref: 'CCWA_' + Math.floor(Math.random() * 1000000000 + 1),
      onClose: () => {
        setPaymentCancelled(true);
        setIsProcessing(false);
      },
      callback: (_response: any) => {
        setPaymentSuccess(true);
        setIsProcessing(false);
      }
    });

    handler.openIframe();
  };

  if (paymentSuccess) {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-bg border border-primary/20 rounded-2xl p-8 md:p-12 text-center shadow-lg"
      >
        <div className="w-20 h-20 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-display font-bold text-3xl text-primary mb-4">Thank You, {name}!</h3>
        <p className="font-body text-text opacity-80 mb-6 max-w-md mx-auto leading-relaxed">
          Your generous donation has been received successfully. You are making a real difference in the lives of widows and orphans across Nigeria.
        </p>
        {devModeNotice && (
          <div className="bg-secondary/10 text-secondary border border-secondary/20 p-3 rounded-lg text-sm mb-6 max-w-sm mx-auto">
            {devModeNotice}
          </div>
        )}
        <button 
          onClick={() => {
            setPaymentSuccess(false);
            setName('');
            setEmail('');
            setAmount('');
          }}
          className="px-8 py-3 bg-primary text-bg rounded-full font-medium hover:bg-primary/90 transition-colors"
        >
          Make Another Donation
        </button>
      </motion.div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-10 relative overflow-hidden">
      {/* Decorative top strip */}
      <div className="absolute top-0 left-0 w-full h-2 bg-linear-to-r from-primary to-secondary"></div>
      
      <h3 className="font-display font-bold text-2xl text-primary mb-2">Secure Donation</h3>
      <p className="font-body text-sm text-text opacity-70 mb-8">All payments are securely processed via Paystack.</p>

      {paymentCancelled && (
        <AnimatePresence>
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="bg-red-50 text-red-600 border border-red-200 p-4 rounded-lg text-sm mb-6 flex items-start gap-3"
          >
            <svg className="w-5 h-5 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <p>Your payment was cancelled. Please try again when you are ready to complete your donation.</p>
          </motion.div>
        </AnimatePresence>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-text mb-2">Full Name <span className="text-red-500">*</span></label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500 bg-red-50' : 'border-gray-300 bg-gray-50'} focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors`}
            placeholder="Jane Doe"
          />
          {errors.name && <p className="text-red-500 text-xs mt-2">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-text mb-2">Email Address <span className="text-red-500">*</span></label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500 bg-red-50' : 'border-gray-300 bg-gray-50'} focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors`}
            placeholder="jane@example.com"
          />
          {errors.email && <p className="text-red-500 text-xs mt-2">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="amount" className="block text-sm font-medium text-text mb-2">Amount (NGN) <span className="text-red-500">*</span></label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-medium">₦</span>
            <input
              type="number"
              id="amount"
              min="100"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className={`w-full pl-10 pr-4 py-3 rounded-lg border ${errors.amount ? 'border-red-500 bg-red-50' : 'border-gray-300 bg-gray-50'} focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors`}
              placeholder="5000"
            />
          </div>
          {errors.amount && <p className="text-red-500 text-xs mt-2">{errors.amount}</p>}
        </div>

        <button
          type="submit"
          disabled={isProcessing}
          className="w-full py-4 bg-secondary text-bg font-bold rounded-lg hover:bg-[#B37008] transition-colors shadow-md flex justify-center items-center gap-2"
        >
          {isProcessing ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processing...
            </>
          ) : (
            'Donate Now'
          )}
        </button>
      </form>
    </div>
  );
};
