import { useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import eventsData from "../data/eventData";

import "../styles/event.css";

function Event() {

  const [selectedStatus,setSelectedStatus]
  = useState("All");

  const [selectedEvent,setSelectedEvent]
  = useState(null);

  const filteredEvents =
  selectedStatus === "All"
  ? eventsData
  : eventsData.filter(
      (event) => event.status === selectedStatus
    );

  return (

    <div className="events-page">

      <Navbar />

      <section className="events-hero">

        <img
          src="https://i.pinimg.com/originals/45/d0/79/45d0790c293e5dba3077f4ad0c4826c6.gif"
          alt=""
          className="events-bg"
        />

        <div className="events-overlay"></div>

        <div className="events-content">

          <h1>
            Smart City
            <span> Events</span>
          </h1>

          <p>
            Discover live concerts,
            business expos, food festivals
            and futuristic city experiences.
          </p>

          <button>
            Submit Your Event
          </button>

        </div>

      </section>

      <section className="event-filter-section">

        <div className="filter-buttons">

          <button
            onClick={() => setSelectedStatus("All")}
          >
            All
          </button>

          <button
            onClick={() => setSelectedStatus("Live")}
          >
            Live
          </button>

          <button
            onClick={() => setSelectedStatus("Upcoming")}
          >
            Upcoming
          </button>

          <button
            onClick={() => setSelectedStatus("Ended")}
          >
            Ended
          </button>

        </div>

      </section>

      <section className="events-grid-section">

        <div className="events-grid">

          {
            filteredEvents.map((event) => (

              <div
                className="event-card"
                key={event.id}
              >

                <img
                  src={event.image}
                  alt={event.title}
                />

                <div className="event-info">

                  <div className="event-top">

                    <span className={`status ${event.status}`}>
                      {event.status}
                    </span>

                    <span>
                      {event.price}
                    </span>

                  </div>

                  <h2>
                    {event.title}
                  </h2>

                  <p>
                    📍 {event.location}
                  </p>

                  <p>
                    📅 {event.date}
                  </p>

                  <p>
                    ⏰ {event.time}
                  </p>

                  <p className="event-desc">
                    {event.description}
                  </p>

                  <div className="event-buttons">

                    <button>
                      Book Ticket
                    </button>

                    <button
                      className="glass-btn"
                      onClick={() => setSelectedEvent(event)}
                    >
                      View Details
                    </button>

                  </div>

                </div>

              </div>
            ))
          }

        </div>

      </section>

      <section className="submit-event-section">

        <div className="submit-event-box">

          <h2>
            Want To Host An Event?
          </h2>

          <p>
            Submit your event request.
            Our admin team will verify it
            before publishing.
          </p>

          <button>
            Submit Event Request
          </button>

        </div>

      </section>

      {
        selectedEvent && (

          <div className="event-modal">

            <div className="event-modal-box">

              <button
                className="close-modal"
                onClick={() => setSelectedEvent(null)}
              >
                ×
              </button>

              <img
                src={selectedEvent.image}
                alt=""
              />

              <h2>
                {selectedEvent.title}
              </h2>

              <p>
                {selectedEvent.description}
              </p>

              <div className="modal-details">

                <p>
                  📍 {selectedEvent.location}
                </p>

                <p>
                  📅 {selectedEvent.date}
                </p>

                <p>
                  ⏰ {selectedEvent.time}
                </p>

                <p>
                  🎟 {selectedEvent.price}
                </p>

              </div>

              <div className="modal-buttons">

               <a href="/booking">
  <button>
    Book Ticket
  </button>
</a>

                <a
                  href={`https://maps.google.com/?q=${selectedEvent.location}`}
                  target="_blank"
                >
                  <button className="glass-btn">
                    Navigate
                  </button>
                </a>

              </div>

            </div>

          </div>
        )
      }

      <Footer />

    </div>
  );
}

export default Event;