import React from 'react';


import { Link } from 'react-router-dom'; // import Link

function NavBar() {
    return (
      <div className="NavBar">
        <ul className="nav-items">
          <li><a href="/"><button className="button" id="sponsors-button">Home</button></a></li>
          <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSdsinPEX__G-Jr2kUgGIHNpwZyTA3VWYx4NPGU8X320Xa47rg/viewform"><button className="button" id="mentor-button">Mentor</button></a></li>
          <li><Link to="/aboutus"><button className="button" id="about-us-button">About Us</button></Link></li>
          <li><Link to="/contactus"><button className="button" id="contact-us-button">Contact Us</button></Link></li>
          <li><Link to="/sponsorus"><button className="button" id="sponsor-us-button">Sponsor Us</button></Link></li>
          <li><a href="https://hackmerced.com/discord"><button className="registerButton" id="register-button">Register Now</button></a></li>
        </ul>
            
      </div>
    );
  }
  
  export default NavBar;