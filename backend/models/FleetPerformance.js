// const mongoose = require('mongoose');

// const fleetPerformanceSchema = new mongoose.Schema({
//   route: { type: mongoose.Schema.Types.ObjectId, ref: 'Route' },
//   vehicle: { type: mongoose.Schema.Types.ObjectId, ref: 'Vehicle' },
//   timestamp: { type: Date, default: Date.now },
//   averageSpeedKmph: Number,
//   fuelUsedLiters: Number,
//   fuelCost: Number,
//   maintenanceCost: Number,
//   totalCost: Number
// });

// module.exports = mongoose.model('FleetPerformance', fleetPerformanceSchema);

// models/FleetPerformance.js
const mongoose = require('mongoose');

const fleetPerformanceSchema = new mongoose.Schema({
  vehicle: { type: mongoose.Schema.Types.ObjectId, ref: 'Vehicle', required: true },
  route: { type: mongoose.Schema.Types.ObjectId, ref: 'Route', required: true },
  fuelCost: { type: Number, required: true },
  tollCost: { type: Number, required: true },
  driverExpense: { type: Number, required: true },
  revenue: { type: Number, required: true },
  tripDate: { type: Date, default: Date.now }
}, {
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

fleetPerformanceSchema.virtual('totalCost').get(function () {
  return this.fuelCost + this.tollCost + this.driverExpense;
});

fleetPerformanceSchema.virtual('profit').get(function () {
  return this.revenue - (this.fuelCost + this.tollCost + this.driverExpense);
});

fleetPerformanceSchema.virtual('profitPercent').get(function () {
  const total = this.fuelCost + this.tollCost + this.driverExpense;
  return total === 0 ? 0 : ((this.revenue - total) / total) * 100;
});

module.exports = mongoose.model('FleetPerformance', fleetPerformanceSchema);