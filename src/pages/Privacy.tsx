import React from 'react';
import { motion } from 'framer-motion';
import { SEOHead } from '../components/SEOHead';

export const Privacy: React.FC = () => {
  return (
    <>
      <SEOHead 
        title="Privacy Policy | CCWA International" 
        description="Privacy Policy for CCWA International"
        noIndex={true}
      />
      
      <section className="py-20 md:py-28 bg-bg relative">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-display font-bold text-4xl md:text-5xl text-primary mb-8">Privacy Policy</h1>
            
            <div className="prose prose-lg prose-green max-w-none font-body text-text opacity-90 space-y-6">
              <p className="text-sm opacity-70">Last Updated: April 2026</p>
              
              <h2 className="text-2xl font-bold text-primary mt-8 mb-4">1. Information We Collect</h2>
              <p>When you visit the CCWA International website, we may collect information in the following ways:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Information you provide to us directly:</strong> When you fill out a contact form, donation form, or subscribe to our newsletter, you may provide us with your name, email address, phone number, and any messages you choose to send.</li>
                <li><strong>Information collected automatically:</strong> We use Google Analytics to collect anonymous data about how visitors interact with our site, including IP addresses, browser types, and pages visited.</li>
              </ul>

              <h2 className="text-2xl font-bold text-primary mt-8 mb-4">2. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Respond to your enquiries, partnership requests, and volunteering applications.</li>
                <li>Process your donations and send you necessary receipts or updates regarding your sponsorship.</li>
                <li>Improve our website's performance and user experience using anonymous analytics.</li>
              </ul>

              <h2 className="text-2xl font-bold text-primary mt-8 mb-4">3. Payment Processing</h2>
              <p>All donations and sponsorships made through our website are securely processed via <strong>Paystack</strong>. CCWA International does <strong>not</strong> store, process, or have access to your credit card data or banking details. Please refer to Paystack's Privacy Policy for more information on how they handle your financial data.</p>

              <h2 className="text-2xl font-bold text-primary mt-8 mb-4">4. Google Analytics</h2>
              <p>We use Google Analytics (GA4) to understand our website traffic. This service uses cookies to collect anonymous usage data. You can opt out of Google Analytics by installing the Google Analytics Opt-out Browser Add-on or by adjusting your browser's cookie settings.</p>

              <h2 className="text-2xl font-bold text-primary mt-8 mb-4">5. Your Rights</h2>
              <p>You have the right to request access to the personal information we hold about you, to request corrections, or to ask that we delete your information. To exercise these rights, please contact us at ccwahdqtrs@gmail.com.</p>

              <h2 className="text-2xl font-bold text-primary mt-8 mb-4">6. Governing Law</h2>
              <p>This Privacy Policy is governed by the laws of the Federal Republic of Nigeria.</p>

              <h2 className="text-2xl font-bold text-primary mt-8 mb-4">7. Contact Us</h2>
              <p>If you have any questions or concerns regarding this Privacy Policy, please contact us at:</p>
              <address className="not-italic mt-2">
                CCWA Headquarters<br />
                No.3 Church Crescent Opposite Rano Oil & Gas, beside The Apostolic Church<br />
                Nyanya-Karshi Road, Abuja, Nigeria<br />
                Email: <a href="mailto:ccwahdqtrs@gmail.com" className="text-secondary hover:underline">ccwahdqtrs@gmail.com</a>
              </address>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};
