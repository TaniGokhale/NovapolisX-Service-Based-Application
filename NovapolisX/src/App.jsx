import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Places from "./pages/Places";
import Events from "./pages/Event";
import Bookings from "./pages/Booking";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/home" element={<><Navbar /><Home /></>} />
        <Route path="/places" element={<><Navbar /><Places /></>} />
        <Route path="/events" element={<><Navbar /><Events /></>} />
        <Route path="/bookings" element={<><Navbar /><Bookings /></>} />

      </Routes>
    </Router>
  );
}

export default App;