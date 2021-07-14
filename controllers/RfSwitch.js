const RFSwitch = require("../models/RFSwitch");
const { cloudinary } = require("../services/cloudinary");
// /api/switches/create
//Post
exports.addSwitch = async function ({ user, body }, res) {
  try {
    const addSwitch = await new RFSwitch(body);
    await addSwitch.save();
    return res.json({ addSwitch });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};
// Get
// api/switches
exports.allSwitches = async function (req, res) {
  try {
    const switches = await RFSwitch.find().sort({ tableSpace: 1 });
    if (!switches) return res.status(400).json({ msg: "Not found" });
    res.json(switches);
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: "Server error" });
  }
};
// Get
//  api/switches/:id
exports.switchById = async function ({ params: { id } }, res) {
  try {
    const findSwitch = await RFSwitch.findOne({ _id: id });

    if (!findSwitch) return res.status(400).json({ msg: "Not found" });

    return res.json(findSwitch);
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: "Server error" });
  }
};

// PUT
// edit the Switch
// api/switches/:id
exports.switchEdit = async function ({ params: { id }, user, body }, res) {
  try {
    const editSwitch = await RFSwitch.findOneAndUpdate(
      { _id: id }, // filter
      { $set: body }, // update
      { new: true }
    );
    res.json({ editSwitch });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// DEL api/switches/:id
exports.removeSwitch = async function ({ params: { id }, user }, res) {
  try {
    await RFSwitch.findOneAndRemove({ _id: id });

    res.json({ msg: "Removed" });
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: "Server error" });
  }
};
// Image Upload
exports.switchImageUpload = async function (
  { params: { id }, user, body: { image } },
  res
) {
  try {
    const uploadResponse = await cloudinary.uploader.upload(image, {
      folder: "SwDrivers"
    });
    const formFields = {
      imageUrl: uploadResponse.url,
      publicId: uploadResponse.public_id
    };
    const editSwitch = await RFSwitch.findOneAndUpdate(
      { _id: id }, // filter
      { $set: formFields }, // update
      { new: true }
    );
    res.json({ editSwitch });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};
