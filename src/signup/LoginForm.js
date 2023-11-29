import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useInput } from '../hooks/useInput';
import LoginFormButton from './LoginFormButton';
import Input from "../layout/Input";
import { isEmail, hasMinLength, isNotEmpty } from '../util/validation';
import classes from "./LoginForm.module.css";
import styles from "../styles/forms.module.css";

export default function LoginForm({ emailsData }) {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [emails, setEmails] = useState(emailsData);
  const [validUser, setValidUser] = useState(false);
  const [correctPassword, setCorrectPassword] = useState(false);
  const [allDetails, setAllDetails] = useState({});
  const [loginUsername, setLoginUsername] = useState("");
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

  function checkLoginDetails () {
    if (emails.includes(emailValue)) {
      setValidUser(true);
      setErrorMessage("");
    } else {
      setErrorMessage("email");
      setValidUser(false);
    }
  }

  async function checkPassword(emailValue, passwordValue) {
    if (validUser) {
      const response = await fetch("https://verbify-94228-default-rtdb.europe-west1.firebasedatabase.app/users.json");

      if (!response.ok) { throw new Error("Failed to load data.") }

      const userData = await response.json();

      for (const userObject of Object.values(userData)) {
        for (const userDetails of Object.values(userObject)) {
          if (userDetails.email === emailValue) {
            setAllDetails(userDetails);
            setLoginUsername(userDetails.username);
            const storedPassword = userDetails.password;
            if (storedPassword === passwordValue) {
              setCorrectPassword(true);
            } else {
              setErrorMessage("password")
            }
          }
        }
      }
    }
  }

  let formIsValid;
  formIsValid = emailIsValid && passwordIsValid;

  function handleLogin(event) {
    event.preventDefault();

    checkLoginDetails();
    handleEmailSubmit();
    handlePasswordSubmit();

    if (!formIsValid || !validUser) {return};

    checkPassword(emailValue, passwordValue);

    if (!correctPassword) {return};

    setFormSubmitted(true);
    handleEmailReset();
    handlePasswordReset();
    localStorage.setItem('loggedInStatus', JSON.stringify({ loggedInStatus: true }));
    localStorage.setItem('signupDetails', JSON.stringify(allDetails));
    navigate(`/profile/${loginUsername}`);
  }

  let errorContent = "";
  if (errorMessage === "email") {
    errorContent = "Email does not exist. Please sign up."
  }
  if (errorMessage === "password") {
    errorContent = "Password incorrect. Please try again."
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
        <p>{errorContent}</p>
        <LoginFormButton />
      </form>
    </div>
  )
}
