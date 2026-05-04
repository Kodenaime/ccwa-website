import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title: string;
  description: string;
  ogImage?: string;
  ogUrl?: string;
  noIndex?: boolean;
}

export const SEOHead: React.FC<SEOHeadProps> = ({ 
  title, 
  description, 
  ogImage = '/og-default.jpg', 
  ogUrl = 'https://www.ccwaintl.org', 
  noIndex = false 
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <link rel="canonical" href={ogUrl} />
      {noIndex && <meta name="robots" content="noindex" />}
    </Helmet>
  );
};
