import { motion } from "framer-motion";
import classes from "./BuddyModal.module.css";
import Buddy from "./Buddy";
import { buddyInfo } from "../info/buddy-info";

import { useDispatch, useSelector } from 'react-redux';
import { buddyActions } from "../store/buddy-slice";

export default function BuddyModal({ onBuddySelected }) {
  const dispatch = useDispatch();
  const buddyDetails = useSelector(state => state.buddy);

  function setBuddy(event) {
    dispatch(buddyActions.addBuddy({
      buddyName: event.target.id,
      buddyImg: event.target.src
    }))
  }

  return (
    <div className={classes["buddy-modal__container"]}>
      <div className={classes["buddy-modal__header"]}>Choose your learning buddy...</div>
      <div className={classes["buddy-modal__image-container"]}>
        {buddyInfo.map(buddy => (
          <Buddy key={buddy.buddyName} activeBuddy={buddyDetails.buddyName === buddy.buddyName} buddyName={buddy.buddyName} image={buddy.image} onBuddySelection={setBuddy} />
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


// <Buddy key={buddy.buddyName} activeBuddy={buddyCtx.buddyName === buddy.buddyName} buddyName={buddy.buddyName} image={buddy.image} onBuddySelection={setBuddy} />
// ))}
