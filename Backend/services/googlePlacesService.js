const axios = require("axios");

const BASE_URL = "https://maps.googleapis.com/maps/api/place/textsearch/json";

const getPlaces = async (query) => {
  const response = await axios.get(BASE_URL, {
    params: {
      query: `${query} in Nagpur`,
      key: process.env.GOOGLE_API_KEY,
    },
  });

  return response.data.results;
};

module.exports = { getPlaces };