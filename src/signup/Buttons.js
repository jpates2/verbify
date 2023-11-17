import classes from "./Buttons.module.css";

export default function Buttons({ onFilter,filter }) {

  const activeClass = `${classes["signup__button"]} ${classes["signup__button-active"]}`;
  const inactiveClass = classes["signup__button"];

  return (
    <div className={classes["buttons__container"]}>
      <button onClick={() => onFilter("signup")} className={filter === "signup" ? activeClass : inactiveClass}>Sign Up</button>
      <button onClick={() => onFilter("login")} className={filter === "login" ? activeClass : inactiveClass}>Login</button>
    </div>
  )
}
