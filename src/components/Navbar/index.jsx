import React, { useState } from "react";
import { BsPhoneVibrate } from "react-icons/bs";
import aeroLogo from "../../assets/aeroLogo.png";
import { CgMenuGridO } from "react-icons/cg";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [active, setActive] = useState("navBarMenu");

  const showNavBar = () => {
    setActive("navBarMenu showNavBar");
  };

  const removeNavBar = () => {
    setActive("navBarMenu");
  };

  const [noBg, addBg] = useState("navBarTwo");

  const addBgColor = () => {
    if (window.scrollY >= 10) {
      addBg("navBarTwo navbar_With_Bg");
    } else {
      addBg("navBarTwo");
    }
  };

  window.addEventListener("scroll", addBgColor);

  return (
    <div className="navBar flex" data-testid="navbar">
      <div className="navBarOne flex">
        <div></div>
        <div className="none flex">
          <li className="flex">
            <BsPhoneVibrate className="icon" />
            Support
          </li>
        </div>

        <div className="atb flex">
          <span>Sign In</span>
        </div>
      </div>

      <div className={noBg}>
        <Link to="/">
          <div className="logoDiv flex">
            <h3 className="companyLogo">JetSetGo</h3>
            <img src={aeroLogo} className="Logo" alt="logo" />
          </div>
        </Link>

        <div className={active} data-testid={active}>
          <ul className="menu flex">
            <li onClick={removeNavBar}>
              <Link to="/" className="listItem">
                Home
              </Link>
            </li>
            <li onClick={removeNavBar}>
              <ScrollLink
                to="support"
                smooth={true}
                duration={500}
                className="listItem"
              >
                About
              </ScrollLink>
            </li>
            <li onClick={removeNavBar}>
              <ScrollLink
                to="search"
                smooth={true}
                duration={500}
                className="listItem"
              >
                Travel Booking
              </ScrollLink>
            </li>
            <li onClick={removeNavBar}>
              <ScrollLink
                to="lounge"
                smooth={true}
                duration={500}
                className="listItem"
              >
                Lounge
              </ScrollLink>
            </li>
            <li onClick={removeNavBar}>
              <ScrollLink
                to="travel"
                smooth={true}
                duration={500}
                className="listItem"
              >
                Destinations
              </ScrollLink>
            </li>
            <li onClick={removeNavBar}>
              <Link to="/available-flights" className="listItem">
                Available Flights
              </Link>
            </li>
          </ul>
          <button onClick={removeNavBar} className="btn flex btnOne">
            Contact Us
          </button>
        </div>

        <button className="btn flex btnTwo">Contact Us</button>

        <div
          onClick={showNavBar}
          className="toggleIcon"
          data-testid="toggle-icon"
        >
          <CgMenuGridO className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
