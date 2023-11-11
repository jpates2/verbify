import classes from "./Header.module.css";

export default function Header() {
  return (
    <section>
      <div className={classes["flashcard__header-container"]}></div>
      <div className={classes["flashcard__container-background"]}></div>
    </section>
  )
}
