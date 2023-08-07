const HeroSection = () => {
  return (
    <>
      <section className="flex flex-col items-center mt-12">
        <img
          src="../assets/diverse-colleagues-watching-presentation-computer.jpg"
          alt="hero Image"
        />
        <div className="flex flex-col gap-y-4 items-center border max-w-lg p-4">
          <p>Empowering Dreams, One Passion at a Time</p>
          <p>
            Welcome to the Passion Empowerment Platform, where your journey to
            self-discovery and growth begins. We believe that your passions hold
            the key to your fullest potential. Explore a world of opportunities,
            connect with mentors who share your interests, and embark on a
            transformative journey of learning and empowerment.
          </p>
          <button className="mt-8 border p-2 bg-blue-200">
            Join the Community
          </button>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
