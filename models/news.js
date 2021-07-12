const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const news = new Schema({
  title: { type: String },
  content: { type: String },
  pdfUrl: { type: String },
  imageUrl: { type: String },
  publicId: { type: String },
  type: { type: String },
  date: { type: Date, default: Date.now }
});

module.exports = News = mongoose.model("news", news);
