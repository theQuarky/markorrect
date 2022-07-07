import React, { useState } from "react";
import { useEffect } from "react";
import "./index.scss";

export default function Service(props) {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  console.log(props.title, props.content.length);

  useEffect(() => {
    window.addEventListener("resize", function (event) {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;
      setWidth(newWidth);
      setHeight(newHeight);
    });
  });
  if (width > 768)
    return (
      <div
        style={{
          backgroundColor: props.backgroundColor,
        }}
        className="service-in-details-container"
      >
        <div style={{ color: props.color }} className="content">
          <h1 dangerouslySetInnerHTML={{ __html: props.title }}></h1>
          <p dangerouslySetInnerHTML={{ __html: props.content }}></p>
          <button>Learn More</button>
        </div>
        <div className="image">
          <img alt="img" src={props.imgSrc} />
        </div>
      </div>
    );
  else
    return (
      <div
        style={{
          backgroundColor: props.backgroundColor,
        }}
        className="service-in-details-container-mobile"
      >
        <div style={{ color: props.color }} className="content">
          <h1 dangerouslySetInnerHTML={{ __html: props.title }}></h1>
          <div>
            <img alt="img" src={props.imgSrc} />
          </div>
          <p dangerouslySetInnerHTML={{ __html: props.content }}></p>
          <button>Learn More</button>
        </div>
      </div>
    );
}
