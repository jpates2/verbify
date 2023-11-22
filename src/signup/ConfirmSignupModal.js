import { useContext } from "react";
import BuddyContext from "../store/BuddyContext";
import UserDetailsContext from "../store/UserDetailsContext";

export default function ConfirmSignupModal({ userName }) {
  const buddyCtx = useContext(BuddyContext);
  const userDetailsCtx = useContext(UserDetailsContext);

  return (
    <div>
      <div>¡Hola {userDetailsCtx.fullName}!</div>
      <div>My name is {buddyCtx.buddy}</div>
    </div>
  )
}
