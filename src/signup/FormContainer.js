import { useState } from "react";
import Buttons from "./Buttons";
import classes from "./FormContainer.module.css";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";

export default function FormContainer() {
  const [signupFormFilter, setSignupFormFilter] = useState("signup");

  function handleFormFilter(input) {
    setSignupFormFilter(input)
  }

  return (
    <div className={classes["signup-form__container"]}>
      <Buttons onFilter={handleFormFilter} filter={signupFormFilter} />
      {signupFormFilter === "signup" && <SignupForm />}
      {signupFormFilter === "login" && <LoginForm />}
    </div>
  )
}
