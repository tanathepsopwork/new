import React from 'react';
import { Hero } from '../components/Hero';
import { WhySection } from '../components/WhySection';
import { FeatureCards, TestimonialsSection } from '../components/FeatureCards';

export function Home() {
  return (
    <div>
      <Hero />
      <WhySection />
      <FeatureCards />
      <TestimonialsSection />
    </div>
  );
}