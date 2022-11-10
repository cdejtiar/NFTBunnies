import React from "react";
import NFTHero from '../../assets/NFTHero.png';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <div className={`${styles['hero']}`}>
      <div className={`${styles['data']}`}>
        <h1>Meet NFT Bunnies Collection</h1>
        <h3>
          Adopt your virtual Bunny and show your support to our little fellas.
          Each bunny is unique and was made with all of our love for them. Help
          a bunny find their forever home by supporting adoption.
        </h3>
        <button>Learn more</button>
      </div>
      <div className={`${styles['bunny']}`}>
        <img src={NFTHero} alt="A bunny" />
      </div>
    </div>
  );
};

export default Hero;
