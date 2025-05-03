import { useEffect, useState } from 'react';
import './TimeSaving.css';

function TimeSaving() {
  const [routes] = useState([
    {
      source: 'Bengaluru',
      destination: 'Hyderabad',
      bestRoute: 'NH44 via Kurnool',
      description: 'Avoids traffic bottlenecks and ensures smooth travel on NH44.',
      mapsLink: 'https://www.google.com/maps/dir/Bengaluru/Hyderabad'
    },
    {
      source: 'Hyderabad',
      destination: 'Bengaluru',
      bestRoute: 'NH44 via Kurnool',
      description: 'Best return path via Kurnool with minimum delays.',
      mapsLink: 'https://www.google.com/maps/dir/Hyderabad/Bengaluru'
    },
    {
      source: 'Mumbai',
      destination: 'Pune',
      bestRoute: 'Mumbai-Pune Expressway',
      description: 'A fast, toll-based expressway ideal for quick intercity trips.',
      mapsLink: 'https://www.google.com/maps/dir/Mumbai/Pune'
    },
    {
      source: 'Pune',
      destination: 'Mumbai',
      bestRoute: 'Mumbai-Pune Expressway',
      description: 'The expressway provides a direct, time-saving return trip.',
      mapsLink: 'https://www.google.com/maps/dir/Pune/Mumbai'
    },
    {
      source: 'Chennai',
      destination: 'Bengaluru',
      bestRoute: 'NH48 via Vellore',
      description: 'Best route with highway amenities and fewer diversions.',
      mapsLink: 'https://www.google.com/maps/dir/Chennai/Bengaluru'
    },
    {
      source: 'Bengaluru',
      destination: 'Chennai',
      bestRoute: 'NH48 via Vellore',
      description: 'Smooth road and efficient travel using NH48.',
      mapsLink: 'https://www.google.com/maps/dir/Bengaluru/Chennai'
    },
    {
      source: 'Delhi',
      destination: 'Agra',
      bestRoute: 'Yamuna Expressway',
      description: 'Straight and high-speed access to Agra.',
      mapsLink: 'https://www.google.com/maps/dir/Delhi/Agra'
    },
    {
      source: 'Agra',
      destination: 'Delhi',
      bestRoute: 'Yamuna Expressway',
      description: 'Quick return trip with minimal interruptions.',
      mapsLink: 'https://www.google.com/maps/dir/Agra/Delhi'
    },
    {
      source: 'Kolkata',
      destination: 'Durgapur',
      bestRoute: 'NH19 via Dankuni',
      description: 'Wide highway with smooth traffic.',
      mapsLink: 'https://www.google.com/maps/dir/Kolkata/Durgapur'
    },
    {
      source: 'Durgapur',
      destination: 'Kolkata',
      bestRoute: 'NH19 via Dankuni',
      description: 'Easy and quick return path on NH19.',
      mapsLink: 'https://www.google.com/maps/dir/Durgapur/Kolkata'
    }
  ]);

  const cities = [
    ...new Set(routes.flatMap((route) => [route.source, route.destination]))
  ];

  const [selectedSource, setSelectedSource] = useState('');
  const [selectedDestination, setSelectedDestination] = useState('');
  const [matchedRoute, setMatchedRoute] = useState(null);
  const [dynamicMapLink, setDynamicMapLink] = useState('');

  useEffect(() => {
    if (selectedSource && selectedDestination && selectedSource !== selectedDestination) {
      const match = routes.find(
        (route) =>
          route.source === selectedSource &&
          route.destination === selectedDestination
      );
      setMatchedRoute(match || null);

      setDynamicMapLink(
        `https://www.google.com/maps/dir/${encodeURIComponent(
          selectedSource
        )}/${encodeURIComponent(selectedDestination)}`
      );
    } else {
      setMatchedRoute(null);
      setDynamicMapLink('');
    }
  }, [selectedSource, selectedDestination, routes]);

  return (
    <div className="timesaving-container">
      <video autoPlay loop muted playsInline className="background-video">
        <source src="/timesaving.mov" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="timesaving-wrapper">
        <h2 className="heading">⏱️ Time-Saving Route Suggestions</h2>

        <div className="dropdowns">
          <div className="dropdown">
            <label htmlFor="source">Source</label>
            <select
              id="source"
              value={selectedSource}
              onChange={(e) => setSelectedSource(e.target.value)}
            >
              <option value="">Select Source</option>
              {cities.map((city, index) => (
                <option key={index} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>

          <div className="dropdown">
            <label htmlFor="destination">Destination</label>
            <select
              id="destination"
              value={selectedDestination}
              onChange={(e) => setSelectedDestination(e.target.value)}
            >
              <option value="">Select Destination</option>
              {cities.map((city, index) => (
                <option key={index} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>
        </div>

        {selectedSource && selectedDestination && selectedSource !== selectedDestination && (
          <>
            <div className="route-result">
              <h3>
                Best Route:{' '}
                {matchedRoute ? matchedRoute.bestRoute : 'No predefined route found'}
              </h3>
              <p>
                {matchedRoute
                  ? matchedRoute.description
                  : 'This route is not predefined, but you can view directions on Google Maps.'}
              </p>
            </div>

            <div className="map-link-section">
              <h4>🗺 View on Google Maps</h4>
              <a
                className="map-link"
                href={dynamicMapLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {selectedSource} → {selectedDestination}
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default TimeSaving;
