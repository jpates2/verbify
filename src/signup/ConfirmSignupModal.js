import { useContext } from "react";
import BuddyContext from "../store/BuddyContext";
import UserDetailsContext from "../store/UserDetailsContext";
import classes from "./ConfirmSignupModal.module.css";
import { buddyInfo } from "../info/buddy-info";

export default function ConfirmSignupModal({ onConfirmSignup }) {
  const buddyCtx = useContext(BuddyContext);
  const userDetailsCtx = useContext(UserDetailsContext);

  const userBuddy = buddyInfo.filter(buddy => {
    return buddy.buddyName === buddyCtx.buddy;
  })

  console.log(userBuddy[0].image);

  return (
    <div className={classes["confirm-modal__container"]}>
      <div className={classes["confirm-modal__greeting"]}>¡Hola {userDetailsCtx.fullName}!</div>
      <img src={userBuddy[0].image} alt="buddy" className={classes["confirm-modal__image"]} />
      <div>
        <div className={classes["confirm-modal__intro"]}>My name is {buddyCtx.buddy}.</div>
        <div>I'm here to help you learn and keep you on track!</div>
      </div>
      <div className={classes["confirm-modal__button-container"]}>
        <button onClick={onConfirmSignup} className={classes["confirm-modal__button"]}>Let's Go!</button>
      </div>
    </div>
  )
}
