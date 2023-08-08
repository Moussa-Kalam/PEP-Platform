import { facebook, instagram, linkedin, twitter } from "../assets/index";
const Footer = () => {
  return (
    <>
      <section className="flex flex-col items-center gap-y-1 text-sm border bg-blue-100 py-2">
        <div className="flex gap-x-8">
          <a href="#" className="hover:underline">
            Home
          </a>
          <a href="#" className="hover:underline">
            Passion Categories
          </a>
          <a href="#" className="hover:underline">
            Mentor Connection
          </a>
          <a href="#" className="hover:underline">
            About Us
          </a>
          <a href="#" className="hover:underline">
            Contact Us
          </a>
        </div>
        <div className="flex flex-col items-center">
          <p>Connect with Us</p>
          <div className="flex gap-x-6">
            <img src={facebook} alt="" className="h-6 w-6" />
            <img src={instagram} alt="" className="h-6 w-6" />
            <img src={twitter} alt="" className="h-6 w-6" />
            <img src={linkedin} alt="" className="h-6 w-6" />
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
