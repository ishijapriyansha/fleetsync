import React from 'react';
import './RealTimeTracking.css';
import Navbar from './Navbar';


const RealTimeTracking = () => {
  return (
    <div className="real-time-tracking">
      <Navbar />
      {/* Hero Section */}
      <header className="tracking-hero">
        <h1>Real-Time Fleet Tracking</h1>
        <p>Stay informed with live updates on your fleet's location, performance, and status.</p>
      </header>

      {/* Features Section */}
      <section className="tracking-features">
        <h2>Key Features</h2>
        <div className="tracking-feature-list">
          <div className="tracking-feature features-bg1">
            <h3>Live GPS Tracking</h3>
            <p>Track your vehicles in real-time with precise GPS data.</p>
          </div>
          <div className="tracking-feature features-bg2">
            <h3>Geofencing Alerts</h3>
            <p>Receive notifications when vehicles enter or leave predefined zones.</p>
          </div>
          <div className="tracking-feature features-bg3">
            <h3>Route History</h3>
            <p>Access detailed logs of route history for performance analysis.</p>
          </div>
          <div className="tracking-feature features-bg4">
            <h3>Driver Behavior Insights</h3>
            <p>Monitor driving habits to ensure safety and efficiency.</p>
          </div>
        </div>
      </section>

      {/* Live Map Section */}
      <section className="live-map">
        <h2>Live Map</h2>
        <div className="map-placeholder">
          <a href="https://maps.app.goo.gl/L6z1Hx3CMZXtqyFG8">
            <img
              src="map.webp"
              alt="Live Map Preview"
              className="map-image"
            />
          </a>
          <p>Click the map for a detailed view.</p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="tracking-benefits">
        <h2>Why Choose Real-Time Tracking?</h2>
        <ul>
          <li>Improve operational efficiency by reducing downtime.</li>
          <li>Enhance customer satisfaction with accurate delivery estimates.</li>
          <li>Lower costs through optimized routes and fuel usage.</li>
          <li>Ensure vehicle and driver safety with monitoring tools.</li>
        </ul>
      </section>

      {/* Call-to-Action */}
      <section className="tracking-cta">
        <h2>Start Tracking Your Fleet Today</h2>
        <p>Transform your fleet management with real-time tracking solutions.</p>
        <button className="cta-button">Get Started</button>
      </section>
    </div>
  );
};

export default RealTimeTracking;
