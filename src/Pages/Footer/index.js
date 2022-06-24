import React from "react";
import "./index.scss";
import main_logo from "../../assets/main_logo.svg";

export default function FooterPage() {
  return (
    <div className="footer-page">
      <div className="upper-part">
        <div className="address">
          <img src={main_logo} alt="logo" />
          <br />
          123,alfkjd laksfdj,
          <br />
          ksdf lafsdj fjadlk fa,
          <br />
          laskdjf lakdsjf falsd
          <br />
          laksjdff 123413
          <br />
          fasdf
          <br />
          afdsf
          <br />
          fasd
          <br />
          <div className="mail-container">lasdjfaljh@fakhsd.com</div>
        </div>
        <div className="company-legal">
          <div className="company">
            COMPANY
            <div>
              ABOUT US
              <br />
              OUR Team <br />
              SERVICE
              <br />
              WORK
              <br />
              CAREER
              <br />
              CONTACT
              <br />
              BLOGS
              <br />
              SITEMAP
              <br />
            </div>
          </div>
          <div className="legal">
            LEGAL
            <div>
              PRIVACY POLICY
              <br />
              TERMS OF SERVICE
              <br />
              DO NOT SELL MY INFORMATION
              <br />
            </div>
          </div>
        </div>
        <div className="social">
          <span> SOCIAL</span>
          <div>
            <img
              alt="social-icon"
              src={require("../../assets/icons/Markorrect-facebook-icon.png")}
              width={35}
            />
            <img
              alt="social-icon"
              src={require("../../assets/icons/Markorrect-Instagram-icon.png")}
              width={35}
            />
            <img
              alt="social-icon"
              src={require("../../assets/icons/markorrect-twitter-icon.png")}
              width={35}
            />
            <img
              alt="social-icon"
              src={require("../../assets/icons/Markorrect-linkedin-icon.png")}
              width={35}
            />
            <img
              alt="social-icon"
              src={require("../../assets/icons/markorrect-Pinterest-icon.png")}
              width={35}
            />
            <img
              alt="social-icon"
              src={require("../../assets/icons/markorrect-youtube-icon.png")}
              width={35}
            />
            <img
              alt="social-icon"
              src={require("../../assets/icons/markorrect-snapchat-icon.png")}
              width={35}
            />
          </div>
          <div className="news-letter">
            <h1>JOIN OUR NEWSLETTER</h1>
            <form>
              <input type="text" placeholder="ENTER OUR EMAIL" /> <br />
              <label>
                <input type="checkbox" />
              </label>
              <br />
              <span>
                {" "}
                lerem lerem lerem lerem lerem lerem lerem lerem lerem{" "}
              </span>
              <br />
              <input type="submit" value="SUBSCRIBE" />
            </form>
          </div>
        </div>
      </div>
      <hr />
      <div className="lower-part">
        &copy; 2022 MARKORRECT, All Rights Reserved.
      </div>
    </div>
  );
}
