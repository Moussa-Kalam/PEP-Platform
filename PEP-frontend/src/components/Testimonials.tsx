import { studentTestimonial1 } from "../assets/index";

const Testimonials = () => {
  return (
    <>
      <section className="flex flex-col items-center bg-gray-100 gap-y-4 py-10">
        <h1 className="text-3xl text-center font-extrabold">Testimonials</h1>
        <p className="text-xl">
          Put yourself in the shoes of our users and feel your transformation
        </p>
        <div className="flex flex-wrap gap-8 justify-center">
          <div className="border rounded-lg max-w-lg flex flex-col gap-y-2 items-center bg-white">
            <img src={studentTestimonial1} alt="user image" className="" />
            <div className="flex flex-col items-center gap-y-3 p-4">
              <p className="italic text-lg">
                "This platform has transformed the way I pursue my passions. I
                connected with an amazing mentor and now, I'm thriving in my
                chosen field of arts!"
              </p>
              <p className="text-xl">Sarah Johnson</p>
              <p className="text-xl font-semibold">Artist and Educator</p>
            </div>
          </div>
          <div className="border rounded-lg max-w-lg flex flex-col gap-y-2 items-center bg-white">
            <img src={studentTestimonial1} alt="user image" className="" />
            <div className="flex flex-col items-center gap-y-3 p-4">
              <p className="italic text-lg">
                "This platform has transformed the way I pursue my passions. I
                connected with an amazing mentor and now, I'm thriving in my
                chosen field of arts!"
              </p>
              <p className="text-xl">Sarah Johnson</p>
              <p className="text-xl font-semibold">Artist and Educator</p>
            </div>
          </div>

          {/* <div className="border p-4  max-w-lg">
            <img src={studentTestimonial1} alt="user image" />
            <p className="italic">
              "I've found the perfect mentor who helped me take my sports skills
              to the next level. The support and guidance I received here are
              truly invaluable!"
            </p>
            <p>Michael Smith</p>
            <p>Athlete and Coach</p>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default Testimonials;
