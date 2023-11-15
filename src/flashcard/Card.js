import { useState, useRef, useEffect, useCallback } from "react";
import { motion, useAnimation } from "framer-motion";
import classes from "./Card.module.css";
import VerbFlashcard from "./VerbFlashcard";
import TenseFlashcard from "./TenseFlashcard";
import { AllTenses } from "../info/verb-info";
import { fetchConjugations } from "../util/http";
import { fetchRandomVerb } from '../util/http';

const pronouns = ["yo", "tú", "él", "ella", "usted", "nosotros", "nosotras", "vosotros", "vosotras", "ellos", "ellas", "ustedes"];
const imperativePronouns = ["tú", "él", "ella", "usted", "vosotros", "vosotras", "ellos", "ellas", "ustedes"];
const mappedPronouns = ["yo", "tu", "ud", "ud", "ud", "nosotros", "nosotros", "vosotros", "vosotros", "uds", "uds", "uds"]
const mappedImperativePronouns = ["tu", "ud", "ud", "ud", "vosotros", "vosotros", "uds", "uds", "uds"];

const accents = ["á", "é", "í", "ñ", "ó", "ú", "ü"];

const variants = {
  active: {
    y: [5, -5, 0, 5, -5, 0],
    transition: {
      duration: 0.2
    }
  },
  inactive: {
    y: 0
  }
}

export default function Card({ location, markAnswerCorrect, markQuestionCompleted, markAnswerIncorrect }) {
  const controls = useAnimation();
  const [enteredAnswer, setEnteredAnswer] = useState("");
  const [answerSubmitted, setAnswerSubmitted] = useState(false);
  const [pronoun, setPronoun] = useState("");
  const [imperativePronoun, setImperativePronoun] = useState("");
  const [generatedTense, setGeneratedTense] = useState({});
  const [incorrectAnswer, setIncorrectAnswer] = useState(false);
  const inputRef = useRef(null);
  let correctAnswer;


  const [fetchedVerb, setFetchedVerb] = useState("");
  const flashcardType = location.search.includes("?") ? "tense" : "verb";

  let tense, subtense, filteredVerb;
  const filter = (location.search.split(/[?=&]+/))[4];


  if (location.search.includes("?")) {
    tense = location.pathname.split("/").slice(-1).join("").replace("%20", " ");
    subtense = (location.search.split(/[?=&]+/))[2].replace("%20", " ");
  }

  if (!location.search.includes("?")) {
    filteredVerb = decodeURIComponent(location.pathname.split("/").slice(-1).join(""));
  }


  const initiateFlashcard = useCallback(() => {

    if (filter) {
      async function getVerbs() {
        try {
          const verb = await fetchRandomVerb(filter);
          setFetchedVerb(verb);
        } catch (error) {

        }
      }
      getVerbs();
    }


    setPronoun(pronouns[Math.floor(Math.random() * pronouns.length)]);
    setImperativePronoun(imperativePronouns[Math.floor(Math.random() * imperativePronouns.length)]);

    const randomIndex = Math.floor(Math.random() * AllTenses.length);
    const randomSubIndex = Math.floor(Math.random() * AllTenses[randomIndex].sub.length);

    const randomTense = AllTenses[randomIndex].tense;
    const randomSub = AllTenses[randomIndex].sub[randomSubIndex];

    setGeneratedTense({randomTense, randomSub});
  }, [filter])


  useEffect(() => {
    initiateFlashcard()
  }, [initiateFlashcard])

  function handleAccent(event) {
    setEnteredAnswer((prevAnswer) => {
      return prevAnswer + event.target.innerText;
    })
    inputRef.current.focus();
  }

  function handleAnswer(event) {
    setEnteredAnswer(event.target.value.toLowerCase())
  }

  async function checkAnswer() {

    if (flashcardType === "verb") {
      const fetchAnswer = await fetchConjugations(filteredVerb);
      const checkTense = await generatedTense.randomTense.toLowerCase();
      const checkSubTense = await generatedTense.randomSub.toLowerCase();

      if (checkTense === "participles") correctAnswer = fetchAnswer[checkTense][checkSubTense];
      if (checkTense === "imperative") {
        const currentPronoun = mappedImperativePronouns[imperativePronouns.indexOf(imperativePronoun)];
        correctAnswer = fetchAnswer[checkTense][checkSubTense][currentPronoun]
      }
      if (checkTense !== "participles" && checkTense !== "imperative") {
        const currentPronoun = mappedPronouns[pronouns.indexOf(pronoun)];
        correctAnswer = fetchAnswer[checkTense][checkSubTense][currentPronoun];
      }

      return correctAnswer;
    }

    if (flashcardType === "tense") {
      const fetchAnswer = await fetchConjugations(fetchedVerb["infinitivo"]);
      const checkTense = tense.toLowerCase();
      const checkSubTense = subtense.toLowerCase();

      if (checkTense === "participles") correctAnswer = await fetchAnswer[tense][checkSubTense];
      if (checkTense === "imperative") {
        const currentPronoun = mappedImperativePronouns[imperativePronouns.indexOf(imperativePronoun)];
        correctAnswer = fetchAnswer[checkTense][checkSubTense][currentPronoun]
      }
      if (checkTense !== "participles" && checkTense !== "imperative") {
        const currentPronoun = mappedPronouns[pronouns.indexOf(pronoun)];
        correctAnswer = fetchAnswer[checkTense][checkSubTense][currentPronoun];
      }

      return correctAnswer;
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setAnswerSubmitted(true);

    if (enteredAnswer.trim().length === 0) {
      return;
    }

    const answer = await checkAnswer();
    if (answer === enteredAnswer.toLowerCase()) {
      console.log("correct");
      markAnswerCorrect();
      markQuestionCompleted();
      initiateFlashcard();
      setEnteredAnswer("");
      setIncorrectAnswer(false);
      setAnswerSubmitted(false);
    }
    if (answer !== enteredAnswer.toLowerCase()) {
      console.log("incorrect");
      setIncorrectAnswer(true);
      markQuestionCompleted();
      controls.start("active");
      setAnswerSubmitted(false);
    }
  }

  function handleSkip() {
    initiateFlashcard();
    setEnteredAnswer("");
    setIncorrectAnswer(false);
  }

  const errorMsgClass = incorrectAnswer ? `${classes["card__error-msg"]}` : `${classes["card__error-msg-hidden"]}`

  const skipButtonClass = incorrectAnswer ? `${classes["card__skip-button"]}` : `${classes["card__skip-button-hidden"]}`

  return (
    <div className={classes["container"]}>
    <div className={classes["card__container"]}>
      {flashcardType === "verb" && <VerbFlashcard imperativePronoun={imperativePronoun} pronoun={pronoun} filteredVerb={filteredVerb} generatedTense={generatedTense} />}
      {flashcardType === "tense" && <TenseFlashcard imperativePronoun={imperativePronoun} pronoun={pronoun} tense={tense} subtense={subtense} fetchedVerb={fetchedVerb} />}
      <form onSubmit={handleSubmit} className={classes["card__form"]}>
        <div className={classes["card__form-input"]}>
          <input
            ref={inputRef}
            onChange={handleAnswer}
            value={enteredAnswer}
            className={classes["card__answer"]}
            placeholder="answer"
          />
          <div className={classes["card__answer-underline"]}></div>
        </div>
        <motion.button initial="inactive" animate={incorrectAnswer && "active"} variants={variants} key={answerSubmitted ? "inactive" : "active"} className={classes["card__enter-button"]}>Enter</motion.button>
      </form>
      <div className={errorMsgClass}>Incorrect - Try Again</div>
      <div className={classes["card__accent-container"]}>
        {accents.map(accent => (
          <button key={accent} onClick={handleAccent} className={classes["card__accent"]}>{accent}</button>
        ))}
      </div>
    </div>
    <div className={classes["card__skip-button-container"]}>
      <button onClick={handleSkip} className={skipButtonClass}>Skip</button>
    </div>
    </div>
  )
}
