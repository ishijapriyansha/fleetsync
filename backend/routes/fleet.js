// const express = require('express');
// const router = express.Router();
// const FleetPerformance = require('../models/FleetPerformance');
// const Vehicle = require('../models/Vehicle');
// const RouteModel = require('../models/Route');

// // 1. Real-Time Data (latest entries)
// router.get('/realtime', async (req, res) => {
//   try {
//     console.log('Fetching real-time data...');
    
//     const data = await FleetPerformance.find({})
//       .sort({ timestamp: -1 })
//       .limit(10)
//       .populate('route vehicle');
      
//     console.log('Real-time data fetched successfully:', data);
//     res.json(data);
//   } catch (err) {
//     console.error('Error fetching real-time data:', err);
//     res.status(500).json({ error: 'Server error' });
//   }
// });

// // 2. Fleet Performance Report
// router.get('/report', async (req, res) => {
//   try {
//     console.log('Fetching fleet performance report...');
    
//     const data = await FleetPerformance.find({})
//       .populate('route vehicle');
      
//     console.log('Fleet performance report fetched successfully:', data);
//     res.json(data);
//   } catch (err) {
//     console.error('Error fetching fleet performance report:', err);
//     res.status(500).json({ error: 'Failed to fetch report' });
//   }
// });

// // 3. Custom Reports by vehicle or route
// router.get('/custom', async (req, res) => {
//   const { vehicleId, routeId } = req.query;
//   const filter = {};
//   if (vehicleId) filter.vehicle = vehicleId;
//   if (routeId) filter.route = routeId;

//   console.log('Fetching custom report with filters:', filter);

//   try {
//     const data = await FleetPerformance.find(filter)
//       .populate('route vehicle');
    
//     console.log('Custom report fetched successfully:', data);
//     res.json(data);
//   } catch (err) {
//     console.error('Error fetching custom report:', err);
//     res.status(500).json({ error: 'Failed to fetch custom report' });
//   }
// });

// // 4. Cost Analysis (group by route)
// router.get('/cost-analysis', async (req, res) => {
//   console.log('Starting cost analysis...');

//   try {
//     const data = await FleetPerformance.aggregate([
//       {
//         $group: {
//           _id: '$route',
//           totalFuelCost: { $sum: '$fuelCost' },
//           totalMaintenanceCost: { $sum: '$maintenanceCost' },
//           totalCost: { $sum: '$totalCost' },
//           avgSpeed: { $avg: '$averageSpeedKmph' }
//         }
//       },
//       {
//         $lookup: {
//           from: 'routes',
//           localField: '_id',
//           foreignField: '_id',
//           as: 'route'
//         }
//       },
//       { $unwind: '$route' }
//     ]);

//     console.log('Cost analysis data fetched successfully:', data);
//     res.json(data);
//   } catch (err) {
//     console.error('Error performing cost analysis:', err);
//     res.status(500).json({ error: 'Failed to analyze cost' });
//   }
// });

// module.exports = router;

const express = require('express');
const router = express.Router();
const FleetPerformance = require('../models/FleetPerformance');
const Vehicle = require('../models/Vehicle');
const Route = require('../models/Route');
const City = require('../models/City');

// 1. Real-Time Data - Last 10 entries
router.get('/real-time', async (req, res) => {
  try {
    const entries = await FleetPerformance.find()
      .sort({ tripDate: -1 })
      .limit(10)
      .populate('vehicle')
      .populate({
        path: 'route',
        populate: [
          { path: 'from', model: 'City' },
          { path: 'to', model: 'City' }
        ]
      })
      .lean();

    const result = entries.map(e => ({
      from: e.route.from.name,
      to: e.route.to.name,
      vehicle: e.vehicle.number,
      fuelCost: e.fuelCost,
      tollCost: e.tollCost,
      driverExpense: e.driverExpense,
      revenue: e.revenue,
      totalCost: e.fuelCost + e.tollCost + e.driverExpense,
    }));

    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// 2. Fleet Performance Report - All historical
router.get('/performance', async (req, res) => {
  try {
    const entries = await FleetPerformance.find()
      .populate('vehicle')
      .populate({
        path: 'route',
        populate: [
          { path: 'from', model: 'City' },
          { path: 'to', model: 'City' }
        ]
      })
      .lean();

    const result = entries.map(e => ({
      vehicle: e.vehicle.number,
      from: e.route.from.name,
      to: e.route.to.name,
      distance: e.route.distanceKm,
      fuelCost: e.fuelCost,
      tollCost: e.tollCost,
      driverExpense: e.driverExpense,
      revenue: e.revenue,
      totalCost: e.fuelCost + e.tollCost + e.driverExpense,
      profit: e.revenue - (e.fuelCost + e.tollCost + e.driverExpense),
      profitPercent: ((e.revenue - (e.fuelCost + e.tollCost + e.driverExpense)) / (e.fuelCost + e.tollCost + e.driverExpense)) * 100,
    }));

    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// 3. Custom Report with filters
router.get('/custom', async (req, res) => {
  try {
    const { vehicle, from, to } = req.query;

    let filter = {};
    if (vehicle) filter.vehicle = vehicle;

    if (from || to) {
      const routeFilter = {};
      if (from) routeFilter.from = from;
      if (to) routeFilter.to = to;
      const routes = await Route.find(routeFilter).select('_id');
      filter.route = { $in: routes.map(r => r._id) };
    }

    const entries = await FleetPerformance.find(filter)
      .populate('vehicle')
      .populate({
        path: 'route',
        populate: [
          { path: 'from', model: 'City' },
          { path: 'to', model: 'City' }
        ]
      })
      .lean();

    const result = entries.map(e => ({
      from: e.route.from.name,
      to: e.route.to.name,
      vehicle: e.vehicle.number,
      totalCost: e.fuelCost + e.tollCost + e.driverExpense,
      revenue: e.revenue,
      profit: e.revenue - (e.fuelCost + e.tollCost + e.driverExpense),
      profitPercent: ((e.revenue - (e.fuelCost + e.tollCost + e.driverExpense)) / (e.fuelCost + e.tollCost + e.driverExpense)) * 100,
    }));

    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// 4. Cost Analysis - Aggregated by route
router.get('/cost-analysis', async (req, res) => {
  try {
    const entries = await FleetPerformance.find()
      .populate({
        path: 'route',
        populate: [
          { path: 'from', model: 'City' },
          { path: 'to', model: 'City' }
        ]
      })
      .lean();

    const grouped = {};

    for (const e of entries) {
      const key = `${e.route.from._id}_${e.route.to._id}`;
      if (!grouped[key]) {
        grouped[key] = {
          from: e.route.from.name,
          to: e.route.to.name,
          totalCost: 0,
          totalRevenue: 0,
          totalProfit: 0,
        };
      }
      const totalCost = e.fuelCost + e.tollCost + e.driverExpense;
      grouped[key].totalCost += totalCost;
      grouped[key].totalRevenue += e.revenue;
      grouped[key].totalProfit += (e.revenue - totalCost);
    }

    res.json(Object.values(grouped));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


module.exports = router;