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
  const userDetails = JSON.parse(localStorage.getItem('signupDetails')) || "";
  let finalScore;

  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  const timestamp = today.toLocaleString().replace(/\W/g, '');
  const formattedDate = Number(year + month + day);

  const [type, setType] = useState("");

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

  async function addResults () {
    const user = userDetails.username;

    const response = await fetch("https://verbify-94228-default-rtdb.europe-west1.firebasedatabase.app/users.json");

    if (!response.ok) { throw new Error("Failed to load data.") }

    const userData = await response.json();
    const userId = Object.keys(userData[user])[0];

    await fetch(`https://verbify-94228-default-rtdb.europe-west1.firebasedatabase.app/users/${user}/${userId}/results.json`, {
      method: "POST",
      body: JSON.stringify({
        score: finalScore,
        correctAnswers: correctAnswersArray,
        incorrectAnswers: incorrectAnswersArray,
        timestamp: timestamp,
        date: formattedDate,
        type: type
      })
    })

    await fetch(`https://verbify-94228-default-rtdb.europe-west1.firebasedatabase.app/users/${user}/${userId}/incorrect.json`, {
      method: "POST",
      body: JSON.stringify({
        incorrectAnswers: incorrectAnswersArray,
      })
    })
  }

  if (timerStatus === "end") {
    finalScore = questionsAnswered > 0 ? Math.round((correctAnswers / questionsAnswered) * 100) : 0;

    if (userDetails) {
      addResults();
    }
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
        <Content location={location} onUpdateTimer={setTimerStatus} markAnswerCorrect={markAnswerCorrect} markQuestionCompleted={markQuestionCompleted} correctAnswers={correctAnswers} questionsAnswered={questionsAnswered} onCorrectAnswer={handleCorrectAnswer} onIncorrectAnswer={handleIncorrectAnswer} setType={setType} />
        <Border />
        <Footer />
      </section>
    </TimerProvider>
  )
}
