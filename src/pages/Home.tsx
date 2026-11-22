import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { HeroSection } from '../components/home/HeroSection';
import { ImpactNumbers } from '../components/home/ImpactNumbers';
import { WhatWeDoSection } from '../components/home/WhatWeDoSection';
import { RecentEventsSection } from '../components/home/RecentEventsSection';
import { DonationCTASection } from '../components/home/DonationCTASection';
import { ProgramDonationColumn } from '../components/ProgramDonationColumn';
import { GalleryTeaserSection } from '../components/home/GalleryTeaserSection';
// import { PartnersStrip } from '../components/home/PartnersStrip';

const homeFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does CCWA International stand for?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'CCWA International stands for Christians Care for Widows, Widowers, the Aged and Orphans, a humanitarian organization demonstrating God’s love across Nigeria for over 35 years.',
      },
    },
    {
      '@type': 'Question',
      name: 'Who does CCWA International support?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'CCWA supports widows, widowers, the aged, and orphans spiritually, physically, emotionally, and socially—reaching over 125,000 lives and supporting 14,000+ orphans across all 36 states of Nigeria and the FCT.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can I sponsor an orphan or support CCWA programmes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can sponsor a child or donate online through our Sponsorship page via Paystack or via bank transfer to CCWA’s Access Bank account, and send confirmation to donations@ccwainternational.org.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where is CCWA International headquartered?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'CCWA Headquarters is located at No. 3 Church Crescent, Opposite Rano Oil & Gas, beside The Apostolic Church, Nyanya-Karshi Road, Abuja, Nigeria.',
      },
    },
  ],
};

export const Home: React.FC = () => {
  return (
    <>
      <SEOHead
        title="CCWA International | Caring for Widows, Orphans & the Elderly in Nigeria"
        description="CCWA International (Christians Care for Widows, Widowers, the Aged and Orphans) has touched over 125,000 lives across all 36 states of Nigeria for 35+ years."
        keywords="CCWA International, widows support Nigeria, orphan sponsorship Nigeria, elderly care NGO Abuja"
        structuredData={homeFaqSchema}
      />
      <HeroSection />
      <ImpactNumbers />
      <WhatWeDoSection />
      <RecentEventsSection />
      <ProgramDonationColumn />
      <DonationCTASection />
      <GalleryTeaserSection />
      {/* <PartnersStrip /> */}
    </>
  );
};
