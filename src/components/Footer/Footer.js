import React from "react";
import styles from "./Footer.module.css";

import logo from "../../assets/logoBunnies.png";

const Footer = () => {
  return (
    <div className={`${styles["footer"]}`}>
      <div className={`${styles["bunnies"]}`}>
        <img className={`${styles["logo"]}`} src={logo} alt="logoBunnies" />
        <h3>Bunnies is a collection of 1000 NFTs</h3>
        <p>© 2022 Dejtiar Camila</p>
      </div>

      <div className={`${styles["contact"]}`}>
        <h2>Connect with us</h2>
        <form>
          <input type="email" placeholder="email" />
          <input className={`${styles['btnSubmit']}`} type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default Footer;
