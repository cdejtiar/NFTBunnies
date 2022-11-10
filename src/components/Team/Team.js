import React from "react";
import styles from './Team.module.css';
import CardTeam from "../CardTeam/CardTeam";
import camiImage from "../../assets/cami.jpg";

const dataTeam = [
  {
    src: camiImage,
    alt: "Camila Dejtiar",
    name: "Camila Dejtiar",
    links: [
      "https://www.instagram.com/camidejtiar/",
      "https://www.linkedin.com/in/camila-dejtiar-56a38b214/",
      "https://twitter.com/camilitscandado",
    ],
  },
];

const Team = () => {
  return (
    <div className={`${styles['team']}`}>
      <h2>Team</h2>
      <h3>
        I am a student of Multimedia Technology at Universidad Maimónides. This
        project was made for a Multimedia Programming assignment and was
        developed and designed exclusively by me. Feel free to let me know what
        you think about it.
      </h3>
      {dataTeam.map((item, index) => {
        return (
          <CardTeam
            src={item.src}
            alt={item.alt}
            name={item.name}
            links={item.links}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default Team;
