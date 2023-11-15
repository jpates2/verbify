import Timer from "./Timer";
import Score from "./Score";
import classes from "./Info.module.css";

export default function Info({ correctAnswers, questionsAnswered, onUpdateTimer }) {
  return (
    <div className={classes["info__container"]}>
      <Timer onUpdateTimer={onUpdateTimer} />
      <Score correctAnswers={correctAnswers} questionsAnswered={questionsAnswered} />
    </div>
  )
}
