const RfLimiter = require("../models/RfLimiter");
const RFSwitch = require("../models/RFSwitch");
const RfSwitchDriver = require("../models/RfSwitchDriver");
const ConnectorizedLimiters = require("../models/ConnectorizedLimiters");

exports.getFeaturedItems = async function (req, res) {
  try {
    const limiters = await RfLimiter.find({ featureProduct: true });
    const switches = await RFSwitch.find({ featureProduct: true });
    const swdrivers = await RfSwitchDriver.find({ featureProduct: true });
    const colimiters = await ConnectorizedLimiters.find({
      featureProduct: true
    });

    const featured = await limiters.concat(switches, swdrivers, colimiters);

    res.json(featured);
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: "Server error" });
  }
};
