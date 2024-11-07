import { FaWindowClose } from "react-icons/fa";
import { navItems } from "./NavItems";
import { useRef } from "react";
import NavLogo from "../../assets/Images/logo.png";

const Hamburger = () => {
  const inputRef = useRef();
  const handleClick = () => {
    inputRef?.current?.click();
  };
  return (
    <div className="lg:hidden">
      <input
        id="hamburger"
        type="checkbox"
        className="peer hidden"
        ref={inputRef}
      />
      <label
        htmlFor="hamburger"
        className="fixed top-0 left-0 h-full w-full bg-black opacity-30 hidden peer-checked:block"
      ></label>
      <div className=" fixed z-50 top-0 left-0 h-full md:w-[40%] w-[65%] bg-[#383434] peer-checked:block duration-150 translate-x-[-100%] peer-checked:translate-x-0 p-4">
        <div className="flex justify-between px-1">
          <div className="text-2xl text-slate-500 font-bold">
            <img src={NavLogo} alt="brand_logo" className="h-10" />
          </div>
          <label htmlFor="hamburger" className="text-2xl m-2 cursor-pointer">
            <FaWindowClose />
          </label>
        </div>
        <div>
          <ul className="flex flex-col gap-1 text-xl font-semibold text-white uppercase mt-5">
            {navItems.map((navItem) => {
              return (
                <li
                  key={navItem.name}
                  className="hover:hover:text-[#ffac04] duration-200 cursor-pointer"
                >
                  <a onClick={handleClick} className="" href={navItem.path}>
                    {navItem.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Hamburger;
