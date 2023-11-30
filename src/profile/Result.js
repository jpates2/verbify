import classes from "./Result.module.css";

export default function Result({ score, type }) {
  return (
    <li className={classes["results__past-result"]}>
      <div className={classes["results__past-type"]}>{type}</div>
      <div className={classes["results__past-score"]}>{score}%</div>
    </li>
  )
}
