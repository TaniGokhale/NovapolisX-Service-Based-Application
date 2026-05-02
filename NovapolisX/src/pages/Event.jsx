import { useEffect, useState } from "react";
import API from "../services/api";
import Card from "../components/Card";

function Event() {
  const [events, setEvents] = useState([]);

  const fetchEvents = async () => {
    const res = await API.get("/events");
    setEvents(res.data);
  };

  const handleBooking = async (id) => {
    const token = localStorage.getItem("token");

    await API.post(
      "/bookings",
      { eventId: id },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    alert("Booked");
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <div>
      <h2>Events</h2>

      {events.map((e) => (
        <Card
          key={e._id}
          title={e.title}
          subtitle={e.location}
          extra={`₹ ${e.price}`}
          onClick={() => handleBooking(e._id)}
        />
      ))}
    </div>
  );
}

export default Event;