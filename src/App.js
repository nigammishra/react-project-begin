// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import necessary modules
import Header from './component/Header'
import Home from './pages/Home'

const App = () => {
  return (
    <Router> {/* Wrap the app with Router for routing */}
      <Header/> {/* Display the Header component (nav bar) */}
      
      <div className="container mt-4"> {/* Add some margin to separate content */}
        <Routes>
          <Route path="/" element={<Home />} /> Home component is displayed at the root route
        </Routes>
      </div>
    </Router>
  );
};

export default App;
