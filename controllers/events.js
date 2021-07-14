const Event = require("../models/event");

// events -  /api/events/create
//Post
exports.addEvent = async function ({ user, body }, res) {
  const { title, content } = body;

  const eventFields = {
    title,
    content
  };
  try {
    const addEvent = await new Event(eventFields);
    await addEvent.save();
    res.json({ addEvent });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// api/events
exports.allEvents = async function (req, res) {
  try {
    const event = await Event.find();

    if (!event) return res.status(400).json({ msg: "Not found" });

    return res.json(event);
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: "Server error" });
  }
};

// PUT
// edit the event
// api/events/:id
exports.editEvent = async function ({ params: { id }, user, body }, res) {
  try {
    const updateEvent = await Event.findOneAndUpdate(
      { _id: id }, // filter
      { $set: body }, // update
      { new: true }
    );

    res.json({ updateEvent });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};
