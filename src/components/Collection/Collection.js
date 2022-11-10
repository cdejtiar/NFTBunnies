import React from "react";
import Card from "../Card/Card";
import styles from "./Collection.module.css";
import uno from "../../assets/outputs/images/1.png";
import dos from "../../assets/outputs/images/2.png";
import tres from "../../assets/outputs/images/3.png";
import cuatro from "../../assets/outputs/images/4.png";
import cinco from "../../assets/outputs/images/5.png";
import seis from "../../assets/outputs/images/6.png";
import siete from "../../assets/outputs/images/7.png";
import ocho from "../../assets/outputs/images/8.png";
import nueve from "../../assets/outputs/images/9.png";
import diez from "../../assets/outputs/images/10.png";
import once from "../../assets/outputs/images/11.png";
import doce from "../../assets/outputs/images/12.png";

import Marquee from "react-fast-marquee";

const previewNFTs = [
  { src: uno, alt: "Bunny #01" },
  { src: dos, alt: "Bunny #02" },
  { src: tres, alt: "Bunny #03" },
  { src: cuatro, alt: "Bunny #04" },
  { src: cinco, alt: "Bunny #05" },
  { src: seis, alt: "Bunny #06" },
  { src: siete, alt: "Bunny #07" },
  { src: ocho, alt: "Bunny #08" },
  { src: nueve, alt: "Bunny #09" },
  { src: diez, alt: "Bunny #10" },
  { src: once, alt: "Bunny #11" },
  { src: doce, alt: "Bunny #12" },
];

const Collection = () => {
  return (
    <div className={`${styles['collection']}`}>
      <h2>Collection</h2>
      <Marquee gradient={false} className={`${styles['marquee']}`}>
        {previewNFTs.map((item, index) => {
          return <Card key={index} src={item.src} alt={item.alt} />;
        })}
      </Marquee>
      <button>See more</button>
    </div>
  );
};

export default Collection;
