import { Link } from "react-router-dom";
import classes from "./VerbCards.module.css";
import styles from "../styles/shared.module.css";
import VerbCard from "./VerbCard";
import Error from "../layout/Error";
import { useFetchVerbs } from "../hooks/useFetchVerbs";
import ViewMoreButton from "../layout/ViewMoreButton";

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
          <ViewMoreButton onIncreaseLimit={handleLimitIncrease} />
        }
      </div>}
    </section>
  )
}
