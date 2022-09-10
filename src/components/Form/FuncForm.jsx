import React, { useState } from "react";
import { PropTypes } from "prop-types";
import "./form.css";
import Message from "./Message";

export default function FuncForm({}) {
  const [formState, setFormState] = useState(() => {
    return {
      isEmailValid: false,
      emailInput: "",
      isNameValid: false,
      nameInput: "",
      isPhoneValid: false,
      phoneInput: "",
      isUrlValid: false,
      urlInput: "",
    };
  });
  const handleUrlChange = (event) => {
    const {
      target: { value },
    } = event;
    const isUrlValid =
      value.length &&
      /^((https?):\/\/)?([a-zA-Z0-9]([-a-zA-Z0-9]{0,61}[a-zA-Z0-9])?\.)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/.test(
        value
      );
    setFormState({ ...formState, urlInput: value, isUrlValid });
  };
  const handlePhoneChange = (event) => {
    const {
      target: { value },
    } = event;
    const isPhoneValid = value.length && /^\d{10}$/.test(value);

    setFormState({ ...formState, phoneInput: value, isPhoneValid });
  };

  const handleEmailChange = (event) => {
    const {
      target: { value },
    } = event;
    const isEmailValid = value.length && /^[^@]+@[^@]+\.[^@]+$/.test(value);
    setFormState({ ...formState, emailInput: value, isEmailValid });
  };
  const handleNameChange = (event) => {
    const {
      target: { value },
    } = event;
    const isNameValid = !!value.length;
    setFormState({ ...formState, nameInput: value, isNameValid });
  };
  const handleSubmit = (event, isValid) => {
    // isFormValid(isValid);
    event.preventDefault();
  };
  const {
    isEmailValid,
    isNameValid,
    isPhoneValid,
    isUrlValid,
    emailInput,
    nameInput,
    phoneInput,
    urlInput,
  } = formState;

  const isValid = isEmailValid && isNameValid && isPhoneValid && isUrlValid;
  return (
    <div className="row">
      <div className="formContainer">
        <h1 className="text-center">Form Validation</h1>
        <form
          onSubmit={(e) => {
            handleSubmit(e, isValid);
          }}
        >
          {" "}
          <label>
            Name:
            <input
              className={"name"}
              type="text"
              value={nameInput}
              onChange={handleNameChange}
            />
          </label>
          <label>
            Email:
            <input
              className={"email"}
              type="text"
              value={emailInput}
              onChange={handleEmailChange}
            />
          </label>
          <label>
            Phone:
            <input
              className={"phone"}
              type="text"
              value={phoneInput}
              onChange={handlePhoneChange}
            />
          </label>
          <label>
            Blog URL:
            <input
              type="url"
              className={"url"}
              value={urlInput}
              placeholder={"Blog URL:"}
              pattern="https://.*"
              required
              onChange={(e) => {
                handleUrlChange(e);
              }}
            />
          </label>
          <div className="buttonContainer">
            <button
              onClick={(event) => {
                //   props.isFormValid(isFormValid);
                //   event.preventDefault();
              }}
              className="button"
            >
              {isValid ? "Verified" : "Verify"}
            </button>
          </div>
        </form>
      </div>
      <Message isFormValid={isValid}></Message>
    </div>
  );
}
