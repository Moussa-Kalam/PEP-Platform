import Logo from "./Logo";
import { useState } from "react";

interface Props {
  links: string[];
  onSelectLink: (link: string) => void;
}

function NavBar({ links, onSelectLink }: Props) {
  // State Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  // Event handler
  // const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <section className="flex justify-between  items-center bg-blue-100 py-10 px-16">
        <Logo />
        <ul className="flex gap-x-6 items-center text-lg">
          {links.map((link, index) => (
            <li
              className={
                selectedIndex === index ? "bg-blue-200" : "bg-blue-100"
              }
              key={link}
              onClick={(event) => {
                event.preventDefault();
                setSelectedIndex(index);
                onSelectLink(link);
              }}
            >
              <a href="">{link}</a>
            </li>
          ))}
        </ul>

        <div className="">
          <a
            href="#"
            className="hover:bg-red-300 text-xl bg-red-400 text-white font-semibold p-3
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
