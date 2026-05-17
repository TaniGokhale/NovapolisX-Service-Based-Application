import { useState } from "react";

import {
  useNavigate,
  useLocation
} from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import placesData from "../data/placesData";

import "../styles/places.css";

function Places() {

  const navigate = useNavigate();

  const location = useLocation();

  const queryParams =
    new URLSearchParams(location.search);

  const categoryFromURL =
    queryParams.get("category");

  const [selectedCategory, setSelectedCategory]
  = useState(categoryFromURL || "All");

  const [searchTerm, setSearchTerm]
  = useState("");

  const categories = [
    "All",
    "Hospital",
    "Restaurant",
    "Tourist",
    "College",
    "School",
    "Hotel"
  ];

  const adminPlaces =
  JSON.parse(
    localStorage.getItem("approvedPlaces")
  ) || [];

  const allPlaces =
  [...placesData,...adminPlaces];

  const filteredPlaces =
    allPlaces.filter((item) => {

      const matchesCategory =
        selectedCategory === "All"
        || item.category === selectedCategory;

      const matchesSearch =
        item.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      return (
        matchesCategory &&
        matchesSearch
      );

    });

  return (

    <div className="places-page">

      <Navbar />

      <section className="places-hero">

        <img
          src="https://i.pinimg.com/originals/45/d0/79/45d0790c293e5dba3077f4ad0c4826c6.gif"
          alt=""
          className="places-bg"
        />

        <div className="places-overlay"></div>

        <div className="places-content">

          <h1>
            Explore Smart
            <span> Nagpur City</span>
          </h1>

          <p>
            Discover restaurants,
            hospitals, colleges,
            tourist places and more.
          </p>

          <div className="search-box">

            <input
              type="text"
              placeholder="Search places..."
              value={searchTerm}
              onChange={(e) =>
                setSearchTerm(e.target.value)
              }
            />

          </div>

        </div>

      </section>

      <section className="categories-section">

        <h2>
          Explore Categories
        </h2>

        <div className="categories">

          {
            categories.map((cat,index) => (

              <button
                key={index}

                className={
                  selectedCategory === cat
                  ? "active-category"
                  : ""
                }

                onClick={() =>
                  setSelectedCategory(cat)
                }
              >
                {cat}
              </button>

            ))
          }

        </div>

      </section>

      <section className="places-grid-section">

        <div className="places-grid">

          {
            filteredPlaces.length > 0 ? (

              filteredPlaces.map((place) => (

                <div
                  className="place-card"
                  key={place.id}
                >

                  <img
                    src={place.image}
                    alt={place.name}
                  />

                  <div className="place-info">

                    <div className="place-top">

                      <h3>
                        {place.name}
                      </h3>

                      <span>
                        ⭐ {place.rating}
                      </span>

                    </div>

                    <p>
                      {place.location}
                    </p>

                    <button
                      onClick={() =>
                        navigate(`/place/${place.id}`)
                      }
                    >
                      Explore
                    </button>

                  </div>

                </div>

              ))

            ) : (

              <div className="no-results">

                <h2>
                  No Places Found
                </h2>

              </div>

            )
          }

        </div>

      </section>

      <Footer />

    </div>
  );
}

export default Places;