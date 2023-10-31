import { motion } from 'framer-motion';
import classes from "./StartLearning.module.css";

export default function StartLearning() {
  return (
    <section id="start" className={classes["start__container"]}>
      <h2 className={classes["start__header"]}>Want to start practising now?</h2>
      <motion.button
        className={classes["start__button"]}
        whileHover={{
          scale: 1.1,
          transition: {
            duration: 0.3
          }
        }}
        whileTap={{
          scale: 0.9,
          backgroundColor: "#F9F9F9",
          color: "#FFB400"
        }}
      >
        Let's Go!
      </motion.button>
    </section>
  )
}
