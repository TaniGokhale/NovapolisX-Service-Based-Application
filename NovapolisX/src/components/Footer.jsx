// FOOTER COMPLETE FINAL

import { Link } from "react-router-dom";

import "../styles/footer.css";

function Footer() {

  return (

    <footer className="footer">

      <div className="footer-top">

        <div className="footer-brand">

          <h2>
            NovapolisX
          </h2>

          <p>
            Smart Nagpur City Platform
          </p>

          <span>
            Explore futuristic city services,
            places, hospitals, restaurants
            and events in one smart platform.
          </span>

        </div>

        <div className="footer-links">

          <h3>
            Quick Links
          </h3>

          <Link to="/home">
            Home
          </Link>

          <Link to="/places">
            Places
          </Link>

          <Link to="/events">
            Events
          </Link>

          <Link to="/smart-services">
            Smart Services
          </Link>

        </div>

        <div className="footer-links">

          <h3>
            Smart Services
          </h3>

          <Link to="/places?category=Hospital">
            Hospitals
          </Link>

          <Link to="/places?category=Restaurant">
            Restaurants
          </Link>

          <Link to="/places?category=Tourist">
            Tourist Places
          </Link>

          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noreferrer"
          >
            Live Navigation
          </a>

        </div>

        <div className="footer-contact">

          <button
            className="contact-link"
            onClick={() =>
              alert(
                "Contact Page Coming Soon 🚀"
              )
            }
          >
            Contact
          </button>

          <p>
            Nagpur, Maharashtra
          </p>

          <p>
            support@novapolisx.com
          </p>

          <p>
            +91 7559227187
          </p>

          <a
            href="https://weather.com/en-IN/weather/today/"
            target="_blank"
            rel="noreferrer"
            className="weather-link"
          >
            Live Weather 🌦️
          </a>

        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © 2026 NovapolisX.
          All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;