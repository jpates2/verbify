import { useReducer, useState } from "react";
import FlashcardContext from "./context";

const defaultFlashcardContext = { timer: 1 };

function timerReducer (state, action) {
  if (action.type === "ADD_MINUTE") {
    let updatedTimer;
    if (state.timer >= 10) {
      updatedTimer = state.timer;
    } else {
      updatedTimer = state.timer + 1;
    }
    return { timer: updatedTimer }
  }

  if (action.type === "MINUS_MINUTE") {
    let updatedTimer;
    if (state.timer <= 1) {
      updatedTimer = state.timer;
    } else {
      updatedTimer = state.timer - 1;
    }
    return { timer: updatedTimer }
  }
}

function TimerProvider ({ children }) {
  const [contextTimer, dispatchTimerAction] = useReducer(timerReducer, defaultFlashcardContext);
  const [goStatus, setGoStatus] = useState(false);

  function addMinuteTimer() {
    dispatchTimerAction({type: "ADD_MINUTE"});
  }

  function minusMinuteTimer() {
    dispatchTimerAction({type: "MINUS_MINUTE"});
  }

  function onGo(status) {
    setGoStatus(status)
  }

  const timerContext = {
    timer: contextTimer.timer,
    go: goStatus,
    setGo: onGo,
    addMinute: addMinuteTimer,
    minusMinute: minusMinuteTimer,
  }

  return (
    <FlashcardContext.Provider value={timerContext}>
      {children}
    </FlashcardContext.Provider>
  )
}

export default TimerProvider;
