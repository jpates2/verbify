import { useState } from "react";
import { useInput } from '../hooks/useInput';
import LoginFormButton from './LoginFormButton';
import Input from "../layout/Input";
import { isEmail, hasMinLength, isNotEmpty } from '../util/validation';
import classes from "./LoginForm.module.css";
import styles from "../styles/forms.module.css";

export default function LoginForm() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const {
    value: emailValue,
    isValid: emailIsValid,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    handleInputSubmit: handleEmailSubmit,
    handleInputReset: handleEmailReset,
    hasError: emailHasError
  } = useInput("", (value => isEmail(value) && hasMinLength(value, 6)))

  const {
    value: passwordValue,
    isValid: passwordIsValid,
    handleInputChange: handlePasswordChange,
    handleInputBlur: handlePasswordBlur,
    handleInputSubmit: handlePasswordSubmit,
    handleInputReset: handlePasswordReset,
    hasError: passwordHasError
  } = useInput("", (value => isNotEmpty(value)))

  let formIsValid;
  formIsValid = emailIsValid && passwordIsValid;

  function handleLogin(event) {
    event.preventDefault();

    handleEmailSubmit();
    handlePasswordSubmit();

    if (!formIsValid) {return};

    setFormSubmitted(true);
    handleEmailReset();
    handlePasswordReset();
  }

  return (
    <div>
      <form onSubmit={handleLogin} className={classes["login-form"]}>
        <div className={styles["form__details"]}>
          <Input
            label="Email"
            id="email"
            type="text"
            tag="input"
            value={emailValue}
            className={emailHasError ? `${styles["form__input"]} ${styles["form__invalid"]}` : `${styles["form__input"]}`}
            onChange={handleEmailChange}
            onBlur={handleEmailBlur}
          />
        </div>
        <div className={styles["form__details"]}>
          <Input
            label="Password"
            id="password"
            type="password"
            tag="input"
            value={passwordValue}
            className={passwordHasError ? `${styles["form__input"]} ${styles["form__invalid"]}` : `${styles["form__input"]}`}
            onChange={handlePasswordChange}
            onBlur={handlePasswordBlur}
          />
        </div>
        <LoginFormButton />
      </form>
    </div>
  )
}
