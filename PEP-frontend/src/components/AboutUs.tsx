import { profilePic } from "../assets/index";

const AboutUs = () => {
  return (
    <>
      <section className=" p-8 bg-yellow-200">
        <div className="mx-auto w-5/6">
          <h1 className="text-5xl font-extrabold mb-4">About Us</h1>
          <img src="" alt="" />
          <h2 className="text-3xl font-bold mt-8 mb-2">Our Story</h2>
          <p className="text-gray-700 text-xl">
            MentorMe, the Passion Empowerment Platform, was born out of a single
            idea: to break down the barriers that limit individual growth and
            creativity. Our founder, Moussa, witnessed the untapped potential in
            students back in his home country, and that ignited a fire with him
            to create a space where passions could flourish
          </p>
          <h2 className="text-3xl font-bold mt-8 mb-2">Our Vision</h2>
          <img src="" alt="" />
          <p className="text-gray-700 text-xl">
            Our vision is to revolutionize education by making it personal,
            purposeful, and passionate. We envision a world where students
            aren't just learners, but also explorers, creators, and leaders of
            their own journey.
          </p>
          <h2 className="text-3xl font-bold mt-8 mb-2">Meet the Founder</h2>
          <div className="flex items-center">
            <img
              src={profilePic}
              alt=""
              className="w-[25%] h-[25%] rounded-2xl mr-4"
            />
            <p className="text-gray-700 text-xl mx-auto w-3/5 border ">
              A former diplomacy graduate, Virtual Assistant, self-taught
              English speaker and Judo Instructor, turned tech enthusiast,
              Moussa's journey inspired the platform's mission to bridge the gap
              between education and empowerment. He believes in using technology
              to create a better world and have a positive impact of the
              Educational system in his country
            </p>
          </div>
          <h2 className="text-3xl font-bold mt-10 mb-2">Our Journey</h2>
          <img src="" alt="" />
          <p className="text-gray-700 text-xl">
            From the seed of an idea to a thriving community, our journey has
            been filled with challenges, triumps, and the unwavering belief that
            empowerment is possible for all.
          </p>
          <div className="text-xl grid grid-cols-2 gap-3">
            <p>
              <span className="font-bold">Inception:</span> The idea for Passion
              Empowerment takes root, driven by the need for alternative
              learning avenues.Inception: The idea for this platform is a
              thriving{" "}
            </p>
            <p>
              Development: The platform takes shape, with each line of code and
              design element reflecting our commitment to user growth.
            </p>
            <p>
              Launch:: MentorMe is introduced to the world, creating riples of
              excitement amoung students, mentors, and educators.
            </p>
            <p>
              Impact: Success stories pour in, showcasing the impact of
              mentorship and passion-driven learning on individual lives.
            </p>
          </div>
          <h2 className="text-3xl font-bold mt-8 mb-2">Our impact</h2>
          <p className="text-gray-700 text-xl">
            We measure our success by the lives we touch and the dreams we
            inspire. With each mentorship connection, each creative endeavor,
            and each newfound passion, we move closer to our vision of a world
            where education knows no bounds.
          </p>
          <h2 className="text-3xl font-bold mt-8 mb-2">Join our Movement</h2>
          <p className="text-gray-700 text-xl">
            We invite you to be part of this revolution, a movement that
            empowers individuals to embrace their passions and embrace their
            potential. Whether you're a student, a mentor, or simply curious,
            there's a place for you in our community.
          </p>
          <h2 className="text-3xl font-bold mt-8 mb-2">Contact Us</h2>
          <img src="" alt="" />
          <p className="text-gray-700 text-xl">
            Have questions, ideas, or just wnat to say hello? Reach out to us at
            contact@passionempowerment.com or give us call at +250790914894.
          </p>
          <h2 className="text-3xl font-bold mt-8 mb-2">Connect with Us</h2>
          <p className="text-gray-700 text-xl">
            Follow us on social media for updates, stories and inspirations:
            {/* Put the social media icons */}
          </p>
          <div></div>
          <p className="text-gray-700 text-xl">
            We're here to inspire, empower, and transform. Join us on this
            journey of passion and growth.{" "}
          </p>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
