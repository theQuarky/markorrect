import Carousel from "react-multi-carousel";
import React from "react";

import "./index.scss";

export default function OurTeam() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
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
    <div className="our-team-container">
      {/* <img src={plane} alt="plane" className="plane plane-one" /> */}

      <div className="page-one">
        <h1>Our team</h1>
        lerum ipsum dolor sit amet consectetur adipisicing elit.lerum ipsum
        dolor sit amet consectetur adipisicing elit.lerum ipsum dolor sit amet
        consectetur adipisicing elit.
        <p>Meet Markorrect Team</p>
        <div className="founder-image-container">
          <div>
            <img
              src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
              alt="founder"
            />
            <p>KUSHAL CHAUDHARI</p>
            <p>Founder</p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
              alt="founder"
            />
            <p>SAIMIL PATEL</p>
            <p>Founder</p>
          </div>
        </div>
      </div>
      <div className="page-two">
        <div className="heading-of-page-two">GET TO KNOW THE MARKORRECT</div>
        lerum ipsum dolor sit amet consectetur adipisicing elit.lerum ipsum
        dolor sit amet consectetur adipisicing elit.lerum ipsum dolor sit amet
        consectetur adipisicing elit.
        <p>Meet Markorrect Team</p>
        <div className="founder-image-container">
          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={false}
            shouldResetAutoplay={false}
          >
            {new Array(8).fill(0).map((_, index) => {
              return (
                <div key={index}>
                  <img
                    src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                    alt="founder"
                  />
                  <p>KUSHAL CHAUDHARI</p>
                  <p>Founder</p>
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>

      <div className="our-team-page-footer">
        <div className="footer-left">
          For Your Digital Marketing demands, <br /> Hire the best Digital
          Marketing Agency.
        </div>
        <div className="footer-right">
          SUMBIT YOUR PROPOSAL <br /> REQUEST
        </div>
      </div>
    </div>
  );
}
