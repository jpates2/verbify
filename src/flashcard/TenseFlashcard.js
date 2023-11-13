import classes from "./SharedFlashcard.module.css";

export default function TenseFlashcard({ tense, imperativePronoun, subtense, pronoun, fetchedVerb }) {

  const { infinitivo } = fetchedVerb

  return (
    <>
      <div className={classes["card__tenses-container"]}>
        {tense !== "participles" && <div>{tense}</div>}
        {tense !== "participles" && <div>-</div>}
        <div>{subtense}</div>
      </div>
      <div className={classes["card__verb-container"]}>
        <div className={classes["card__pronoun"]}>{(tense && tense.toLowerCase() === "imperative") ? imperativePronoun : pronoun}</div>
        <div> &nbsp; &nbsp;</div>
        <div className={classes["card__verb"]}>{infinitivo}</div>
      </div>
    </>
  )
}
