import React from "react";
import styles from "./Question.module.css";

const Question = ({ number, question, answer }) => {
  return (
    <div className={`${styles['question']}`}>
      <h2>{number}</h2>
      <div className={`${styles['qa']}`}>
      <h3>{question}</h3>
      <h4>{answer}</h4>
      </div>
    </div>
  );
};

export default Question;
