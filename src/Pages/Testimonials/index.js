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
  const testimonials = [
    {
      name: "Parth Electronics<br/> Pvt. Ltd.",
      content: `"We have a great business relationship with Markorrect. We had
      worked with several other marketing companies in the past who
      didn't deliver results and I'm happy to say Markorrect is doing
      that for us. They help bring our vision to life in a way that
      makes sense."`,
      designation: "Director",
      personName: "Harshvardhan Jha",
      logo: "https://media-exp1.licdn.com/dms/image/C4D0BAQFVF8gp1bKDUg/company-logo_200_200/0/1619415552099?e=2147483647&v=beta&t=aqjFMO-M5Cblwgtm0Ne50E_8OHguhXoue-shpjnU728",
    },
    {
      content:
        '“We were truly impressed! Ther social media marketing work was excellent too. All the deliverables reached us on time. The marketing produced definitive and solid results. Everything was organized to perfection and delivered very systematically."',
      personName: "Sharth Jha",
      name: "Sarthi<br/> Marketing",
      designation: "Founder",
      logo: "https://media-exp1.licdn.com/dms/image/C4D0BAQFVF8gp1bKDUg/company-logo_200_200/0/1619415552099?e=2147483647&v=beta&t=aqjFMO-M5Cblwgtm0Ne50E_8OHguhXoue-shpjnU728",
    },
  ];
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
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-slider-page">
            <p
              className="testimonial-giver-name"
              dangerouslySetInnerHTML={{ __html: testimonial.name }}
            ></p>
            <p className="testimonial-content">
              {testimonial.content}
              <br />
              <p>
                {testimonial.personName},
                <br />
                {testimonial.designation}
              </p>
            </p>
            <div>
              <img src={testimonial.logo} alt="user" width={100} height={100} />
            </div>
          </div>
        ))}
      </Carousel>
      <div className="testimonial-footer">
        Let's connect to achieve your <br /> business objective
      </div>
    </div>
  );
}
