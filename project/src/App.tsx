import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Truck, BarChart3, Map, Settings } from 'lucide-react';
import Dashboard from './pages/Dashboard';
import Deliveries from './pages/Deliveries';
import Navigation from './components/Navigation';

function App() {
  return (
    <Router>
      <div className="flex h-screen bg-gray-100">
        <Navigation />
        <main className="flex-1 overflow-y-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/deliveries" element={<Deliveries />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;