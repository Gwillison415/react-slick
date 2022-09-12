import React, { useState } from "react";
import styles from "./Home.module.scss";
import Input from "./Input";
export default function Form(props) {
  const { type, name, questions } = props;

  const handleSubmit = (val) => {
    console.log(`val`, val);
  };
  return (
    <div className={styles.card}>
      <h2 className={styles.formTitle}>{name}</h2>
      <form onSubmit={handleSubmit}>
        {questions.map((question, idx) => {
          const { id } = question;
          return <Input key={id + idx.toString()} {...question} />;
        })}
      </form>
    </div>
  );
}
