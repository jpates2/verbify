import classes from "./Stats.module.css";

export default function Stats({ currentStreak, longestStreak, userResults }) {
  let avgScore;

  if (userResults) {
    const scores = Object.values(userResults).map(result => result.score);
    avgScore = Math.round(scores.reduce((sum, score) => sum + score, 0) / scores.length);

    const incorrectAnswers = Object.values(userResults).map(result => result.incorrectAnswers).filter(answers => answers !== undefined);

    const correctAnswers = Object.values(userResults).map(result => result.correctAnswers).filter(answers => answers !== undefined);
  }

  return (
    <section className={classes["stats__section"]}>
      <div className={classes["stats__container"]}>
        <div className={classes["stats__pair"]}>
          <div className={classes["stats__title"]}>Longest Streak</div>
          <div className={classes["stats__num"]}>{longestStreak} Day{longestStreak === 1 ? "" : "s"}</div>
        </div>
        <div className={classes["stats__pair"]}>
          <div className={classes["stats__title"]}>Current Streak</div>
          <div className={classes["stats__num"]}>{currentStreak} Day{currentStreak === 1 ? "" : "s"}</div>
        </div>
        <div className={classes["stats__pair"]}>
          <div className={classes["stats__title"]}>Average Score</div>
          <div className={classes["stats__num"]}>{avgScore ? `${avgScore}%` : "0%"}</div>
        </div>
      </div>
    </section>
  )
}
