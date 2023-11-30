import Card from "./Card";
import Info from "./Info";
import classes from "./Content.module.css";

export default function Content({ location, onUpdateTimer, markAnswerCorrect, markQuestionCompleted, correctAnswers, questionsAnswered, onCorrectAnswer, onIncorrectAnswer, setType }) {
  return (
    <section className={classes["flashcard-page__content"]}>
      <Card location={location} markAnswerCorrect={markAnswerCorrect} markQuestionCompleted={markQuestionCompleted} onCorrectAnswer={onCorrectAnswer} onIncorrectAnswer={onIncorrectAnswer} setType={setType} />
      <Info correctAnswers={correctAnswers} questionsAnswered={questionsAnswered} onUpdateTimer={onUpdateTimer} />
    </section>
  )
}
