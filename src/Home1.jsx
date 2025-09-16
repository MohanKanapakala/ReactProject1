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
        <Link to="/app/home" className="visit-btn">
          Visit FoodiePlace
        </Link>
        <h1>
          Welcome To <span>FoodiePlace</span>
        </h1>
        <h1>
          Exquisite <span>Flavors</span>
        </h1>
        <h2>
          Memorable <span>Moments</span>
        </h2>
      </div>
    </div>
  );
}

export default Home1;
