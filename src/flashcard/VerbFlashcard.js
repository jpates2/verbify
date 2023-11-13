import classes from "./SharedFlashcard.module.css";

export default function VerbFlashcard({ pronoun, imperativePronoun, filteredVerb, generatedTense }) {
  const { randomTense, randomSub } = generatedTense;

  return (
    <>
      <div className={classes["card__tenses-container"]}>
        <div>{randomTense}</div>
        <div>-</div>
        <div>{randomSub}</div>
      </div>
      <div className={classes["card__verb-container"]}>
        {generatedTense.randomTense !== "Participles" && <div className={classes["card__pronoun"]}>{(randomTense && randomTense.toLowerCase() === "imperative") ? imperativePronoun : pronoun}</div>}
        <div> &nbsp; &nbsp;</div>
        <div className={classes["card__verb"]}>{filteredVerb}</div>
      </div>
    </>
  )
}
