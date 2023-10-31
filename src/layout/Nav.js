import { motion } from 'framer-motion';
import classes from "./Nav.module.css";

export default function Nav() {
  return (
    <nav>
      <div className={classes["nav__container"]}>
        <div>Verbs</div>
        <div>Flashcards</div>
        <motion.button
          className={classes["nav__button"]}
          whileHover={{
            scale: 1.1,
            transition: {
              duration: 0.3
            }
          }}
          whileTap={{
            scale: 0.9,
            color: "#FFB400",
          }}
        >Sign Up</motion.button>
      </div>
    </nav>
  )
}
