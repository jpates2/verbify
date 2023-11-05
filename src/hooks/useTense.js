import { useState } from "react";

export function useTense(initialTense) {
  const [activeTense, setActiveTense] = useState(initialTense);

  function updateTense(tense) {
    setActiveTense(tense);
  }

  return [activeTense, updateTense];
}
