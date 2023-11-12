import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import classes from "./LearnCard.module.css";
import { Link } from 'react-router-dom';

const imgMotion = {
  start: {
    scale: 1,
    opacity: 1
  },
  hover: {
    scale: 1.1,
    opacity: 0.6,
    transition: {
      duration: 0.5,
      type: "tween",
      ease: "easeIn"
    }
  }
}

const infoMotion = {
  start: {
    y: 20
  },
  hover: {
    y: 0,
    transition: {
      duration: 0.5,
      type: "tween",
      ease: "easeIn"
    }
  }
}

const linkMotion = {
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




export default function LearnCard({ title, description, image, link, to}) {
  const [screenSize, setScreenSize] = useState(window.innerWidth)

  const updateMedia = () => {
    setScreenSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  const mobileLearnCard = (
    <div className={classes["learn-card__container"]}>
      <div className={classes["learn-card__image-container"]}>
        <img src={image} alt="" className={classes["learn-card__image"]} />
      </div>
      <div className={classes["learn-card__info"]}>
        <h5 className={classes["learn-card__title"]}>{title}</h5>
        <p className={classes["learn-card__description"]}>{description}</p>
      </div>
        <Link to={to}><button className={classes["learn-card__link"]}>{link}</button></Link>
    </div>
  )

  const desktopLearnCard = (
    <motion.div
      className={classes["learn-card__container"]}
      initial="start"
      whileHover="hover"
    >
      <div className={classes["learn-card__image-container"]}>
        <motion.img src={image} alt="" className={classes["learn-card__image"]} variants={imgMotion} />
      </div>
      <motion.div className={classes["learn-card__info"]} variants={infoMotion}>
        <h5 className={classes["learn-card__title"]}>{title}</h5>
        <p className={classes["learn-card__description"]}>{description}</p>
      </motion.div>
        <Link to={to}><motion.button className={classes["learn-card__link"]} variants={linkMotion}>{link}</motion.button></Link>
    </motion.div>
  )

  return (
    <>
      {screenSize >= 800 && desktopLearnCard}
      {screenSize < 800 && mobileLearnCard}
    </>
  )
}
