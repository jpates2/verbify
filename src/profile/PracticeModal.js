import classes from "./PracticeModal.module.css";
import styles from "../styles/profile.module.css";

export default function PracticeModal({ pastErrors, onClose }) {
  return (
    <div className={classes["practice-modal__container"]}>
      <div className={classes["practice-modal__title"]}>Verb Bank</div>
      {pastErrors.map((error, i) => (
        <li key={i} className={classes["practice-modal__verb"]}>
        <div className={classes["practice-modal__inf"]}>{error[1]}</div>
        <div className={classes["practice-modal__conj"]}>{error[0]} {error[2]}</div>
      </li>
      ))}
      <div className={classes["practice-modal__button-container"]}>
        <button onClick={onClose} className={styles["profile__button"]}>Close</button>
      </div>
    </div>
  )
}
