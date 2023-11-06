import { motion } from "framer-motion";
import classes from "./VerbCard.module.css";

export default function VerbCard({ verb, translation }) {
  return (
    <motion.div
      initial={{opacity: 0, scale: 0.5}}
      animate={{opacity: 1, scale: 1}}
      transition={{duration: 0.5}}
      exit={{opacity: 1, scale: 1}}
      whileHover={{
        scale: 1.1,
        transition: {
          duration: 0.3
        }
      }}
      whileTap={{scale: 0.9}}
      className={classes["verb-card"]}
    >
      <div className={classes["verb-card__spanish"]}>{verb}</div>
      <div className={classes["verb-card__english"]}>{translation}</div>
    </motion.div>
  )
}
