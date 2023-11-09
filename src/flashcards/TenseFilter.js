import { useState } from "react";
import classes from "./TenseFilter.module.css";
import TenseItem from "./TenseItem";
import { AllTenses } from "../info/verb-info";


export default function TenseFilter() {

  const [expanded, setExpanded] = useState(null)
  const [activeTense, setActiveTense] = useState("");
  const [showTense, setShowTense] = useState(false);

  const openTenseHandler = () => {
    setShowTense(true);
  }

  const closeTenseHandler = () => {
    setShowTense(false);
  }

  function handleExpand(id) {
    setExpanded((prevId) => {
      if (prevId === id) {
        return null;
      }
      return id;
    })
    setActiveTense((prevId) => {
      if (prevId === id) {
        return null;
      }
      return id;
    })
  }

  const filters = AllTenses.map(filter => (
    <TenseItem
      key={filter.id}
      tense={filter.tense}
      sub={filter.sub}
      onExpand={() => handleExpand(filter.id)}
      isExpanded={expanded === filter.id}
      isActiveTense={activeTense === filter.id}
      isVisibleTense={showTense}
      onClose={closeTenseHandler}
      onOpen={openTenseHandler}
      activeTense={activeTense}
    />
  ))

  return (
    <section className={classes["tense-filters__container"]}>
      {filters}
    </section>
  )
}
