import React from "react";
import logo from "../../assets/logoBunnies.png";
import WalletButton from "../WalletButton/WalletButton";
import styles from "./Header.module.css";

const Header = ({ dataNav }) => {
  return (
    <div className={`${styles["header"]}`}>
      <img className={`${styles["logo"]}`} src={logo} alt="logoBunnies" />
      <nav>
        {dataNav.map((item) => {
          return (
            <li>
              <a href={item.route}>{item.pageName}</a>
            </li>
          );
        })}
        <li>
          <WalletButton />
        </li>
      </nav>
    </div>
  );
};

export default Header;
