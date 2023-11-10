import classes from "./TenseItem.module.css";
import { motion, AnimatePresence } from "framer-motion";

const buttonHover = {
  backgroundColor: "#FFB400",
  color: "#F9F9F9"
}

export default function TenseItem({ tense, sub, onExpand, isExpanded, activeTense }) {
  const subContent = sub.map(section => (
    <div key={`${tense} ${section}`} className={classes["tense-item__line"]}>
      <div className={classes["tense-item__line-name"]}>{section}</div>
      <div className={classes["tense-item__line-options"]}>
        <motion.button whileHover={buttonHover}>Regular</motion.button>
        <motion.button whileHover={buttonHover}>Irregular</motion.button>
        <motion.button whileHover={buttonHover}>All</motion.button>
      </div>
    </div>
  ))

  // return (
  //   <div className={classes["tense-item"]}>
  //     <div onClick={onExpand} className={classes["tense-item__header"]}>
  //       <motion.div className={`${classes["tense-item__name"]} ${isExpanded ? classes.boldFont : classes.normalFont}`}>{tense}</motion.div>
  //       <motion.div animate={{rotate: isExpanded ? -180 : 0}} className={classes["tense-item__icon"]}>	&#8964;</motion.div>
  //     </div>
  //     <AnimatePresence>
  //       <motion.div initial={{height: 0, opacity: 0}} animate={{height: "auto", opacity: 1}} exit={{height: 0, opacity: 0}} className={classes["tense-item__content"]}>
  //         {isExpanded && subContent}
  //       </motion.div>
  //     </AnimatePresence>
  //   </div>
  // )

  return (
    <div className={classes["tense-item"]} >
      <div onClick={onExpand} className={classes["tense-item__header"]} >
        <motion.div
          className={`${classes["tense-item__name"]} ${isExpanded ? classes.boldFont : classes.normalFont}`}
        >
          {tense}
        </motion.div>
        <motion.div animate={{rotate: isExpanded ? 180 : 0}} className={classes["tense-item__icon"]}> &#8964;</motion.div>
      </div>
      <AnimatePresence>
        {isExpanded && (
          <motion.div initial={{height: 0, opacity: 0}} animate={{height: "auto", opacity: 1}} exit={{height: 0, opacity: 0}} >
            <div className={classes["tense-item__details"]}>
              {subContent}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  )
}
