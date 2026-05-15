import { useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../styles/booking.css";

function Booking() {

  const [formData,setFormData]
  = useState({

    name:"",
    email:"",
    phone:"",
    quantity:""

  });

  const [success,setSuccess]
  = useState(false);

  function handleChange(e){

    setFormData({

      ...formData,

      [e.target.name]:
      e.target.value

    });
  }

  function handleSubmit(e){

    e.preventDefault();

    setSuccess(true);

    setFormData({

      name:"",
      email:"",
      phone:"",
      quantity:""

    });
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
            Book Your Ticket 🎟
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
              Confirm Booking
            </button>

          </form>

          {
            success && (

              <div className="success-message">

                <h3>
                  Your ticket has been confirmed 🎉
                </h3>

                <p>
                  Confirmation details
                  have been sent successfully.
                </p>

              </div>
            )
          }

        </div>

      </section>

      <Footer />

    </div>
  );
}

export default Booking;