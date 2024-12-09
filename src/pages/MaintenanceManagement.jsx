import React from 'react';
import './MaintenanceManagement.css'; 
import Navbar from './Navbar';
 // Optional CSS for styling

const MaintenanceManagement = () => {
  return (
    <div className="maintenance-management">
      <Navbar />
      {/* Hero Section */}
      <header className="maintenance-hero">
        <div className="hero-content">
          <h1>Maintenance Management</h1>
          <p>Stay on top of vehicle maintenance with automated scheduling and reminders.</p>
        </div>
        <div className="hero-image">
          <img src="/maintenance-image.jpg" alt="Maintenance Management" />
        </div>
      </header>

      {/* Highlights Section */}
      <section className="maintenance-highlights">
        <h2 >Key Highlights of Maintenance Management</h2>
        <div className="highlight-list">
          <a href="/automated-reminders" className="highlight highlight-bg1">
            <h3>Automated Reminders</h3>
            <p>Get notified about upcoming maintenance tasks before they become urgent.</p>
          </a>
          <a href="/maintenance-history" className="highlight highlight-bg2">
            <h3>Maintenance History</h3>
            <p>Track the history of each vehicle’s maintenance activities and costs.</p>
          </a>
          <a href="/scheduled-maintenance" className="highlight highlight-bg3">
            <h3>Scheduled Maintenance</h3>
            <p>Schedule maintenance tasks in advance to ensure optimal vehicle performance.</p>
          </a>
          <a href="/cost-tracking" className="highlight highlight-bg4">
            <h3>Cost Tracking</h3>
            <p>Monitor maintenance expenses and identify areas to optimize costs.</p>
          </a>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="maintenance-benefits">
        <h2>Why Use Maintenance Management?</h2>
        <ul>
          <li>Reduce downtime by addressing maintenance issues before they escalate.</li>
          <li>Lower costs by staying on top of repairs and avoiding emergency fixes.</li>
          <li>Ensure compliance with industry regulations and safety standards.</li>
          <li>Extend the lifespan of your fleet by performing timely maintenance.</li>
        </ul>
      </section>

      {/* Call-to-Action Section */}
      <section className="maintenance-cta">
        <h2>Start Maintaining Your Fleet Efficiently</h2>
        <p>Never miss a maintenance task with our comprehensive management system.</p>
        <button className="cta-button">Get Started</button>
      </section>
    </div>
  );
};

export default MaintenanceManagement;
