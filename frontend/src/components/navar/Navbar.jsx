import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./NavbarStyles.css";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [slide, setSlide] = useState(false);

  const handleNav = () => {
    setNav(!nav);
    setSlide(!slide);
  };

  const handleClose = () => {
    setNav(!nav);
  };

  return (
    <div className="navbar">
      <div className="container">
        <div className={slide ? "logo slide-right" : "logo"}>          
        </div>

        <ul className={nav ? "nav-menu active" : "nav-menu" }>
          <li className="card">
            <Link
              onClick={handleClose}
              activeClass="active"
              to="car"
              spy={true}
              smooth={true}
              duration={500}
            >
              Home
            </Link>
          </li>
          <li className="card">
            <Link
              onClick={handleClose}
              activeClass="active"
              to="map"
              spy={true}
              smooth={true}
              duration={500}
            >
              Car Details
            </Link>
          </li>
          <li className="card">
            <Link
              onClick={handleClose}
              activeClass="active"
              to="live"
              spy={true}
              smooth={true}
              duration={500}
            >
              Live Racing
            </Link>
          </li>
        </ul>

        <div className="hamburger" onClick={handleNav}>
          {nav ? (
            <FaTimes size={20} style={{ color: "#ffffff" }} />
          ) : (
            <FaBars style={{ color: "#ffffff" }} size={20} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
