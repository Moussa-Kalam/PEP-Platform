import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <>
      <Link to={"/"}>
        <div className="bg-red-400 p-2">
          <h1 className="text-md lg:text-2xl font-bold text-white">
            Mentor<span className="text-blue-500">Me</span>.
          </h1>
        </div>
      </Link>
    </>
  );
};

export default Logo;
