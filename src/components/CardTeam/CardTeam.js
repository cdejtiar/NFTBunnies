import React from "react";
import styles from "./CardTeam.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { brands } from "@fortawesome/fontawesome-svg-core/import.macro";

const CardTeam = ({ src, alt, name, links }) => {
  return (
    <>
      <div className={`${styles["cardTeam"]}`}>
        <img src={src} alt={alt} />
        <h2>{name}</h2>
        <div className={`${styles["socials"]}`}>
          <a href={links[0]} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={brands("instagram")} />
          </a>
          <a href={links[1]} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={brands("linkedin")} />
          </a>
          <a href={links[2]} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={brands("twitter")} />
          </a>
        </div>
      </div>
    </>
  );
};

export default CardTeam;
