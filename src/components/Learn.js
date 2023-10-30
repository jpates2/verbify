import LearnCard from "./LearnCard";
import { LearnInfo } from "../info/learn-info";
import styles from "../styles/shared.module.css";
import classes from "./Learn.module.css";


export default function Learn() {
  return (
    <>
      <section id="learn">
      <div className={classes["learn__container-background"]}></div>
        <div className={classes["learn__container"]}>
          <h2 className={styles["section-header"]}>Learn with Verbify</h2>
          <div className={classes["learn__cards"]}>
            {LearnInfo.map(card => (
              <LearnCard key={card.title} title={card.title} description={card.description} image={card.img} link={card.link} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
