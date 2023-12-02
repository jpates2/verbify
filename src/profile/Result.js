import { useState } from "react";
import classes from "./Result.module.css";

export default function Result({ score, type, correct, incorrect, date, timestamp, onResult }) {
  const [activeResult, setActiveResult] = useState("");

  return (
    <li onClick={onResult} className={classes["results__past-result"]}>
      <div className={classes["results__past-type"]}>{type}</div>
      <div className={classes["results__past-score"]}>{score}%</div>
    </li>
  )
}
