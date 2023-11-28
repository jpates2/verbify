import { useEffect, useRef, useState } from "react";
import styles from "../styles/profile.module.css";
import classes from "./EditDetailsModal.module.css";
import { useInput } from '../hooks/useInput';
import { isEmail, hasMinLength, isNotEmpty } from '../util/validation';
import Input from "../layout/Input";

export default function EditDetailsModal() {
  const userDetails = JSON.parse(localStorage.getItem('signupDetails')) || "";
  const [formDetails, setFormDetails] = useState(userDetails);

  const {
    value: fullNameValue,
    isValid: fullNameIsValid,
    handleInputChange: handleFullNameChange,
    handleInputBlur: handleFullNameBlur,
    handleInputSubmit: handleFullNameSubmit,
    hasError: fullNameHasError
  } = useInput(userDetails.fullName, (value => isNotEmpty(value)))

  const {
    value: phoneValue,
    isValid: phoneIsValid,
    handleInputChange: handlePhoneChange,
    handleInputBlur: handlePhoneBlur,
    handleInputSubmit: handlePhoneSubmit,
    hasError: phoneHasError
  } = useInput(userDetails.phone, (value => isNotEmpty(value)))

  const {
    value: emailValue,
    isValid: emailIsValid,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    handleInputSubmit: handleEmailSubmit,
    hasError: emailHasError
  } = useInput(userDetails.email, (value => isNotEmpty(value)))

  const {
    value: passwordValue,
    isValid: passwordIsValid,
    handleInputChange: handlePasswordChange,
    handleInputBlur: handlePasswordBlur,
    handleInputSubmit: handlePasswordSubmit,
    hasError: passwordHasError
  } = useInput(userDetails.password, (value => isNotEmpty(value)))

  function handleEditSubmit(event) {
    event.preventDefault();

    const editedDetails = {
      ...userDetails,
      fullName: fullNameValue,
      phone: phoneValue,
      email: emailValue,
      password: passwordValue
    }

    console.log(editedDetails);
    console.log("check");

    localStorage.setItem("signupDetails", JSON.stringify(editedDetails));
  }

  return (
    <div className={classes["edit__container"]}>
      <div className={classes["edit__title"]}>Edit Details</div>
      <form onSubmit={handleEditSubmit}>
        <div className={classes["edit__form-details"]}>
          <Input
            label="Name"
            id="name"
            type="text"
            tag="input"
            value={fullNameValue}
            onChange={handleFullNameChange}
            onBlur={handleFullNameBlur}
          />
        </div>
        <div className={classes["edit__form-details"]}>
          <Input
            label="Phone"
            id="phone"
            type="text"
            tag="input"
            value={phoneValue}
            onChange={handlePhoneChange}
            onBlur={handlePhoneBlur}
          />
        </div>
        <div className={classes["edit__form-details"]}>
          <Input
            label="Email"
            id="email"
            type="text"
            tag="input"
            value={emailValue}
            onChange={handleEmailChange}
            onBlur={handleEmailBlur}
          />
        </div>
        <div className={classes["edit__form-details"]}>
          <Input
            label="Password"
            id="password"
            type="password"
            tag="input"
            value={passwordValue}
            onChange={handlePasswordChange}
            onBlur={handlePasswordBlur}
          />
        </div>
        <div className={classes["edit__button-container"]}>
          <button className={styles["profile__button"]}>Submit</button>
        </div>
      </form>
    </div>
  )
}
