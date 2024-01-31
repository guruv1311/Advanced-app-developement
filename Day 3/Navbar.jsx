import { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [active, setActive] = useState(false);

  const navToggle = () => {
    setActive(!active);
  };

  return (
    <div className="body1">
      <nav className={`nav ${active ? "nav__active" : ""}`}>
        <div className="nav__brand">Celeb Fete</div>
        <div onClick={navToggle} className={`nav__toggler ${active ? "toggle" : ""}`}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
        <ul className={`nav__menu ${active ? "show" : ""}`}>
          <li className="nav__item">
          <Link to="/Admin"> 
            <a href="#" className="nav__link">
              Home
            </a></Link>
          </li>
          <li className="nav__item">
            <Link to="/Addev">            
            <a href="#" className="nav__link">
              Add Event
            </a></Link>
          </li>
          <li className="nav__item">
          <Link to="/All">            
            <a href="#" className="nav__link">
              All Events
            </a></Link>
          </li>
          <li className="nav__item">
          <Link to="/Mybook">  
            <a href="#" className="nav__link">
              All Bookings
            </a></Link>
          </li>
          <li className="nav__item">
          <Link to="/Alogin"> 
            <a href="#" className="nav__link">
             <button className="logu"> Logout </button>
            </a></Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;