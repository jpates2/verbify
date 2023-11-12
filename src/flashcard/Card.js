import { useState, useRef } from "react";
import classes from "./Card.module.css";

const pronouns = ["yo", "tú", "él", "ella", "usted", "nosotros", "nosotras", "vosotros", "vosotras", "ellos", "ellas", "ustedes"];

const accents = ["á", "é", "í", "ñ", "ó", "ú", "ü"];

export default function Card({ tense, subtense }) {
  const pronoun = pronouns[Math.floor(Math.random() * pronouns.length)];
  const [enteredAnswer, setEnteredAnswer] = useState("");
  const inputRef = useRef(null);

  function handleAccent(event) {
    setEnteredAnswer((prevAnswer) => {
      return prevAnswer + event.target.innerText;
    })
    inputRef.current.focus();
  }

  function handleAnswer(event) {
    setEnteredAnswer(event.target.value.toLowerCase())
  }

  console.log(enteredAnswer);

  return (
    <div className={classes["card__container"]}>
      <div className={classes["card__tenses-container"]}>
        <div>{tense}</div>
        <div>-</div>
        <div>{subtense}</div>
      </div>
      <div className={classes["card__verb-container"]}>
        <div className={classes["card__pronoun"]}>{pronoun}</div>
        <div> &nbsp; &nbsp;</div>
        <div className={classes["card__verb"]}>decir</div>
      </div>
      <form className={classes["card__form"]}>
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
