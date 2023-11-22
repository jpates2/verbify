import { useContext } from "react";
import UserDetailsContext from "../store/UserDetailsContext";
import BuddyContext from "../store/BuddyContext";
import { buddyInfo } from "../info/buddy-info";

export default function Header() {
  const buddyCtx = useContext(BuddyContext);
  const userDetailsCtx = useContext(UserDetailsContext);



  return (
    <section>
      <div>Profile</div>
      <div>{userDetailsCtx.username}</div>
      {/* <img src={buddyInfo[buddyCtx.buddy].image} alt="buddy" /> */}
    </section>
  )
}
