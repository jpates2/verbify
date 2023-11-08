import classes from "./FilterButtons.module.css";

export default function FilterButtons({ onFlashcardFilter, filter }) {
  const activeClass = `${classes["flashcard__filter-button"]} ${classes["flashcard__filter-button-active"]}`;
  const inactiveClass = classes["flashcard__filter-button"];

  return (
    <div className={classes["flashcard__buttons-container"]}>
      <button onClick={() => onFlashcardFilter("tense")} className={filter === "tense" ? activeClass : inactiveClass}>Learn by Tense</button>
      <button onClick={() => onFlashcardFilter("verb")} className={filter === "verb" ? activeClass : inactiveClass}>Learn by Verb</button>
    </div>
  )
}
