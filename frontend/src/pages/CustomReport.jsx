import React, { useEffect, useState } from 'react';

function CustomReport() {
  const [data, setData] = useState([]);
  const [vehicle, setVehicle] = useState('');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');

  const fetchData = () => {
    let query = [];
    if (vehicle) query.push(`vehicle=${vehicle}`);
    if (from) query.push(`from=${from}`);
    if (to) query.push(`to=${to}`);
    const queryString = query.length ? '?' + query.join('&') : '';

    fetch('http://localhost:8001/api/fleet/custom' + queryString)
      .then(res => res.json())
      .then(setData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h2>🔧 Custom Report</h2>

      <div>
        <input placeholder="Vehicle ID" value={vehicle} onChange={e => setVehicle(e.target.value)} />
        <input placeholder="From City ID" value={from} onChange={e => setFrom(e.target.value)} />
        <input placeholder="To City ID" value={to} onChange={e => setTo(e.target.value)} />
        <button onClick={fetchData}>Filter</button>
      </div>

      <table border="1">
        <thead>
          <tr>
            <th>From → To</th>
            <th>Vehicle</th>
            <th>Total Cost</th>
            <th>Revenue</th>
            <th>Profit</th>
            <th>Profit %</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={idx}>
              <td>{row.from} → {row.to}</td>
              <td>{row.vehicle}</td>
              <td>{row.totalCost}</td>
              <td>{row.revenue}</td>
              <td>{row.profit}</td>
              <td>{row.profitPercent.toFixed(2)}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CustomReport;