import { useState } from "react";
import Card from "./Card";
import Info from "./Info";
import classes from "./Content.module.css";

export default function Content({ location }) {
  const [questionsAnswered, setQuestionsAnswered] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);

  function markAnswerCorrect() {
    setCorrectAnswers(prevCorrect => {
      return prevCorrect + 1;
    })
  }

  function markAnswerIncorrect() {
    setIncorrectAnswers(prevIncorrect => {
      return prevIncorrect + 1;
    })
  }

  function markQuestionCompleted() {
    setQuestionsAnswered(prevCompleted => {
      return prevCompleted + 1;
    })
  }

  return (
    <section className={classes["flashcard-page__content"]}>
      <Card location={location} markAnswerCorrect={markAnswerCorrect} markQuestionCompleted={markQuestionCompleted} markAnswerIncorrect={markAnswerIncorrect} />
      <Info correctAnswers={correctAnswers} questionsAnswered={questionsAnswered} />
    </section>
  )
}
