const express = require("express");
const { getAllPlaces } = require("../controllers/placeController");

const router = express.Router();

router.get("/", getAllPlaces);

module.exports = router;