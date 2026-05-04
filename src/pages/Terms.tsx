import React from 'react';
import { motion } from 'framer-motion';
import { SEOHead } from '../components/SEOHead';

export const Terms: React.FC = () => {
  return (
    <>
      <SEOHead 
        title="Terms of Use | CCWA International" 
        description="Terms of Use for CCWA International"
        noIndex={true}
      />
      
      <section className="py-20 md:py-28 bg-bg relative">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-display font-bold text-4xl md:text-5xl text-primary mb-8">Terms of Use</h1>
            
            <div className="prose prose-lg prose-green max-w-none font-body text-text opacity-90 space-y-6">
              <p className="text-sm opacity-70">Last Updated: April 2026</p>
              
              <h2 className="text-2xl font-bold text-primary mt-8 mb-4">1. Acceptance of Terms</h2>
              <p>By accessing and using the CCWA International website (ccwaintl.org), you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to abide by these terms, please do not use this site.</p>

              <h2 className="text-2xl font-bold text-primary mt-8 mb-4">2. Acceptable Use</h2>
              <p>You agree to use our website only for lawful purposes. You are prohibited from:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Using the site in any way that violates any applicable local, national, or international law or regulation.</li>
                <li>Attempting to interfere with the proper working of the site, including hacking, distributing viruses, or attempting to compromise our security.</li>
                <li>Submitting false, abusive, or harassing information through our contact or donation forms.</li>
              </ul>

              <h2 className="text-2xl font-bold text-primary mt-8 mb-4">3. Intellectual Property</h2>
              <p>All content published on this site, including text, photographs, graphics, logos, and audio-visual materials, is the property of CCWA International or its content creators and is protected by international copyright laws. You may not reproduce, distribute, modify, or commercially exploit any of the content without prior written consent from CCWA International.</p>

              <h2 className="text-2xl font-bold text-primary mt-8 mb-4">4. Liability Limitation</h2>
              <p>The information provided on this website is for general informational purposes only. While we strive to keep the information up to date and correct, CCWA International makes no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, or availability of the website or the information contained on the website. In no event will we be liable for any loss or damage arising out of, or in connection with, the use of this website.</p>

              <h2 className="text-2xl font-bold text-primary mt-8 mb-4">5. Modifications</h2>
              <p>CCWA International reserves the right to modify these Terms of Use at any time. We do so by posting and drawing attention to the updated terms on this site. Your continued use of the site following any such modifications constitutes your acceptance of the new Terms of Use.</p>

              <h2 className="text-2xl font-bold text-primary mt-8 mb-4">6. Governing Law</h2>
              <p>These terms and conditions are governed by and construed in accordance with the laws of the Federal Republic of Nigeria, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.</p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};
