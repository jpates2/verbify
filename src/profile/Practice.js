import { useState } from "react";
import classes from "./Practice.module.css";
import styles from "../styles/profile.module.css";
import Modal from "../layout/Modal";
import PracticeModal from "./PracticeModal";

export default function Practice({ userResults, username, initialErrors, initialUniqueErrors }) {
  const [more, setMore] = useState(false);
  const [errors, setErrors] = useState(initialErrors);
  const [uniqueErrors, setUniqueErrors] = useState(initialUniqueErrors);

  function handleMore() {
    setMore(true);
  }

  function handleClose() {
    setMore(false);
  }

  async function handleRemoveVerbDatase(updatedErrors) {
    const user = username;

    const response = await fetch("https://verbify-94228-default-rtdb.europe-west1.firebasedatabase.app/users.json");

    if (!response.ok) { throw new Error("Failed to load data.") }

    const userObject = await response.json();
    const userId = Object.keys(userObject[user])[0];
    const userData = Object.values(userObject[user])[0];
    await fetch(`https://verbify-94228-default-rtdb.europe-west1.firebasedatabase.app/users/${user}/${userId}.json`, {
      method: "PUT",
      body: JSON.stringify({
        ...userData,
        incorrect: {
          id: {
            incorrectAnswers: updatedErrors,
          }
        }
      })
    })
  }

  function handleRemoveVerb(event) {
    const text = event.target.innerText;
    const removedVerb = text.substring(text.indexOf(' ') + 1);

    const updatedUniqueErrors = uniqueErrors.filter(error => error[2] !== removedVerb);
    setUniqueErrors(updatedUniqueErrors);

    const updatedErrors = errors.filter(error => error[2] !== removedVerb);
    setErrors(updatedErrors);

    handleRemoveVerbDatase(updatedErrors);
  }

  const limitedErrors = errors.slice(0, 5);

  return (
    <>
      {more && (
        <Modal onClose={handleClose}>
          <PracticeModal onRemoveVerb={handleRemoveVerb} onClose={handleClose} pastErrors={errors} />
        </Modal>
      )}
      <div className={classes["practice__container"]}>
        <div className={classes["practice__title"]}>Verb Bank</div>
        <ul className={classes["practice__past-verbs"]}>
          {errors.length === 0 && <div className={classes["practice__message"]}>Complete your first set of flashcards to view verbs to practise here!</div>}
          {errors.length > 0 && (
            limitedErrors.map((error, i) => (
              <li key={i} onClick={handleRemoveVerb} className={classes["practice__past-verb"]}>
                <div className={classes["practice__past-inf"]}>{error[1]}</div>
                <div className={classes["practice__past-conj"]}>{error[0]} {error[2]}</div>
              </li>
            ))
          )}
        </ul>
        {errors.length > 5 && <div className={classes["practice__button-container"]}>
          <button onClick={handleMore} className={styles["profile__button"]}>More</button>
        </div>}
      </div>
    </>
  )
}
