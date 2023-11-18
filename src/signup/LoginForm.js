import { useInput } from '../hooks/useInput';
import { isEmail, hasMinLength, isNotEmpty } from '../util/validation';
import Input from "../layout/Input";
import classes from "./LoginForm.module.css";
import styles from "../styles/forms.module.css";
import LoginFormButton from './LoginFormButton';

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

  function handleLogin(event) {
    event.preventDefault();
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
            // value={nameValue}
            className={nameHasError ? `${styles["form__input"]} ${styles["form__invalid"]}` : `${styles["form__input"]}`}
            // onChange={handleNameChange}
            // onBlur={handleNameBlur}
          />
        </div>
        <div className={styles["form__details"]}>
          <Input
            label="Password"
            id="password"
            type="password"
            tag="input"
            // value={nameValue}
            className={nameHasError ? `${styles["form__input"]} ${styles["form__invalid"]}` : `${styles["form__input"]}`}
            // onChange={handleNameChange}
            // onBlur={handleNameBlur}
          />
        </div>
        <LoginFormButton />
      </form>
    </div>
  )
}
