// const mongoose = require('mongoose');

// const routeSchema = new mongoose.Schema({
//   sourceCity: String,
//   destinationCity: String,
//   distanceKm: Number
// });

// module.exports = mongoose.model('Route', routeSchema);


// models/Route.js
const mongoose = require('mongoose');

const routeSchema = new mongoose.Schema({
  from: { type: mongoose.Schema.Types.ObjectId, ref: 'City', required: true },
  to: { type: mongoose.Schema.Types.ObjectId, ref: 'City', required: true },
  distanceKm: { type: Number, required: true } // Distance in kilometers
});

module.exports = mongoose.model('Route', routeSchema);