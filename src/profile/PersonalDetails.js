import classes from "./PersonalDetails.module.css";

export default function PersonalDetails() {
  return (
    <section className={classes["details__section"]}>
      <div className={classes["details__container"]}>
        <div className={classes["details__title"]}>Personal Details</div>
        <div className={classes["details__grid"]}>
          <div className={classes["details__detail"]}>
            <div className={classes["details__category"]}>Name</div>
            <div className={classes["details__info"]}>Tom Riddle</div>
          </div>
          <div className={classes["details__detail"]}>
            <div className={classes["details__category"]}>Email</div>
            <div className={classes["details__info"]}>tomriddle@email.com</div>
          </div>
          <div className={classes["details__detail"]}>
            <div className={classes["details__category"]}>Phone</div>
            <div className={classes["details__info"]}>07121343456</div>
          </div>
          <div className={classes["details__detail"]}>
            <div className={classes["details__category"]}>Password</div>
            <div className={classes["details__info"]}>******</div>
          </div>
        </div>
      </div>
    </section>
  )
}
