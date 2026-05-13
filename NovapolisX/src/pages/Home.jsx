import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";

import "../styles/home.css";

function Home() {

  const navigate = useNavigate();

  return (

    <div className="home-page">

      <Navbar />

      <div className="hero-section">

        <div className="hero-overlay"></div>

        <img
          src="https://i.pinimg.com/originals/45/d0/79/45d0790c293e5dba3077f4ad0c4826c6.gif"
          alt="bg"
          className="hero-bg"
        />

        <div className="hero-content">

          <h1>
            Explore The Future Of
            <span> Nagpur City</span>
          </h1>

          <p>
            Discover smart places, live events,
            hospitals, restaurants and futuristic
            city experiences — all in one platform.
          </p>

          <div className="hero-buttons">

            <button
              onClick={() => navigate("/places")}
            >
              Explore Now
            </button>

            <button
              className="glass-btn"
              onClick={() => navigate("/events")}
            >
              Live Events
            </button>

          </div>

        </div>

      </div>

      <div className="services-section">

        <h2>
          Smart City Services
        </h2>

        <div className="services-grid">

          <div
            className="service-card"
            onClick={() => navigate("/places")}
          >
            <h3>Hospitals</h3>

            <p>
              Find top healthcare centers nearby.
            </p>
          </div>

          <div
            className="service-card"
            onClick={() => navigate("/places")}
          >
            <h3>Restaurants</h3>

            <p>
              Explore cafes and food places.
            </p>
          </div>

          <div
            className="service-card"
            onClick={() => navigate("/places")}
          >
            <h3>Tourist Places</h3>

            <p>
              Discover trending destinations.
            </p>
          </div>

          <div
            className="service-card"
            onClick={() => navigate("/events")}
          >
            <h3>Events</h3>

            <p>
              Book tickets for city events.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Home;