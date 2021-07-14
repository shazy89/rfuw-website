const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RfSwitch = new Schema({
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
  frequencyRange: { type: String },
  switchTopology: { type: String },
  averagePower: { type: String },
  peakPower: { type: String },
  insertionLoss: { type: String },
  returnLoss: { type: String },
  iso: { type: String },
  ip3: { type: String },
  status: { type: String },
  tableSpace: { type: String },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("switch", RfSwitch);
