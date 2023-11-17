import Input from "../layout/Input";
import { useInput } from '../hooks/useInput';
import { isEmail, hasMinLength, isNotEmpty } from '../util/validation';
import classes from "./LoginForm.module.css";

export default function LoginForm() {

  const {
    value: nameValue,
    isValid: nameIsValid,
    handleInputChange: handleNameChange,
    handleInputBlur: handleNameBlur,
    handleInputSubmit: handleNameSubmit,
    handleInputReset: handleNameReset,
    hasError: nameHasError
  } = useInput("", (value => isNotEmpty(value)))


  return (
    <div>
      <form className={classes["signup-form"]}>
        <div className={classes["signup-form__details"]}>
          <Input
            label="Name"
            id="name"
            type="text"
            tag="input"
            // value={nameValue}
            className={nameHasError ? `${classes["signup-form__input"]} ${classes["signup-form__invalid"]}` : `${classes["signup-form__input"]}`}
            // onChange={handleNameChange}
            // onBlur={handleNameBlur}
          />
        </div>
        <div className={classes["signup-form__details"]}>
          <Input
            label="Phone"
            id="phone"
            type="text"
            tag="input"
            // value={nameValue}
            className={nameHasError ? `${classes["signup-form__input"]} ${classes["signup-form__invalid"]}` : `${classes["signup-form__input"]}`}
            // onChange={handleNameChange}
            // onBlur={handleNameBlur}
          />
        </div>
        <div className={classes["signup-form__details"]}>
          <Input
            label="Email"
            id="email"
            type="text"
            tag="input"
            // value={nameValue}
            className={nameHasError ? `${classes["signup-form__input"]} ${classes["signup-form__invalid"]}` : `${classes["signup-form__input"]}`}
            // onChange={handleNameChange}
            // onBlur={handleNameBlur}
          />
        </div>
        <div className={classes["signup-form__details"]}>
          <Input
            label="Password"
            id="password"
            type="password"
            tag="input"
            // value={nameValue}
            className={nameHasError ? `${classes["signup-form__input"]} ${classes["signup-form__invalid"]}` : `${classes["signup-form__input"]}`}
            // onChange={handleNameChange}
            // onBlur={handleNameBlur}
          />
        </div>
        <div className={classes["signup-form__details"]}>
          <Input
            label="Confirm Password"
            id="confirm-password"
            type="password"
            tag="input"
            // value={nameValue}
            className={nameHasError ? `${classes["signup-form__input"]} ${classes["signup-form__invalid"]}` : `${classes["signup-form__input"]}`}
            // onChange={handleNameChange}
            // onBlur={handleNameBlur}
          />
        </div>
      </form>
    </div>
  )
}
