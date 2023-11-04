import { Link } from "react-router-dom";
import classes from "./VerbCards.module.css";
import { VerbInfo } from "../info/verb-info";
import VerbCard from "./VerbCard";

export default function VerbCards() {
  return (
    <section>
      <div className={classes["verb-cards__container"]}>
        {VerbInfo.map(verb => (
          <Link to={`/verbs/${verb.infinitive}`} key={verb.infinitive}>
            <VerbCard
              verb={verb.infinitive}
              translation={verb.translation}
            />
          </Link>
        ))}
      </div>
    </section>
  )
}
