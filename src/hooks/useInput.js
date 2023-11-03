import { useState } from "react";

export function useInput(defaultValue, validateFn) {
  const [enteredValue, setEnteredValue] = useState(defaultValue);
  const [inputEdited, setInputEdited] = useState(false);

  const valueIsValid = validateFn(enteredValue);

  function handleInputChange (event) {
    setEnteredValue(event.target.value);
  }

  function handleInputBlur () {
    setInputEdited(true);
  }

  function handleInputSubmit () {
    setInputEdited(true);
  }

  const handleInputReset = () => {
    setEnteredValue("");
    setInputEdited(false);
  }

  return {
    value: enteredValue,
    isValid: valueIsValid,
    handleInputChange,
    handleInputBlur,
    handleInputSubmit,
    handleInputReset,
    hasError: inputEdited && !valueIsValid
  }
}
