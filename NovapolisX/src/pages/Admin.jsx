import { useState } from "react";

import "../styles/admin.css";

function Admin() {

  const [pendingEvents,setPendingEvents]
  = useState(
    JSON.parse(
      localStorage.getItem("pendingEvents")
    ) || []
  );

  const [approvedEvents,setApprovedEvents]
  = useState(
    JSON.parse(
      localStorage.getItem("approvedEvents")
    ) || []
  );

  const [places,setPlaces]
  = useState(
    JSON.parse(
      localStorage.getItem("adminPlaces")
    ) || []
  );

  const [placeName,setPlaceName]
  = useState("");

  const [placeImage,setPlaceImage]
  = useState("");

  function approveEvent(event){

    const updatedApproved = [
      ...approvedEvents,
      event
    ];

    localStorage.setItem(
      "approvedEvents",
      JSON.stringify(updatedApproved)
    );

    setApprovedEvents(updatedApproved);

    const updatedPending =
    pendingEvents.filter(
      (item) => item.id !== event.id
    );

    localStorage.setItem(
      "pendingEvents",
      JSON.stringify(updatedPending)
    );

    setPendingEvents(updatedPending);
  }

  function rejectEvent(id){

    const updatedPending =
    pendingEvents.filter(
      (item) => item.id !== id
    );

    localStorage.setItem(
      "pendingEvents",
      JSON.stringify(updatedPending)
    );

    setPendingEvents(updatedPending);
  }

 function addPlace(){

  if(
    placeName === ""
    ||
    placeImage === ""
  ){
    return;
  }

  const newPlace = {

    id:Date.now(),

    name:placeName,

    image:placeImage,

    location:"Nagpur",

    rating:"4.5",

    category:"Tourist"
  };

  const updatedPlaces = [
    ...places,
    newPlace
  ];

  localStorage.setItem(
    "approvedPlaces",
    JSON.stringify(updatedPlaces)
  );

  setPlaces(updatedPlaces);

  setPlaceName("");

  setPlaceImage("");
}
  function deletePlace(id){

    const updatedPlaces =
    places.filter(
      (place) => place.id !== id
    );

    localStorage.setItem(
      "adminPlaces",
      JSON.stringify(updatedPlaces)
    );

    setPlaces(updatedPlaces);
  }

  return (

    <div className="admin-page">

      <div className="admin-sidebar">

        <h2>
          NovapolisX
        </h2>

        <button>
          Dashboard
        </button>

        <button>
          Event Requests
        </button>

        <button>
          Places CRUD
        </button>

        <button>
          Hotels
        </button>

        <button>
          Restaurants
        </button>

      </div>

      <div className="admin-content">

        <h1>
          Smart City Admin Panel
        </h1>

        <div className="dashboard-cards">

          <div className="dashboard-card">

            <h2>
              {pendingEvents.length}
            </h2>

            <p>
              Pending Events
            </p>

          </div>

          <div className="dashboard-card">

            <h2>
              {approvedEvents.length}
            </h2>

            <p>
              Approved Events
            </p>

          </div>

          <div className="dashboard-card">

            <h2>
              {places.length}
            </h2>

            <p>
              Total Places
            </p>

          </div>

        </div>

        <div className="admin-section">

          <h2>
            Event Requests
          </h2>

          {
            pendingEvents.length === 0

            ?

            <p className="empty-text">
              No Pending Event Requests
            </p>

            :

            pendingEvents.map((event) => (

              <div
                className="event-request-card"
                key={event.id}
              >

                <img
                  src={event.image}
                  alt=""
                />

                <div className="event-request-info">

                  <h3>
                    {event.title}
                  </h3>

                  <p>
                    📍 {event.location}
                  </p>

                  <p>
                    👤 {event.organizer}
                  </p>

                  <p>
                    {event.description}
                  </p>

                </div>

                <div className="request-buttons">

                  <button
                    className="approve-btn"
                    onClick={() =>
                      approveEvent(event)
                    }
                  >
                    Approve
                  </button>

                  <button
                    className="reject-btn"
                    onClick={() =>
                      rejectEvent(event.id)
                    }
                  >
                    Reject
                  </button>

                </div>

              </div>
            ))
          }

        </div>

        <div className="admin-section">

          <h2>
            Add New Place
          </h2>

          <div className="add-place-form">

            <input
              type="text"
              placeholder="Place Name"
              value={placeName}
              onChange={(e) =>
                setPlaceName(e.target.value)
              }
            />

            <input
              type="text"
              placeholder="Place Image URL"
              value={placeImage}
              onChange={(e) =>
                setPlaceImage(e.target.value)
              }
            />

            <button
              onClick={addPlace}
            >
              Add Place
            </button>

          </div>

        </div>

        <div className="admin-section">

          <h2>
            Manage Places
          </h2>

          <div className="places-grid">

            {
              places.map((place) => (

                <div
                  className="place-card"
                  key={place.id}
                >

                  <img
                    src={place.image}
                    alt=""
                  />

                  <h3>
                    {place.name}
                  </h3>

                  <button
                    onClick={() =>
                      deletePlace(place.id)
                    }
                  >
                    Delete
                  </button>

                </div>
              ))
            }

          </div>

        </div>

      </div>

    </div>
  );
}

export default Admin;