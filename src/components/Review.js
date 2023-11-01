import { motion, AnimatePresence } from "framer-motion";
import classes from "./Review.module.css";

export default function Review({ text, name, location }) {
  return (
    <AnimatePresence>
      <motion.div
        className={classes["review__container"]}
        initial={{opacity: 0}}
        animate={{opacity: 1, transition: {delay: 0.2, duration: 1}}}
        exit={{opacity: 0}}
      >
        <p className={classes["review__text"]}>{text}</p>
        <div>
          <p className={classes["review__name"]}>{name}</p>
          <p className={classes["review__location"]}>{location}</p>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
