'use client';
import GridItems from '@/components/common/GridItems';
import HeroSection from '@/components/common/HeroSection';
import MiddleSection from '@/components/common/MiddleSection';
import Services from '@/components/common/Services';
import Testimonials from '@/components/common/Testimonials';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MiddleSection />
      <Services />
      <Testimonials />
      <GridItems />
      <Footer />
    </>
  );
}
