import classes from "./VerbCards.module.css";
import { VerbInfo } from "../info/verb-info";
import VerbCard from "./VerbCard";

export default function VerbCards() {
  return (
    <section>
      <div className={classes["verb-cards__container"]}>
        {VerbInfo.map(verb => (
          <VerbCard
            key={verb.infintive}
            verb={verb.infintive}
            translation={verb.translation}
          />
        ))}
      </div>
    </section>
  )
}
