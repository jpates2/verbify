import Timer from "./Timer";
import Score from "./Score";
import classes from "./Info.module.css";

export default function Info() {
  return (
    <div className={classes["info__container"]}>
      <Timer />
      <Score />
    </div>
  )
}
