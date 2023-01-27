// thats class React Component

import React from "react";
import { Link } from "react-router-dom";

class AuthForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: {},
      password: {},
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleOnChange(e) {
    const { name, value, validationMessage, validity } = e.target;
    const isFormValid = e.target.closest("form").checkValidity();
    this.setState({
      [name]: {
        value: value,
        validationMessage: validationMessage,
        isValid: validity.valid,
      },
    });
    this.setState({
      hasInvalidInput: !isFormValid,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    
    this.props.onSubmition({
      email: this.state.email.value,
      password: this.state.password.value,
    });
  }

  render() {
    return (
      <div
        className={
          (this.props.type === "login" && "login") || (this.props.type === "register" && "register")
        }
      >
        <form className="auth__form" onSubmit={this.handleSubmit} noValidate>
          <h2 className="auth__title">
            {(this.props.type === "login" && "Вход") ||
              (this.props.type === "register" && "Регистрация")}
          </h2>
          <input
            value={this.state.email.value || ""}
            onChange={this.handleOnChange}
            className="input auth__input auth__input_type_email"
            name="email"
            id="login-email"
            placeholder="Email"
            type="email"
            minLength="4"
            maxLength="320"
            required
          />
          <span className="popup__error-message popup__error-message_type_email">
            {this.state.email.validationMessage}
          </span>
          <input
            value={this.state.password.value || ""}
            onChange={this.handleOnChange}
            className="input auth__input auth__input_type_password"
            name="password"
            id="login-password"
            placeholder="Пароль"
            type="password"
            minLength="2"
            maxLength="320"
            required
          />
          <span className="popup__error-message popup__error-message_type_password">
            {this.state.password.validationMessage}
          </span>
          <button
            className={`button auth__submit-button ${
              (this.state.hasInvalidInput || this.props.isLoading) && `popup__submit-button_type_disable`
            }`}
            type="submit"
            disabled={this.state.hasInvalidInput || this.props.isLoading}
          >
            {(this.props.type === "login" 
              && (this.props.isLoading ? "Вхожу..." : "Войти")) ||
             (this.props.type === "register" 
              && (this.props.isLoading ? "Регистрация..." : "Зарегестрироваться"))
            }
          </button>
          {this.props.type === "register" && (
            <p className="register__login-proposal">
              Уже зарегестрированы?{" "}
              <Link className="link button register__link" to="/sign-in">
                Войти
              </Link>
            </p>
          )}
        </form>
      </div>
    );
  }
}

export default AuthForm;
