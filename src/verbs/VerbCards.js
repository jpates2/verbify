import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import classes from "./VerbCards.module.css";
import styles from "../styles/shared.module.css";
import VerbCard from "./VerbCard";
import Error from "../layout/Error";
import { useFetchVerbs } from "../hooks/useFetchVerbs";

export default function VerbCards({ searchTerms }) {
  const limits = [50, 30, 20];

  const {
    sortedVerbs,
    fetchingVerbs,
    error,
    limit,
    handleLimitIncrease
  } = useFetchVerbs(searchTerms, limits);

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
        {limit < verbResults.length &&
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
