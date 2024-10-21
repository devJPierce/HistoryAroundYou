import React from 'react';
import { Link } from 'react-router-dom';
import './layout.css'

const Layout = ({ children }) => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/location">Find Some History</Link></li>
          <li><Link to="/resources">More Resources</Link></li>
          {/* Add more navigation items as needed */}
        </ul>
      </nav>
      <h1>Around You</h1>
      <h3>Are you ready for history to <span>come alive?</span></h3>
      {children}
    </div>
  );
};

export default Layout;