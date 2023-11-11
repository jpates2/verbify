import { useLocation } from 'react-router-dom'
import Border from "../flashcard/Border";
import Header from "../flashcard/Header";
import Nav from "../layout/Nav";
import classes from "../flashcard/Border.module.css";
import Content from "../flashcard/Content";


export default function FlashcardPage() {
  const location = useLocation();
  const tense = location.pathname.split("/").slice(-1).join("").replace("%20", " ");
  const subtense = (location.search.split(/[?=&]+/))[2];
  const filter = (location.search.split(/[?=&]+/))[4];
  console.log(tense);
  console.log(subtense);
  console.log(filter);

  return (
    <section className={classes["flashcard-page"]}>
      <Nav />
      <Header />
      <Content tense={tense} subtense={subtense} filter={filter} />
      <Border />
    </section>
  )
}
