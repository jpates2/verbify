import Result from "./Result";
import classes from "./ResultsModal.module.css";
import styles from "../styles/profile.module.css";

export default function ResultsModal({ results, onClose, onResult }) {

  return (
    <div className={classes["results__modal-container"]}>
      <div className={classes["results__modal-title"]}>Results</div>
      {results.map((result) => (
        <Result key={result.timestamp} score={result.score} correct={result.correct} incorrect={result.incorrect} timestamp={result.timestamp} date={result.date} type={result.infinitive === "" ? `${result.tense} - ${result.subtense}` : (result.infinitive.charAt(0).toUpperCase() + result.infinitive.slice(1))} onResult={() => onResult(result)} />
      ))}
      <div className={classes["results__modal-button-container"]}>
        <button onClick={onClose} className={styles["profile__button"]}>Close</button>
      </div>
    </div>
  )
}
