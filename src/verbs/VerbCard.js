import { motion } from "framer-motion";
import classes from "./VerbCard.module.css";

export default function VerbCard({ verb, translation }) {
  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 1}}
      exit={{opacity: 1}}
      className={classes["verb-card"]}
    >
      <div className={classes["verb-card__spanish"]}>{verb}</div>
      <div className={classes["verb-card__english"]}>{translation}</div>
    </motion.div>
  )
}
