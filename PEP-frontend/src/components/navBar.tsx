import { Link } from "react-router-dom";
import Logo from "./Logo";

const NavBar: React.FC = () => {
  return (
    <>
      <nav className="flex justify-between items-center bg-gray-200 py-4 md:py-6 px-6 md:px-16 sticky top-0 z-10">
        <Logo />
        <ul className="hidden md:text-sm lg:text-xl md:flex gap-x-6 text-lg">
          <li>
            <Link to="/" className="hover:underline">
              Home
            </Link>
          </li>

          <li>
            <Link to="/about" className="hover:underline">
              About Us
            </Link>
          </li>
          <li>
            <Link to="#" className="hover:underline">
              Passion Categories
            </Link>
          </li>
          <li>
            <Link to="#" className="hover:underline">
              Our Mentors
            </Link>
          </li>
          <li>
            <Link to="/sign-in" className="hover:underline">
              Member Area
            </Link>
          </li>
        </ul>

        <div className="">
          <a
            href="#"
            className="hover:bg-red-300 text-md lg:text-xl bg-red-400 text-white font-semibold p-3
            "
          >
            Donate
          </a>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
