import { useContext } from "react";
import BuddyContext from "../store/BuddyContext";

export default function ConfirmSignupModal({ userName }) {
  const buddyCtx = useContext(BuddyContext);

  return (
    <div>
      <div>Hi {userName}!</div>
      <div>My name is {buddyCtx.buddy}</div>
    </div>
  )
}
