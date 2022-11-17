import React from "react";
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <div className={`${styles['hero']}`}>
        <h1>Meet NFT Bunnies Collection</h1>
        <h3>
          Adopt your virtual Bunny and show your support to our little fellas.
          Each bunny is unique and was made with all of our love for them. Help
          a bunny find their forever home by supporting adoption.
        </h3>
        <button>MINT NOW</button>
    </div>
  );
};

export default Hero;
