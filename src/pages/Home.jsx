import React from "react";
import HeroSection from "../components/HeroSection";
import WhyChooseUs from "../components/whyChooseUs";
import WhyChooseWeCreative from "../components/WhyChooseWeCreative";
import Courses from "../components/Courses";
import Testimonials from "../components/Testimonials";
import ImpactSection from "../components/ImpactSection";
import HelpSection from "../components/HelpSection";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <HeroSection />
      <WhyChooseUs />
      <WhyChooseWeCreative />
      <Courses />
      <Testimonials />
      <ImpactSection />
      <HelpSection />
      <Footer />
      {/* <div className="p-10 text-center">
        <h2 className="text-2xl font-bold">Digiperform In The News</h2>
      </div> */}
    </>
  );
};

export default Home;
