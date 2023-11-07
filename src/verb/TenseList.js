import { motion } from "framer-motion";
import classes from "./TenseList.module.css";

export default function TenseList ({ tenses, activeTense, onTenseClick, tenseSection }) {
  const listClasses = (tenseSection === "indicative" || tenseSection === "perfect" || tenseSection === "progressive") ? `${classes["tense-group__list"]} ${classes["tense-group__double-list"]}` : `${classes["tense-group__list"]}`

  return (
    <motion.ul className={listClasses}>
      {tenses.map((tense) => (
        <motion.li key={tense}>
          <div onClick={() => onTenseClick(tense.toLowerCase())}>{tense}</div>
          {activeTense === tense.toLowerCase() && (
            <motion.div className={classes["tense__underline"]} layoutId={`animate-tense-${tenseSection}`}></motion.div>
          )}
        </motion.li>
      ))}
    </motion.ul>
  );
};
