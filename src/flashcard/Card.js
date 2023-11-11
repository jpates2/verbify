import classes from "./Card.module.css";

const pronouns = ["yo", "tú", "él", "ella", "usted", "nosotros", "nosotras", "vosotros", "vosotras", "ellos", "ellas", "ustedes"];

export default function Card({ tense, subtense }) {
  const pronoun = pronouns[Math.floor(Math.random() * pronouns.length)];

  return (
    <div className={classes["card__container"]}>
      <div className={classes["card__tenses-container"]}>
        <div>{tense}</div>
        <div>-</div>
        <div>{subtense}</div>
      </div>
      <div className={classes["card__verb-container"]}>
        <div className={classes["card__pronoun"]}>{pronoun}</div>
        <div> &nbsp; &nbsp; &nbsp;</div>
        <div className={classes["card__verb"]}>decir</div>
      </div>

    </div>
  )
}
