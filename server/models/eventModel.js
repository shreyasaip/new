const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  eventName: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  typeOfEvent: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  club: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  fee: {
    type: Number,
    required: true,
  }
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
