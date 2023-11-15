import { useContext } from "react";
import FlashcardContext from "../store/context.js";
import classes from "./OpeningModal.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from "@fortawesome/free-solid-svg-icons"
import { faCaretUp } from "@fortawesome/free-solid-svg-icons"

export default function OpeningModal({ onGo }) {
  const ctx = useContext(FlashcardContext);

  function handleIncreaseTimer() {
    ctx.addMinute();
  }

  function handleDecreaseTimer() {
    ctx.minusMinute();
  }

  function onSubmitGo() {
    onGo();
    ctx.setGo(true);
  }

  console.log(ctx.timer)

  return (
    <div className={classes["flashcard-modal__container"]}>
      <h2 className={classes["flashcard-modal__title"]}>Select Time</h2>
      <div className={classes["flashcard-modal__content"]}>
        <div className={classes["flashcard-modal__input-container"]}>
          <i onClick={handleDecreaseTimer} className={classes["flashcard-modal__arrow-down"]}><FontAwesomeIcon icon={faCaretDown} /></i>
          <input className={classes["flashcard-modal__input"]} type="number" min={1} max={10} step={1} value={ctx.timer} readOnly />
          <i onClick={handleIncreaseTimer} className={classes["flashcard-modal__arrow-up"]}><FontAwesomeIcon icon={faCaretUp} /></i>
        </div>
        <button onClick={onSubmitGo} className={classes["flashcard-modal__button"]}>Go!</button>
      </div>
    </div>
  )
}
