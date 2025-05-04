import React, { useState } from 'react';
import './CostTracking.css';

const CostTracking = () => {
  const [costs, setCosts] = useState([
    {
      id: 1,
      truck: 'Truck 1',
      type: 'Fuel',
      description: 'Diesel refueling at Mumbai depot',
      amount: 6500,
      date: '2025-04-10',
    },
    {
      id: 2,
      truck: 'Truck 2',
      type: 'Service',
      description: 'Routine brake check and oil change',
      amount: 4200,
      date: '2025-04-12',
    },
  ]);

  const [truck, setTruck] = useState('Truck 1');
  const [type, setType] = useState('Fuel');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const addCost = () => {
    if (!truck || !type || !description || !amount || !date) return;

    const newEntry = {
      id: Date.now(),
      truck,
      type,
      description,
      amount: parseFloat(amount),
      date,
    };

    setCosts([newEntry, ...costs]);
    setTruck('Truck 1');
    setType('Fuel');
    setDescription('');
    setAmount('');
    setDate('');
  };

  const totalCost = costs.reduce((sum, cost) => sum + cost.amount, 0);
  const truckTotals = costs.reduce((acc, cost) => {
    acc[cost.truck] = (acc[cost.truck] || 0) + cost.amount;
    return acc;
  }, {});

  return (
    <div className="cost-container">
      <h1 className="cost-title">Cost Tracking</h1>

      {/* Add Cost Form */}
      <div className="form-section">
        <select value={truck} onChange={(e) => setTruck(e.target.value)} className="input">
          <option>Truck 1</option>
          <option>Truck 2</option>
          <option>Truck 3</option>
        </select>

        <select value={type} onChange={(e) => setType(e.target.value)} className="input">
          <option>Fuel</option>
          <option>Service</option>
          <option>Repair</option>
          <option>Other</option>
        </select>

        <input
          type="text"
          className="input"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <input
          type="number"
          className="input"
          placeholder="Amount (₹)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <input
          type="date"
          className="input"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <button onClick={addCost} className="add-btn">
          Add Cost
        </button>
      </div>

      {/* Summary */}
      <div className="summary">
        <h2>Total Cost: ₹{totalCost.toFixed(2)}</h2>
        <ul>
          {Object.entries(truckTotals).map(([truck, amt]) => (
            <li key={truck}>
              {truck}: ₹{amt.toFixed(2)}
            </li>
          ))}
        </ul>
      </div>

      {/* Cost List */}
      <div className="cost-list">
        {costs.map((cost) => (
          <div key={cost.id} className="cost-card">
            <div className="top">
              <h3>{cost.type} - ₹{cost.amount.toFixed(2)}</h3>
              <span className="truck">{cost.truck}</span>
            </div>
            <p>{cost.description}</p>
            <span className="date">{cost.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CostTracking;
