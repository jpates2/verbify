import classes from "./Header.module.css";

export default function Header() {
  return (
    <div className={classes["verbs__container"]}>
      <h1 className={classes["verbs__header"]}>Verbs</h1>
      <hp className={classes["verbs__slogan"]}>View every tense, mood and conjugation for every verb</hp>
    </div>
  )
}
