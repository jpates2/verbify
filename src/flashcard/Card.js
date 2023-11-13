import { useState, useRef, useEffect } from "react";
import classes from "./Card.module.css";
import VerbFlashcard from "./VerbFlashcard";
import TenseFlashcard from "./TenseFlashcard";
import { AllTenses } from "../info/verb-info";
import { fetchConjugations } from "../util/http";

const pronouns = ["yo", "tú", "él", "ella", "usted", "nosotros", "nosotras", "vosotros", "vosotras", "ellos", "ellas", "ustedes"];
const imperativePronouns = ["tú", "él", "ella", "usted", "vosotros", "vosotras", "ellos", "ellas", "ustedes"];
const mappedPronouns = ["yo", "tu", "ud", "ud", "ud", "nosotros", "nosotros", "vosotros", "vosotros", "uds", "uds", "uds"]
const mappedImperativePronouns = ["tu", "ud", "ud", "ud", "vosotros", "vosotros", "uds", "uds", "uds"];

const accents = ["á", "é", "í", "ñ", "ó", "ú", "ü"];

export default function Card({ tense, subtense, fetchedVerb, filteredVerb, flashcardType }) {
  const [enteredAnswer, setEnteredAnswer] = useState("");
  const [pronoun, setPronoun] = useState("");
  const [imperativePronoun, setImperativePronoun] = useState("");
  const [generatedTense, setGeneratedTense] = useState({});
  const inputRef = useRef(null);
  let correctAnswer;

  useEffect(() => {
    setPronoun(pronouns[Math.floor(Math.random() * pronouns.length)]);
    setImperativePronoun(imperativePronouns[Math.floor(Math.random() * imperativePronouns.length)]);

    const randomIndex = Math.floor(Math.random() * AllTenses.length);
    const randomSubIndex = Math.floor(Math.random() * AllTenses[randomIndex].sub.length);

    const randomTense = AllTenses[randomIndex].tense;
    const randomSub = AllTenses[randomIndex].sub[randomSubIndex];

    setGeneratedTense({randomTense, randomSub});
  }, [])

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
      const checkTense = generatedTense.randomTense.toLowerCase();
      const checkSubTense = generatedTense.randomSub.toLowerCase();

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

      if (checkTense === "participles") correctAnswer = fetchAnswer[tense][checkSubTense];
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
    const answer = await checkAnswer();
    if (answer === enteredAnswer.toLowerCase()) {
      console.log("correct");
    }
    if (answer !== enteredAnswer.toLowerCase()) {
      console.log("incorrect");
    }
  }

  return (
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
        <button className={classes["card__enter-button"]}>Enter</button>
      </form>
      <div className={classes["card__accent-container"]}>
        {accents.map(accent => (
          <button key={accent} onClick={handleAccent} className={classes["card__accent"]}>{accent}</button>
        ))}
      </div>

    </div>
  )
}
