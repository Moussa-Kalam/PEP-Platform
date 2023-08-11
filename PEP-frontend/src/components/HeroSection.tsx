import { heroImage } from "../assets/index";

const HeroSection = () => {
  return (
    <>
      <section className="flex gap-x-10  items-center bg-blue-200">
        <div className="flex flex-col gap-y-4 items-center justify-center border max-w-[50%] px-10">
          <h1 className="text-5xl text-center font-extrabold">
            Empowering Dreams, One Passion at a Time
          </h1>
          <p className="text-xl">
            Welcome to the Passion Empowerment Platform, where your journey to
            self-discovery and growth begins. We believe that your passions hold
            the key to your fullest potential. Explore a world of opportunities,
            connect with mentors who share your interests, and embark on a
            transformative journey of learning and empowerment.
          </p>
          <button className="mt-8 text-xl font-semibold p-4 bg-red-400 text-white">
            Join the Community
          </button>
        </div>
        <div>
          <img src={heroImage} alt="hero Image" className=" drop-shadow-md" />
        </div>
      </section>
    </>
  );
};

export default HeroSection;
