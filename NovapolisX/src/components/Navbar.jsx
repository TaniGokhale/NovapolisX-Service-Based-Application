import { Link } from "react-router-dom";
import "../styles/navbar.css"
function Navbar() {
  return (
    <nav style={{ padding: "10px", background: "#222", color: "#fff" }}>
      <h2>Nagpur City</h2>

      <div>
        <Link to="/">Home</Link> |
        <Link to="/places">Places</Link> |
        <Link to="/events">Events</Link> |
        <Link to="/bookings">Bookings</Link>
      </div>
    </nav>
  );
}

export default Navbar;