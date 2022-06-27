import Carousel from "react-multi-carousel";
import React from "react";
import plane from "../../assets/plane.svg";
import "./index.scss";

export default function OurTeam() {
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
        <h1>Our team</h1>
        <div className="heading-of-page-two">GET TO KNOW THE MARKORRECT</div>
        lerum ipsum dolor sit amet consectetur adipisicing elit.lerum ipsum
        dolor sit amet consectetur adipisicing elit.lerum ipsum dolor sit amet
        consectetur adipisicing elit.
        <p>Meet Markorrect Team</p>
        <div className="fasdf">
          <Carousel>
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
