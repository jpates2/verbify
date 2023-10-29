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
            <LearnCard title={LearnInfo[0].title} description={LearnInfo[0].description} />
            <LearnCard title={LearnInfo[1].title} description={LearnInfo[1].description} />
            <LearnCard title={LearnInfo[2].title} description={LearnInfo[2].description} />
            <LearnCard title={LearnInfo[3].title} description={LearnInfo[3].description} />
          </div>
        </div>
      </section>
    </>
  )
}
