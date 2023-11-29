import styles from "../styles/profile.module.css";
import classes from "./EditDetailsModal.module.css";
import { useInput } from '../hooks/useInput';
import { isEmail, hasMinLength, isNotEmpty } from '../util/validation';
import Input from "../layout/Input";
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from "../store/user-slice";

export default function EditDetailsModal({ onEdit }) {
  const dispatch = useDispatch();
  const userDetailsRedux = useSelector(state => state.user);
  const userDetails = JSON.parse(localStorage.getItem('signupDetails')) || "";

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
  } = useInput(userDetails.phone, (value => hasMinLength(value, 6)))

  const {
    value: emailValue,
    isValid: emailIsValid,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    handleInputSubmit: handleEmailSubmit,
    hasError: emailHasError
  } = useInput(userDetails.email, (value => isEmail(value)))

  const {
    value: passwordValue,
    isValid: passwordIsValid,
    handleInputChange: handlePasswordChange,
    handleInputBlur: handlePasswordBlur,
    handleInputSubmit: handlePasswordSubmit,
    hasError: passwordHasError
  } = useInput(userDetails.password, (value => hasMinLength(value, 6)))

  let formIsValid;
  formIsValid = fullNameIsValid && phoneIsValid && emailIsValid && passwordIsValid;

  async function editDetailsDatabase () {
    const user = userDetails.username;

    const response = await fetch("https://verbify-94228-default-rtdb.europe-west1.firebasedatabase.app/users.json");

    if (!response.ok) { throw new Error("Failed to load data.") }

    const userData = await response.json();
    const userId = Object.keys(userData[user])[0];

    await fetch(`https://verbify-94228-default-rtdb.europe-west1.firebasedatabase.app/users/${user}/${userId}.json`, {
      method: "PATCH",
      body: JSON.stringify({
        fullName: fullNameValue,
        phone: phoneValue,
        email: emailValue,
        password: passwordValue
      })
    })
  }

  function editUserRedux () {
    dispatch(userActions.addUser({
      fullName: fullNameValue,
      phone: phoneValue,
      email: emailValue,
      password: passwordValue
    }))
  }

  function handleEditSubmit(event) {
    event.preventDefault();
    handleFullNameSubmit();
    handlePhoneSubmit();
    handleEmailSubmit();
    handlePasswordSubmit();

    if (!formIsValid) { return }

    const editedDetails = {
      ...userDetails,
      fullName: fullNameValue,
      phone: phoneValue,
      email: emailValue,
      password: passwordValue
    }

    localStorage.setItem("signupDetails", JSON.stringify(editedDetails));
    editDetailsDatabase();
    editUserRedux();

    onEdit(false);
  }

  console.log(userDetailsRedux);

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
            className={fullNameHasError ? `${classes["edit__form-details-input"]} ${classes["input__invalid"]}` : `${classes["edit__form-details-input"]}`}
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
            className={phoneHasError ? `${classes["edit__form-details-input"]} ${classes["input__invalid"]}` : `${classes["edit__form-details-input"]}`}
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
            className={emailHasError ? `${classes["edit__form-details-input"]} ${classes["input__invalid"]}` : `${classes["edit__form-details-input"]}`}
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
            className={passwordHasError ? `${classes["edit__form-details-input"]} ${classes["input__invalid"]}` : `${classes["edit__form-details-input"]}`}
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
