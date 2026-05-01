const { getPlaces } = require("../services/googlePlacesService");

exports.getAllPlaces = async (req, res) => {
  try {
    const { type } = req.query;

    const data = await getPlaces(type);

    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};