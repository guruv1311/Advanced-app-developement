// import React from 'react'
import "./Footer.css";
// import { FaFacebook, FaTwitterSquare, FaGoogle } from 'react-icons/fa';
import { FaTwitter,FaYoutube,FaInstagram,FaFacebook,FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  //  const iconSize = "36px"; // Set the desired size for the icons
  // const iconColor = "white";
  return (
    <div className='Footer'>
        <div className='FooterLogo'>
            <a href=''><FaTwitter/></a>
            <a href=''><FaYoutube/></a>
            <a href=''><FaInstagram/></a>
            <a href=''><FaFacebook/></a>
            <a href=''><FaLinkedin/></a>
        </div>
        <div className='FooterContent'>
            <span className='footeritems'>Bookings</span>
            <span className='footeritems'>Privacy Statements</span>
            <span className='footeritems'>Terms and Conditions</span>
        </div>
        <p className='rights'>By using this site you agree that we can place cookies on your device. See Privacy Statement for details.
© 2024 Festivease. All Rights Reserved.</p>
    </div>
    // <div>
    //     <footer className="footer">
    //         <div className="copy">© 2024 Developer</div>
    //         <div className="bottom-links">
    //           <div className="links">
    //             <span>Social Links</span>
    //             <br />
    //             <br />
    //             <a href="#" style={{ fontSize: iconSize, color: iconColor }}><FaFacebook /></a>
    //           <a href="#" style={{ fontSize: iconSize, color: iconColor }}><FaTwitterSquare /></a>
    //           <a href="#" style={{ fontSize: iconSize, color: iconColor }}><FaGoogle /></a>
    //           </div>
    //         </div>
    //       </footer>
    // </div>
  )
}

export default Footer