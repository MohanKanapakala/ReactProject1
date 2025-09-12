
  import "slick-carousel/slick/slick.css";
  import "slick-carousel/slick/slick-theme.css";
  import React, { useEffect, useRef } from "react";
  import Slider from "react-slick";
  import { Link } from "react-router-dom";
import "./Home.css";
  import "bootstrap-icons/font/bootstrap-icons.css";


function Home() {
   const scrollRef = useRef(null);

   useEffect(() => {
     const scrollContainer = scrollRef.current;
     let scrollAmount = 0;
     let direction = 1;

     const interval = setInterval(() => {
       if (!scrollContainer) return;

       scrollAmount += 2 * direction;
       scrollContainer.scrollLeft = scrollAmount;

       if (
         scrollContainer.scrollLeft + scrollContainer.clientWidth >=
         scrollContainer.scrollWidth
       ) {
         direction = -1; // reverse scroll
       } else if (scrollContainer.scrollLeft <= 0) {
         direction = 1; // forward scroll
       }
     }, 30);

     return () => clearInterval(interval); // cleanup
   }, []);



    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4, // default desktop view
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: true, // ✅ enable arrows
      cssEase: "linear", // ✅ smoother autoplay
      responsive: [
        { breakpoint: 1024, settings: { slidesToShow: 3 } },
        { breakpoint: 768, settings: { slidesToShow: 2 } },
        { breakpoint: 480, settings: { slidesToShow: 1 } },
      ],
    };

    const categories = [
      { id: 1, name: "Veg", img: "/images/veg.jpg", link: "/veg" },
      { id: 2, name: "Non-Veg", img: "/images/nonveg.jpg", link: "/nonveg" },
      { id: 3, name: "Milk Shakes", img: "/images/milk.jpg", link: "/milk" },
      {
        id: 4,
        name: "Chocolate",
        img: "/images/chocolate.jpg",
        link: "/chocolate",
      },
    ];

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

        {/* carosol itesm */}
        <br />
        <h2 className="food-sec">Visit Our Best Food Items</h2>
        <div class="food-section">
          <div class="food-scroll" ref={scrollRef}>
            <div class="food-item">
              <a href="/nonveg">
                {" "}
                <img src="/images/chicken-biryani.png" alt="Chicken Biryani" />
              </a>
              <strong>Chicken Biryani</strong>
            </div>

            <div class="food-item">
              <a href="/nonveg">
                <img src="/images/tandoori.jpg" alt="Tandoori Chicken" />
              </a>
              <strong>Tandoori Chicken</strong>
            </div>

            <div class="food-item">
              <a href="/nonveg">
                <img src="/images/mutton-curry.png" alt="Mutton Curry" />
              </a>
              <strong>Mutton Curry</strong>
            </div>

            <div class="food-item">
              <a href="/veg">
                {" "}
                <img src="/images/paneer-butter.png" alt="Paneer Butter" />
              </a>
              <strong>Paneer Butter</strong>
            </div>

            <div class="food-item">
              <a href="/veg">
                <img src="/images/masala-dosa.png" alt="Masala Dosa" />
              </a>
              <strong>Masala Dosa</strong>
            </div>

            <div class="food-item">
              <a href="/veg">
                <img src="/images/veg munchuria.png" alt="Veg Munchuria" />
              </a>
              <strong>Veg Munchuria</strong>
            </div>

            <div class="food-item">
              <a href="/bakery">
                <img src="/images/pizza.png" alt="Pizza" />
              </a>
              <strong>Pizza</strong>
            </div>

            <div class="food-item">
              <a href="/bakery">
                {" "}
                <img src="/images/burger.png" alt="Burger" />
              </a>
              <strong>Burger</strong>
            </div>

            <div class="food-item">
              <a href="/bakery">
                {" "}
                <img src="/images/cake.png" alt="Cake" />
              </a>
              <strong>Cake</strong>
            </div>

            <div class="food-item">
              <a href="/bakery">
                <img src="/images/chicken-roll.png" alt="Chicken Roll" />
              </a>
              <strong>Chicken Roll</strong>
            </div>

            <div class="food-item">
              <a href="/milk">
                {" "}
                <img src="/images/vanilla-milkshake.png" alt="Vanilla" />
              </a>
              <strong>Vanilla</strong>
            </div>

            <div class="food-item">
              <a href="/milk">
                {" "}
                <img src="/images/oreo-milkshake.png" alt="Oreo" />
              </a>
              <strong>Oreo</strong>
            </div>

            <div class="food-item">
              <a href="/milk">
                <img src="/images/lassi.png" alt="Lassi" />
              </a>
              <strong>Lassi</strong>
            </div>

            <div class="food-item">
              <a href="/bakery">
                <img src="/images/ice-cream.png" alt="Ice Cream" />
              </a>
              <strong>Ice Cream</strong>
            </div>

            <div class="food-item">
              <a href="/bakery">
                {" "}
                <img src="/images/samosa.png" alt="Samosa" />
              </a>
              <strong>Samosa</strong>
            </div>

            <div class="food-item">
              <a href="/veg">
                <img src="/images/noodles.png" alt="Noodles" />
              </a>
              <strong>Noodles</strong>
            </div>

            <div class="food-item">
              <a href="/veg">
                <img src="/images/paratha.png" alt="Paratha" />
              </a>
              <strong>Paratha</strong>
            </div>
          </div>
        </div>

        {/* ===== Carousel Section ===== */}
        <div className="carousel-container">
          <h1 className="carousel-title">🍴 Foods Categories</h1>
          <Slider {...settings}>
            {categories.map((cat) => (
              <div key={cat.id} className="category-card">
                <Link to={cat.link} className="category-link">
                  <div className="category-box">
                    <img
                      src={cat.img}
                      alt={cat.name}
                      className="category-image"
                    />
                    <h3>{cat.name}</h3>
                  </div>
                </Link>
              </div>
            ))}
          </Slider>
        </div>

        {/* ===== Our Achievements Section (Story + Stats Side by Side) ===== */}
        <div className="container-fluid" style={{ marginTop: "1px" }}>
          <h2 className="heading">Our Achievements</h2>
          <div className="row rowStyle">
            {/* Left Side - Our Story */}
            <div className="col-sm-6 p-4">
              <div className="colFirst">
                <h3>Our story</h3>
                <h5>Crafting Culinary Excellence Since 2025</h5>
                <p>
                  At FoodiePlace, we believe that great food brings people
                  together. Our passionate chefs combine traditional techniques
                  with modern innovation to create extraordinary dining
                  experiences that celebrate the art of cuisine.
                </p>
                <p>
                  Every dish tells a story of carefully sourced ingredients,
                  masterful preparation, and unwavering commitment to quality.
                  We're not just serving food – we're creating memories.
                </p>
              </div>
            </div>

            {/* Right Side - Stats */}
            <div className="col-sm-6 p-4">
              <div className="colSecond">
                <div className="achieve-card">
                  <i class="bi bi-award icons"></i>
                  <br />
                  <strong className="achieves">15+</strong>
                  <h6 style={{ color: "white" }}>Awards Won</h6>
                </div>
                <div className="achieve-card">
                  <i className="bi bi-emoji-smile-fill icons"></i>
                  <br />
                  <strong className="achieves">10K+</strong>
                  <h6 style={{ color: "white" }}>Happy Customers</h6>
                </div>
                <div className="achieve-card">
                  <i className="bi bi-heart icons"></i>
                  <br />
                  <strong className="achieves">Fast Delivery</strong>
                  <h6 style={{ color: "white" }}>Quick and reliable service</h6>
                </div>
                <div className="achieve-card">
                  <i className="bi bi-clock icons"></i>
                  <br />
                  <strong className="achieves">50+</strong>
                  <h6 style={{ color: "white" }}>Daily Fresh Dishes</h6>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid text-center">
          <h2 className="get-heading">Get In Touch</h2>
          <h3 className="fw-bold text-success">Visit FoodiePlace Today</h3>
          <p className=" mb-5 text-dark">
            We'd love to welcome you to our restaurant. Reach out for
            reservations or any inquiries
          </p>

          {/* Row of 4 cards */}
          <div className="row g-3">
            {/* Visit Us */}
            <div className="col-md-3">
              <div className="card shadow-sm p-4 h-100">
                <i className="bi bi-geo-alt-fill fs-1 text-warning mb-3"></i>
                <h5>Visit Us</h5>
                <p>Kotturu</p>
                <p>Srikakulam District, AP, 532455</p>
              </div>
            </div>

            {/* Call Us */}
            <div className="col-md-3">
              <div className="card shadow-sm p-4 h-100">
                <i className="bi bi-telephone-fill fs-1 text-success mb-3"></i>
                <h5>Call Us</h5>
                <p>6305927818</p>
                <p>6306927818</p>
              </div>
            </div>

            {/* Email Us */}
            <div className="col-md-3">
              <div className="card shadow-sm p-4 h-100">
                <i className="bi bi-envelope-fill fs-1 text-primary mb-3"></i>
                <h5>Email Us</h5>
                <p>hello@foodieplace.com</p>
                <p>kanapakalamohanrao@gmail.com</p>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="col-md-3">
              <div className="card shadow-sm p-4 h-100">
                <i className="bi bi-clock-fill fs-1 text-danger mb-3"></i>
                <h5>Opening Hours</h5>
                <p>Mon-Thu: 11AM - 10PM</p>
                <p>Fri-Sun: 11AM - 11PM</p>
              </div>
            </div>
          </div>

          <p className="text-dark mt-3">
            For large group bookings or special events, please call us directly
          </p>
        </div>

        {/* Bottom section */}
        <div
          className=" container-fluid row-section"
          style={{ marginTop: "10px" }}
        >
          <div className="row ">
            <div className=" col-sm-3 foodiePlace">
              <h2>FoodiePlace</h2>
              <p>
                Creating exceptional dining experiences with passion,quality,
                and innovation since 2025.
              </p>
              <div className="icons-grid">
                <a href="https://www.facebook.com/mohanrao.kanapakala">
                  <h5 className="fb-color">
                    <i class="bi bi-facebook"></i>
                  </h5>
                </a>
                <a href="https://www.instagram.com/mohan_kanapakala/">
                  <h5 className="insta-color">
                    <i class="bi bi-instagram"></i>
                  </h5>
                </a>
                <a
                  href="https://wa.me/916305927818?text=Hello%20Mohan"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h5 className="whatsapp-color">
                    <i className="bi bi-whatsapp"></i>
                  </h5>
                </a>
              </div>
            </div>

            <div className="col-sm-3">
              <h4 className="quick-link">Quick Links</h4>

              <div className="quick-links">
                <a href="/veg">Veg</a>
                <br />
                <a href="/nonveg">NonVeg</a>
                <br />
                <a href="/milk">MilkItems</a>
                <br />
                <a href="/chocolate">Chocolates</a>
                <br />
                <a href="/aboutus">About US</a>
                <br />
                <a href="/contactus">Contact Us</a>
              </div>
            </div>
            <div className="col-sm-3 ">
              <h4 className="menuHeading">Menu</h4>
              <ul className="menu-list">
                <li>Veg Items</li>
                <li>Non-veg Items</li>
                <li>Milk Items</li>
                <li>Chocolates</li>
                <li>Bakery Items</li>
              </ul>
            </div>
            <div className="col-sm-3">
              <h4 className="contactInfo">Contact Info</h4>
              <div className="contact-text">
                <p>
                  <i class="bi bi-telephone" style={{ color: "orange" }}></i> 91
                  6305927818
                </p>
                <p>
                  <i class="bi bi-envelope" style={{ color: "orange" }}></i>
                  &nbsp;hello@foodieplace.com
                </p>
                <p>
                  <i class="bi bi-clock" style={{ color: "orange" }}></i>&emsp;
                  <strong>Opening Hours:</strong>
                </p>
                <ul>
                  <li>Mon-Thu: 11AM - 10PM</li>
                  <li>Fri-Sun: 11AM - 11PM</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="copy-rights">
                <hr />
                <p>
                  &copy; 2025 FoodiePlace. All rights reserved. | Crafted with
                  love for food enthusiasts{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  export default Home;
