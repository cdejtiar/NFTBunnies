import React from "react";
import Question from "../Question/Question";
import styles from "./FAQ.module.css";

const FAQ = ({ dataFAQ }) => {
  return (
    <div className={`${styles['faq']}`}>
      <h2>FAQ</h2>
      <h3>Frequently Asked Questions</h3>

      {dataFAQ.map((item, index) => {
        return (
          <Question
            number={item.qNumber}
            question={item.question}
            answer={item.answer}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default FAQ;
