'use client';
import HeroSection from '@/components/common/HeroSection';
import MiddleSection from '@/components/common/MiddleSection';
import Services from '@/components/common/Services';
import Testimonials from '@/components/common/Testimonials';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MiddleSection />
      <Services />
      <Testimonials />
    </>
  );
}
