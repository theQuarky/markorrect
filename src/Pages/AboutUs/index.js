import React from "react";
import plane from "../../assets/plane.svg";

import "./index.scss";
export default function AboutUs() {
  return (
    <div className="about-us-container">
      <div className="title">
        <h1>About us</h1>
        <p>
          Our Purpose <br />
          Dedicating ourselves for helping our clients reach new heights.
        </p>
      </div>
      <div className="container">
        <div className="content">
          <p>
            <span>Markorrect</span> is committed to studying and comprehending
            your company.
          </p>
          <p>
            We can ensure that our <span>tailored marketing strategy</span> is
            built by developing a relationship with your company. for the sole
            purpose of
            <span>solving the problems your company </span>faces.
          </p>
          <p>
            Each of our marketing initiatives is tailored to the demands of the
            various categories of customer in order to address the most pressing
            marketing issues.
          </p>
          <p>
            We are dedicated to follow <span> best practices</span> for our
            clients to provide them results and remaining current with the{" "}
            <span> latest digital marketing advances</span>.
          </p>
          <p>
            Every day,<span>new marketing tactics</span> are created to identify
            new ways to contact web visitors with the appropriate marketing
            message.
          </p>
          <p>
            We're always looking for
            <span> the newest and most imaginative methods</span> to connect
            your company with an online audience, whether it's a paid
            advertising campaign, new ways to improve search results, or better
            ways to interact on social media.
          </p>
        </div>
        <div className="image-container">
          <img src="https://picsum.photos/id/27/700/700" alt="about us" />
        </div>
      </div>
    </div>
  );
}
