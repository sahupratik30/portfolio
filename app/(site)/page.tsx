import Skills from "../components/skills";
import HeroSection from "../components/heroSection";
import Services from "../components/services";
import Testimonials from "../components/testimonials";
import Experience from "../components/experience";
import Footer from "../components/footer";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Skills />
      <Services />
      <Experience />
      <Testimonials />
    </>
  );
};

export default Home;
