import React, { useState } from "react";
import { useEffect } from "react";
import "./index.scss";

export default function Service(props) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    window.addEventListener("resize", function (event) {
      const newWidth = window.innerWidth;
      setWidth(newWidth);
    });
  });
  if (width > 925)
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
          <button onClick={props.toContactUs}>Learn More</button>
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
          <button onClick={props.toContactUs}>Learn More</button>
        </div>
      </div>
    );
}
