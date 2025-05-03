import React, { useEffect, useState } from 'react';

function CostAnalysis() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8001/api/fleet/cost-analysis')
      .then(res => res.json())
      .then(setData);
  }, []);

  return (
    <div>
      <h2>💰 Cost Analysis</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Route</th>
            <th>Total Cost</th>
            <th>Total Revenue</th>
            <th>Total Profit</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={idx}>
              <td>{row.from} → {row.to}</td>
              <td>{row.totalCost}</td>
              <td>{row.totalRevenue}</td>
              <td>{row.totalProfit}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CostAnalysis;