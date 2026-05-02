import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 21.1458,
  lng: 79.0882,
};

function Map({ lat, lng }) {
  return (
    <LoadScript googleMapsApiKey="YOUR_GOOGLE_API_KEY">
      <GoogleMap mapContainerStyle={containerStyle} center={lat ? { lat, lng } : center} zoom={12}>
        {lat && lng && <Marker position={{ lat, lng }} />}
      </GoogleMap>
    </LoadScript>
  );
}

export default Map;