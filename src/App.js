import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import RealTimeTracking from './pages/RealTimeTracking';
import AnalyticsAndReports from './pages/AnalyticsReports';
import MaintenanceManagement from './pages/MaintenanceManagement';
import RouteOptimization from './pages/RouteOptimization';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/realtime-tracking" element={<RealTimeTracking />} />
        <Route path="/analytics-and-reports" element={<AnalyticsAndReports />} />
        <Route path="/maintenance-management" element={<MaintenanceManagement />} />
        <Route path="/route-optimization" element={<RouteOptimization />} />
      </Routes>
    </Router>
  );
}

export default App;
