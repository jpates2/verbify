import { useContext } from "react";
import UserDetailsContext from "../store/UserDetailsContext";
import BuddyContext from "../store/BuddyContext";
import { useSelector } from 'react-redux';

export default function Header() {
  const buddyDetails = useSelector(state => state.buddy);

  // const buddyCtx = useContext(BuddyContext);
  const userDetailsCtx = useContext(UserDetailsContext);

  return (
    <section>
      <div>Profile</div>
      <div>{userDetailsCtx.username}</div>
      <div>{buddyDetails.buddyName}</div>
      <img src={buddyDetails.buddyImg} alt="buddy" />
    </section>
  )
}
