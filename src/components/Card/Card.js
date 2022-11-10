import React from "react";
import styles from './Card.module.css';

const Card = ({ src, alt }) => {
  return (
    <div className={`${styles['card']}`}>
      <img src={src} alt={alt} />
      <h3>{alt}</h3>
    </div>
  );
};

export default Card;
