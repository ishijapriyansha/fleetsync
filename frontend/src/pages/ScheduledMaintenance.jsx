import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './ScheduledMaintenance.css';

const ScheduledMaintenance = () => {
  const [truck, setTruck] = useState('Truck 1');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [scheduledDate, setScheduledDate] = useState(new Date());

  const [maintenanceList, setMaintenanceList] = useState([
    {
      id: 1,
      truck: 'Truck 1',
      title: 'Oil Change',
      description: 'Change engine oil and filters.',
      date: '2025-05-15',
    },
    {
      id: 2,
      truck: 'Truck 2',
      title: 'AC Check',
      description: 'Routine air conditioning service.',
      date: '2025-05-18',
    },
    {
      id: 3,
      truck: 'Truck 1',
      title: 'Transmission Inspection',
      description: 'Scheduled transmission check.',
      date: '2025-05-25',
    },
  ]);

  const addScheduledMaintenance = () => {
    if (!title || !description || !scheduledDate) return;
    const newEntry = {
      id: Date.now(),
      truck,
      title,
      description,
      date: scheduledDate.toISOString().split('T')[0],
    };
    setMaintenanceList([...maintenanceList, newEntry]);
    setTitle('');
    setDescription('');
  };

  const getMaintenanceByTruck = (truckName) =>
    maintenanceList.filter((entry) => entry.truck === truckName);

  return (
    <div className="scheduled-container">
      <h1 className="scheduled-title">Scheduled Maintenance</h1>

      {/* Form */}
      <div className="form-section">
        <label>Truck:</label>
        <select value={truck} onChange={(e) => setTruck(e.target.value)} className="input">
          <option>Truck 1</option>
          <option>Truck 2</option>
          <option>Truck 3</option>
        </select>

        <label>Date:</label>
        <DatePicker
          selected={scheduledDate}
          onChange={(date) => setScheduledDate(date)}
          className="date-picker"
        />

        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="input"
          placeholder="Service Title"
        />

        <label>Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="textarea"
          placeholder="Service Description"
        ></textarea>

        <button onClick={addScheduledMaintenance} className="add-btn">
          Schedule Maintenance
        </button>
      </div>

      {/* Maintenance List by Truck */}
      <div className="section">
        <h2>Truck 1 - Scheduled</h2>
        {getMaintenanceByTruck('Truck 1').map((item) => (
          <div key={item.id} className="maintenance-card">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <span>{item.date}</span>
          </div>
        ))}

        <h2>Truck 2 - Scheduled</h2>
        {getMaintenanceByTruck('Truck 2').map((item) => (
          <div key={item.id} className="maintenance-card">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <span>{item.date}</span>
          </div>
        ))}

        <h2>Truck 3 - Scheduled</h2>
        {getMaintenanceByTruck('Truck 3').map((item) => (
          <div key={item.id} className="maintenance-card">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <span>{item.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScheduledMaintenance;
