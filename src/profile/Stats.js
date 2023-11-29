import classes from "./Stats.module.css";

export default function Stats() {
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
          <div className={classes["stats__num"]}>72%</div>
        </div>
      </div>
    </section>
  )
}