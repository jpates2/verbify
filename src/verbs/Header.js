import classes from "./Header.module.css";

export default function Header() {
  return (
    <section id="header">
      <div className={classes["verbs__container"]}>
          <h1 className={classes["verbs__header"]}>Verb Library</h1>
          <p className={classes["verbs__slogan"]}>Every tense, mood and conjugation for every verb</p>
      </div>
      <div className={classes["verbs__container-background"]}></div>
    </section>
  )
}
