import classes from "./Practice.module.css";
import styles from "../styles/profile.module.css";

export default function Practice({ userResults }) {
  let errors = [];
  let uniqueErrors = [];
  Object.values(userResults).forEach(function (result) {
    const incorrectArrays = result.incorrectAnswers;
    incorrectArrays.forEach(array => {
      if (!uniqueErrors.includes(array[2])) {
        errors.push([array[0], array[1], array[2]])
        uniqueErrors.push(array[2])
      }
    })
  });

  const limitedErrors = errors.slice(0, 5)

  return (
    <div className={classes["practice__container"]}>
    <div className={classes["practice__title"]}>Verb Bank</div>
    <ul className={classes["practice__past-verbs"]}>
      {errors.length === 0 && <div>Complete your first set of flashcards to view verbs to practise here!</div>}
      {errors.length > 0 && (
        limitedErrors.map((error, i) => (
          <li key={i} className={classes["practice__past-verb"]}>
            <div className={classes["practice__past-inf"]}>{error[1]}</div>
            <div className={classes["practice__past-conj"]}>{error[0]} {error[2]}</div>
          </li>
        ))
      )}
    </ul>
    <div className={classes["practice__button-container"]}>
      <button className={styles["profile__button"]}>More</button>
    </div>
  </div>
  )
}
