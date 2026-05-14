import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../styles/home.css";

function Home() {

  const navigate = useNavigate();

  return (

    <div className="home-page">

      <Navbar />

      <section className="home-hero">

        <img
          src="https://i.pinimg.com/originals/45/d0/79/45d0790c293e5dba3077f4ad0c4826c6.gif"
          alt=""
          className="hero-bg"
        />

        <div className="hero-overlay"></div>

        <div className="hero-glow glow-left"></div>
        <div className="hero-glow glow-right"></div>

        <div className="hero-content">

          <h1>
            Welcome To
            <span> NovapolisX</span>
          </h1>

          <p>
            Explore futuristic city services,
            tourist places, restaurants,
            hospitals and live events
            in smart Nagpur City.
          </p>

          <div className="hero-buttons">

            <button
              className="explore-btn"
              onClick={() => navigate("/places")}
            >
              Explore City
            </button>

            <button className="glass-btn">
              Live Events
            </button>

          </div>

        </div>

      </section>

      <section className="features-section">

        <h2>
          Smart City Features
        </h2>

        <div className="features-grid">

          <div
            className="feature-card"
            onClick={() =>
              navigate("/places?category=Tourist")
            }
          >
            <h3>Tourist Places</h3>

            <p>
              Discover famous attractions
              and trending destinations.
            </p>
          </div>

          <div
            className="feature-card"
            onClick={() =>
              navigate("/places?category=Hospital")
            }
          >
            <h3>Hospitals</h3>

            <p>
              Find nearby healthcare
              services instantly.
            </p>
          </div>

          <div
            className="feature-card"
            onClick={() =>
              navigate("/places?category=Restaurant")
            }
          >
            <h3>Restaurants</h3>

            <p>
              Explore top cafes and
              food places in city.
            </p>
          </div>

          <div className="feature-card">

            <h3>Live Events</h3>

            <p>
              Explore concerts,
              festivals and events.
            </p>

          </div>

          <div className="feature-card">

            <h3>Smart Parking</h3>

            <p>
              Smart parking availability
              and navigation.
            </p>

          </div>

          <div className="feature-card">

            <h3>Weather Updates</h3>

            <p>
              Real-time weather and
              city updates.
            </p>

          </div>

        </div>

      </section>

      <section className="stats-section">

        <div
          className="stat-card"
          onClick={() =>
            navigate("/places")
          }
        >
          <h2>200+</h2>
          <p>Places</p>
        </div>

        <div
          className="stat-card"
          onClick={() =>
            navigate("/places?category=Restaurant")
          }
        >
          <h2>80+</h2>
          <p>Restaurants</p>
        </div>

        <div
          className="stat-card"
          onClick={() =>
            navigate("/places?category=Hospital")
          }
        >
          <h2>120+</h2>
          <p>Hospitals</p>
        </div>

        <div className="stat-card">
          <h2>50+</h2>
          <p>Events</p>
        </div>

      </section>

      <section className="banner-section">

        <div className="banner-card">

          <h2>
            Experience The Smart Future
          </h2>

          <p>
            Navigate the city with futuristic
            smart services and real-time updates.
          </p>

          <button
            onClick={() => navigate("/places")}
          >
            Start Journey
          </button>

        </div>

      </section>

      <Footer />

    </div>
  );
}

export default Home;