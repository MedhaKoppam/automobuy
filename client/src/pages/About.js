import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../img/homebg.jpg";
import "../styles/About.css";

function About() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        
        <p>AUTOMOBUY<br/>AUTOMOBUY .SELL.PROFIT.</p>
        <h1>CONTACT US </h1>
        <h3> +91 092378237 , +91 23879832 </h3>
        <h3> Bangalore,India</h3>

        <Link to="/buy">
          <button> BUY </button>
        </Link>
        <Link to="/sell">
          <button> SELL </button>
        </Link>
      </div>
    </div>
  );
}

export default About;