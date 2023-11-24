import classes from "./Practice.module.css";

export default function Practice() {
  return (
    <div className={classes["practice__container"]}>
    <div className={classes["practice__title"]}>Practice</div>
    <ul className={classes["practice__past-verbs"]}>
      <li className={classes["practice__past-verb"]}>
        <div className={classes["practice__past-inf"]}>hablar</div>
        <div className={classes["practice__past-conj"]}>yo hablo</div>
      </li>
      <li className={classes["practice__past-verb"]}>
        <div className={classes["practice__past-past-inf"]}>Tener</div>
        <div className={classes["practice__past-conj"]}>ellos tienen</div>
      </li>
      <li className={classes["practice__past-verb"]}>
        <div className={classes["practice__past-past-inf"]}>acostarse</div>
        <div className={classes["practice__past-conj"]}>te acuestas</div>
      </li>
    </ul>
    <div className={classes["practice__button-container"]}>
      <button className={classes["practice__button"]}>More</button>
    </div>
  </div>
  )
}
