import { useContext } from "react";
import Context from "../store/context.js";
import classes from "./Score.module.css";

export default function Score({ correctAnswers, questionsAnswered }) {
  const ctx = useContext(Context);

  let scoreClass;
  if (ctx.go === true) {
    scoreClass = `${classes["scorer__score"]}`
  }
  if (ctx.go === false) {
    scoreClass = `${classes["scorer__score"]} ${classes["scorer__score-hidden"]}`
  }

  return (
    <div>
      <div className={classes["scorer__title"]}>Score</div>
      <div className={scoreClass}>{correctAnswers} / {questionsAnswered}</div>
    </div>
  )
}
