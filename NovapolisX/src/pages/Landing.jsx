import { useState } from "react";
import "../styles/landing.css";

import Register from "./Register";
import Login from "./Login";

function Landing() {

  const [showRegister, setShowRegister] = useState(false);

  const [showLogin, setShowLogin] = useState(false);

  return (

    <div className="landing">

      <img
        src="https://i.pinimg.com/originals/45/d0/79/45d0790c293e5dba3077f4ad0c4826c6.gif"
        alt="bg"
        className="bg-gif"
      />

      <div className="overlay"></div>

      <nav className="navbar">

        <div className="logo-section">

          <div className="logo-text">
            <h2>NovapolisX</h2>
            <p>Nagpur Smart City</p>
          </div>

        </div>

        <div className="nav-links">

          <button
            className="nav-btn login-btn"
            onClick={() => setShowLogin(true)}
          >
            Login
          </button>

          <button
            className="nav-btn register-btn"
            onClick={() => setShowRegister(true)}
          >
            Register
          </button>

        </div>

      </nav>

      <div className="hero-content">

        <h1 className="hero-title">
          Explore <span>Nagpur</span>
        </h1>

        <p className="hero-subtitle">
          Discover places, events, hospitals,
          colleges and everything happening in your city.
        </p>

        <div className="hero-buttons">

          <button
            className="main-btn"
            onClick={() => setShowLogin(true)}
          >
            Start Exploring
          </button>

        </div>

      </div>

      <div className="preview-section">

        <h2>
          Smart City Features
        </h2>

        <div className="cards">

          <div className="card">
            <h3>Live Events</h3>
            <p>
              Discover concerts, festivals and city events.
            </p>
          </div>

          <div className="card">
            <h3>Hospitals</h3>
            <p>
              Find top healthcare services nearby.
            </p>
          </div>

          <div className="card">
            <h3>Colleges</h3>
            <p>
              Explore educational institutions in Nagpur.
            </p>
          </div>

          <div className="card blur-card">
            <h3>Bookings & Maps</h3>
            <p>
              Login to unlock premium smart services.
            </p>
          </div>

        </div>

      </div>

      {
        showRegister &&
        <Register
          closeModal={() => setShowRegister(false)}
          openLogin={() => setShowLogin(true)}
        />
      }

      {
        showLogin &&
        <Login
          closeModal={() => setShowLogin(false)}
          openRegister={() => setShowRegister(true)}
        />
      }

    </div>
  );
}

export default Landing;