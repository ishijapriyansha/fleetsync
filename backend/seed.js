// seed.js
const connectDB = require('./config/db.js');
const Route = require('./models/Route');
const Vehicle = require('./models/Vehicle');
const FleetPerformance = require('./models/FleetPerformance');

const seedData = async () => {
  await connectDB();

  await Route.deleteMany();
  await Vehicle.deleteMany();
  await FleetPerformance.deleteMany();

  const routes = await Route.insertMany([
    { sourceCity: 'Bengaluru', destinationCity: 'Delhi', distanceKm: 2150 },
    { sourceCity: 'Bengaluru', destinationCity: 'Hyderabad', distanceKm: 575 },
    { sourceCity: 'Bengaluru', destinationCity: 'Pune', distanceKm: 850 },
    { sourceCity: 'Bengaluru', destinationCity: 'Chennai', distanceKm: 350 },
    { sourceCity: 'Bengaluru', destinationCity: 'Bhubaneswar', distanceKm: 1425 }
  ]);

  const vehicles = await Vehicle.insertMany([
    { registrationNumber: 'KA01AB1234', driverName: 'Ravi', type: 'Truck' },
    { registrationNumber: 'KA02XY9876', driverName: 'Manoj', type: 'Mini Truck' }
  ]);

  const performances = [];

  for (const route of routes) {
    for (const vehicle of vehicles) {
      const fuelUsed = Math.random() * 100 + 50;
      const fuelCost = fuelUsed * 90;
      const maintenanceCost = Math.random() * 1000 + 500;
      const avgSpeed = Math.random() * 30 + 40;
      performances.push({
        route: route._id,
        vehicle: vehicle._id,
        averageSpeedKmph: avgSpeed,
        fuelUsedLiters: fuelUsed,
        fuelCost,
        maintenanceCost,
        totalCost: fuelCost + maintenanceCost
      });
    }
  }

  await FleetPerformance.insertMany(performances);

  console.log('Seed data inserted');
  process.exit();
};

seedData();
