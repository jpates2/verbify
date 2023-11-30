import classes from "./Stats.module.css";

export default function Stats({ userResults }) {
  let avgScore;

  if (userResults) {
    const scores = Object.values(userResults).map(result => result.score);
    avgScore = Math.round(scores.reduce((sum, score) => sum + score, 0) / scores.length);

    const incorrectAnswers = Object.values(userResults).map(result => result.incorrectAnswers).filter(answers => answers !== undefined);

    const correctAnswers = Object.values(userResults).map(result => result.correctAnswers).filter(answers => answers !== undefined);

    console.log(incorrectAnswers);
    console.log(correctAnswers);
  }

  return (
    <section className={classes["stats__section"]}>
      <div className={classes["stats__container"]}>
        <div className={classes["stats__pair"]}>
          <div className={classes["stats__title"]}>Longest Streak</div>
          <div className={classes["stats__num"]}>6 Days</div>
        </div>
        <div className={classes["stats__pair"]}>
          <div className={classes["stats__title"]}>Current Streak</div>
          <div className={classes["stats__num"]}>4 Days</div>
        </div>
        <div className={classes["stats__pair"]}>
          <div className={classes["stats__title"]}>Average Score</div>
          <div className={classes["stats__num"]}>{avgScore ? `${avgScore}%` : ""}</div>
        </div>
      </div>
    </section>
  )
}
