import { useState } from "react";

import { QRCodeCanvas }
from "qrcode.react";

import { useSearchParams }
from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../styles/booking.css";

function Booking() {

  const [searchParams]
  = useSearchParams();

  const eventId =
  searchParams.get("id");

  const eventTitle =
  searchParams.get("title");

  const [formData,setFormData]
  = useState({

    name:"",
    email:"",
    phone:"",
    quantity:""

  });

  const [showTicket,setShowTicket]
  = useState(false);

  const bookingId =
  "NPX" +
  Math.floor(
    Math.random() * 999999
  );

  function handleChange(e){

    setFormData({

      ...formData,

      [e.target.name]:
      e.target.value

    });
  }

  function handleSubmit(e){

    e.preventDefault();

    const bookingData = {

      eventId:Number(eventId),

      bookingId,

      eventTitle,

      ...formData

    };

    const existingBookings =
    JSON.parse(
      localStorage.getItem("bookedEvents")
    ) || [];

    localStorage.setItem(

      "bookedEvents",

      JSON.stringify([

        ...existingBookings,

        bookingData

      ])
    );

    setShowTicket(true);
  }

  return (

    <div className="booking-page">

      <Navbar />

      <section className="booking-hero">

        <div className="booking-overlay"></div>

        <div className="booking-content">

          <h1>
            Event Ticket Booking
          </h1>

          <p>
            Reserve your tickets for
            upcoming smart city events.
          </p>

        </div>

      </section>

      <section className="booking-section">

        <div className="booking-box">

          <h2>
            {eventTitle}
          </h2>

          <form onSubmit={handleSubmit}>

            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Enter Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />

            <input
              type="number"
              name="quantity"
              placeholder="Number Of Tickets"
              value={formData.quantity}
              onChange={handleChange}
              required
            />

            <button type="submit">
              Payment Done
            </button>

          </form>

        </div>

      </section>

      {
        showTicket && (

          <div className="ticket-modal">

            <div className="ticket-box">

              <button
                className="close-ticket"
                onClick={() => setShowTicket(false)}
              >
                ×
              </button>

              <h2>
                Event Pass 🎉
              </h2>

              <div className="ticket-info">

                <p>
                  <strong>Name:</strong>
                  {formData.name}
                </p>

                <p>
                  <strong>Email:</strong>
                  {formData.email}
                </p>

                <p>
                  <strong>Phone:</strong>
                  {formData.phone}
                </p>

                <p>
                  <strong>Tickets:</strong>
                  {formData.quantity}
                </p>

                <p>
                  <strong>Booking ID:</strong>
                  {bookingId}
                </p>

                <p>
                  <strong>Event:</strong>
                  {eventTitle}
                </p>

              </div>

              <div className="qr-box">

                <QRCodeCanvas
                  value={bookingId}
                  size={170}
                />

              </div>

              <button
                className="download-btn"
                onClick={() => window.print()}
              >
                Download Pass
              </button>

            </div>

          </div>
        )
      }

      <Footer />

    </div>
  );
}

export default Booking;