const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RfSwitchDriver = new Schema({
  model: { type: String, required: true },
  title: { type: String },
  description: { type: String },
  type: { type: String },
  pdfUrl: { type: String },
  dfxUrl: { type: String },
  s2pUrl: { type: String },
  buyNowUrl: { type: String },
  imageUrl: { type: String },
  publicId: { type: String },
  featureProduct: { type: Boolean, default: false },
  content: { type: String },
  control: { type: String },
  voltage1: { type: String },
  voltage2: { type: String },
  sinkMa: { type: String },
  sourceMa: { type: String },
  tableSpace: { type: String },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("switchDriver", RfSwitchDriver);
