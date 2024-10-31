
import { GiHamburgerMenu } from "react-icons/gi";
import Hamburger from "./Hamburger";
import { navItems } from "./NavItems";
import NavLogo from '../../assets/Images/logo.png'
import { BiMessage } from "react-icons/bi";
import { useState } from "react";
const Navbar = () => {
const [activeNavLink, setActiveNavLink] = useState('home')
  return (
    <nav className={`sticky top-0 z-40 py-4 lg:rounded-lg lg:mt-10 bg-[#383434]`}>
      <div className="max-w-[95%] mx-auto hidden lg:flex items-center justify-between">
        <a
          href={"#home"}
          title="Go to Home"
          className="text-3xl text-white font-bold"
        >
          <img src={NavLogo} alt="brand_logo" className="w-32" />
        </a>
        <ul className="lg:flex items-center hidden gap-5 text-base capitalize px-10 ">
          {navItems.map((navItem) => {
            return (
              <li
                key={navItem.id}
                className="relative group overflow-hidden uppercase"
              >
                <a
                  onClick={() => setActiveNavLink(navItem.name)}
                  className={`${
                    navItem.name === activeNavLink
                      ? "text-[#ffac04]"
                      : 'text-white'
                  } font-semibold hover:text-[#ffac04] duration-200`}
                  href={navItem.path}
                >
                  {navItem.name}
                  <span className="absolute left-0 bottom-0 w-0 h-[3px] rounded-full bg-[#ffac04] transition-all duration-300 ease-in-out group-hover:right-0 group-hover:w-full"></span>
                </a>
              </li>
            );
          })}
        </ul>
        <button>
          <a
            className="text-xl flex gap-1 items-end bg-white rounded-full hover:bg-orange-600 hover:text-black duration-200 py-3 px-8"
            href=""
          >
            <span>Let&apos;s Talk</span>
            <span className="text-2xl">
              <BiMessage />
            </span>
          </a>
        </button>
      </div>
      <div className="lg:hidden w-full flex justify-between px-4">
        <h1 className="text-2xl text-slate-600 font-bold">
          <a to={"#home"}>
            <img src={NavLogo} alt="brand_logo" className="w-32" />
          </a>
        </h1>
        <label htmlFor="hamburger">
          <span className="cursor-pointer text-3xl">
            <GiHamburgerMenu />
          </span>
        </label>
      </div>
      <Hamburger />
    </nav>
  );
};

export default Navbar;
