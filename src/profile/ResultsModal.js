import Result from "./Result";
import classes from "./ResultsModal.module.css";
import styles from "../styles/profile.module.css";

export default function ResultsModal({ results, onClose }) {
  return (
    <div className={classes["results__modal-container"]}>
      <div className={classes["results__modal-title"]}>Results</div>
      {results.map((sum, i) => (
        <Result key={i} score={sum.score} type={sum.infinitive === "" ? `${sum.tense} - ${sum.subtense}` : (sum.infinitive.charAt(0).toUpperCase() + sum.infinitive.slice(1)) } />
      ))}
      <div className={classes["results__modal-button-container"]}>
        <button onClick={onClose} className={styles["profile__button"]}>Close</button>
      </div>
    </div>
  )
}
