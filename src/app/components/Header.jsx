"use client";
import React, { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import { Element, Link } from "react-scroll";

const handleSetActive = (to) => {
  console.log(to);
};

const navLinks = [
  {
    title: "About",
    path: "about",
  },
  {
    title: "Projects",
    path: "projects",
  },
  {
    title: "Contact",
    path: "contact",
  },
];

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <Element
      name="about"
      className="fixed top-0 border border-[#33353F]  left-0 right-0 z-10 bg-[#121212] bg-opacity-100"
    >
      <nav className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link
          className="text-2xl md:text-5xl  text-white font-semibold"
          activeClass="active"
          to="hero"
          spy={true}
          smooth={true}
          offset={-160}
          duration={900}
          onSetActive={handleSetActive}
        >
          DOSE
        </Link>
        {/* Mobile Menu */}
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 rounded border border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 rounded border border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          )}
        </div>
        {/* Main Menu */}
        <div className="menu hidden  md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  className="text-slate-200 cursor-pointer"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={900}
                  onSetActive={handleSetActive}
                  to={link.path}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </Element>
  );
};

export default Header;
