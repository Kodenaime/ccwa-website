import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const [errors, setErrors] = useState<{name?: string, email?: string, subject?: string, message?: string}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [devModeNotice, setDevModeNotice] = useState('');

  const validate = () => {
    const newErrors: {name?: string, email?: string, subject?: string, message?: string} = {};
    if (!name.trim()) newErrors.name = 'Full Name is required';
    if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email)) newErrors.email = 'Valid Email Address is required';
    if (!subject) newErrors.subject = 'Subject is required';
    if (!message.trim() || message.trim().length < 20) newErrors.message = 'Message must be at least 20 characters';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError('');
    setDevModeNotice('');
    
    if (!validate()) return;
    
    setIsSubmitting(true);

    const accessKey = import.meta.env.VITE_WEB3FORMS_KEY;

    if (!accessKey) {
      setTimeout(() => {
        setDevModeNotice('Web3Forms key missing — running in preview mode.');
        setIsSuccess(true);
        setIsSubmitting(false);
      }, 1000);
      return;
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: accessKey,
          name,
          email,
          subject,
          message,
          from_name: 'CCWA Website Contact Form'
        })
      });
      
      const result = await response.json();
      
      if (response.ok && result.success) {
        setIsSuccess(true);
      } else {
        setSubmitError(result.message || 'Something went wrong. Please try again or email us directly at ccwahdqtrs@gmail.com.');
      }
    } catch (error) {
      setSubmitError('Something went wrong. Please try again or email us directly at ccwahdqtrs@gmail.com.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-bg border border-primary/20 rounded-2xl p-8 text-center shadow-lg h-full flex flex-col justify-center items-center"
      >
        <div className="w-20 h-20 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-display font-bold text-3xl text-primary mb-4">Message Sent!</h3>
        <p className="font-body text-text opacity-80 mb-6 leading-relaxed">
          Thank you! We have received your message and will respond within 2 business days.
        </p>
        {devModeNotice && (
          <div className="bg-secondary/10 text-secondary border border-secondary/20 p-3 rounded-lg text-sm mb-6 max-w-sm">
            {devModeNotice}
          </div>
        )}
        <button 
          onClick={() => {
            setIsSuccess(false);
            setName('');
            setEmail('');
            setSubject('');
            setMessage('');
          }}
          className="px-8 py-3 bg-primary text-bg rounded-full font-medium hover:bg-primary/90 transition-colors"
        >
          Send Another Message
        </button>
      </motion.div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-10 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-2 bg-linear-to-r from-primary to-secondary"></div>
      
      <h3 className="font-display font-bold text-2xl text-primary mb-2">Send us a Message</h3>
      <p className="font-body text-sm text-text opacity-70 mb-8">We would love to hear from you. Fill out the form below.</p>

      {submitError && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="bg-red-50 text-red-600 border border-red-200 p-4 rounded-lg text-sm mb-6 flex items-start gap-3"
        >
          <svg className="w-5 h-5 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <p>{submitError}</p>
        </motion.div>
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
          <label htmlFor="subject" className="block text-sm font-medium text-text mb-2">Subject <span className="text-red-500">*</span></label>
          <select
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className={`w-full px-4 py-3 rounded-lg border ${errors.subject ? 'border-red-500 bg-red-50' : 'border-gray-300 bg-gray-50'} focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors bg-white`}
          >
            <option value="" disabled>Select a subject</option>
            <option value="General Enquiry">General Enquiry</option>
            <option value="Sponsorship">Sponsorship</option>
            <option value="Partnership">Partnership</option>
            <option value="Volunteering">Volunteering</option>
            <option value="Media">Media</option>
          </select>
          {errors.subject && <p className="text-red-500 text-xs mt-2">{errors.subject}</p>}
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-text mb-2">Message <span className="text-red-500">*</span></label>
          <textarea
            id="message"
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={`w-full px-4 py-3 rounded-lg border ${errors.message ? 'border-red-500 bg-red-50' : 'border-gray-300 bg-gray-50'} focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors resize-none`}
            placeholder="How can we help you?"
          ></textarea>
          {errors.message && <p className="text-red-500 text-xs mt-2">{errors.message}</p>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-4 bg-primary text-bg font-bold rounded-lg hover:bg-primary/90 transition-colors shadow-md flex justify-center items-center gap-2"
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Submitting...
            </>
          ) : (
            'Send Message'
          )}
        </button>
      </form>
    </div>
  );
};
