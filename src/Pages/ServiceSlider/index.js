import React from "react";
import Carousel from "react-multi-carousel";
import Service from "../../Components/Service";

import "./index.scss";
export default function ServiceSlider(props) {
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
  const data = props.data;
  return (
    <div className="service-slider">
      <Carousel
        shouldResetAutoplay={false}
        infinite={true}
        responsive={responsive}
      >
        {data.map((c, index) => {
          return (
            <Service
              imgSrc={c.imgSrc}
              backgroundColor={c.backgroundColor}
              color={c.color}
              content={c.content}
              title={c.title}
              key={index}
              toContactUs={props.toContactUs}
            />
          );
        })}
      </Carousel>
      <div onClick={props.toContactUs} className="footer">
        {props.footerText}
      </div>
    </div>
  );
}
