import React from 'react';
import './resources.css';

const Resources = () => {
  return (
    <div>
      <h4 id="resources">Further Resources</h4>
      <p>
        Here are some useful resources for exploring historical sites:
      </p>
      <ul>
        <li>
          <a href="https://www.archives.gov" target="_blank" rel="noopener noreferrer">
            National Archives
          </a>
        </li>
        <li>
          <a href="https://www.history.com" target="_blank" rel="noopener noreferrer">
            History.com
          </a>
        </li>
        <li>
          <a href="https://www.nps.gov" target="_blank" rel="noopener noreferrer">
            National Park Service
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Resources;