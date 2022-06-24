import "./index.scss";
import logo from "../../assets/main_logo.svg";
import plane from "../../assets/plane.svg";

export default function LandingPage() {
  return (
    <div className="landing-page-container">
      <img src={plane} alt="plane" className="plane plane-one" />
      <img src={plane} alt="plane" className="plane plane-two" />
      <header>
        <span>
          <img src={logo} alt="LOGO" />
        </span>
        <ul>
          <li className="ctc-btn">Let's Connect</li>
          <li>Our Team</li>
          <li>Contact</li>
          <li>About</li>
          <li>Services</li>
        </ul>
      </header>
      <main>
        <div className="main-text">
          mark<span>orrect</span> is completely <br />
          dedicated in PROVIDING
          <br />
          SOLUTION TO clients
          <br />
          FOR achievING new hights
          <br />
          in this<span> digital era</span>.
        </div>
        <div className="ctc-btn-middle">
            <span>Work</span> With Mark<span>orrect</span>
        </div>
      </main>
    </div>
  );
}
