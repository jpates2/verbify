import { useContext } from "react";
import Context from "../store/context.js";
import classes from "./Timer.module.css";

export default function Timer() {
  const ctx = useContext(Context);

  let timerClass;
  if (ctx.go === true) {
    timerClass = `${classes["timer__time"]}`
  }
  if (ctx.go === false) {
    timerClass = `${classes["timer__time"]} ${classes["timer__time-hidden"]}`
  }

  return (
    <div>
      <div className={classes["timer__title"]}>Timer</div>
      <div className={timerClass}>{ctx.timer}</div>
    </div>
  )
}
