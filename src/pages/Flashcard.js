import Border from "../flashcard/Border";
import Header from "../flashcard/Header";
import Nav from "../layout/Nav";
import classes from "../flashcard/Border.module.css";

export default function FlashcardPage() {
  return (
    <section className={classes["flashcard-page"]}>
      <Nav />
      <Header />
      <Border />
    </section>
  )
}
