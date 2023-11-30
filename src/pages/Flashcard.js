import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'
import Border from "../flashcard/Border";
import Header from "../flashcard/Header";
import Nav from "../layout/Nav";
import Footer from "../layout/Footer";
import classes from "../flashcard/Border.module.css";
import Content from "../flashcard/Content";
import Modal from '../layout/Modal';
import OpeningModal from '../flashcard/OpeningModal';
import TimerProvider from '../store/ContextProvider';
import EndingModal from '../flashcard/EndingModal';

export default function FlashcardPage() {
  const location = useLocation();
  const [showModal, setShowModal] = useState(false);

  const [timerStatus, setTimerStatus] = useState("inactive");

  const [questionsAnswered, setQuestionsAnswered] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  const [incorrectAnswersArray, setIncorrectAnswersArray] = useState([]);
  const [correctAnswersArray, setCorrectAnswersArray] = useState([]);

  function markAnswerCorrect() {
    setCorrectAnswers(prevCorrect => {
      return prevCorrect + 1;
    })
  }

  function markQuestionCompleted() {
    setQuestionsAnswered(prevCompleted => {
      return prevCompleted + 1;
    })
  }

  useEffect(() => {
    setShowModal(true)
  }, [])

  function handleGo() {
    setShowModal(false);
    setTimerStatus("active");
  }

  if (timerStatus === "end") {
    console.log("correct:", correctAnswersArray);
    console.log("incorrect:", incorrectAnswersArray);
  }


  function handleCorrectAnswer(answer) {
    setCorrectAnswersArray((prevArray) => {
      return [...prevArray, answer]
    })
  }

  function handleIncorrectAnswer(answer) {
    setIncorrectAnswersArray((prevArray) => {
      return [...prevArray, answer]
    })
  }


  return (
    <TimerProvider>
      <section className={classes["flashcard-page"]}>
        <Nav showModal={showModal} timerStatus={timerStatus} />
        {showModal &&
          <Modal>
            <OpeningModal onGo={handleGo} />
          </Modal>
        }
        {timerStatus === "end" &&
          <Modal>
            <EndingModal correctAnswers={correctAnswers} questionsAnswered={questionsAnswered} />
          </Modal>
        }
        <Header />
        <Content location={location} onUpdateTimer={setTimerStatus} markAnswerCorrect={markAnswerCorrect} markQuestionCompleted={markQuestionCompleted} correctAnswers={correctAnswers} questionsAnswered={questionsAnswered} onCorrectAnswer={handleCorrectAnswer} onIncorrectAnswer={handleIncorrectAnswer} />
        <Border />
        <Footer />
      </section>
    </TimerProvider>
  )
}
