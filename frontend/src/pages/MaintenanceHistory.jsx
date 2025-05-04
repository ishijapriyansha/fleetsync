import React, { useState } from 'react';
import './MaintenanceHistory.css';

const MaintenanceHistory = () => {
  const [selectedTruck, setSelectedTruck] = useState('All');

  const maintenanceHistory = [
    {
      id: 1,
      truck: 'Truck 1',
      title: 'Engine Overhaul',
      description: 'Complete engine service and oil replacement.',
      date: '2025-04-10',
    },
    {
      id: 2,
      truck: 'Truck 2',
      title: 'Tire Change',
      description: 'Replaced all rear tires.',
      date: '2025-03-15',
    },
    {
      id: 3,
      truck: 'Truck 1',
      title: 'Brake Inspection',
      description: 'Brake pads checked and replaced.',
      date: '2025-02-25',
    },
    {
      id: 4,
      truck: 'Truck 3',
      title: 'Battery Replacement',
      description: 'Installed new battery.',
      date: '2025-04-05',
    },
  ];

  const filteredHistory =
    selectedTruck === 'All'
      ? maintenanceHistory
      : maintenanceHistory.filter((entry) => entry.truck === selectedTruck);

  return (
    <div className="history-container">
      <h1 className="history-title">Maintenance History</h1>

      <div className="filter-section">
        <label>Filter by Truck:</label>
        <select
          value={selectedTruck}
          onChange={(e) => setSelectedTruck(e.target.value)}
          className="input"
        >
          <option value="All">All</option>
          <option value="Truck 1">Truck 1</option>
          <option value="Truck 2">Truck 2</option>
          <option value="Truck 3">Truck 3</option>
        </select>
      </div>

      <div className="history-list">
        {filteredHistory.length === 0 ? (
          <p className="no-data">No maintenance records available.</p>
        ) : (
          filteredHistory.map((entry) => (
            <div key={entry.id} className="history-card">
              <h3>{entry.title} - <span className="truck-label">{entry.truck}</span></h3>
              <p>{entry.description}</p>
              <span className="date-label">{entry.date}</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MaintenanceHistory;
