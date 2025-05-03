import { useEffect, useState } from 'react';
import './CostSaving.css';

function CostSaving() {
  const [routes] = useState([
    {
      source: 'Delhi',
      destination: 'Chandigarh',
      bestRoute: 'NH44 via Sonipat and Karnal',
      description: 'Shorter distance with minimal tolls compared to expressways.',
      mapsLink: 'https://www.google.com/maps/dir/Delhi/Chandigarh',
      fuelSaved: '₹250',
      tollSaved: '₹120'
    },
    {
      source: 'Mumbai',
      destination: 'Surat',
      bestRoute: 'NH48 avoiding toll express lanes',
      description: 'Saves toll charges while maintaining reasonable travel time.',
      mapsLink: 'https://www.google.com/maps/dir/Mumbai/Surat',
      fuelSaved: '₹180',
      tollSaved: '₹90'
    },
    {
      source: 'Bengaluru',
      destination: 'Mysuru',
      bestRoute: 'Via NH275 avoiding NICE Road',
      description: 'Skips high-toll NICE Road for cost savings with moderate traffic.',
      mapsLink: 'https://www.google.com/maps/dir/Bengaluru/Mysuru',
      fuelSaved: '₹100',
      tollSaved: '₹70'
    },
    {
      source: 'Hyderabad',
      destination: 'Vijayawada',
      bestRoute: 'NH65 avoiding toll bypasses',
      description: 'Efficient and affordable route using public roadways.',
      mapsLink: 'https://www.google.com/maps/dir/Hyderabad/Vijayawada',
      fuelSaved: '₹210',
      tollSaved: '₹100'
    }
  ]);

  const cities = [
    ...new Set(routes.flatMap((route) => [route.source, route.destination]))
  ];

  const [selectedSource, setSelectedSource] = useState('');
  const [selectedDestination, setSelectedDestination] = useState('');
  const [matchedRoute, setMatchedRoute] = useState(null);

  useEffect(() => {
    if (selectedSource && selectedDestination && selectedSource !== selectedDestination) {
      const match = routes.find(
        (route) =>
          route.source === selectedSource &&
          route.destination === selectedDestination
      );
      setMatchedRoute(match || null);
    } else {
      setMatchedRoute(null);
    }
  }, [selectedSource, selectedDestination, routes]);

  return (
    <div className="costsaving-container">
      <div className="costsaving-wrapper">
        <h2 className="heading">💰 Cost-Saving Route Suggestions</h2>

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
            {matchedRoute ? (
              <div className="route-result">
                <h3>Suggested Cost-Saving Route: {matchedRoute.bestRoute}</h3>
                <p>{matchedRoute.description}</p>

                <div className="savings">
                  <p><strong>Estimated Fuel Cost Saved:</strong> {matchedRoute.fuelSaved}</p>
                  <p><strong>Estimated Toll Cost Saved:</strong> {matchedRoute.tollSaved}</p>
                </div>

                <div className="map-link-section">
                  <h4>🗺 View on Google Maps</h4>
                  <a
                    className="map-link"
                    href={matchedRoute.mapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {selectedSource} → {selectedDestination}
                  </a>
                </div>
              </div>
            ) : (
              <div className="route-result">
                <h3>No predefined cost-saving route available for this pair.</h3>
                <p>You can still explore possible options on Google Maps.</p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default CostSaving;
