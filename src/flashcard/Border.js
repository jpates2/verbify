import classes from "./Border.module.css";

export default function Border() {
  return (
    <section className={classes["flashcard__border-container"]}>
      <div className={classes["flashcard__border-background"]}></div>
      <div className={classes["flashcard__border"]}></div>
    </section>
  )
}
