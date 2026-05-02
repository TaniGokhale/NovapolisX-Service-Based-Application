import { useEffect, useState } from "react";
import API from "../services/api";

function Booking() {
  const [bookings, setBookings] = useState([]);

  const fetchBookings = async () => {
    const token = localStorage.getItem("token");

    const res = await API.get("/bookings", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    setBookings(res.data);
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  return (
    <div>
      <h2>My Bookings</h2>

      {bookings.map((b) => (
        <div key={b._id}>
          <h3>{b.eventId.title}</h3>
          <p>{b.eventId.location}</p>
          <p>{new Date(b.eventId.date).toDateString()}</p>
        </div>
      ))}
    </div>
  );
}

export default Booking;