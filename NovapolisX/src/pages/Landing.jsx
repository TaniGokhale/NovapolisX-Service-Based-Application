import { useState } from "react";

import Login from "./Login";
import Register from "./Register";

import "../styles/landing.css";

function Landing() {

  const [showLogin, setShowLogin] = useState(false);

  const [showRegister, setShowRegister] = useState(false);

  return (

    <div className="landing-page">

      <img
        src="https://i.pinimg.com/originals/45/d0/79/45d0790c293e5dba3077f4ad0c4826c6.gif"
        alt=""
        className="landing-bg"
      />

      <div className="landing-overlay"></div>

      <div className="floating glow1"></div>
      <div className="floating glow2"></div>

      <nav className="landing-navbar">

        <div className="logo-area">

          <h1>
            NovapolisX
          </h1>

          <p>
            Smart Nagpur City
          </p>

        </div>

        <div className="nav-buttons">

          <button
            className="login-btn"
            onClick={() => setShowLogin(true)}
          >
            Login
          </button>

          <button
            className="register-btn"
            onClick={() => setShowRegister(true)}
          >
            Register
          </button>

        </div>

      </nav>

      <section className="hero-section">

        <div className="hero-left">

          <h1>
            Experience The
            <span> Smart Future</span>
            Of Nagpur
          </h1>

          <p>
            Explore tourist places, hospitals,
            restaurants, events and futuristic
            city services in one powerful platform.
          </p>

          <div className="hero-buttons">

            <button
              className="start-btn"
              onClick={() => setShowLogin(true)}
            >
              Start Exploring
            </button>

            <button
              className="glass-btn"
            >
              Discover More
            </button>

          </div>

        </div>

        <div className="hero-right">

          <div className="glass-card">

            <h2>
              Smart City Features
            </h2>

            <div className="feature-list">

              <div className="feature-item">
                Live Events
              </div>

              <div className="feature-item">
                Tourist Places
              </div>

              <div className="feature-item">
                Hospitals
              </div>

              <div className="feature-item">
                Restaurants
              </div>

              <div className="feature-item">
                Smart Navigation
              </div>

              <div className="feature-item">
                City Services
              </div>

            </div>

          </div>

        </div>

      </section>

      <section className="stats-section">

        <div className="stat-box">
          <h2>200+</h2>
          <p>Places</p>
        </div>

        <div className="stat-box">
          <h2>50+</h2>
          <p>Events</p>
        </div>

        <div className="stat-box">
          <h2>120+</h2>
          <p>Hospitals</p>
        </div>

        <div className="stat-box">
          <h2>80+</h2>
          <p>Restaurants</p>
        </div>

      </section>

      {
        showLogin &&
        <Login
          closeModal={() => setShowLogin(false)}
          openRegister={() => {
            setShowLogin(false);
            setShowRegister(true);
          }}
        />
      }

      {
        showRegister &&
        <Register
          closeModal={() => setShowRegister(false)}
          openLogin={() => {
            setShowRegister(false);
            setShowLogin(true);
          }}
        />
      }

    </div>
  );
}

export default Landing;