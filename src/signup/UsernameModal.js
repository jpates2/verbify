import classes from "./UsernameModal.module.css";
import { motion } from "framer-motion";
import { UsernameInfo } from "../info/username-info";

export default function UsernameModal({ onUsernameCreation }) {
  const randomAdj = UsernameInfo.adj[Math.floor(Math.random() * UsernameInfo.adj.length)];
  const randomAnimal = UsernameInfo.animal[Math.floor(Math.random() * UsernameInfo.animal.length)];
  const randomNum = UsernameInfo.number[Math.floor(Math.random() * UsernameInfo.number.length)];
  const formattedNum = randomNum < 10 ? "0" + randomNum.toString() : randomNum.toString();
  const randomUsername = [randomAdj, "_", randomAnimal, "_", formattedNum];

  return (
    <div className={classes["username-modal__container"]}>
      <motion.div
        animate={{
          opacity: [1, 0.7, 0.4, 0.7, 1],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: 1,
          // repeatDelay: 1
        }}
        className={classes["username-modal__header"]}
      >
        Generating username...
      </motion.div>
      <motion.div
        intial={{opacity: 0, scale: 0}}
        animate={{
          opacity: 1,
          scale: [0, 1.6, 1],
        }}
        transition={{
          duration: 2,
          delay: 3,
          ease: "easeOut",
          times: [0, 0.2, 0.5],
        }}
        className={classes["username-modal__name"]}
      >
        {randomUsername.map((name, i) => (
          <motion.span key={`${name} ${i}`}>
            {name}
          </motion.span>
        ))}
      </motion.div>
      <div className={classes["username-modal__button-container"]}>
        <motion.button
          onClick={onUsernameCreation}
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
          className={classes["username-modal__button"]}
        >
          Next
        </motion.button>
      </div>
    </div>
  )
}
