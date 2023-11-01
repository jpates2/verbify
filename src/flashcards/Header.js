import classes from "./Header.module.css";

export default function Header() {
  return (
    <div className={classes["flashcards__container"]}>
      <h1 className={classes["flashcards__header"]}>Flashcards</h1>
    </div>
  )
}
