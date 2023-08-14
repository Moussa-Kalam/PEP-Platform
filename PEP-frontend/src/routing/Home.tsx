import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import PassionSection from "../components/PassionSection";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import StudentDashboard from "../components/StudentDashboard";

const Home = () => {
  return (
    <>
      {/* <NavBar /> */}
      <HeroSection />
      <PassionSection />
      <Testimonials />
      <StudentDashboard />
      <Footer />
    </>
  );
};

export default Home;
