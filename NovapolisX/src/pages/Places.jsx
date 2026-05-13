import { useState } from "react";

import Navbar from "../components/Navbar";

import placesData from "../data/placesData";

import "../styles/places.css";

function Places() {

  const [category, setCategory] = useState("hospitals");

  return (

    <div className="places-page">

      <Navbar />

      <h1>
        Explore Nagpur
      </h1>

      <div className="category-buttons">

        <button onClick={() => setCategory("hospitals")}>
          Hospitals
        </button>

        <button onClick={() => setCategory("colleges")}>
          Colleges
        </button>

        <button onClick={() => setCategory("restaurants")}>
          Restaurants
        </button>

        <button onClick={() => setCategory("touristPlaces")}>
          Tourist Places
        </button>

      </div>

      <div className="places-grid">

        {
          placesData[category].map((place) => (

            <div
              className="place-card"
              key={place.id}
            >

              <img
                src={place.image}
                alt=""
              />

              <div className="place-info">

                <h2>
                  {place.name}
                </h2>

                <p>
                  {place.location}
                </p>

                <span>
                  {place.description}
                </span>

                <button>
                  Explore
                </button>

              </div>

            </div>

          ))
        }

      </div>

    </div>
  );
}

export default Places;