import { useFetchVerbs } from "../hooks/useFetchVerbs";
import VerbCard from "./VerbCard";
import Error from "../layout/Error";
import classes from "./VerbCards.module.css";
import styles from "../styles/shared.module.css";
import ViewMoreButton from "../layout/ViewMoreButton";

export default function VerbCards({ searchTerms }) {
  const limits = [30, 20, 10];

  const {
    sortedVerbs,
    fetchingVerbs,
    error,
    limit,
    handleLimitIncrease
  } = useFetchVerbs(searchTerms, limits);

  const verbResults = sortedVerbs.map(verb => (
      <VerbCard
        key={verb.infinitive}
        verb={verb.infinitive}
        translation={verb.translation}
        regular={verb.regular}
      />
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
