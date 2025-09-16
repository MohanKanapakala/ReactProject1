import React from 'react'
import "./Default.css";
function Default() {
  return (
      
         <div>
      {/* ===== Fullscreen Video Section ===== */}
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
            Welocome To <span>FoodiePlace</span>
          </h1>
          <h1>
            Exquisite <span>Flavors</span>
          </h1>
          <h2>
            Memorable <span>Moments</span>
          </h2>
        </div>
      </div> 
    </div>
  )
}

export default Default