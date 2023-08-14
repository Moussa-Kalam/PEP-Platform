const StudentDashboard = () => {
  return (
    <>
      <section className="flex flex-col items-center gap-y-6 p-4 mb-10">
        <div className="flex flex-col items-center ">
          <h1 className="text-3xl font-extrabold mb-8">Welcome, Moussa!</h1>
          <p className="text-lg">
            Discover your perfect mentor from the list below and embark on a
            journey of growth and learning together
          </p>
        </div>
      </section>

      <section className="flex flex-col items-center gap-y-10 mb-10">
        {/* Card */}

        <div className=" flex border rounded-lg w-[950px] p-6 items-center justify-between bg-gray-100">
          <div>
            <h1 className="text-xl font-semibold ">Moussa Kalam AMZAT</h1>
            <div className="flex gap-x-16 ">
              <p>Software Engineer</p>
              <p>12 students mentored</p>
            </div>
          </div>
          <button className="border rounded-lg p-3 bg-gray-200 ">
            See profile
          </button>
          <button className="border rounded-lg p-3 bg-gray-200 ">
            Request mentorship
          </button>
        </div>

        <div className="flex border rounded-lg w-[950px] p-6 items-center justify-between bg-gray-100">
          <div>
            <h1 className="text-xl font-semibold">Anna Parker</h1>
            <div className="flex gap-x-16">
              <p>Graphic Designer</p>
              <p>8 students mentored</p>
            </div>
          </div>
          <button className="border rounded-lg p-3 bg-gray-200">
            See Profile
          </button>
          <button className="border rounded-lg p-3 bg-gray-200">
            Request Mentorship
          </button>
        </div>

        <div className="flex border rounded-lg w-[950px] p-6 items-center justify-between bg-gray-100">
          <div>
            <h1 className="text-xl font-semibold">James Thompson</h1>
            <div className="flex gap-x-16">
              <p>Basketball Coach</p>
              <p>15 students mentored</p>
            </div>
          </div>
          <button className="border rounded-lg p-3 bg-gray-200">
            See Profile
          </button>
          <button className="border rounded-lg p-3 bg-gray-200">
            Request Mentorship
          </button>
        </div>

        <div className="flex border rounded-lg w-[950px] p-6 items-center justify-between bg-gray-100">
          <div>
            <h1 className="text-xl font-semibold">Linda Williams</h1>
            <div className="flex gap-x-16">
              <p>Music Producer</p>
              <p>10 students mentored</p>
            </div>
          </div>
          <button className="border rounded-lg p-3 bg-gray-200">
            See Profile
          </button>
          <button className="border rounded-lg p-3 bg-gray-200">
            Request Mentorship
          </button>
        </div>

        <div className="flex border rounded-lg w-[950px] p-6 items-center justify-between bg-gray-100">
          <div>
            <h1 className="text-xl font-semibold">Alex Rodriguez</h1>
            <div className="flex gap-x-16">
              <p>Serial Entrepreneur</p>
              <p>20 students mentored</p>
            </div>
          </div>
          <button className="border rounded-lg p-3 bg-gray-200">
            See Profile
          </button>
          <button className="border rounded-lg p-3 bg-gray-200">
            Request Mentorship
          </button>
        </div>
      </section>
    </>
  );
};

export default StudentDashboard;
