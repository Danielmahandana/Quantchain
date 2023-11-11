import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Welcome to AlgoFinance Microfinance Platform</h1>
      <p>Empowering communities through financial inclusion.</p>
      <Link to="/apply-loan">Apply for a Loan</Link>
      <br/>
      <Link to="/loan-status">check your loan status</Link>
    </div>
  );
}

export default Home;
