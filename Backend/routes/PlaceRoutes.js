const express = require("express");

const router = express.Router();

const {
  getPlaces
} = require("../controllers/placeController");

router.get("/:type", getPlaces);

module.exports = router;