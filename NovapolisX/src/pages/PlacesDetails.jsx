import { useParams } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import placesData from "../data/placesData";

import "../styles/placeDetail.css";

function PlaceDetails() {

  const { id } = useParams();

  const adminPlaces =
  JSON.parse(
    localStorage.getItem("approvedPlaces")
  ) || [];

  const allPlaces =
  [...placesData,...adminPlaces];

  const place = allPlaces.find(
    (item) => item.id === Number(id)
  );

  if (!place) {

    return <h1>Place Not Found</h1>;

  }

  return (

    <div className="details-page">

      <Navbar />

      <div className="details-hero">

        <img
          src={place.image}
          alt={place.name}
          className="details-bg"
        />

        <div className="details-overlay"></div>

        <div className="details-content">

          <h1>
            {place.name}
          </h1>

          <p>
            {place.location}
          </p>

          <span>
            ⭐ {place.rating}
          </span>

        </div>

      </div>

      <div className="details-container">

        <div className="details-card">

          <h2>
            About Place
          </h2>

          <p>
            Welcome to {place.name}.
            One of the most popular
            {place.category} destinations
            in Nagpur city with amazing
            facilities and beautiful atmosphere.
          </p>

        </div>

        <div className="details-card">

          <h2>
            Information
          </h2>

          <p>
            Category : {place.category}
          </p>

          <p>
            Location : {place.location}
          </p>

          <p>
            Rating : ⭐ {place.rating}
          </p>

        </div>

      </div>

      <Footer />

    </div>
  );
}

export default PlaceDetails;