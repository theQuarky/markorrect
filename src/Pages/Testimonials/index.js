import React from "react";
import Carousel from "react-multi-carousel";
import "./index.scss";

export default function Testimonials() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="testimonial-container">
      <p>Testimonials</p>
      <h1>People love to work with markorrect</h1>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={false}
        shouldResetAutoplay={false}
      >
        {new Array(10).fill(0).map((_, index) => (
          <div className="testimonial-slider-page">
            <p className="testimonial-giver-name">Name or organization</p>
            <p className="testimonial-content">
              Lerem ipsum dolor sit amet, consectetur adipiscing elit.
              NullamLerem ipsum dolor sit amet, consectetur adipiscing elit.
              NullamLerem ipsum dolor sit amet, consectetur adipiscing elit.
              NullamLerem ipsum dolor sit amet, consectetur adipiscing elit.
              NullamLerem ipsum dolor sit amet, consectetur adipiscing elit.
              Nullamipsum dolor sit amet, consectetur adipiscing elit.
              NullamLerem ipsum dolor sit amet, consectetur adipiscing elit.
              Nullam
            </p>
            <div></div>
          </div>
        ))}
      </Carousel>
      <div className="footer">
        Let's connect to achieve your <br /> business objective
      </div>
    </div>
  );
}
