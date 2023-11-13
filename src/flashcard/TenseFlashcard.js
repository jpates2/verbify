import classes from "./SharedFlashcard.module.css";

export default function TenseFlashcard({ tense, subtense, pronoun, fetchedVerb }) {


  const { infinitivo } = fetchedVerb

  return (
    <>
      <div className={classes["card__tenses-container"]}>
        <div>{tense}</div>
        <div>-</div>
        <div>{subtense}</div>
      </div>
      <div className={classes["card__verb-container"]}>
        <div className={classes["card__pronoun"]}>{pronoun}</div>
        <div> &nbsp; &nbsp;</div>
        <div className={classes["card__verb"]}>{infinitivo}</div>
      </div>
    </>
  )
}
