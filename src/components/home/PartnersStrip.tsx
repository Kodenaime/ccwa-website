import React from 'react';

export const PartnersStrip: React.FC = () => {
  const placeholders = [1, 2, 3, 4, 5];

  return (
    <section className="py-16 bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <h2 className="font-display font-bold text-2xl text-center text-primary mb-10">Our Partners & Affiliates</h2>
        
        {/* Horizontal scroll on mobile, flex wrap on desktop */}
        <div className="flex overflow-x-auto pb-6 md:pb-0 md:flex-wrap justify-start md:justify-center items-center gap-8 md:gap-16 snap-x">
          {placeholders.map((item) => (
            <div 
              key={item} 
              className="min-w-[160px] h-[60px] bg-gray-200 rounded shrink-0 snap-center flex items-center justify-center text-gray-400 font-medium"
            >
              Partner Logo {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
