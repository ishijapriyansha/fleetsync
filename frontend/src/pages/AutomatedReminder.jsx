import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './AutomatedReminder.css';

const AutomatedReminder = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [time, setTime] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [truck, setTruck] = useState('Truck 1');
  const [reminders, setReminders] = useState([
    // Sample upcoming reminders
    {
      id: 1,
      truck: 'Truck 1',
      title: 'Oil Change',
      description: 'Scheduled oil change',
      date: '2025-05-08',
      time: '10:00',
    },
    {
      id: 2,
      truck: 'Truck 2',
      title: 'Tire Rotation',
      description: 'Rotate all tires',
      date: '2025-05-10',
      time: '14:00',
    },
  ]);

  const maintenanceHistory = [
    {
      id: 101,
      truck: 'Truck 1',
      title: 'Engine Check',
      description: 'Full engine diagnostic completed.',
      date: '2025-04-20',
    },
    {
      id: 102,
      truck: 'Truck 2',
      title: 'Battery Replacement',
      description: 'Replaced battery and checked connections.',
      date: '2025-04-22',
    },
  ];

  const addReminder = () => {
    if (!title || !description || !time) return;
    const newReminder = {
      id: Date.now(),
      truck,
      date: selectedDate.toISOString().split('T')[0],
      time,
      title,
      description,
    };
    setReminders([...reminders, newReminder]);
    setTitle('');
    setDescription('');
    setTime('');
  };

  const renderReminders = (truckName) =>
    reminders
      .filter((r) => r.truck === truckName)
      .map((reminder) => (
        <div key={reminder.id} className="reminder-card">
          <h3>{reminder.title}</h3>
          <p>{reminder.description}</p>
          <span>
            {reminder.date} at {reminder.time}
          </span>
        </div>
      ));

  const renderHistory = (truckName) =>
    maintenanceHistory
      .filter((m) => m.truck === truckName)
      .map((entry) => (
        <div key={entry.id} className="history-card">
          <h3>{entry.title}</h3>
          <p>{entry.description}</p>
          <span>{entry.date}</span>
        </div>
      ));

  return (
    <div className="reminder-container">
      <h1 className="reminder-title">Automated Reminders</h1>

      {/* Reminder Form */}
      <div className="form-section">
        <label>Truck:</label>
        <select value={truck} onChange={(e) => setTruck(e.target.value)} className="input">
          <option>Truck 1</option>
          <option>Truck 2</option>
        </select>

        <label>Date:</label>
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          className="date-picker"
        />

        <label>Time:</label>
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="input"
        />

        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="input"
          placeholder="Reminder title"
        />

        <label>Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="textarea"
          placeholder="Reminder description"
        ></textarea>

        <button onClick={addReminder} className="add-btn">
          Add Reminder
        </button>
      </div>

      {/* Maintenance History */}
      <div className="section">
        <h2>Maintenance History - Truck 1</h2>
        {renderHistory('Truck 1')}

        <h2>Maintenance History - Truck 2</h2>
        {renderHistory('Truck 2')}
      </div>

      {/* Upcoming Reminders */}
      <div className="section">
        <h2>Upcoming Reminders - Truck 1</h2>
        {renderReminders('Truck 1')}

        <h2>Upcoming Reminders - Truck 2</h2>
        {renderReminders('Truck 2')}
      </div>
    </div>
  );
};

export default AutomatedReminder;
