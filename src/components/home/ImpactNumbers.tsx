import React, { useRef } from 'react';
import { useInView } from 'framer-motion';
import { useCountUp } from '../../hooks/useCountUp';

interface StatCardProps {
  target: number;
  suffix: string;
  label: string;
  duration?: number;
}

const StatCard: React.FC<StatCardProps> = ({ target, suffix, label, duration = 2.5 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });
  const count = useCountUp(target, duration, isInView);

  return (
    <div ref={ref} className="flex flex-col items-center text-center p-6">
      <div className="font-display font-bold text-5xl md:text-6xl text-primary mb-2">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="font-body text-text font-medium text-lg">
        {label}
      </div>
    </div>
  );
};

export const ImpactNumbers: React.FC = () => {
  return (
    <section className="bg-bg py-20 md:py-28 relative z-10">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 divide-y sm:divide-y-0 sm:divide-x divide-primary/20">
          <StatCard target={35} suffix="+" label="Years of Service" />
          <StatCard target={10000} suffix="+" label="Lives Touched" />
          <StatCard target={36} suffix="" label="States Reached" />
          <StatCard target={500} suffix="+" label="Orphans Supported" />
        </div>
      </div>
    </section>
  );
};
