import React, { useState } from "react";
import styles from "./Counter.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const Counter = () => {
  const [count, setCount] = useState(1);
  return (
    <div className={`${styles["counter"]}`}>
      <FontAwesomeIcon
        icon={faMinus}
        className={`${styles["plusminus"]}`}
        onClick={() => {
          if (count < 3 && count > 0) {
            setCount(count - 1);
          }
        }}
      />
      <p>{count}</p>
      <FontAwesomeIcon
        icon={faPlus}
        className={`${styles["plusminus"]}`}
        onClick={() => {
          if (count >= 0 && count < 2) {
            setCount(count + 1);
          }
        }}
      />
    </div>
  );
};

export default Counter;
