import { useCallback, useEffect, useState } from "react";
import classes from "./UsernameModal.module.css";
import { motion } from "framer-motion";
import { UsernameInfo } from "../info/username-info";

import { useDispatch } from 'react-redux';
import { userActions } from "../store/user-slice";

export default function UsernameModal({ onUsernameCreation }) {
  const dispatch = useDispatch();
  const [randomUsername, setRandomUsername] = useState([]);
  const [formattedUsername, setFormattedUsername] = useState("");
  const [usernamesData, setUsernamesData] = useState([]);

  const generateUsername = useCallback(() => {
    const randomAdj = UsernameInfo.adj[Math.floor(Math.random() * UsernameInfo.adj.length)];
    const randomAnimal = UsernameInfo.animal[Math.floor(Math.random() * UsernameInfo.animal.length)];
    const randomNum = UsernameInfo.number[Math.floor(Math.random() * UsernameInfo.number.length)];
    const formattedNum = randomNum < 10 ? "0" + randomNum.toString() : randomNum.toString();
    const newRandomUsername = [randomAdj, "_", randomAnimal, "_", formattedNum];
    const newFormattedUsername = newRandomUsername.join("");
    setRandomUsername(newRandomUsername);
    setFormattedUsername(newFormattedUsername);
  }, [])

  useEffect(() => {
    async function getUsernames() {
      const usernames = await fetch("https://verbify-94228-default-rtdb.europe-west1.firebasedatabase.app/usernames.json");
      const usernamesData = await usernames.json();
      setUsernamesData(usernamesData ? Object.values(usernamesData) : []);
    }

    getUsernames();
  }, [])

  useEffect(() => {
    if (randomUsername.length === 0 || usernamesData.includes(randomUsername)) {
      generateUsername();
    }
  }, [randomUsername, usernamesData, generateUsername]);

  function handleUsername() {
    dispatch(userActions.addUsername({
      username: formattedUsername
    }))
    onUsernameCreation();
  }


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
          onClick={handleUsername}
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{delay: 4}}
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
