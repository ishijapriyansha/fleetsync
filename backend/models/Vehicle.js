const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
  number: {
    type: String,
    required: true, // This is what you're violating
  },
  model: String,
  capacityTon: Number,
});

module.exports = mongoose.model('Vehicle', vehicleSchema)
