const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const event = new Schema({
  title: { type: String },
  content: { type: String },
  imageUrl: { type: String },
  publicId: { type: String },
  date: { type: Date, default: Date.now }
});

module.exports = Event = mongoose.model("event", event);
