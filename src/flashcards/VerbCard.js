import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import classes from "./VerbCard.module.css";

const upperMotion = {
  start: {
    opacity: 1,
    scale: 1,
  },
  hover: {
    opacity: 0.8,
    scale: 0.9,
    transition: {
      duration: 0.5,
      type: "tween",
      ease: "easeIn"
    }
  }
}

const lowerMotion = {
  start: {
    opacity: 0,
    y: 20,
  },
  hover: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      type: "tween",
      ease: "easeIn"
    }
  }
}

export default function VerbCard({ verb, translation, regular }) {
  const [screenSize, setScreenSize] = useState(window.innerWidth)

  const updateMedia = () => {
    setScreenSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  const mobileVerbCard = (
    <div className={classes["verb-card"]}>
      <div>
        <div className={classes["verb-card__spanish"]}>{verb}</div>
        <div className={classes["verb-card__english"]}>{translation}</div>
      </div>
      <div className={classes["verb-card__lower"]}>
        <div className={classes["verb-card__regular"]}>{regular === true ? "Regular" : "Irregular"}</div>
        <Link to={`/flashcards/${verb}`}>
          <motion.button
            className={classes["verb-card__button"]}
            animate={{
              opacity: [1, 0.7, 0.4, 0.7, 1],
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              times: [0, 0.2, 0.5, 0.8, 1],
              repeat: Infinity,
              repeatDelay: 1
            }}
          >Go to Flashcards</motion.button>
        </Link>
      </div>
    </div>
  )

  const desktopVerbCard = (
    <motion.div
      className={classes["verb-card"]}
      initial="start"
      whileHover="hover"
    >
      <motion.div variants={upperMotion}>
        <div className={classes["verb-card__spanish"]}>{verb}</div>
        <div className={classes["verb-card__english"]}>{translation}</div>
      </motion.div>
      <motion.div
        className={classes["verb-card__lower"]}
        variants={lowerMotion}
      >
        <div className={classes["verb-card__regular"]}>{regular === true ? "Regular" : "Irregular"}</div>
        <Link to={`/flashcards/${verb}`}>
          <button className={classes["verb-card__button"]}>Go to Flashcards</button>
        </Link>
      </motion.div>
    </motion.div>
  )

  return (
    <>
      {screenSize >= 800 && desktopVerbCard}
      {screenSize < 800 && mobileVerbCard}
    </>
  )
}
