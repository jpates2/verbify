import { motion } from 'framer-motion';
import classes from "./SuggestionsForm.module.css";

export default function Suggestions() {
  function submitHandler(event) {
    event.preventDefault();
  }

  return (
    <div className={classes["suggestions-form__container"]}>
      <form onSubmit={submitHandler} className={classes["suggestions-form"]}>
        <div className={classes["suggestions-form__details"]}>
          <label>
            Name
          </label>
          <input type="text" className={classes["suggestions-form__name"]} />
        </div>
        <div className={classes["suggestions-form__details"]}>
          <label>
            Email
          </label>
          <input type="text" className={classes["suggestions-form__email"]} />
        </div>
        <div className={classes["suggestions-form__details"]}>
          <label>
            Comments
          </label>
          <input type="text" className={classes["suggestions-form__comments"]} />
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
      </form>

    </div>
  )
}
