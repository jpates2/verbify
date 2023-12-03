import classes from "./ResultModal.module.css";
import styles from "../styles/profile.module.css";

export default function ResultModal({ resultInfo, onAllResults }) {
  let content;
  if (resultInfo.infinitive) {
    content = (
      <>
        <div className={classes["result-modal__title"]}>{resultInfo.infinitive.charAt(0).toUpperCase() + resultInfo.infinitive.slice(1)}</div>
        <div className={classes["result-modal__score"]}>{resultInfo.score}%</div>
        <div>
          <div className={classes["result-modal__subheader"]}>Correct: {resultInfo.correct.length}</div>
          <ol className={classes["result-modal__list"]}>
            {resultInfo.correct.map((info, i) => (
              <li key={i} className={classes["result-grid-item"]}>
                <div className={classes["result-grid"]}><div className={classes["result-grid-bold"]}>Pronoun: </div><div>{info[0]}</div></div>
                <div className={classes["result-grid"]}><div className={classes["result-grid-bold"]}>Tense: </div><div>{info[4]} - {info[5]}</div></div>
                <div className={classes["result-grid"]}><div className={classes["result-grid-bold"]}>Answer: </div><div>{info[2]}</div></div>
              </li>
            ))}
          </ol>
        </div>
        <div>
          <div className={classes["result-modal__subheader"]}>Incorrect: {resultInfo.incorrect.length}</div>
          <ol className={classes["result-modal__list"]}>
            {resultInfo.incorrect.map((info, i) => (
              <li key={i} className={classes["result-grid-item"]}>
                <div className={classes["result-grid"]}><div className={classes["result-grid-bold"]}>Pronoun: </div><div>{info[0]}</div></div>
                <div className={classes["result-grid"]}><div className={classes["result-grid-bold"]}>Tense: </div><div>{info[4]} - {info[5]}</div></div>
                <div className={classes["result-grid"]}><div className={classes["result-grid-bold"]}>Response: </div><div>{info[3]}</div></div>
                <div className={classes["result-grid"]}><div className={classes["result-grid-bold"]}>Answer: </div><div>{info[2]}</div></div>
              </li>
            ))}
          </ol>
        </div>
      </>
    )
  }

  if (!resultInfo.infinitive) {
    content = (
      <>
        <div className={classes["result-modal__title"]}>{resultInfo.tense} - {resultInfo.subtense}</div>
        <div className={classes["result-modal__score"]}>{resultInfo.score}%</div>
        <div>
          <div className={classes["result-modal__subheader"]}>Correct: {resultInfo.correct.length}</div>
          <ol className={classes["result-modal__list"]}>
            {resultInfo.correct.map((info, i) => (
              <li key={i} className={classes["result-grid-item"]}>
              <div className={classes["result-grid"]}><div className={classes["result-grid-bold"]}>Pronoun: </div><div>{info[0]}</div></div>
              <div className={classes["result-grid"]}><div className={classes["result-grid-bold"]}>Verb: </div><div>{info[1]}</div></div>
              <div className={classes["result-grid"]}><div className={classes["result-grid-bold"]}>Answer: </div><div>{info[3]}</div></div>
            </li>
            ))}
          </ol>
        </div>
        <div>
          <div className={classes["result-modal__subheader"]}>Incorrect: {resultInfo.incorrect.length}</div>
          <ol className={classes["result-modal__list"]}>
            {resultInfo.incorrect.map((info, i) => (
              <li key={i} className={classes["result-grid-item"]}>
              <div className={classes["result-grid"]}><div className={classes["result-grid-bold"]}>Pronoun: </div><div>{info[0]}</div></div>
              <div className={classes["result-grid"]}><div className={classes["result-grid-bold"]}>Verb: </div><div>{info[1]}</div></div>
              <div className={classes["result-grid"]}><div className={classes["result-grid-bold"]}>Response: </div><div>{info[3]}</div></div>
              <div className={classes["result-grid"]}><div className={classes["result-grid-bold"]}>Answer: </div><div>{info[2]}</div></div>
            </li>
            ))}
          </ol>
        </div>
      </>
    )
  }


  return (
    <div className={classes["result-modal__container"]}>
      {content}
      <div className={classes["result-modal__button-container"]}>
        <button onClick={onAllResults} className={styles["profile__button"]}>All Results</button>
      </div>
    </div>
  )
}
