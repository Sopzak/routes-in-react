import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

const BackButton = () => (
  <div className="button-area">
    <Link className="button-back" to='/'>Voltar</Link>
  </div>
);

export default BackButton;