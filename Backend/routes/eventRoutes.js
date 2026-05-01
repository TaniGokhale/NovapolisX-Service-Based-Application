const express = require("express");
const { createEvent, getEvents, getSingleEvent } = require("../controllers/eventController");

const router = express.Router();

router.post("/", createEvent);
router.get("/", getEvents);
router.get("/:id", getSingleEvent);

module.exports = router;