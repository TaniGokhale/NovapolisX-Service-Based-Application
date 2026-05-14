import { Link, useNavigate } from "react-router-dom";

import "../styles/navbar.css";

function Navbar() {

  const navigate = useNavigate();

  const logoutHandler = () => {

    localStorage.removeItem("token");

    navigate("/");
  };

  return (

    <nav className="navbar">

      <div className="nav-logo">

        <h2>
          NovapolisX
        </h2>

      </div>

      <div className="nav-links">

        <Link to="/home">
          Home
        </Link>

        <Link to="/places">
          Explore
        </Link>

        <Link to="/places">
          Smart Services
        </Link>

        <button
          className="logout-btn"
          onClick={logoutHandler}
        >
          Logout
        </button>

      </div>

    </nav>
  );
}

export default Navbar;