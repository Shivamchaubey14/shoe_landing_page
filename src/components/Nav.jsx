// import { close } from "../assets/icons";
import { close, hamburger } from "../assets/icons"; // Make sure `close` is correctly imported
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";
import { useState } from "react";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img
            src={headerLogo}
            alt="logo"
            width={129}
            height={29}
            className="m-0 w-[129px] h-[29px]"
          />
        </a>

        {/* Desktop Navbar */}
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Links */}
        <div className="flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24">
          <a href="/">Sign in</a>
          <span>/</span>
          <a href="/">Explore now</a>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="hidden max-lg:block">
          <img
            src={hamburger}
            alt="hamburger icon"
            width={25}
            height={25}
            onClick={handleMenuToggle}
            className="cursor-pointer"
          />
        </div>

        {/* Mobile Sidebar */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg p-6 transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } z-20`}
        >
          {/* Close Icon for Sidebar */}
          <div className="flex justify-start">
            <img
              src={close}
              alt="close icon"
              width={25}
              height={25}
              onClick={handleMenuToggle}
              className="cursor-pointer"
            />
          </div>

          <ul className="flex flex-col items-start gap-4 mt-4">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="font-montserrat leading-normal text-lg text-slate-gray"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex gap-2 text-lg leading-normal font-medium font-montserrat mt-6">
            <a href="/">Sign in</a>
            <span>/</span>
            <a href="/">Explore now</a>
          </div>
        </div>

        {/* Overlay for Mobile Menu */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black opacity-50 z-10"
            onClick={handleMenuToggle}
          ></div>
        )}
      </nav>
    </header>
  );
};

export default Nav;
