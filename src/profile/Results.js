import classes from "./Results.module.css";

export default function Results() {
  return (
    <div className={classes["results__container"]}>
      <div className={classes["results__title"]}>Results</div>
      <ul className={classes["results__past-results"]}>
        <li className={classes["results__past-result"]}>
          <div className={classes["results__past-type"]}>Indicative - Regular</div>
          <div className={classes["results__past-score"]}>78%</div>
        </li>
        <li className={classes["results__past-result"]}>
          <div className={classes["results__past-type"]}>Tener</div>
          <div className={classes["results__past-score"]}>42%</div>
        </li>
        <li className={classes["results__past-result"]}>
          <div className={classes["results__past-type"]}>Imperfect - Irregular</div>
          <div className={classes["results__past-score"]}>71%</div>
        </li>
      </ul>
      <div className={classes["results__button-container"]}>
        <button className={classes["results__button"]}>More</button>
      </div>
    </div>
  )
}
