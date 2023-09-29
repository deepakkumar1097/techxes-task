import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles
import { Carousel } from "react-responsive-carousel";
import Slide1 from "../assets/images/daniil-silantev-1P6AnKDw6S8-unsplash.jpg";
import Slide3 from "../assets/images/nathan-fertig-FBXuXp57eM0-unsplash.jpg";
import Slide4 from "../assets/images/spacejoy-RqO6kwm4tZY-unsplash.jpg";
import Slide5 from "../assets/images/spacejoy-c0JoR_-2x3E-unsplash.jpg";
import Slide6 from "../assets/images/toa-heftiba-FV3GConVSss-unsplash.jpg";
import Navbar from "../components/Navbar";
import Button from "../components/Button";

export default function Header() {
  return (
    <div className="header-container">
      <Navbar />
      <header className="header-carousel-container">
        <Carousel interval={3000} infiniteLoop={true} showThumbs={false}>
          <img src={Slide1} alt="Slide 1" />
          <img src={Slide3} alt="Slide 3" />
          <img src={Slide4} alt="Slide 4" />
          <img src={Slide5} alt="Slide 5" />
          <img src={Slide6} alt="Slide 5" />
        </Carousel>
        <div className="header-title">
          <h1>Creative Home Simpfy Your Furniture</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius atque
            vitae et commodi repellendus repudiandae alias voluptate earum fugit
            adipisci!
          </p>
          <Button
            text="SHOP NOW"
            backgroundColor="#616161"
            textColor="white"
            borderRadius="15px"
          />
        </div>
      </header>
    </div>
  );
}
