import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import PassionSection from "./components/PassionSection";
import Testimonials from "./components/Testimonials";
// import LoginPage from "./components/Login";
// import SignupPage from "./components/Signup";
import Footer from "./components/Footer";

function App() {
  const links = [
    "Home",
    "About Us",
    "Passion Categories",
    "Our Mentors",
    "Member Area",
  ];
  const handleSelectLink = (link: string) => console.log(link);

  return (
    <div>
      <NavBar links={links} onSelectLink={handleSelectLink} />
      <HeroSection />
      <PassionSection />
      <Testimonials />
      {/* <LoginPage />
      <SignupPage /> */}
      <Footer />
    </div>
  );
}

export default App;
