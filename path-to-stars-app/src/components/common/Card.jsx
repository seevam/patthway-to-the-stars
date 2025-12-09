import React from 'react';
import './Card.css';

const Card = ({
  children,
  hover = false,
  gradient = false,
  onClick = null,
  className = ''
}) => {
  return (
    <div
      className={`card ${hover ? 'card-hover' : ''} ${gradient ? 'card-gradient' : ''} ${className}`}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {children}
    </div>
  );
};

export default Card;
