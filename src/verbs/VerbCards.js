import { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./VerbCards.module.css";
import { VerbInfo } from "../info/verb-info";
import VerbCard from "./VerbCard";

export default function VerbCards({ searchTerms }) {
  let initialLimit;
  if (window.innerWidth >= 1000) {initialLimit = 10}
  if (window.innerWidth < 1000 && window.innerWidth > 600) {initialLimit = 8}
  if (window.innerWidth <= 600) {initialLimit = 6}
  const [limit, setLimit] = useState(initialLimit);

  function handleLimitIncrease() {
    setLimit((prevLimit) => {
      return prevLimit + initialLimit;
    })
  }

  const filteredVerbs = VerbInfo.filter(verb => {
    return (verb.infinitive.includes(searchTerms) || verb.translation.includes(searchTerms));
  })

  const verbResults = filteredVerbs.map(verb => (
    <Link to={`/verbs/${verb.infinitive}`} key={verb.infinitive}>
      <VerbCard
        verb={verb.infinitive}
        translation={verb.translation}
      />
    </Link>
  ))

  return (
    <section>
      <div className={classes["verb-cards__container"]}>
        {verbResults.slice(0, limit)}
      </div>
      <div className={classes["verb-cards__button-container"]}>
        {limit < filteredVerbs.length && <button onClick={handleLimitIncrease} className={classes["verb-cards__add-button"]}>View More</button>}
      </div>
    </section>
  )
}
