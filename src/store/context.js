import React from "react";

const FlashcardContext = React.createContext({
  timer: 1,
  go: false,
  setGo: () => {},
  addMinute: () => {},
  minusMinute: () => {},
})

export default FlashcardContext;
