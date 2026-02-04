import Footer from "./_components/Footer/Footer";
import ContactUs from "./_components/Home/ContactUs";
import CTA from "./_components/Home/CTA";
import HeroSection from "./_components/Home/HeroSection";
import HowWorks from "./_components/Home/HowWorks";
import Testimonials from "./_components/Home/Review";
import SimCards from "./_components/Home/SimCards";
import WhyChooseUs from "./_components/Home/WhyChooseUs";
import WorksGallery from "./_components/Home/WorksGallery";

import Navbar from "./_components/Navbar/Navbar";

export default function Home() {
  return (
    <div className="relative">
      {/* <Hero /> */}
      <HeroSection />
      <div className="absolute left-0 top-0 w-full z-50">
        <Navbar />
      </div>

      {/* <SimCards /> */}
      <WhyChooseUs />
      <HowWorks />
      <WorksGallery />
      <CTA/>
      <Testimonials/>
      <ContactUs/>

      <Footer/>
    </div>
  );
}
