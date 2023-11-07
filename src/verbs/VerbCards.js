import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import classes from "./VerbCards.module.css";
import VerbCard from "./VerbCard";
import { fetchVerbs } from "../util/http";

export default function VerbCards({ searchTerms }) {
  const [allVerbs, setAllVerbs] = useState([])

  let initialLimit;
  if (window.innerWidth >= 1000) {initialLimit = 50}
  if (window.innerWidth < 1000 && window.innerWidth > 600) {initialLimit = 30}
  if (window.innerWidth <= 600) {initialLimit = 20}
  const [limit, setLimit] = useState(initialLimit);

  function handleLimitIncrease() {
    setLimit((prevLimit) => {
      return prevLimit + initialLimit;
    })
  }

  useEffect(() => {
    async function getVerbs() {
      try {
        const verbs = await fetchVerbs();
        console.log(verbs);
        setAllVerbs(verbs);
      } catch (error) {

      }
    }
    getVerbs();
  }, [])

  const filteredVerbs = allVerbs.filter(verb => {
    return (verb.infinitive.includes(searchTerms) || verb.translation.includes(searchTerms));
  })

  const sortedVerbs = filteredVerbs.sort(function(a, b) {
    return a.infinitive.localeCompare(b.infinitive);
 })

  const verbResults = sortedVerbs.map(verb => (
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
        {limit < filteredVerbs.length &&
          <motion.button
            whileHover={{
              scale: 1.1,
              transition: {
                duration: 0.3
              }
            }}
            whileTap={{
              scale: 0.9,
              backgroundColor: "#F9F9F9",
              color: "#F4442E"
            }}
            onClick={handleLimitIncrease}
            className={classes["verb-cards__add-button"]}
          >
            View More
          </motion.button>
        }
      </div>
    </section>
  )
}
