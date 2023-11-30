import classes from "./Results.module.css";
import styles from "../styles/profile.module.css";
import { useState } from "react";
import Result from "./Result";

export default function Results({ userResults }) {
  let summary;

  console.log(userResults);
  if (userResults) {
    summary = Object.values(userResults).map(result => ({
      score: result.score,
      correct: result.correctAnswers,
      incorrect: result.incorrectAnswers,
      infinitive: result.type[0] === "verb" ? result.type[1] : "",
      tense: result.type[0] === "tense" ? result.type[1] : "",
      subtense: result.type[0] === "tense" ? result.type[2] : "",
    }));

    console.log(summary);

    // const incorrectAnswers = Object.values(userResults).map(result => result.incorrectAnswers).filter(answers => answers !== undefined);

    // const correctAnswers = Object.values(userResults).map(result => result.correctAnswers).filter(answers => answers !== undefined);

    // console.log(incorrectAnswers);
    // console.log(correctAnswers);
  }

  return (
    <div className={classes["results__container"]}>
      <div className={classes["results__title"]}>Results</div>
      <ul className={classes["results__past-results"]}>
        {summary.map((sum, i) => (
          <Result key={i} score={sum.score} type={sum.infinitive === "" ? `${sum.tense} - ${sum.subtense}` : (sum.infinitive.charAt(0).toUpperCase() + sum.infinitive.slice(1)) } />
        ))}
      </ul>
      <div className={classes["results__button-container"]}>
        <button className={styles["profile__button"]}>More</button>
      </div>
    </div>
  )
}
