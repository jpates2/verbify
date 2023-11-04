import classes from "./TenseGroup.module.css";

export default function TenseGroup({ children, tenses }) {
  return (
    <section className={classes["tense-group__container"]}>
      <div className={classes["tense-group__header"]}>{children}</div>
      <ul className={classes["tense-group__list"]}>
        {tenses.map(tense => (
          <li key={`${children} ${tense}`}>{tense}</li>
        ))}
      </ul>
      <div>
        <div className={classes["tense-group__pair"]}>
          <div className={classes["tense-group__pair-pronoun"]}>yo</div>
          <div className={classes["tense-group__pair-verb"]}>soy</div>
        </div>
        <div className={`${classes["tense-group__pair"]} ${classes["tense-group__pair-red"]}`}>
          <div className={classes["tense-group__pair-pronoun"]}>tu</div>
          <div className={classes["tense-group__pair-verb"]}>eres</div>
        </div>
        <div className={classes["tense-group__pair"]}>
          <div className={classes["tense-group__pair-pronoun"]}>el / ella / usted</div>
          <div className={classes["tense-group__pair-verb"]}>es</div>
        </div>
        <div className={`${classes["tense-group__pair"]} ${classes["tense-group__pair-red"]}`}>
          <div className={classes["tense-group__pair-pronoun"]}>nosotros / nosotras</div>
          <div className={classes["tense-group__pair-verb"]}>somos</div>
        </div>
        <div className={classes["tense-group__pair"]}>
          <div className={classes["tense-group__pair-pronoun"]}>vosotros / vosotras</div>
          <div className={classes["tense-group__pair-verb"]}>sois</div>
        </div>
        <div className={`${classes["tense-group__pair"]} ${classes["tense-group__pair-red"]}`}>
          <div className={classes["tense-group__pair-pronoun"]}>ellos / ellas</div>
          <div className={classes["tense-group__pair-verb"]}>son</div>
        </div>
      </div>
    </section>
  )
}
