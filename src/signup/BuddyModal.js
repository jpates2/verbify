import { useContext } from "react";
import { motion } from "framer-motion";
import BuddyContext from "../store/BuddyContext";
import classes from "./BuddyModal.module.css";
import buddyOne from "../assets/images/buddy1.png";

const buddyList = ["Pablo", "Javi", "Rosita", "Carlos", "Lola", "Sofia"]

export default function BuddyModal() {
  const buddyCtx = useContext(BuddyContext);

  function handleBuddySelection(event) {
    buddyCtx.selectBuddy(event.target.id)
  }

  console.log(buddyCtx.buddy);

  return (
    <div className={classes["buddy-modal__container"]}>
      <div className={classes["buddy-modal__header"]}>Choose your learning buddy...</div>
      <div className={classes["buddy-modal__image-container"]}>
        <div className={classes["buddy-modal__image-circle"]}>
          <img onClick={handleBuddySelection} id="Pablo" src={buddyOne} alt="alien learning buddy" />
        </div>
        <div className={classes["buddy-modal__image-circle"]}>
          <img src={buddyOne} alt="alien learning buddy" />
        </div>
        <div className={classes["buddy-modal__image-circle"]}>
          <img src={buddyOne} alt="alien learning buddy" />
        </div>
        <div className={classes["buddy-modal__image-circle"]}>
          <img src={buddyOne} alt="alien learning buddy" />
        </div>
        <div className={classes["buddy-modal__image-circle"]}>
          <img src={buddyOne} alt="alien learning buddy" />
        </div>
        <div className={classes["buddy-modal__image-circle"]}>
          <img src={buddyOne} alt="alien learning buddy" />
        </div>
      </div>
      <div className={classes["buddy-modal__button-container"]}>
        <motion.button
          // onClick={onBuddySelection}
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{delay: 5}}
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
