import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Places from "./pages/Places";
import PlaceDetails from "./pages/PlacesDetails";
import SmartServices from "./pages/SmartServices";
import Events from "./pages/Event";
import Contack from "./pages/Contack";
import Booking from "./pages/Booking";
import Admin from "./pages/Admin";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Landing />}
        />

        <Route
          path="/home"
          element={<Home />}
        />

        <Route
          path="/places"
          element={<Places />}
        />

        <Route
          path="/place/:id"
          element={<PlaceDetails />}
        />
<Route
  path="/smart-services"
  element={<SmartServices />}
/>
<Route
  path="/events"
  element={<Events/>}
/>

<Route
  path="/booking"
  element={<Booking />}
/>

<Route
  path="/contact"
  element={<Contack />}
/>

<Route
  path="/nova-admin-x-2026"
  element={<Admin />}
/>
      </Routes>
      

    </BrowserRouter>

  );
}

export default App;