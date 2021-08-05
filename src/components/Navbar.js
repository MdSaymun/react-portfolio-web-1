import React, { useState, useRef, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../utils/context";
import { Link } from "react-router-dom";
const Navbar = () => {
  const { navLinks } = useGlobalContext();
  const [showNav, setShowNav] = useState(false);
  const linksContainerRef = useRef(null);
  const ulRef = useRef(null);
  useEffect(() => {
    const linksHeight = ulRef.current.getBoundingClientRect().height;
    if (showNav) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showNav]);
  const [showNavbar, setShowNavbar] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 40) {
        if (!showNavbar) {
          setShowNavbar(true);
        }
      } else {
        if (showNavbar) {
          setShowNavbar(false);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showNavbar]);
  const [navbtnLocation, setNavbtnLocation] = useState({});
  const handleNav = (e) => {
    let navBtn = e.target.getBoundingClientRect();
    let center = Math.round((navBtn.left + navBtn.right) / 2);
    let bottom = navBtn.bottom - 3;
    let width = Math.round(navBtn.width);
    setNavbtnLocation({ center, bottom, width });
  };
  const navIndicatorRef = useRef(null);
  useEffect(() => {
    const { center, bottom, width } = navbtnLocation;
    let btn = navIndicatorRef.current;
    btn.style.left = `${center}px`;
    btn.style.top = `${bottom}px`;
    btn.style.width = `${width}px`;
  }, [navbtnLocation]);

  return (
    <div className={`section_navbar p-2  transition-all duration-300 ${showNavbar ? "sticky_navbar bg-gray-200" : "lg:bg-transparent relative_navbar"}`}>
      <div className="navbar-center items-center section">
        <div className="nav-header">
          <Link to="/" className="brand flex items-center justify-center">
            <img src="/images/icons/icon_brand_name.png" alt="Uni Coder" />
            <span className="text-3xl brand_name">
              ni
              <span className="text-5xl text-blue-500">.</span> Coder
            </span>
          </Link>
          <button onClick={() => setShowNav(!showNav)} className="lg:hidden block p-2 border-2 text-2xl rounded-sm border-gray-600 ">
            <FaBars />
          </button>
        </div>
        <div className={`ul-container overflow-hidden lg:pl-5 transition-all duration-300  `} ref={linksContainerRef}>
          <div className="nav-indicator" ref={navIndicatorRef} />
          <div className="nav-ul lg:flex items-center justify-end" ref={ulRef}>
            {navLinks.map((link, index) => {
              return (
                <NavLink
                  key={index}
                  to={link.path}
                  onClick={(e) => handleNav(e)}
                  className={`hover:text-blue-400 lg:px-4 lg:py-3 text-gray-800 `}
                  exact
                  activeClassName="text-blue-400"
                >
                  {link.link}
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
