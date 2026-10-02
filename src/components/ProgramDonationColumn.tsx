import React from 'react';
import { motion } from 'framer-motion';

export const ProgramDonationColumn: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-bg">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="bg-primary text-bg rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden"
        >
          {/* Background design elements */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-secondary opacity-20 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-4 text-center">
              Support the North East Annual Thanksgiving
            </h2>
            <p className="font-body text-base md:text-lg opacity-90 text-center max-w-2xl mx-auto mb-8">
              Donate toward this program using the CCWA Access Bank account below, and help us embrace the forgotten in God's love.
            </p>

            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 max-w-xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-4 text-left">
                <div>
                  <div className="text-sm opacity-70 mb-1">Bank Name</div>
                  <div className="font-bold text-lg">Access Bank</div>
                </div>
                <div>
                  <div className="text-sm opacity-70 mb-1">Account Number</div>
                  <div className="font-bold text-lg font-mono tracking-wider">0123456789</div>
                </div>
                <div className="md:col-span-2">
                  <div className="text-sm opacity-70 mb-1">Account Name</div>
                  <div className="font-bold text-lg">Christians Care for Widows Widowers the Aged and Orphans.</div>
                </div>
              </div>
            </div>

            <p className="font-body text-sm opacity-80 max-w-lg mx-auto text-center mt-6">
              Please send a confirmation email or receipt to <a href="mailto:donations@ccwainternational.org" className="text-secondary hover:underline font-medium">donations@ccwainternational.org</a> after making your transfer so we can properly acknowledge your gift.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
