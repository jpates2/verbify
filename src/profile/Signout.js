import { Link } from "react-router-dom";
import styles from "../styles/profile.module.css";
import classes from "./Signout.module.css";

export default function Signout () {


  function handleSignout() {
    localStorage.clear();
  }

  return (
    <div className={classes["signout__button-container"]}>
      <Link to="/"><button onClick={handleSignout} className={styles["profile__button"]}>Signout</button></Link>
    </div>
  )
}
