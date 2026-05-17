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

  const [showSubmitForm,setShowSubmitForm]
  = useState(false);

  const [submitted,setSubmitted]
  = useState(false);

  const approvedEvents =
  JSON.parse(
    localStorage.getItem("approvedEvents")
  ) || [];

  const allEvents = [
    ...eventsData,
    ...approvedEvents
  ];

  const filteredEvents =
  selectedStatus === "All"
  ? allEvents
  : allEvents.filter(
      (event) => event.status === selectedStatus
    );

  function handleSubmit(e){

    e.preventDefault();

    const formData =
    new FormData(e.target);

    const newEvent = {

      id:Date.now(),

      title:
      formData.get("title"),

      image:
      formData.get("image"),

      location:
      formData.get("location"),

      date:
      formData.get("date"),

      organizer:
      formData.get("organizer"),

      description:
      formData.get("description"),

      status:"Upcoming",

      time:"7:00 PM",

      price:"₹499"
    };

    const oldPending =
    JSON.parse(
      localStorage.getItem("pendingEvents")
    ) || [];

    const updatedPending = [
      ...oldPending,
      newEvent
    ];

    localStorage.setItem(
      "pendingEvents",
      JSON.stringify(updatedPending)
    );

    setSubmitted(true);

    e.target.reset();

    setTimeout(() => {

      setSubmitted(false);

      setShowSubmitForm(false);

    },3000);
  }

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

          <button
            onClick={() => setShowSubmitForm(true)}
          >
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
            filteredEvents.map((event) => {

              const bookedData =
              JSON.parse(
                localStorage.getItem("bookedEvents")
              )?.find(
                (item) => item.eventId === event.id
              );

              return (

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

                      {
                        bookedData

                        ?

                        <button
                          className="booked-btn"
                          onClick={() => {

                            setSelectedEvent({

                              ...event,

                              bookedData

                            });
                          }}
                        >
                          Booked ✅
                        </button>

                        :

                        <a
                          href={`/booking?id=${event.id}&title=${event.title}`}
                        >

                          <button>
                            Book Ticket
                          </button>

                        </a>
                      }

                      <button
                        className="glass-btn"
                        onClick={() => {

                          setSelectedEvent({

                            ...event,

                            bookedData

                          });
                        }}
                      >
                        View Details
                      </button>

                    </div>

                  </div>

                </div>
              );
            })
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

          <button
            onClick={() => setShowSubmitForm(true)}
          >
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
                ✕
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

                {
                  selectedEvent.bookedData && (

                    <div className="pass-preview">

                      <h3>
                        Your Event Pass 🎉
                      </h3>

                      <p>
                        Booking ID:
                        {selectedEvent.bookedData.bookingId}
                      </p>

                      <p>
                        Tickets:
                        {selectedEvent.bookedData.quantity}
                      </p>

                      <p>
                        Name:
                        {selectedEvent.bookedData.name}
                      </p>

                    </div>
                  )
                }

              </div>

              <div className="modal-buttons">

                {
                  selectedEvent.bookedData

                  ?

                  <button className="booked-btn">
                    Booked ✅
                  </button>

                  :

                  <a
                    href={`/booking?id=${selectedEvent.id}&title=${selectedEvent.title}`}
                  >

                    <button>
                      Book Ticket
                    </button>

                  </a>
                }

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

      {
        showSubmitForm && (

          <div className="event-modal">

            <div className="event-modal-box submit-form-box">

              <button
                className="close-modal"
                onClick={() => setShowSubmitForm(false)}
              >
                ✕
              </button>

              <h2>
                Submit Event Request
              </h2>

              <form
                className="submit-event-form"
                onSubmit={handleSubmit}
              >

                <input
                  type="text"
                  name="title"
                  placeholder="Event Title"
                  required
                />

                <input
                  type="text"
                  name="image"
                  placeholder="Event Image URL"
                  required
                />

                <input
                  type="text"
                  name="location"
                  placeholder="Location"
                  required
                />

                <input
                  type="date"
                  name="date"
                  required
                />

                <input
                  type="text"
                  name="organizer"
                  placeholder="Organizer Name"
                  required
                />

                <textarea
                  name="description"
                  placeholder="Event Description"
                  required
                ></textarea>

                <button type="submit">
                  Submit Request
                </button>

              </form>

              {
                submitted && (

                  <div className="submit-success-message">

                    <h3>
                      Event Request Submitted 🎉
                    </h3>

                    <p>
                      Your request is now
                      under admin verification.
                    </p>

                  </div>
                )
              }

            </div>

          </div>
        )
      }

      <Footer />

    </div>
  );
}

export default Event;