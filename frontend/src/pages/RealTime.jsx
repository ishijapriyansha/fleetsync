import React, { useEffect, useState } from 'react';

function RealTime() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8001/api/fleet/real-time')
      .then(res => res.json())
      .then(setData);
  }, []);

  return (
    <div>
      <h2>🔹 Real-Time Data</h2>
      <table border="1">
        <thead>
          <tr>
            <th>From → To</th>
            <th>Vehicle</th>
            <th>Fuel Cost</th>
            <th>Toll Cost</th>
            <th>Driver Expense</th>
            <th>Revenue</th>
            <th>Total Cost</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={idx}>
              <td>{row.from} → {row.to}</td>
              <td>{row.vehicle}</td>
              <td>{row.fuelCost}</td>
              <td>{row.tollCost}</td>
              <td>{row.driverExpense}</td>
              <td>{row.revenue}</td>
              <td>{row.totalCost}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RealTime;