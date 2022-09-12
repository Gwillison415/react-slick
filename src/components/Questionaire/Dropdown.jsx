import React, { useState } from "react";
import styles from "./Home.module.scss";

export default function DropDown(props) {
  const { placeholder, choices, id, message, setChoice } = props;
  const [dropdownValue, setDropdownValue] = useState(placeholder);
  const [choicesById, setChoicesById] = useState(() => {
    const choicesDictionaryById = {};
    choices.forEach((choice) => {
      const { id } = choice;
      return (choicesDictionaryById[id] = choice);
    });
    return choicesDictionaryById;
  });

  function handleChange(e) {
    setDropdownValue(e.target.value);
    setChoice(choicesById[e.target.value]);
  }

  const color = dropdownValue === placeholder ? "grey" : "black";

  return (
    <label
      aria-label={{ placeholder }}
      className={styles.formLabel}
      htmlFor={id}
    >
      <select
        aria-label={placeholder}
        id={id}
        value={dropdownValue}
        onChange={handleChange}
        style={{ color }}
      >
        <option
          key={`placeholder ${id}`}
          className={styles.hiddenPlaceholder}
          value={placeholder}
        >
          {placeholder}
        </option>
        {choices.map(({ id, message }, idx) => {
          return (
            <option
              key={`${id}-${idx}`}
              className={styles.option}
              id={id}
              value={id}
            >
              {message}
            </option>
          );
        })}
      </select>
    </label>
  );
}
