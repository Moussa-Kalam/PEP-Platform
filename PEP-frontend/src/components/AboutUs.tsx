import { profilePic } from "../assets/index";

const AboutUs = () => {
  return (
    <>
      <section className="mx-auto max-w-[60%] my-10">
        <div className="flex justify-center">
          <div className="flex flex-col items-center mx-auto p-4">
            <h1 className="text-5xl font-extrabold mb-4">About Us</h1>
            <img src="" alt="" />
            <h2 className="text-3xl font-bold mt-8 mb-2">Our Story</h2>
            <p className="text-gray-700 text-xl leading-loose">
              MentorMe, the Passion Empowerment Platform, was born out of a
              single idea: to break down the barriers that limit individual
              growth and creativity. Our founder, Moussa, witnessed the untapped
              potential in students back in his home country, and that ignited a
              fire with him to create a space where passions could flourish
            </p>

            <h2 className="text-3xl font-bold mt-8 mb-2">Our Mission</h2>
            <img src="" alt="" />
            <p className="text-gray-700 text-xl leading-loose">
              At <span className="font-extrabold">MentorMe</span>, our mission
              is simple yet profound: to unlock the potential within every
              individual by connecting them with mentors, resources, and a
              vibrant community that nurtures their passions. We believe that
              when people are guided by their passions, they not only achieve
              personal fulfillment but also contribute to a world enriched by
              diverse skills and perspectives.
            </p>
            <h2 className="text-3xl font-bold mt-8 mb-2">Our Vision</h2>
            <img src="" alt="" />
            <p className="text-gray-700 text-xl leading-loose">
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
                className="w-72 h-72 rounded-2xl mr-4"
              />
              <p className="text-gray-700 text-xl leading-loose mx-auto w-3/5 border">
                A former diplomacy graduate, Virtual Assistant, self-taught
                English speaker and Judo Instructor, turned tech enthusiast,
                Moussa's journey inspired the platform's mission to bridge the
                gap between education and empowerment. He believes in using
                technology to create a better world and have a positive impact
                of the Educational system in his country
              </p>
            </div>
            <h2 className="text-3xl font-bold mt-10 mb-2">Our Journey</h2>
            <img src="" alt="" />
            <p className="text-gray-700 text-xl leading-loose mb-4">
              From the seed of an idea to a thriving community, our journey has
              been filled with challenges, triumps, and the unwavering belief
              that empowerment is possible for all.
            </p>
            <div className="text-xl flex flex-col items-center gap-y-5">
              <p className="max-w-[700px] border p-4 rounded-lg bg-gray-100 leading-loose">
                <span className="font-bold">Inception:</span> The idea for
                Passion Empowerment takes root, driven by the need for
                alternative learning avenues.Inception: The idea for this
                platform is a thriving{" "}
              </p>
              <p className="max-w-[700px] border p-4 rounded-lg bg-gray-100 leading-loose">
                <span className="font-bold">Development:</span> The platform
                takes shape, with each line of code and design element
                reflecting our commitment to user growth.
              </p>
              <p className="max-w-[700px] border p-4 rounded-lg bg-gray-100 leading-loose">
                <span className="font-bold">Launch:</span> MentorMe is
                introduced to the world, creating riples of excitement amoung
                students, mentors, and educators.
              </p>
              <p className="max-w-[700px] border p-4 rounded-lg bg-gray-100 leading-loose">
                <span className="font-bold">Impact:</span> Success stories pour
                in, showcasing the impact of mentorship and passion-driven
                learning on individual lives.
              </p>
            </div>
            <h2 className="text-3xl font-bold mt-8 mb-2">Our impact</h2>
            <p className="text-gray-700 text-xl leading-loose">
              We measure our success by the lives we touch and the dreams we
              inspire. With each mentorship connection, each creative endeavor,
              and each newfound passion, we move closer to our vision of a world
              where education knows no bounds.
            </p>
            <h2 className="text-3xl font-bold mt-8 mb-2">Join our Movement</h2>
            <p className="text-gray-700 text-xl leading-loose">
              We invite you to be part of this revolution, a movement that
              empowers individuals to embrace their passions and embrace their
              potential. Whether you're a student, a mentor, or simply curious,
              there's a place for you in our community.
            </p>
            <h2 className="text-3xl font-bold mt-8 mb-2">Contact Us</h2>
            <img src="" alt="" />
            <p className="text-gray-700 text-xl leading-loose">
              Have questions, ideas, or just want to say hello? Reach out to us
              at contact@passionempowerment.com or give us call at
              +250790914894.
            </p>
            <h2 className="text-3xl font-bold mt-8 mb-2">Connect with Us</h2>
            <p className="text-gray-700 text-xl leading-loose">
              Follow us on social media for updates, stories and inspirations:
              {/* Put the social media icons */}
            </p>
            <div></div>
            <p className="text-gray-700 text-xl leading-loose">
              We're here to inspire, empower, and transform. Join us on this
              journey of passion and growth.{" "}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
