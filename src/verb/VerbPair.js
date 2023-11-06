import classes from "./VerbPair.module.css";

export default function VerbPair({ pronoun, conVerb }) {
  return (
    <div className={classes["tense-group__pair"]}>
      <div className={classes["tense-group__pair-pronoun"]}>{pronoun}</div>
      <div className={classes["tense-group__pair-verb"]}>{conVerb}</div>
    </div>
  )
}
