import { Link } from "react-router-dom";
import { facebook, instagram, linkedin, twitter } from "../assets/index";

const Footer = () => {
  return (
    <>
      <section className="flex flex-col items-center gap-y-3 text-sm border bg-gray-200 py-2 pb-5">
        <div className="flex gap-x-8">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/about" className="hover:underline">
            About Us
          </Link>
          <a href="#" className="hover:underline">
            Passion Categories
          </a>
          <a href="#" className="hover:underline">
            Our Mentors
          </a>
          <a href="#" className="hover:underline">
            Contact Us
          </a>
        </div>
        <div className="flex flex-col items-center gap-y-2">
          <p className="font-bold">Connect with Us</p>
          <div className="flex gap-x-12">
            <a href="">
              <img src={facebook} alt="" className="h-6 w-6" />
            </a>
            <a href="">
              <img src={instagram} alt="" className="h-6 w-6" />
            </a>
            <a href="">
              <img src={twitter} alt="" className="h-6 w-6" />
            </a>
            <a href="">
              <img src={linkedin} alt="" className="h-6 w-6" />
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <p>contact@passionempowerment.com </p>
          <p>+250790914894</p>
        </div>
        <div className="flex flex-col items-center">
          <p>&copy; 2023 Passion Empowerment Platform.</p>
          <p>All Right Reserved</p>
        </div>
      </section>
    </>
  );
};

export default Footer;
