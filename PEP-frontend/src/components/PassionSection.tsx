import { sport, technology, art } from "../assets/index";

const PassionSection = () => {
  return (
    <>
      <section className="flex flex-col items-center m-10 gap-y-6">
        <h1 className="text-3xl text-center font-extrabold">
          Cultivate Your Passions: Explore Our Categories
        </h1>
        <div className="flex flex-wrap justify-center gap-x-3 ">
          <div className="border-4 rounded-2xl pb-2 bg-blue-100">
            <img src={art} alt="" className="h-[360px] w-[550px] rounded-xl" />
            <div className="text-center mt-5">
              <h2 className="text-xl font-bold">Arts</h2>
              <p>Express Yourself</p>
              <p>Unleash Your Creativity</p>
            </div>
          </div>
          <div className=" border-4 rounded-2xl pb-2 bg-blue-100">
            <img
              src={sport}
              alt="sport image"
              className="h-[360px] rounded-2xl  w-[550px]"
            />
            <div className="text-center mt-5">
              <h2 className="text-xl font-bold">Sports</h2>
              <p>Stay Active</p>
              <p>Discover New Sports</p>
            </div>
          </div>
          <div className="border-4 rounded-2xl pb-2 bg-blue-100">
            <img
              src={technology}
              alt="technology image"
              className="h-[360px] rounded-2xl  w-[550px]"
            />
            <div className="text-center mt-5">
              <h2 className="text-xl font-bold">Technology</h2>
              <p>Innovate and Create</p>
              <p>Embrace Technology</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PassionSection;
