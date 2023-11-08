import { motion } from "framer-motion";
import classes from "./ViewMoreButton.module.css";

export default function ViewMoreButton({ onIncreaseLimit }) {
  return (
    <motion.button
      whileHover={{
        scale: 1.1,
        transition: {
          duration: 0.3
        }
      }}
      whileTap={{
        scale: 0.9,
        backgroundColor: "#F9F9F9",
        color: "#F4442E"
      }}
      onClick={onIncreaseLimit}
      className={classes["verb-cards__add-button"]}
    >
      View More
    </motion.button>
  )
}
