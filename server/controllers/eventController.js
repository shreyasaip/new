const Event = require('../models/eventModel');


exports.createEvent = async (req, res) => {
  try {
    const event = new Event({
      eventName: req.body.eventName,
      category: req.body.category,
      typeOfEvent: req.body.type,  
      department: req.body.department,
      club: req.body.club,
      date: req.body.date,
      time: req.body.time,
      location: req.body.location,
      fee: req.body.fee
    });
    console.log(event);
    await event.save();
    res.status(201).json({ message: 'Event saved', event });
  } catch (err) {
    res.status(500).json({ message: 'Error saving event', error: err });
  }
};


exports.getAllEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (err) {
    res.status(500).json({ message: 'Error retrieving events', error: err });
  }
};
