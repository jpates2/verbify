import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import SlideInSection from '../layout/SlideInSection';
import classes from "./StartLearning.module.css";

export default function StartLearning() {
  return (
    <SlideInSection>
      <div id="start" className={classes["start__container"]}>
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
      </div>
    </SlideInSection>
  )
}
