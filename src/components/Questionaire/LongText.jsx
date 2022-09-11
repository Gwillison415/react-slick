import React, { useState } from "react";
import styles from "./Home.module.scss";

export default function LongText({
  role,
  type,
  required,
  message,
  placeholder,
  id,
}) {
  const [value, setValue] = useState(placeholder);
  function onChange(e) {
    setValue(e.target.value);
  }
  return (
    <div className={styles.inputBoxWrapper}>
      <input
        onChange={onChange}
        type="text"
        className={styles.inputBox}
        placeholder={placeholder}
      />
    </div>
  );
}
