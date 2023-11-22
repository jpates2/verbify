import { useContext } from "react";
import UserDetailsContext from "../store/UserDetailsContext";
import BuddyContext from "../store/BuddyContext";

export default function Header() {
  const buddyCtx = useContext(BuddyContext);
  const userDetailsCtx = useContext(UserDetailsContext);
  console.log("header:", buddyCtx)
  return (
    <section>
      <div>Profile</div>
      <div>{userDetailsCtx.username}</div>
      <div>{buddyCtx.buddyName}</div>
      <img src={buddyCtx.buddyImg} alt="buddy" />
    </section>
  )
}
