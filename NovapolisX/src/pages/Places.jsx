import { useEffect, useState } from "react";
import API from "../services/api";
import Card from "../components/Card";

function Places() {
  const [places, setPlaces] = useState([]);
  const [type, setType] = useState("hospitals");

  const fetchPlaces = async () => {
    const res = await API.get(`/places?type=${type}`);
    setPlaces(res.data);
  };

  useEffect(() => {
    fetchPlaces();
  }, [type]);

  return (
    <div>
      <h2>Places</h2>

      <select onChange={(e) => setType(e.target.value)}>
        <option value="hospitals">Hospitals</option>
        <option value="colleges">Colleges</option>
        <option value="cafes">Cafes</option>
      </select>

      {places.map((place, index) => (
        <Card
          key={index}
          title={place.name}
          subtitle={place.formatted_address}
          extra={`Rating: ${place.rating}`}
        />
      ))}
    </div>
  );
}

export default Places;