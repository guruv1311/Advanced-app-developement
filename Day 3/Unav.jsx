import { useState } from "react";
import "./Unav.css";
import { Link } from "react-router-dom";

function Unav() {
  const [active, setActive] = useState(false);

  const navToggle = () => {
    setActive(!active);
  };

  return (
    <div className="body1n">
      <nav className={`navn ${active ? "nav__active" : ""}`}>
        <div className="nav__brandn">Celeb Fete</div>
        <div onClick={navToggle} className={`nav__togglern ${active ? "toggle" : ""}`}>
          <div className="line1n"></div>
          <div className="line2n"></div>
          <div className="line3n"></div>
        </div>
        <ul className={`nav__menun ${active ? "show" : ""}`}>
          <li className="nav__itemn">
          <Link to="/Userhome"> 
            <a href="#" className="nav__linkn">
              Home
            </a></Link>
          </li>
          <li className="nav__itemn">
          <Link to="/Bookev">            
            <a href="#" className="nav__linkn">
              All Events
            </a></Link>
          </li>
          <li className="nav__itemn">
          <Link to="/Userbook">  
            <a href="#" className="nav__linkn">
              My Bookings
            </a></Link>
          </li>
          <li className="nav__itemn">
          <Link to="/Userlogin"> 
            <a href="#" className="nav__linkn">
              <button className="logout">
              Logout</button>
            </a></Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Unav;