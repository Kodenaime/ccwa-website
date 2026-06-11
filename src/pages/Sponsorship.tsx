import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router';
import { SEOHead } from '../components/SEOHead';
import { DonationForm } from '../components/DonationForm';

export const Sponsorship: React.FC = () => {
  return (
    <>
      <SEOHead 
        title="Sponsor a Child | CCWA International" 
        description="Your gift changes a life. Donate to CCWA International and support orphans, widows, and the elderly across Nigeria."
      />
      
      {/* 1. PAGE HERO BANNER */}
      <section className="relative w-full h-[40vh] min-h-[300px] flex items-center justify-center bg-primary overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0">
          <img 
            src="/page.jpg" 
            alt="Page Header Background" 
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-primary/50 mix-blend-multiply"></div>
        </div>
        {/* Subtle pattern or overlay */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-white to-transparent"></div>
        <div className="relative z-10 text-center text-bg px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mb-4">Sponsor a Child</h1>
            <div className="font-body text-sm md:text-base opacity-90 flex items-center justify-center gap-2">
              <Link to="/" className="hover:text-secondary transition-colors">Home</Link>
              <span>&gt;</span>
              <span>Sponsorship</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2 & 3. EMOTIONAL APPEAL & DONATION FORM */}
      <section className="py-20 md:py-28 bg-bg relative">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            
            {/* Emotional Appeal (Left) */}
            <motion.div 
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display font-bold text-4xl md:text-5xl text-primary mb-6 leading-tight">
                Your Gift <span className="text-secondary">Changes a Life</span>
              </h2>
              
              <div className="space-y-6 text-lg text-text opacity-80 mb-10 leading-relaxed font-body">
                <p>
                  Every day, countless widows and orphans in Nigeria face the harsh realities of extreme poverty, lack of education, and limited access to healthcare. But with your support, we can change their story.
                </p>
                <p>
                  When you give to CCWA International, you are not just making a donation; you are planting a seed of hope. Your sponsorship provides educational scholarships, crucial medical care, and vocational training that empowers them to become self-reliant.
                </p>
              </div>

              {/* 3 Impact Stats inline */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-gray-200">
                <div>
                  <div className="text-3xl font-display font-bold text-secondary mb-1">100%</div>
                  <div className="text-sm font-medium text-text opacity-70 uppercase tracking-wider">To Programs</div>
                </div>
                <div>
                  <div className="text-3xl font-display font-bold text-primary mb-1">5k+</div>
                  <div className="text-sm font-medium text-text opacity-70 uppercase tracking-wider">Lives Touched</div>
                </div>
                <div>
                  <div className="text-3xl font-display font-bold text-teal mb-1">30+</div>
                  <div className="text-sm font-medium text-text opacity-70 uppercase tracking-wider">Years Impact</div>
                </div>
              </div>
            </motion.div>

            {/* Donation Form (Right) */}
            <motion.div 
              className="w-full lg:w-1/2 max-w-lg mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <DonationForm />
            </motion.div>

          </div>
        </div>
      </section>

      {/* 4. BANK TRANSFER DETAILS CARD */}
      <section className="pb-24 bg-bg">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="bg-primary text-bg rounded-3xl p-8 md:p-12 text-center shadow-xl relative overflow-hidden"
          >
            {/* Background design elements */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-secondary opacity-20 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <div className="w-16 h-16 mx-auto bg-white/10 flex items-center justify-center rounded-2xl mb-6 backdrop-blur-sm">
                <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              
              <h2 className="font-display font-bold text-3xl mb-8">Prefer Bank Transfer?</h2>
              
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 max-w-xl mx-auto mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-4 text-left">
                  <div>
                    <div className="text-sm opacity-70 mb-1">Bank Name</div>
                    <div className="font-bold text-lg">Guaranty Trust Bank (GTB)</div>
                  </div>
                  <div>
                    <div className="text-sm opacity-70 mb-1">Account Number</div>
                    <div className="font-bold text-lg font-mono tracking-wider">0123456789</div>
                  </div>
                  <div className="md:col-span-2">
                    <div className="text-sm opacity-70 mb-1">Account Name</div>
                    <div className="font-bold text-lg">CCWA International</div>
                  </div>
                </div>
              </div>

              <p className="font-body text-sm opacity-80 max-w-lg mx-auto">
                Please send a confirmation email or receipt to <a href="mailto:donations@ccwainternational.org" className="text-secondary hover:underline font-medium">donations@ccwainternational.org</a> after making your transfer so we can properly acknowledge your gift.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};
