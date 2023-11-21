import { useContext } from "react";
import { motion } from "framer-motion";
import BuddyContext from "../store/BuddyContext";
import classes from "./BuddyModal.module.css";
import buddyOne from "../assets/images/buddy1.png";
import Buddy from "./Buddy";

const buddyList = [
  {
    buddyName: "Pablo",
    image: buddyOne,
  },
  {
    buddyName: "Javi",
    image: buddyOne
  },
  {
    buddyName: "Rosita",
    image: buddyOne,
  },
  {
    buddyName: "Carlos",
    image: buddyOne,
  },
  {
    buddyName: "Lola",
    image: buddyOne,
  },
  {
    buddyName: "Sofia",
    image: buddyOne,
  }
]

export default function BuddyModal() {
  const buddyCtx = useContext(BuddyContext);

  function handleBuddySelection(event) {
    buddyCtx.selectBuddy(event.target.id)
  }

  return (
    <div className={classes["buddy-modal__container"]}>
      <div className={classes["buddy-modal__header"]}>Choose your learning buddy...</div>
      <div className={classes["buddy-modal__image-container"]}>
        {buddyList.map(buddy => (
          <Buddy key={buddy.buddyName} activeBuddy={buddyCtx.buddy === buddy.buddyName} buddyName={buddy.buddyName} image={buddy.image} onBuddySelection={handleBuddySelection} />
        ))}
      </div>
      <div className={classes["buddy-modal__button-container"]}>
        <motion.button
          // onClick={onBuddySelection}
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          whileHover={{
            scale: 1.1,
            transition: {
              duration: 0.3
            }
          }}
          whileTap={{
            scale: 0.9,
          }}
          className={classes["buddy-modal__button"]}
        >
          Next
        </motion.button>
      </div>
    </div>
  )
}
