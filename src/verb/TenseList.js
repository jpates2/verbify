import { motion } from "framer-motion";
import classes from "./TenseList.module.css";

export default function TenseList ({ tenses, activeTenses, onTenseClick, tenseSection }) {
  console.log(activeTenses);
  return (
    <motion.ul className={classes["tense-group__list"]}>
      {tenses.map((tense) => (
        <motion.li key={tense}>
          <div onClick={() => onTenseClick(tense.toLowerCase())}>{tense}</div>
          {activeTenses[tenseSection] === tense.toLowerCase() && (
            <motion.div className={classes["tense__underline"]} layoutId="animate-tense"></motion.div>
          )}
        </motion.li>
      ))}
    </motion.ul>
  );
};
