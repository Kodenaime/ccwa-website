import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { HeroSection } from '../components/home/HeroSection';
import { ImpactNumbers } from '../components/home/ImpactNumbers';
import { WhatWeDoSection } from '../components/home/WhatWeDoSection';
import { RecentEventsSection } from '../components/home/RecentEventsSection';
import { DonationCTASection } from '../components/home/DonationCTASection';
import { GalleryTeaserSection } from '../components/home/GalleryTeaserSection';
import { PartnersStrip } from '../components/home/PartnersStrip';

export const Home: React.FC = () => {
  return (
    <>
      <SEOHead 
        title="Home | CCWA International" 
        description="CCWA is a trustworthy, active, and compassionate organisation making a real difference across Nigeria. Join us in caring for widows, orphans, and the elderly."
      />
      <HeroSection />
      <ImpactNumbers />
      <WhatWeDoSection />
      <RecentEventsSection />
      <DonationCTASection />
      <GalleryTeaserSection />
      <PartnersStrip />
    </>
  );
};
