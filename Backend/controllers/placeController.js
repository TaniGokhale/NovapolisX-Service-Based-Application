const axios = require("axios");

exports.getPlaces = async (req, res) => {

  try {

    const { type } = req.params;

    const query = `
[out:json];

area["name"="Nagpur"]->.searchArea;

(
  node["amenity"="${type}"](area.searchArea);
  way["amenity"="${type}"](area.searchArea);
  relation["amenity"="${type}"](area.searchArea);
);

out center;
`;

    const response = await axios.post(

      "https://overpass-api.de/api/interpreter?data=" +
      encodeURIComponent(query)

    );

    res.json(response.data.elements);

  } catch (error) {

    console.log(error.message);

    res.status(500).json({
      error: error.message
    });

  }
};