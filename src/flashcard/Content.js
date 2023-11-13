import Card from "./Card";
import Info from "./Info";
import classes from "./Content.module.css";

export default function Content({ tense, subtense, filter, fetchedVerb, filteredVerb, flashcardType }) {
  return (
    <section className={classes["flashcard-page__content"]}>
      <Card tense={tense} subtense={subtense} filter={filter} fetchedVerb={fetchedVerb} filteredVerb={filteredVerb} flashcardType={flashcardType} />
      <Info />
    </section>
  )
}
