import { useState } from "react";
import { useInput } from '../hooks/useInput';
import Input from "../layout/Input";
import LoginFormButton from "./LoginFormButton";
import Modal from "../layout/Modal";
import { isEmail, hasMinLength, isNotEmpty } from '../util/validation';
import classes from "./SignupForm.module.css";
import styles from "../styles/forms.module.css";
import UsernameModal from "./UsernameModal";
import BuddyModal from "./BuddyModal";
import ConfirmSignupModal from "./ConfirmSignupModal";

import { useDispatch, useSelector } from 'react-redux';
import { userActions } from "../store/user-slice";

export default function SignupForm({ onSignupStatus }) {
  const dispatch = useDispatch();
  const buddyDetails = useSelector(state => state.buddy);
  const userDetails = useSelector(state => state.user);
  const signupDetails = { ...userDetails, ...buddyDetails };

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [usernameGenerated, setUsernameGenerated] = useState(false);
  const [buddySelected, setBuddySelected] = useState(false);
  // const [signupInProgress, setSignupInProgress] = useState(false);

  function handleUsernameCreation() {
    setUsernameGenerated(true);
    setFormSubmitted(false);
  }

  function handleBuddySelected() {
    setBuddySelected(true);
    setUsernameGenerated(false);
  }

  async function submitUserDetails() {
    await fetch(`https://verbify-94228-default-rtdb.europe-west1.firebasedatabase.app/users/${userDetails.username}.json`, {
      method: "POST",
      body: JSON.stringify(signupDetails)
    })
    await fetch("https://verbify-94228-default-rtdb.europe-west1.firebasedatabase.app/usernames.json", {
      method: "POST",
      body: JSON.stringify(signupDetails.username)
    })
    await fetch("https://verbify-94228-default-rtdb.europe-west1.firebasedatabase.app/emails.json", {
      method: "POST",
      body: JSON.stringify(signupDetails.email)
    })
  }

  function handleConfirmSignup() {
    setBuddySelected(false);
    onSignupStatus(false);
    submitUserDetails();
    localStorage.setItem('signupDetails', JSON.stringify(signupDetails));
    localStorage.setItem('loggedInStatus', JSON.stringify({ loggedInStatus: true }));
  }

  const {
    value: nameValue,
    isValid: nameIsValid,
    handleInputChange: handleNameChange,
    handleInputBlur: handleNameBlur,
    handleInputSubmit: handleNameSubmit,
    handleInputReset: handleNameReset,
    hasError: nameHasError
  } = useInput("", (value => isNotEmpty(value)))

  const {
    value: phoneValue,
    isValid: phoneIsValid,
    handleInputChange: handlePhoneChange,
    handleInputBlur: handlePhoneBlur,
    handleInputSubmit: handlePhoneSubmit,
    handleInputReset: handlePhoneReset,
    hasError: phoneHasError
  } = useInput("", (value => hasMinLength(value, 6)))

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
  } = useInput("", (value => hasMinLength(value, 6)))

  const {
    value: confirmValue,
    isValid: confirmIsValid,
    handleInputChange: handleConfirmChange,
    handleInputBlur: handleConfirmBlur,
    handleInputSubmit: handleConfirmSubmit,
    handleInputReset: handleConfirmReset,
    hasError: confirmHasError
  } = useInput("", (value => hasMinLength(value, 6)))

  let formIsValid;
  formIsValid = nameIsValid && phoneIsValid && emailIsValid && passwordIsValid && confirmIsValid;

  function setUser() {
    dispatch(userActions.addUser({
      fullName: nameValue,
      phone: phoneValue,
      email: emailValue,
      password: passwordValue
    }))
  }

  function handleSignup(event) {
    event.preventDefault();
    onSignupStatus(true);

    handleNameSubmit();
    handlePhoneSubmit();
    handleEmailSubmit();
    handlePasswordSubmit();
    handleConfirmSubmit();
    setFormSubmitted(true);

    if (!formIsValid) {return};

    setUser();

    handleNameReset();
    handlePhoneReset();
    handleEmailReset();
    handlePasswordReset();
    handleConfirmReset();
  }

  return (
    <div>
      {formSubmitted &&
        <Modal>
          <UsernameModal onUsernameCreation={handleUsernameCreation} />
        </Modal>
      }
      {usernameGenerated &&
        <Modal>
          <BuddyModal onBuddySelected={handleBuddySelected} />
        </Modal>
      }
      {buddySelected &&
        <Modal>
          <ConfirmSignupModal onConfirmSignup={handleConfirmSignup} />
        </Modal>
      }
      <form onSubmit={handleSignup} className={classes["signup-form"]}>
        <div className={styles["form__details"]}>
          <Input
            label="Name"
            id="name"
            type="text"
            tag="input"
            value={nameValue}
            className={nameHasError ? `${styles["form__input"]} ${styles["form__invalid"]}` : `${styles["form__input"]}`}
            onChange={handleNameChange}
            onBlur={handleNameBlur}
          />
        </div>
        <div className={styles["form__details"]}>
          <Input
            label="Phone"
            id="phone"
            type="text"
            tag="input"
            value={phoneValue}
            className={phoneHasError ? `${styles["form__input"]} ${styles["form__invalid"]}` : `${styles["form__input"]}`}
            onChange={handlePhoneChange}
            onBlur={handlePhoneBlur}
          />
        </div>
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
            className={(passwordHasError || passwordValue !== confirmValue) ? `${styles["form__input"]} ${styles["form__invalid"]}` : `${styles["form__input"]}`}
            onChange={handlePasswordChange}
            onBlur={handlePasswordBlur}
          />
        </div>
        <div className={styles["form__details"]}>
          <Input
            label="Confirm Password"
            id="confirm-password"
            type="password"
            tag="input"
            value={confirmValue}
            className={(confirmHasError || passwordValue !== confirmValue) ? `${styles["form__input"]} ${styles["form__invalid"]}` : `${styles["form__input"]}`}
            onChange={handleConfirmChange}
            onBlur={handleConfirmBlur}
          />
        </div>
        <LoginFormButton />
      </form>
    </div>
  )
}
