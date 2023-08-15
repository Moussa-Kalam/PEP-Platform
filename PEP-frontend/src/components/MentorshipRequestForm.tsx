import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// State variables for input fields and form validity
const MentorshipRequestForm = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [education, setEducation] = useState("");
  const [fieldOfStudy, setFieldOfStudy] = useState("");
  const [country, setCountry] = useState("");
  const [communicationMethod, setCommunicationMethod] = useState("");
  const [weeklyCommitment, setWeeklyCommitment] = useState("");
  const [inspiration, setInspiration] = useState("");
  const [extracurricular, setExtracurricular] = useState("");
  const [challenge, setChallenge] = useState("");
  const [mentorSupport, setMentorSupport] = useState("");
  const [goals, setGoals] = useState("");

  const isFormValid =
    name &&
    email &&
    phone &&
    age &&
    gender &&
    education &&
    fieldOfStudy &&
    country &&
    communicationMethod &&
    weeklyCommitment &&
    inspiration &&
    extracurricular &&
    challenge &&
    mentorSupport &&
    goals;

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (isFormValid) {
      window.alert("Your application has been sent successfully!");
      navigate("/");
    } else {
      window.alert("Please fill out all required fields.");
    }
  };
  return (
    <section className="bg-gray-100">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1  gap-x-16 gap-y-8 lg:grid-cols-5">
          <div className="item lg:col-span-2 lg:py-12">
            <div className="mx-auto w-full md:w-10/12">
              <h2 className="text-3xl font-semibold text-gray-500">
                Your dream, Your passion,{" "}
                <span className="text-black">Your Mentor</span>
              </h2>
              <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 lg:text-base">
                Embarking on a journey of growth and empowerment begins with a
                simple step – requesting mentorship. Your passion, aspirations,
                and dreams deserve guidance from those who have walked the path
                before you. This is your opportunity to connect with mentors who
                are ready to share their insights, knowledge, and experiences to
                help you shine brighter.
              </p>
              <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 lg:text-base">
                Every successful individual started with a mentor, someone who
                saw their potential and guided them towards their goals. Whether
                you're navigating the intricate world of academia or charting a
                course for your career, mentorship can provide the compass to
                steer you towards success.
              </p>
              <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 lg:text-base">
                With each piece of advice, every shared experience, and the
                wisdom passed down, mentorship forms a bridge between ambition
                and accomplishment. By submitting this mentorship request,
                you're taking a bold step towards your dreams – a step that
                could shape your future in ways you can't yet imagine.
              </p>
              <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 lg:text-base">
                Remember, mentorship is not just about guidance; it's about
                forging relationships, sharing ideas, and cultivating growth.
                Your journey starts here, and the mentor you connect with can
                make all the difference. So, tell us about yourself, your goals,
                and what you're eager to learn. Your story matters, and mentors
                are ready to listen, guide, and empower.
              </p>
              <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 lg:text-base">
                Step forward with confidence, curiosity, and the knowledge that
                a world of learning and growth awaits. Request mentorship and
                embark on a transformative journey – one that could shape your
                future in remarkable ways. Your journey starts now.
              </p>
              <div className="mt-6 flex flex-col space-y-3 lg:flex-row lg:space-y-0">
                <Link
                  to={"/about"}
                  className="block transform rounded-md bg-red-400 px-5 py-2 text-center text-sm font-medium tracking-wider text-white transition-colors duration-300 hover:bg-red-300 lg:mx-4"
                >
                  More About us
                </Link>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <input
                  className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                  placeholder="Name"
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <input
                    className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                    placeholder="Email address"
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div>
                  <input
                    className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                    placeholder="Phone Number"
                    type="tel"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
                <div>
                  <div>
                    <input
                      className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                      placeholder="Age"
                      type="number"
                      id="age"
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <select
                    name="HeadlineAct"
                    id="HeadlineAct"
                    className="mt-1.5 w-full rounded-lg border border-gray-200 p-3 text-gray-400 sm:text-sm"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                  >
                    <option value="">Gender</option>
                    <optgroup label="Choose your gender ">
                      <option value="AK">Male</option>
                      <option value="AK">Female</option>
                    </optgroup>
                  </select>
                </div>

                <div>
                  <select
                    name="HeadlineAct"
                    id="HeadlineAct"
                    className="mt-1.5 w-full rounded-lg border border-gray-200 p-3 text-gray-400 sm:text-sm"
                    value={education}
                    onChange={(e) => setEducation(e.target.value)}
                  >
                    <option value="">Current Education</option>
                    <optgroup label="General Certificate of Education">
                      <option value="AK">Ordinary Level</option>
                      <option value="AK">Advanced Level</option>
                    </optgroup>
                    <optgroup label="Higher Education">
                      <option value="AK">Bachelor's degree</option>
                      <option value="AK">Master's degree</option>
                    </optgroup>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-2">
                <div>
                  <select
                    name="HeadlineAct"
                    id="HeadlineAct"
                    className="mt-1.5 w-full rounded-lg border border-gray-200 p-3 text-gray-400 sm:text-sm"
                    value={fieldOfStudy}
                    onChange={(e) => setFieldOfStudy(e.target.value)}
                  >
                    <option value="">Field of study / Major</option>

                    <option value="1">Agriculture</option>
                    <option value="2">Anthropology</option>
                    <option value="3">Architecture</option>
                    <option value="4">Biology</option>
                    <option value="5">Business Administration</option>
                    <option value="6">Chemistry</option>
                    <option value="7">Communication studies</option>
                    <option value="8">Computer Science</option>
                    <option value="9">Economics</option>
                    <option value="10">Education</option>
                    <option value="11">
                      Engineering (Civil, Electrical, Mechanical, etc.)
                    </option>
                    <option value="12">Environmental Science</option>
                    <option value="13">Fashion Design</option>
                    <option value="14">Fine Arts</option>
                    <option value="15">Geology</option>
                    <option value="16">Graphic Design</option>
                    <option value="17">History</option>
                    <option value="18">Information Technology</option>
                    <option value="19">Linguistics</option>
                    <option value="20">Literature</option>
                    <option value="21">Law</option>
                    <option value="22">Marketing</option>
                    <option value="23">Mathematics</option>
                    <option value="24">Medicine</option>
                    <option value="25">Music</option>
                    <option value="24">Nursing</option>
                    <option value="25">Pharmacy</option>
                    <option value="26">Philosophy</option>
                    <option value="27">Political Science</option>
                    <option value="28">Psychology</option>
                    <option value="29">Public Health</option>
                    <option value="30">Sociology</option>
                    <option value="31">Other</option>
                  </select>
                </div>

                <div>
                  <input
                    className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                    placeholder="Enter your country"
                    type="text"
                    id="country"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-2">
                {/* <div>
                  <select
                    name="HeadlineAct"
                    id="HeadlineAct"
                    className="mt-1.5 w-full rounded-lg border border-gray-200 p-3 text-gray-400 sm:text-sm"
                  >
                    <option value="">Select Mentor</option>
                    <optgroup label="Art">
                      <option value="AK">Albert King</option>
                    </optgroup>

                    <optgroup label="Sport ">
                      <option value="BBK">B.B King</option>
                      <option value="BG">Buddy Guy</option>
                    </optgroup>

                    <optgroup label="Technology">
                      <option value="EC">Eric Clapton</option>
                    </optgroup>
                  </select>
                </div> */}

                <div>
                  <select
                    name="HeadlineAct"
                    id="HeadlineAct"
                    className="mt-1.5 w-full rounded-lg border border-gray-200 p-3 text-gray-400 sm:text-sm"
                    value={communicationMethod}
                    onChange={(e) => setCommunicationMethod(e.target.value)}
                  >
                    <option value="">Communication Methods</option>
                    <option value="1">Email</option>
                    <option value="2">Video Calls</option>
                    <option value="3">Phone Calls</option>
                  </select>
                </div>

                <div>
                  <select
                    name="HeadlineAct"
                    id="HeadlineAct"
                    className="mt-1.5 w-full rounded-lg border border-gray-200 p-3 text-gray-400 sm:text-sm"
                    value={weeklyCommitment}
                    onChange={(e) => setWeeklyCommitment(e.target.value)}
                  >
                    <option value="">Weekly commitment</option>
                    <option value="1">5 hours</option>
                    <option value="2">10 hours</option>
                    <option value="3">15 hours +</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  className="bg- mb-2 block text-sm font-medium text-gray-900"
                  htmlFor="inspiration"
                >
                  What inspires you to seek mentorship in your chosen field of
                  study? 200 words
                </label>
                <textarea
                  className="block w-full cursor-pointer rounded-lg border border-gray-300 bg-gray-50 p-4 text-sm text-gray-900 focus:outline-none dark:placeholder-gray-400"
                  id="inspiration"
                  value={inspiration}
                  onChange={(e) => setInspiration(e.target.value)}
                />
              </div>
              <div>
                <label
                  className="bg- mb-2 block text-sm font-medium text-gray-900"
                  htmlFor="extracurricular"
                >
                  Share any extracurricular activities, projects, or experiences
                  related to your field. 200 words
                </label>
                <textarea
                  className="block w-full cursor-pointer rounded-lg border border-gray-300 bg-gray-50 p-4 text-sm text-gray-900 focus:outline-none dark:placeholder-gray-400"
                  id="extracurricular"
                  value={extracurricular}
                  onChange={(e) => setExtracurricular(e.target.value)}
                />
              </div>
              <div>
                <label
                  className="bg- mb-2 block text-sm font-medium text-gray-900"
                  htmlFor="challenge"
                >
                  Describe a challenge or problem within your field that you're
                  curious about or would like to address. 200 words
                </label>
                <textarea
                  className="block w-full cursor-pointer rounded-lg border border-gray-300 bg-gray-50 p-4 text-sm text-gray-900 focus:outline-none dark:placeholder-gray-400"
                  id="challenge"
                  value={challenge}
                  onChange={(e) => setChallenge(e.target.value)}
                />
              </div>
              <div>
                <label
                  className="bg- mb-2 block text-sm font-medium text-gray-900"
                  htmlFor="file_input"
                >
                  What kind of guidance or support do you hope to receive from a
                  mentor?
                </label>
                <textarea
                  className="block w-full cursor-pointer rounded-lg border border-gray-300 bg-gray-50 p-4 text-sm text-gray-900 focus:outline-none dark:placeholder-gray-400"
                  id="mentorSupport"
                  value={mentorSupport}
                  onChange={(e) => setMentorSupport(e.target.value)}
                />
              </div>

              <div>
                <label
                  className="bg- mb-2 block text-sm font-medium text-gray-900"
                  htmlFor="file_input"
                  aria-required
                >
                  Outline your short-term and long-term goals and how you plan
                  to achieve them. 1000 words
                </label>
                <input
                  className="block w-full cursor-pointer rounded-lg border border-gray-300 bg-gray-50 p-4 text-sm text-gray-900 focus:outline-none dark:placeholder-gray-400"
                  id="goals"
                  type="file"
                  value={goals}
                  onChange={(e) => setGoals(e.target.value)}
                />
              </div>
              <div>
                <label
                  className="bg- mb-2 block text-sm font-medium text-gray-900"
                  htmlFor="file_input"
                >
                  Please upload your resume, portfolio or any relevant project
                  you've worked on
                </label>
                <input
                  className="block w-full cursor-pointer rounded-lg border border-gray-300 bg-gray-50 p-4 text-sm text-gray-900 focus:outline-none dark:placeholder-gray-400"
                  id="resumeFile"
                  type="file"
                />
              </div>

              <div className="mt-4">
                <button
                  type="submit"
                  className={`inline-block w-full rounded-lg ${
                    isFormValid
                      ? "bg-red-400 hover:bg-red-300"
                      : "bg-gray-300 cursor-not-allowed"
                  } px-5 py-3 font-medium text-white sm:w-auto`}
                  disabled={!isFormValid}
                >
                  Send Enquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentorshipRequestForm;
