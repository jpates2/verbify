import classes from "./VerbCard.module.css";

export default function VerbCard({ verb, translation }) {
  return (
    <div className={classes["verb-card"]}>
      <div className={classes["verb-card__spanish"]}>{verb}</div>
      <div className={classes["verb-card__english"]}>{translation}</div>
    </div>
  )
}
