import classes from "./ActionButton.module.css";
import { Link } from "react-router-dom";

export default function ActionButton({ verb }) {
  return (
    <div className={classes["verb__action-button-container"]}>
      <Link to={`/flashcards/${verb}`}><button className={classes["verb__action-button"]}>
        Go to Flashcards
      </button></Link>
    </div>
  )
}
