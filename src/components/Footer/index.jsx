import logo from "../../assets/aeroLogo.png";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
import { FaPinterest } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer" data-testid="footer">
      <div className="sectionContainer container grid">
        <div className="gridOne">
          <div className="logoDiv">
            <img src={logo} className="Logo" alt="logo" />
          </div>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
          <div className="socialIcon flex">
            <BsFacebook className="icon" data-testid="facebook-icon" />
            <AiFillTwitterCircle className="icon" data-testid="twitter-icon" />
            <FaTiktok className="icon" data-testid="tiktok-icon" />
            <AiFillYoutube className="icon" data-testid="youtube-icon" />
            <FaPinterest className="icon" data-testid="pinterest-icon" />
          </div>
        </div>

        <div className="footerLinks">
          <span className="linkTitle">Information</span>
          <li>
            <a href="/">Manage Booking</a>
          </li>
          <li>
            <a href="/">Flight Status</a>
          </li>
          <li>
            <a href="/">Check-In</a>
          </li>
          <li>
            <a href="/">Explore</a>
          </li>
          <li>
            <a href="/">Contact Us</a>
          </li>
        </div>

        <div className="footerLinks">
          <span className="linkTitle">Information</span>
          <li>
            <a href="/">Chauffer</a>
          </li>
          <li>
            <a href="/">Our Partners</a>
          </li>
          <li>
            <a href="/">Destinations</a>
          </li>
          <li>
            <a href="/">Careers</a>
          </li>
          <li>
            <a href="/">Rules</a>
          </li>
        </div>

        <div className="footerLinks">
          <span className="linkTitle">Quick Guide</span>
          <li>
            <a href="/">FAQs</a>
          </li>
          <li>
            <a href="/">Features</a>
          </li>
          <li>
            <a href="/">Baggage</a>
          </li>
          <li>
            <a href="/">Route Map</a>
          </li>
          <li>
            <a href="/">Our Communities</a>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Footer;
