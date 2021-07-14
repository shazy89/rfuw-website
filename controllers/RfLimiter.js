const RfLimiter = require("../models/RfLimiter");
const { cloudinary } = require("../services/cloudinary");
// /api/limiters/create
//Post
exports.addLimiter = async function ({ user, body }, res) {
  try {
    const addLimiter = await new RfLimiter(body);
    await addLimiter.save();
    return res.json({ addLimiter });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};
// Get
// api/limiters
exports.allLimiters = async function (req, res) {
  try {
    const limiters = await RfLimiter.find().sort({ tableSpace: 1 });
    if (!limiters) return res.status(400).json({ msg: "Not found" });

    res.json(limiters);
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: "Server error" });
  }
};
// Get
//  api/limiters/:id
exports.limiterById = async function ({ params: { id }, user }, res) {
  try {
    const findLimiter = await RfLimiter.findOne({ _id: id });

    if (!findLimiter) return res.status(400).json({ msg: "Not found" });

    return res.json(findLimiter);
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: "Server error" });
  }
};

// PUT
// edit the Limiter
// api/limiters/:id
exports.limiterEdit = async function ({ params: { id }, user, body }, res) {
  try {
    const editLimiter = await RfLimiter.findOneAndUpdate(
      { _id: id }, // filter
      { $set: body }, // update
      { new: true }
    );

    res.json({ editLimiter });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// DEL api/limiters/:id
exports.removeLimiter = async function ({ params: { id }, user }, res) {
  try {
    await RfLimiter.findOneAndRemove({ _id: id });

    res.json({ msg: "Removed" });
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: "Server error" });
  }
};

// Image Upload
exports.limiterImageUpload = async function (
  { params: { id }, user, body: { image } },
  res
) {
  try {
    const uploadResponse = await cloudinary.uploader.upload(image, {
      folder: "Limiters"
    });
    const formFields = {
      imageUrl: uploadResponse.url,
      publicId: uploadResponse.public_id
    };
    const editLimiter = await RfLimiter.findOneAndUpdate(
      { _id: id }, // filter
      { $set: formFields }, // update
      { new: true }
    );
    res.json({ editLimiter });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};
