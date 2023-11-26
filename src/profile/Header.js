import classes from "./Header.module.css";

export default function Header({ localSignupDetails }) {
  return (
    <section className={classes["profile__header"]}>
      <div className={classes["profile__header-title"]}>Profile</div>
      <div className={classes["profile__header-username"]}>{localSignupDetails.username}</div>
      <div className={classes["profile__header-image-container"]}>
        <img src={localSignupDetails.buddyImg} alt="buddy" className={classes["profile__header-image"]} />
      </div>
    </section>
  )
}
