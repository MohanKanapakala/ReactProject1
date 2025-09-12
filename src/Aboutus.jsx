import React, { useRef } from "react";
import "./Aboutus.css";

function Aboutus() {
  const ourStoryRef = useRef(null);
  const scrollToOurStory = () => {
    ourStoryRef.current.scrollIntoView({ behaviour: "smooth" });
    
  }
  return (
    <>
      <div className="aboutus-hero">
        <div className="overlay">
          <h1>
            About <span>FoodiePlace</span>
          </h1>
          <p>Where passion meets flavor, and every dish tells a story</p>
          <button onClick={scrollToOurStory}>Our Story</button>
        </div>
      </div>

      {/* Our Story */}
      <div className="container-fluid mt-5 mb-5" ref={ourStoryRef}>
        <div className="our-story-card">
          <div className="row align-items-center">
            {/* Left side text */}
            <div className="col-md-6">
              <div className="our-story">
                <h2>Our Story</h2>
                <p>
                  Founded in 2025, foodiePlace began as a dream to create more
                  than just a restaurant—we wanted to build a community where
                  food brings people together and creates lasting memories.
                </p>
                <p>
                  Our journey started with a simple belief: that exceptional
                  food comes from the finest ingredients, prepared with passion
                  and served with love. Every dish on our menu tells the story
                  of our commitment to culinary excellence.
                </p>
                <p>
                  From sourcing local, organic ingredients to crafting
                  innovative recipes that honor traditional techniques, we've
                  built foodiePlace as a destination for those who appreciate
                  the art of dining.
                </p>
              </div>
            </div>

            {/* Right side image */}
            <div className="col-md-6 text-center">
              <div className="story-image-wrapper">
                <img
                  src="/images/chef-cooking.jpg"
                  alt="Chef cooking"
                  className="story-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="our-values">
        <h2>Our Values</h2>
        <p>The principles that guide everything we do</p>
      </div>
      <div className="container-fluid">
        <div className="ourvalues-grid">
          <div className="ourvalues-card">
            <div className="icon-wrapper">🌱</div>
            <h3>Fresh & Local</h3>
            <p>
              We source the finest local ingredients, supporting our community
              farmers and ensuring peak freshness in every dish.
            </p>
          </div>
          <div className="ourvalues-card">
            <div className="icon-wrapper">👨‍🍳</div>
            <h3>Culinary Excellence</h3>
            <p>
              Our experienced chefs craft each dish with passion, creativity and
              attention to detail that transforms dining into experience.
            </p>
          </div>
          <div className="ourvalues-card">
            <div className="icon-wrapper">❤️</div>
            <h3>Community First</h3>
            <p>
              We believe food brings people together. Our warm atmosphere
              welcomes families, friends, and food lovers from all walks of
              life.
            </p>
          </div>
        </div>
      </div>

      {/* Meet our team */}
      <div className="meet-team">
        <h2>Meet Our Team</h2>
        <p>The passionate people behind your favourite dishes</p>
        <div className="container-fluid">
          <div className="meet-our-grid">
            <div className="image">
              <img src="/images/ingredients.jpg" alt="Chef Maria" />
            </div>
            <div className="text">
              <h2>Chef Maria Rodriguez</h2>
              <h3>Head Chef & Co-Founder</h3>
              <p>
                With over 15 years of culinary experience spanning three
                continents, Chef Maria brings a unique fusion of flavors and
                techniques to foodiePlace.
              </p>
              <p>
                Her philosophy centers on letting ingredients speak for
                themselves, creating dishes that are both innovative and
                comfortingly familiar.
              </p>
              <p>
                When she's not in the kitchen, you can find Maria exploring
                local farmers' markets or teaching cooking classes to aspiring
                chefs.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="cta-section">
          <h2>Ready to Experience foodiePlace?</h2>
          <p>
            Join us for an unforgettable dining experience where every meal is a
            celebration
          </p>
        </div>
      </div>
    </>
  );
}

export default Aboutus;
