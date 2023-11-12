import { motion } from 'framer-motion';
import SlideInSection from '../layout/SlideInSection';
import classes from "./StartLearning.module.css";
import { Link } from 'react-router-dom';

export default function StartLearning() {
  return (
    <SlideInSection>
      <div id="start" className={classes["start__container"]}>
        <h2 className={classes["start__header"]}>Start practising now...</h2>
        <Link to="/flashcards"><motion.button
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
        </motion.button></Link>
      </div>
    </SlideInSection>
  )
}
