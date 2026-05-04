import { Link } from "react-router-dom";
import "../styles/landing.css";

function Landing() {
  return (
    <div className="landing">

      <div className="overlay"></div>

      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5Wh6YvKRFR1hkTqx1sung_4ue_H9ct0qUKA&s"
        alt="bg"
        className="bg-image"
      />

      <div className="content">
        <h1>Explore Nagpur Like Never Before</h1>

        <p>
          Discover top places, hospitals, colleges, events and everything happening in your city — all in one smart platform.
        </p>

        <div className="buttons">
          <Link to="/login">
            <button className="btn primary">Login</button>
          </Link>

          <Link to="/register">
            <button className="btn secondary">Register</button>
          </Link>
        </div>

        <div className="scroll">
          Scroll Down ↓
        </div>
      </div>

    </div>
  );
}

export default Landing;