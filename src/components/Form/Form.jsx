import React, { Component } from "react";
import { PropTypes } from "prop-types";
import "./form.css";

// NOT USED

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEmailValid: false,
      emailInput: "",
      isNameValid: false,
      nameInput: "",
      isPhoneValid: false,
      phoneInput: "",
      isUrlValid: false,
      urlInput: "",
    };
  }

  handleUrlChange = (event) => {
    const {
      target: { value },
    } = event;
    const isUrlValid =
      value.length &&
      /^((https?):\/\/)?([a-zA-Z0-9]([-a-zA-Z0-9]{0,61}[a-zA-Z0-9])?\.)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/.test(
        value
      );
    this.setState({ urlInput: value, isUrlValid });
  };

  // handleUrlChange = (event) => {
  //   const {
  //     target: { value },
  //   } = event;
  //   const isUrlValid =
  //     value.length &&
  //     /^((https?):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/.test(
  //       value
  //     );
  //   this.setState({ urlInput: value, isUrlValid });
  // };
  handlePhoneChange = (event) => {
    const {
      target: { value },
    } = event;
    const isPhoneValid = value.length && /^\d{10}$/.test(value);
    this.setState({ phoneInput: value, isPhoneValid });
  };
  handleEmailChange = (event) => {
    const {
      target: { value },
    } = event;
    const isEmailValid = value.length && /^[^@]+@[^@]+\.[^@]+$/.test(value);
    this.setState({ emailInput: value, isEmailValid });
  };
  handleNameChange = (event) => {
    const {
      target: { value },
    } = event;
    const isNameValid = !!value.length;
    this.setState({ nameInput: value, isNameValid });
  };
  handleSubmit = (event, isFormValid) => {
    this.props.isFormValid(isFormValid);
    event.preventDefault();
  };
  render() {
    const { handleSubmit } = this.props;
    const {
      isEmailValid,
      isNameValid,
      isPhoneValid,
      isUrlValid,
      emailInput,
      nameInput,
      phoneInput,
      urlInput,
    } = this.state;
    console.log("isEmailValid", isEmailValid);
    console.log("isNameValid", isNameValid);
    console.log("isPhoneValid", isPhoneValid);
    console.log("isUrlValid", isUrlValid);
    const isFormValid =
      isEmailValid && isNameValid && isPhoneValid && isUrlValid;
    return (
      <div className="row">
        <h1 className="text-center">Form Validation</h1>
        <div className="formContainer">
          <form
            className="validationForm"
            onSubmit={(e) => {
              this.handleSubmit(e, isFormValid);
            }}
          >
            {" "}
            <label className="validationLabel">
              Name:
              <input
                className="validationInput name"
                type="text"
                value={nameInput}
                onChange={this.handleNameChange}
              />
            </label>
            <label className="validationLabel">
              Email:
              <input
                className="validationInput email"
                type="text"
                value={emailInput}
                onChange={this.handleEmailChange}
              />
            </label>
            <label className="validationLabel">
              Phone:
              <input
                className="validationInput phone"
                type="text"
                value={phoneInput}
                onChange={this.handlePhoneChange}
              />
            </label>
            <label className="validationLabel">
              Blog URL:
              <input
                className="validationInput url"
                type="url"
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
      </div>
    );
  }
}

export default Form;
