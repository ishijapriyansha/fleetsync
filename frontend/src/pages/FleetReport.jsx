import React, { useEffect, useState } from 'react';

function FleetReport() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8001/api/performance')
      .then(res => res.json())
      .then(setData);
  }, []);

  return (
    <div>
      <h2>📈 Fleet Performance Report</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Vehicle</th>
            <th>From → To</th>
            <th>Distance</th>
            <th>Fuel Cost</th>
            <th>Toll Cost</th>
            <th>Driver Expense</th>
            <th>Revenue</th>
            <th>Total Cost</th>
            <th>Profit</th>
            <th>Profit %</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={idx}>
              <td>{row.vehicle}</td>
              <td>{row.from} → {row.to}</td>
              <td>{row.distance}</td>
              <td>{row.fuelCost}</td>
              <td>{row.tollCost}</td>
              <td>{row.driverExpense}</td>
              <td>{row.revenue}</td>
              <td>{row.totalCost}</td>
              <td>{row.profit}</td>
              <td>{row.profitPercent.toFixed(2)}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FleetReport;