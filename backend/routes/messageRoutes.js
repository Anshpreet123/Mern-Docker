const express = require("express");
const Message = require("../models/Message");
const router = express.Router();

// GET Request - Fetch messages
router.get("/", async (req, res) => {
  return res.json({ message: "Hello from the backend!" });
});

// POST Request - Add a message
router.post("/", async (req, res) => {
  const { text } = req.body;
  const newMessage = new Message({ text });
  await newMessage.save();
  res.json(newMessage);
});

module.exports = router;
