import React from "react";
import { Link } from "react-router-dom";
import "./Home1.css";

function Home1() {
  return (
    <div className="video-container">
      <video
        className="hero-video"
        src="/images/video2.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="video-overlay">
       
        <h1>
          Welcome To <span>FoodiePlace</span>
        </h1>
        <h1>
          Exquisite <span>Flavors</span>
        </h1>
        <h2>
          Memorable <span>Moments</span>
        </h2>
        <div className="hero-buttons">
                    {/* <Link to="/veg" className="btn-primary">
                      Order Now
                    </Link>
                    <Link to="/contactus" className="btn-secondary">
                      Contact Us
                    </Link> */}
                  </div>
      </div>
    </div>
  );
}

export default Home1;
