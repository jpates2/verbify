import { motion } from 'framer-motion';
import { useState } from 'react';
import Input from '../layout/Input';
import { useInput } from '../hooks/useInput';
import { isEmail, hasMinLength, isNotEmpty } from '../util/validation';
import classes from "./SuggestionsForm.module.css";

export default function Suggestions() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formSent, setFormSent] = useState(false);

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
    value: emailValue,
    isValid: emailIsValid,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    handleInputSubmit: handleEmailSubmit,
    handleInputReset: handleEmailReset,
    hasError: emailHasError
  } = useInput("", (value => isEmail(value) && hasMinLength(value, 6)))


  const {
    value: commentsValue,
    isValid: commentsIsValid,
    handleInputChange: handleCommentsChange,
    handleInputBlur: handleCommentsBlur,
    handleInputSubmit: handleCommentsSubmit,
    handleInputReset: handleCommentsReset,
    hasError: commentsHasError
  } = useInput("", (value => hasMinLength(value, 10)))

  let formIsValid;
  formIsValid = nameIsValid && emailIsValid && commentsIsValid;

  async function submitSuggestion() {
    await fetch(`https://verbify-94228-default-rtdb.europe-west1.firebasedatabase.app/suggestions.json`, {
      method: "POST",
      body: JSON.stringify({name: nameValue, email:emailValue, comment: commentsValue})
    })
  }

  function handleSubmit(event) {
    event.preventDefault();
    setFormSubmitted(true);
    setFormSubmitting(true);

    handleNameSubmit();
    handleEmailSubmit();
    handleCommentsSubmit();

    if (!formIsValid) {return};

    handleNameReset();
    handleEmailReset();
    handleCommentsReset();
    setFormSubmitted(false);
    submitSuggestion();
    setFormSent(true);
    console.log(emailValue, nameValue, commentsValue);
  }

  return (
    <div className={classes["suggestions-form__container"]}>
      <form onSubmit={handleSubmit} className={classes["suggestions-form"]}>

        <div className={classes["suggestions-form__details"]}>
          <Input
            label="Name"
            id="name"
            type="text"
            tag="input"
            value={nameValue}
            className={nameHasError ? `${classes["suggestions-form__name"]} ${classes["suggestions-form__invalid"]}` : `${classes["suggestions-form__name"]}`}
            onChange={handleNameChange}
            onBlur={handleNameBlur}
          />
        </div>
        <div className={classes["suggestions-form__details"]}>
          <Input
            label="Email"
            id="email"
            type="email"
            tag="input"
            value={emailValue}
            className={emailHasError ? `${classes["suggestions-form__email"]} ${classes["suggestions-form__invalid"]}` : `${classes["suggestions-form__email"]}`}
            onChange={handleEmailChange}
            onBlur={handleEmailBlur}
          />
        </div>
        <div className={classes["suggestions-form__details"]}>
          <Input
            label="Comments"
            id="comments"
            type="text"
            tag="textarea"
            value={commentsValue}
            className={commentsHasError ? `${classes["suggestions-form__comments"]} ${classes["suggestions-form__invalid"]}` : `${classes["suggestions-form__comments"]}`}
            onChange={handleCommentsChange}
            onBlur={handleCommentsBlur}
          />
        </div>
        <div className={classes["suggestions-form__details"]}>
          <div></div>
          <motion.button
            className={classes["suggestions-form__button"]}
            whileHover={{
              scale: 1.1,
              transition: {
                duration: 0.3
              }
            }}
            whileTap={{
              scale: 0.9,
              backgroundColor: "#FFB400",
              color: "#F4442E"
            }}
          >Send</motion.button>
        </div>
        <div className={classes["suggestions-form__details"]}>
          <div></div>
          <p className={formSubmitted ? `${classes["suggestions-form__error"]}` : `${classes["suggestions-form__error-hidden"]}`}>Please fill in highlighted fields.</p>
          {/* <p className={(!formSubmitted && !formSent && formSubmitting) ? `${classes["suggestions-form__error"]}` : `${classes["suggestions-form__error-hidden"]}`}>Sending...</p> */}
          <div></div>
          <p className={(!formSubmitted && formSent) ? `${classes["suggestions-form__error"]}` : `${classes["suggestions-form__error-hidden"]}`}>Received - Thanks for your suggestion!</p>
        </div>
      </form>

    </div>
  )
}
