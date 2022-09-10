import React, { useState } from "react";
import { PropTypes } from "prop-types";
import "./form.css";

export default function FuncForm({ isFormValid }) {
  const [formSate, setFormSate] = useState(() => {
    isEmailValid: false;
    emailInput: "";
    isNameValid: false;
    nameInput: "";
    isPhoneValid: false;
    phoneInput: "";
    isUrlValid: false;
    urlInput: "";
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
    setFormSate({ ...formSate, urlInput: value, isUrlValid });
  };
  const handlePhoneChange = (event) => {
    const {
      target: { value },
    } = event;
    const isPhoneValid = value.length && /^\d{10}$/.test(value);

    setFormSate({ ...formSate, phoneInput: value, isPhoneValid });
  };

  handleEmailChange = (event) => {
    const {
      target: { value },
    } = event;
    const isEmailValid = value.length && /^[^@]+@[^@]+\.[^@]+$/.test(value);
    setFormSate({ ...formSate, emailInput: value, isEmailValid });
  };
  handleNameChange = (event) => {
    const {
      target: { value },
    } = event;
    const isNameValid = !!value.length;
    setFormSate({ ...formSate, nameInput: value, isNameValid });
  };
  handleSubmit = (event, isValid) => {
    isFormValid(isValid);
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
      <h1 className="text-center">Form Validation</h1>
      <form
        onSubmit={(e) => {
          this.handleSubmit(e, isFormValid);
        }}
      >
        {" "}
        <label>
          Name:
          <input
            className={"name"}
            type="text"
            value={nameInput}
            onChange={this.handleNameChange}
          />
        </label>
        <label>
          Email:
          <input
            className={"email"}
            type="text"
            value={emailInput}
            onChange={this.handleEmailChange}
          />
        </label>
        <label>
          Phone:
          <input
            className={"phone"}
            type="text"
            value={phoneInput}
            onChange={this.handlePhoneChange}
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
              this.handleUrlChange(e);
            }}
          />
        </label>
        <div className="button">
          <a
            href="#"
            onClick={(event) => {
              this.props.isFormValid(isFormValid);
              event.preventDefault();
            }}
            className="button success expand round text-center"
          >
            Verify
          </a>
        </div>
      </form>
    </div>
  );
}
