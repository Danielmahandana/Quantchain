import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import LoanApplication from './components/LoanApplication';
import LoanStatus from './components/LoanStatus';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apply-loan" element={<LoanApplication />} />
        <Route path="/loan-status" element={<LoanStatus />} />
      </Routes>
    </Router>
  );
}

export default App;
