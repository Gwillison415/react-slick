import React, { useState } from "react";
import DropDown from "./Dropdown";
import LongText from "./LongText";
import styles from "./Home.module.scss";

export default function Input(props) {
  const { type, ...restOfProps } = props;
  const [choice, setChoice] = useState(null);
  console.log(`choice`, choice);
  if (type === "dropdown") {
    return (
      <div className={styles.formLabelContainer}>
        <DropDown setChoice={setChoice} {...restOfProps}></DropDown>{" "}
        {choice && choice?.type === "longText" ? (
          <LongText {...choice}></LongText>
        ) : null}
      </div>
    );
  }
  if (type === "longText") {
    return <LongText {...restOfProps}></LongText>;
  }
  return <div>No Info in input</div>;
}
