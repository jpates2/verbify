import classes from "./PersonalDetails.module.css";
import styles from "../styles/profile.module.css";

export default function PersonalDetails({ onEditDetails, localSignupDetails }) {
  return (
    <section className={classes["details__section"]}>
      <div className={classes["details__container"]}>
        <div className={classes["details__title"]}>Personal Details</div>
        <div className={classes["details__grid"]}>
          <div className={classes["details__detail"]}>
            <div className={classes["details__category"]}>Name</div>
            <div className={classes["details__info"]}>{localSignupDetails.fullName}</div>
          </div>
          <div className={classes["details__detail"]}>
            <div className={classes["details__category"]}>Email</div>
            <div className={classes["details__info"]}>{localSignupDetails.email}</div>
          </div>
          <div className={classes["details__detail"]}>
            <div className={classes["details__category"]}>Phone</div>
            <div className={classes["details__info"]}>{localSignupDetails.phone}</div>
          </div>
          <div className={classes["details__detail"]}>
            <div className={classes["details__category"]}>Password</div>
            <div className={classes["details__info"]}>{"*".repeat(localSignupDetails.password.length)}</div>
          </div>
        </div>
        <div className={classes["details__button_container"]}>
          <button onClick={() => onEditDetails(true)} className={styles["profile__button"]}>Edit</button>
        </div>
      </div>
    </section>
  )
}
