import React from 'react';
import './AnalyticsReports.css'; 
import Navbar from './Navbar';


const AnalyticsReports = () => {
  return (
    <div className="analytics-reports">
      <Navbar />
      {/* Hero Section */}
      <header className="reports-hero">
        <div className="hero-content">
          <h1>Analytics & Reports</h1>
          <p>Gain valuable insights into your fleet’s performance with powerful analytics and reports.</p>
        </div>
        <div className="hero-image">
          {/* <img src="analys.jpg" alt="Analytics and Reports" /> */}
        </div>
      </header>

      {/* Features Section */}
      <section className="reports-features">
        <h2>Key Features of Analytics & Reports</h2>
        <div className="feature-list">
            {/* <div className='feature'></div> */}
          <div className="feature feature-bg1 ">
            <h3 color='white' >Real-Time Data Visualization</h3>
            <p>Interactive dashboards to visualize fleet performance metrics in real time.</p>
          </div>
          
          <div className="feature feature-bg2">
            <h3>Fleet Performance Reports</h3>
            <p>Generate detailed reports on fuel usage, speed, maintenance costs, and more.</p>
          </div>
          <div className="feature feature-bg3">
            <h4>Customizable Reports</h4>
            <p>Customize and export reports based on specific fleet or driver parameters.</p>
          </div>
          <div className="feature feature-bg4">
            <h4>Cost Analysis</h4>
            <p>Analyze and track costs related to fuel consumption, maintenance, and vehicle usage.</p>
          </div>
          
        </div>
      </section>

      {/* New Section with Text and Video */}
      <section className="info-video-section">
        <div className="info-video-container">
          {/* Left Side - Text */}
          <div className="info-left">
            <h2>How Analytics Transforms Fleet Management</h2>
            <p>
              Analytics provides actionable insights into every aspect of your fleet operations.
              From identifying inefficiencies to predicting maintenance needs, our tools
              empower you to make data-driven decisions that save time and reduce costs.
            </p>
          </div>
          
          {/* Right Side - Video */}
          <div className="info-right">
            <video width="100%" autoPlay loop muted >
              <source src="arvbg.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="reports-benefits">
        <h2>Why Use Analytics & Reports?</h2>
        <ul>
          <li>Make data-driven decisions to optimize fleet performance.</li>
          <li>Reduce operational costs by identifying inefficiencies.</li>
          <li>Monitor fleet health and anticipate maintenance needs.</li>
          <li>Stay compliant with regulatory reporting requirements.</li>
        </ul>
      </section>

      {/* Call-to-Action Section */}
      <section className="reports-cta">
        <h2>Start Making Data-Driven Decisions</h2>
        <p>Unlock the power of analytics to boost the efficiency of your fleet.</p>
        <button className="cta-button">Get Started</button>
      </section>
    </div>
  );
};

export default AnalyticsReports;
