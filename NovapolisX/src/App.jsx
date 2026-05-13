import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Places from "./pages/Places";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Landing />} />

        <Route path="/home" element={<Home />} />

        <Route path="/places" element={<Places />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;