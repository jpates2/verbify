import React from "react";

const FlashcardContext = React.createContext({
  timer: 1,
  addMinute: () => {},
  minusMinute: () => {},
})

export default FlashcardContext;
