import classes from "./Results.module.css";
import styles from "../styles/profile.module.css";
import { useState } from "react";
import Result from "./Result";
import Modal from "../layout/Modal";
import ResultsModal from "./ResultsModal";

export default function Results({ userResults }) {
  const [more, setMore] = useState(false);

  let summary, editSummary;

  function handleMore() {
    setMore(true);
  }

  function handleClose() {
    setMore(false);
  }

  if (userResults) {
    summary = Object.values(userResults).map(result => ({
      score: result.score,
      correct: result.correctAnswers,
      incorrect: result.incorrectAnswers,
      infinitive: result.type[0] === "verb" ? result.type[1] : "",
      tense: result.type[0] === "tense" ? result.type[1] : "",
      subtense: result.type[0] === "tense" ? result.type[2] : "",
    }));
    editSummary = summary.slice(0, 5);

    console.log(summary);
    console.log(editSummary);

    // const incorrectAnswers = Object.values(userResults).map(result => result.incorrectAnswers).filter(answers => answers !== undefined);

    // const correctAnswers = Object.values(userResults).map(result => result.correctAnswers).filter(answers => answers !== undefined);

    // console.log(incorrectAnswers);
    // console.log(correctAnswers);
  }

  return (
    <>
      {
        more && (
          <Modal onClose={handleClose}>
            <ResultsModal onClose={handleClose} results={summary} />
          </Modal>
        )
      }
      <div className={classes["results__container"]}>
        <div className={classes["results__title"]}>Results</div>
        <ul className={classes["results__past-results"]}>
          {editSummary.map((sum, i) => (
            <Result key={i} score={sum.score} type={sum.infinitive === "" ? `${sum.tense} - ${sum.subtense}` : (sum.infinitive.charAt(0).toUpperCase() + sum.infinitive.slice(1)) } />
          ))}
        </ul>
        <div className={classes["results__button-container"]}>
          <button onClick={handleMore} className={styles["profile__button"]}>More</button>
        </div>
      </div>
    </>
  )
}
