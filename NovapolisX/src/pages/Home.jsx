import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">
        Welcome to Nagpur Explorer
      </h1>

      <p className="mb-6">
        Explore services, events and places in your city
      </p>

      <div className="space-x-4">
        <Link to="/places">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Explore Places
          </button>
        </Link>

        <Link to="/events">
          <button className="bg-green-500 text-white px-4 py-2 rounded">
            View Events
          </button>
        </Link>

        <Link to="/bookings">
          <button className="bg-purple-500 text-white px-4 py-2 rounded">
            My Bookings
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;