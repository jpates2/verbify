import { Link } from "react-router-dom";
import classes from "./EndingModal.module.css";

export default function EndingModal({ correctAnswers, questionsAnswered }) {
  const scorePercent = questionsAnswered > 0 ? Math.round((correctAnswers / questionsAnswered) * 100) : 0;

  return (
    <div className={classes["ending-modal__container"]}>
      <div className={classes["ending-modal__score-container"]}>
        <div className={classes["ending-modal__score-title"]}>Your Score:</div>
        <div className={classes["ending-modal__score"]}>{scorePercent}%</div>
      </div>
      <div className={classes["ending-modal__info-container"]}>
        <div>Correct Answers: {correctAnswers}</div>
        <div>Total Questions: {questionsAnswered}</div>
      </div>
      <div className={classes["ending-modal__button-container"]}>
        <Link to="/flashcards"><button className={classes["ending-modal__button"]}>Back To Flashcards</button></Link>
      </div>
    </div>
  )
}
