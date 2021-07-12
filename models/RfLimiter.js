const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RfLimiter = new Schema({
  model: { type: String, required: true },
  title: { type: String },
  description: { type: String },
  pdfUrl: { type: String },
  dfxUrl: { type: String },
  s2pUrl: { type: String },
  buyNowUrl: { type: String },
  type: { type: String },
  imageUrl: { type: String },
  publicId: { type: String },
  featureProduct: { type: Boolean, default: false },
  limiterDescription: { type: String },
  frequency: { type: String },
  insertionLoss: { type: String },
  inputPowerCw: { type: String },
  inputPowerPeak: { type: String },
  returnLoss: { type: String },
  flatLeakage: { type: String },
  spikeLeakage: { type: String },
  recoveryTime: { type: String },
  status: { type: String },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("limiter", RfLimiter);
