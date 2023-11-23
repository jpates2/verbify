import { useSelector } from 'react-redux';
import buddyOne from "../assets/images/buddy1.png";
import classes from "./Header.module.css";

export default function Header() {
  const buddyDetails = useSelector(state => state.buddy);
  const userDetails = useSelector(state => state.user);


  return (
    <section className={classes["profile__header"]}>
      <div className={classes["profile__header-title"]}>Profile</div>
      <div className={classes["profile__header-username"]}>dizzy_wolf_93</div>
      <div className={classes["profile__header-image-container"]}>
        <img src={buddyOne} alt="buddy" className={classes["profile__header-image"]} />
      </div>
    </section>
  )

  // return (
  //   <section>
  //     <div>Profile</div>
  //     <div>{userDetails.username}</div>
  //     <div>{userDetails.fullName}</div>
  //     <div>{buddyDetails.buddyName}</div>
  //     <img src={buddyDetails.buddyImg} alt="buddy" />
  //   </section>
  // )
}
