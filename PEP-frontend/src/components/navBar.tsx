function NavBar() {
  return (
    <>
      <section className="flex justify-between  items-center bg-blue-100 py-10 px-16">
        <div className="bg-red-400 p-2">
          <h1 className="text-2xl font-bold text-white">
            Mentor<span className="text-blue-500">Me</span>.
          </h1>
        </div>
        <div className="flex gap-x-6 items-center ">
          <a
            href="#"
            className="hover:underline text-xl 
          "
          >
            Home
          </a>
          <a
            href="#"
            className="hover:underline text-xl
          "
          >
            About Us
          </a>
          <a
            href="#"
            className="hover:underline text-xl
          "
          >
            Passion Categories
          </a>

          <a
            href="#"
            className="hover:underline text-xl
          "
          >
            Our Mentors
          </a>
          <a
            href="#"
            className="hover:underline text-xl
          "
          >
            Member Area
          </a>
        </div>
        <div className="">
          <a
            href="#"
            className="hover:underline text-xl bg-red-400 text-white font-semibold p-3
            "
          >
            Donate
          </a>
        </div>
      </section>
    </>
  );
}

export default NavBar;
