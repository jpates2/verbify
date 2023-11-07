import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import classes from "./VerbCards.module.css";
import styles from "../styles/shared.module.css";
import VerbCard from "./VerbCard";
import { fetchVerbs } from "../util/http";
import Error from "../layout/Error";

export default function VerbCards({ searchTerms }) {
  const [allVerbs, setAllVerbs] = useState([]);
  const [fetchingVerbs, setFetchingVerbs] = useState();
  const [error, setError] = useState();

  let initialLimit;
  if (window.innerWidth >= 1200) {initialLimit = 50}
  if (window.innerWidth < 1200 && window.innerWidth > 700) {initialLimit = 30}
  if (window.innerWidth <= 700) {initialLimit = 20}
  const [limit, setLimit] = useState(initialLimit);

  function handleLimitIncrease() {
    setLimit((prevLimit) => {
      return prevLimit + initialLimit;
    })
  }

  useEffect(() => {
    async function getVerbs() {
      setFetchingVerbs(true);
      try {
        const verbs = await fetchVerbs();
        setAllVerbs(verbs);
      } catch (error) {
        setError({ message: error.message || 'Failed to fetch data. Please reload the page to try again.' });
      }
      setFetchingVerbs(false);
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

  if (error) {
    return (
      <Error title="An error occurred!" message="Please reload the page and try again." />
    )
  }


  return (
    <section>
      {fetchingVerbs && <p className={styles["loading-text"]}>Loading...</p>}

      {!fetchingVerbs && <div className={classes["verb-cards__container"]}>
        {verbResults.slice(0, limit)}
      </div>}
      {!fetchingVerbs && <div className={classes["verb-cards__button-container"]}>
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
      </div>}
    </section>
  )
}
