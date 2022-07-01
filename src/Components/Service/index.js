import React from "react";
import "./index.scss";

export default function Service(props) {
  console.log(props.title, props.content.length);
  return (
    <div
      style={{
        backgroundColor: props.backgroundColor,
      }}
      className="service-in-details-container"
    >
      <div style={{ color: props.color }} className="content">
        <h1 dangerouslySetInnerHTML={{ __html: props.title }}></h1>
        <p dangerouslySetInnerHTML={{__html:props.content}}></p>
        <button>Learn More</button>
      </div>
      <div className="image">
        <img alt="img" src={props.imgSrc} />
      </div>
    </div>
  );
}
