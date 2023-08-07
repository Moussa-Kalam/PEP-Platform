const Testimonials = () => {
  return (
    <>
      <section className="flex flex-col items-center">
        <h1>Testimonials</h1>
        <p>
          Put yourself in the shoes of our users and feel your transformation
        </p>
        <div className="grid grid-cols-2 gap-8 ">
          <div className="border p-4 max-w-lg">
            <img src="" alt="user image" />
            <p className="italic">
              "This platform has transformed the way I pursue my passions. I
              connected with an amazing mentor and now, I'm thriving in my
              chosen field of arts!"
            </p>
            <p>Sarah Johnson</p>
            <p>Artist and Educator</p>
          </div>
          <div className="border p-4  max-w-lg">
            <img src="" alt="user image" />
            <p className="italic">
              "I've found the perfect mentor who helped me take my sports skills
              to the next level. The support and guidance I received here are
              truly invaluable!"
            </p>
            <p>Michael Smith</p>
            <p>Athlete and Coach</p>
          </div>
          <div className="border p-4  max-w-lg">
            <img src="" alt="user image" />
            <p>
              This platform has transformed the way I pursue my passions. I
              connected with an amazing mentor and now, I'm thriving in my
              chosen field of arts!
            </p>
            <p>Sarah Johnson</p>
            <p>Artist and Educator</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
