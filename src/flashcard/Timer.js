import { useContext, useState, useEffect } from "react";
import Context from "../store/context.js";
import classes from "./Timer.module.css";

export default function Timer() {
  const ctx = useContext(Context);
  const ctxTime = ctx.timer * 60;
  const [counter, setCounter] = useState(ctxTime)

  function formatTime (time) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    const formattedSeconds = seconds.toLocaleString('en-US', {
      minimumIntegerDigits: 2,
      useGrouping: false
    })
    return `${minutes} : ${formattedSeconds}`
  }

  useEffect(() => {
    let timer;
    if (ctx.go === true && counter > 0) {
      timer = setTimeout(() => setCounter(c => c - 1), 1000);
    }

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [counter, ctx.go]);

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
      <div className={timerClass}>{formatTime(counter)}</div>
    </div>
  )
}
