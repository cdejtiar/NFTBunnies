import React from "react";
//import Question from "../Question/Question";
import styles from "./FAQ.module.css";
import { Accordion } from "react-bootstrap-accordion";

const FAQ = ({ dataFAQ }) => {
  return (
    <div className={`${styles["faq"]}`} id="FAQ">
      <h2>FAQ</h2>
      <h3>Frequently Asked Questions</h3>
      {dataFAQ.map((item, index) => {
        return (
          <Accordion
            title={item.question}
            show={item.show}
            children={item.answer}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default FAQ;
