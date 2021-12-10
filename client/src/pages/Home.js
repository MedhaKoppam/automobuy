import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../img/homebg.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        
        <p> WHAT'S BETTER THAN NICE CARS?<br/>NICE CARS AT NICE PRICES.</p>
        <h1> AUTOMOBUY .SELL.PROFIT.</h1>
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

export default Home;