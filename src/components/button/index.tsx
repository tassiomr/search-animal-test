import React from 'react';
import './styles.css';
import { useNavigate } from 'react-router-dom';

export const Button = () => {
  const navigate = useNavigate();
  return (
    <button disabled={false} onClick={() => navigate('/result')}>
      Buscar
    </button>
  );
};
