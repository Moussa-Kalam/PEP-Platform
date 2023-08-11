const PassionSection = () => {
  return (
    <>
      <section className="flex flex-col items-center m-10 gap-y-6">
        <h1 className="text-3xl text-center font-extrabold">
          Cultivate Your Passions: Explore Our Categories
        </h1>
        <div className="grid grid-cols-3 gap-x-6">
          <div className="border p-4">
            <h2>Arts</h2>
            <p>Express Yourself</p>
            <p>Unleash Your Creativity</p>
          </div>
          <div className="border p-4">
            <h2>Sports</h2>
            <p>Stay Active</p>
            <p>Discover New Sports</p>
          </div>
          <div className="border p-4">
            <h2>Technology</h2>
            <p>Innovate and Create</p>
            <p>Embrace Technology</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default PassionSection;
