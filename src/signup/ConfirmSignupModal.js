import { useContext } from "react";
import { Link } from "react-router-dom";
import BuddyContext from "../store/BuddyContext";
import UserDetailsContext from "../store/UserDetailsContext";
import classes from "./ConfirmSignupModal.module.css";

export default function ConfirmSignupModal({ onConfirmSignup }) {
  const buddyCtx = useContext(BuddyContext);
  const userDetailsCtx = useContext(UserDetailsContext);

  console.log("signup:", buddyCtx)

  return (
    <div className={classes["confirm-modal__container"]}>
      <div className={classes["confirm-modal__greeting"]}>¡Hola {userDetailsCtx.fullName}!</div>
      <img src={buddyCtx.buddyImg} alt="buddy" className={classes["confirm-modal__image"]} />
      <div>
        <div className={classes["confirm-modal__intro"]}>My name is {buddyCtx.buddyName}.</div>
        <div>I'm here to help you learn and keep you on track!</div>
      </div>
      <div className={classes["confirm-modal__button-container"]}>
        <Link to={`/profile/${userDetailsCtx.username}`}><button onClick={onConfirmSignup} className={classes["confirm-modal__button"]}>Let's Go!</button></Link>
      </div>
    </div>
  )
}
