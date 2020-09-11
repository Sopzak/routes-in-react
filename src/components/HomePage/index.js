import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const HomePage = () => (
  <div>
    <h1>Choose your way in JavaScript</h1>

    <p>
    Javascript is the more language used by the companies in the web. You can use Javascript to do Apps, Websites, Microservices and other applications to internet.
    </p>

    <div className="content-options">
      <Link className="option-front-end" to='/front-end'>Front-end</Link>
      <Link className="option-back-end" to='/back-end'>Back-end</Link>
    </div>

  </div>
);

export default HomePage;