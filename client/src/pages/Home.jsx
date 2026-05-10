import HeroSection from '../components/home/HeroSection';
import AwardsStrip from '../components/home/AwardsStrip';
import ImpactStats from '../components/home/ImpactStats';
import ServicesSection from '../components/home/ServicesSection';
import HRAcademyPreview from '../components/home/HRAcademyPreview';
import TestimonialsSection from '../components/home/TestimonialsSection';
import PartnershipsSection from '../components/home/PartnershipsSection';
import WhyBeyondTransform from '../components/home/WhyBeyondTransform';
import FounderStoryPreview from '../components/home/FounderStoryPreview';
import BlogPreview from '../components/home/BlogPreview';
import CTASection from '../components/home/CTASection';

const Home = () => {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <AwardsStrip />
      <ImpactStats />
      <ServicesSection />
      <HRAcademyPreview />
      <TestimonialsSection />
      <PartnershipsSection />
      <WhyBeyondTransform />
      <FounderStoryPreview />
      <BlogPreview />
      <CTASection />
    </div>
  );
};

export default Home;