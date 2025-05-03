import React from 'react';
import './RouteOptimization.css';
import Navbar from './Navbar';


const RouteOptimization = () => {
  return (
    <div className="route-optimization">
      <Navbar />
      {/* Hero Section */}
      <header className="route-hero">
        <div className="hero-content">
          <h1>Route Optimization</h1>
          <p>Optimize routes to minimize fuel consumption, time, and operational costs.</p>
        </div>
        <div className="hero-image">
          <img src="route.png" alt="Route Optimization" />
        </div>
      </header>

      {/* Optim Section */}
      <section className="route-optim">
        <h2>Key Optimizations of Route Optimization</h2>
        <div className="optim-list">
          <a href="/real-time-traffic" className="optim optim-bg1">
            <h3>Real-Time Traffic Data</h3>
            <p>Integrate real-time traffic data to adjust routes dynamically.</p>
          </a>
          <a href="/route-planning" className="optim optim-bg2">
            <h3>Route Planning</h3>
            <p>Plan the most efficient routes considering various factors like distance and fuel consumption.</p>
          </a>
          <a href="/time-savings" className="optim optim-bg3">
            <h3>Time Savings</h3>
            <p>Save time by minimizing detours and traffic-heavy areas.</p>
          </a>
          <a href="/cost-savings" className="optim optim-bg4">
            <h3>Cost Savings</h3>
            <p>Reduce fuel consumption by optimizing vehicle routes.</p>
          </a>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="route-benefits">
        <h2>Why Use Route Optimization?</h2>
        <ul>
          <li>Save time and fuel by calculating the fastest and most efficient routes.</li>
          <li>Improve delivery times and customer satisfaction by avoiding delays.</li>
          <li>Decrease operational costs by optimizing fleet usage.</li>
          <li>Get detailed insights into route performance and make adjustments when needed.</li>
        </ul>
      </section>

      {/* Call-to-Action Section */}
      <section className="route-cta">
        <h2>Start Optimizing Your Routes Today</h2>
        <p>Boost fleet efficiency with our route optimization tools.</p>
        <button className="cta-button">Get Started</button>
      </section>
    </div>
  );
};

export default RouteOptimization;
