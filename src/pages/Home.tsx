import React from 'react';
import { HeroSection } from '@/components/home/HeroSection';
import { FeaturedProducts } from '@/components/home/FeaturedProducts';
import { AboutSection } from '@/components/home/AboutSection';
import { ContactSection } from '@/components/home/ContactSection';

export const Home: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <FeaturedProducts />
      <AboutSection />
      <ContactSection />
    </div>
  );
};