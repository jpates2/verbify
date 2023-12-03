import classes from "./Results.module.css";
import styles from "../styles/profile.module.css";
import { useState } from "react";
import Result from "./Result";
import Modal from "../layout/Modal";
import ResultsModal from "./ResultsModal";
import ResultModal from "./ResultModal";

export default function Results({ userResults }) {
  const [more, setMore] = useState(false);
  const [activeResult, setActiveResult] = useState("");

  let summary, editSummary;

  function handleMore() {
    setMore(true);
  }

  function handleClose() {
    setMore(false);
  }

  function handleResult(result) {
    setActiveResult(result);
    setMore(false);
  }

  function handleCloseResult() {
    setActiveResult("");
  }

  function handleAllResults() {
    setMore(true);
    setActiveResult("");
  }

  if (userResults) {
    summary = Object.values(userResults).map(result => ({
      score: result.score,
      correct: result.correctAnswers,
      incorrect: result.incorrectAnswers,
      timestamp: result.timestamp,
      date: result.date,
      infinitive: result.type[0] === "verb" ? result.type[1] : "",
      tense: result.type[0] === "tense" ? result.type[1] : "",
      subtense: result.type[0] === "tense" ? result.type[2] : "",
    }));
    editSummary = summary.slice(0, 5);

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
            <ResultsModal onClose={handleClose} onResult={handleResult} onAllResults={handleAllResults} results={summary} />
          </Modal>
        )
      }
      {
        activeResult !== "" && (
          <Modal onClose={handleCloseResult}>
            <ResultModal onAllResults={handleAllResults} resultInfo={activeResult} />
          </Modal>
        )
      }
      <div className={classes["results__container"]}>
        <div className={classes["results__title"]}>Results</div>
        {!summary && <div className={classes["results__message"]}>Complete your first set of flashcards to view results here!</div>}
        {summary && (
          <>
            <ul className={classes["results__past-results"]}>
            {editSummary && editSummary.map((result) => (
              <Result key={result.timestamp} score={result.score} correct={result.correct} incorrect={result.incorrect} timestamp={result.timestamp} date={result.date} type={result.infinitive === "" ? `${result.tense} - ${result.subtense}` : (result.infinitive.charAt(0).toUpperCase() + result.infinitive.slice(1))} onResult={() => handleResult(result)} />
            ))}
          </ul>
          {summary.length > 5 && <div className={classes["results__button-container"]}>
            <button onClick={handleMore} className={styles["profile__button"]}>More</button>
          </div>}
          </>
        )}
      </div>
    </>
  )
}
