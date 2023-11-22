import { useContext } from "react";
import { motion } from "framer-motion";
import BuddyContext from "../store/BuddyContext";
import classes from "./BuddyModal.module.css";
import Buddy from "./Buddy";
import { buddyInfo } from "../info/buddy-info";

export default function BuddyModal({ onBuddySelected }) {
  const buddyCtx = useContext(BuddyContext);

  function handleBuddySelection(event) {
    // console.log(buddyCtx.buddyName)

    buddyCtx.selectBuddy({name: event.target.id, image: event.target.src})
  }

  return (
    <div className={classes["buddy-modal__container"]}>
      <div className={classes["buddy-modal__header"]}>Choose your learning buddy...</div>
      <div className={classes["buddy-modal__image-container"]}>
        {buddyInfo.map(buddy => (
          <Buddy key={buddy.buddyName} activeBuddy={buddyCtx.buddyName === buddy.buddyName} buddyName={buddy.buddyName} image={buddy.image} onBuddySelection={handleBuddySelection} />
        ))}
      </div>
      <div className={classes["buddy-modal__button-container"]}>
        <motion.button
          onClick={onBuddySelected}
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
