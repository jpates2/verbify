import { useState } from "react";
import Buttons from "./Buttons";
import classes from "./FormContainer.module.css";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";

export default function FormContainer({ onSignupStatus, emailsData }) {
  const [signupFormFilter, setSignupFormFilter] = useState("signup");

  function handleFormFilter(input) {
    setSignupFormFilter(input)
  }

  return (
    <div className={classes["signup-form__container"]}>
      <Buttons onFilter={handleFormFilter} filter={signupFormFilter} />
      {signupFormFilter === "signup" && <SignupForm onSignupStatus={onSignupStatus} />}
      {signupFormFilter === "login" && <LoginForm emailsData={emailsData} />}
    </div>
  )
}
