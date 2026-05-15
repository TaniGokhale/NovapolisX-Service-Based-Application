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

          <Link to="/">
            Home
          </Link>

          <Link to="/places">
            Places
          </Link>

          <Link to="/places">
            Explore City
          </Link>

          <Link to="/smart-services">
            Smart Services
          </Link>

        </div>

        <div className="footer-links">

          <h3>
            Smart Services
          </h3>

          <Link to="/places">
            Hospitals
          </Link>

          <Link to="/places">
            Restaurants
          </Link>

          <Link to="/places">
            Tourist Places
          </Link>

          <Link to="/places">
            Live Navigation
          </Link>

        </div>

        <div className="footer-contact">

  <Link
    to="/contact"
    className="contact-link"
  >
    Contact
  </Link>

  <p>
    Nagpur, Maharashtra
  </p>

  <p>
    support@novapolisx.com
  </p>

  <p>
    +91 7559227187
  </p>

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