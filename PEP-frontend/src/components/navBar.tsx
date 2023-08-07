function NavBar() {
  return (
    <>
      <section className="flex justify-around  items-center bg-blue-100 p-10">
        <div className="bg-red-400 p-2">
          <h1 className="text-2xl font-bold text-white">
            Mentor<span className="text-blue-500">Me</span>.
          </h1>
        </div>
        <div className="flex gap-x-6  ">
          <a
            href="#"
            className="hover:underline
          "
          >
            Home
          </a>
          <a
            href="#"
            className="hover:underline
          "
          >
            About Us
          </a>
          <a
            href="#"
            className="hover:underline
          "
          >
            Passion Categories
          </a>

          <a
            href="#"
            className="hover:underline
          "
          >
            Mentor Connection
          </a>
          <a
            href="#"
            className="hover:underline
          "
          >
            My Dashboard
          </a>
          <a
            href="#"
            className="hover:underline
          "
          >
            Member Area
          </a>
        </div>
      </section>
    </>
  );
}

export default NavBar;
