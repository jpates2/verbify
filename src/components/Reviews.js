import { useState } from "react";
import { motion } from "framer-motion";
import classes from "./Reviews.module.css";
import Review from "./Review";
import SlideInSection from "../layout/SlideInSection";
import { ReviewInfo } from "../info/review-info";

const dashVariant = {
  active: {
    backgroundColor: "#F4442E",
    transition: { duration: 1 }
  },
  inactive: {
    backgroundColor: "#FFB400",
    transition: { duration: 1 }
  }
}

export default function Reviews() {
  const [reviewIndex, setReviewIndex] = useState(2)

  function handleDash(dash) {
    setReviewIndex(dash);
  }

  return (
    <SlideInSection>
      <div className={classes["reviews__section"]}>
        <h2 className={classes["reviews__header"]}>Hear from the Verbify community...</h2>
        <div className={classes["reviews__container"]}>
          <div className={classes["reviews__inner"]}>
            <Review
              key={ReviewInfo[reviewIndex].name}
              text={ReviewInfo[reviewIndex].text}
              name={ReviewInfo[reviewIndex].name}
              location={ReviewInfo[reviewIndex].location}
            />
          </div>
        </div>
        <div className={classes["reviews__dashes"]}>
          <motion.span
            onClick={() => handleDash(0)}
            className={classes["reviews__dash"]}
            initial="inactive"
            animate={reviewIndex === 0 ? "active" : "inactive"}
            variants={dashVariant}
          ></motion.span>
          <motion.span
            onClick={() => handleDash(1)}
            className={classes["reviews__dash"]}
            initial="inactive"
            animate={reviewIndex === 1 ? "active" : "inactive"}
            variants={dashVariant}
          ></motion.span>
          <motion.span
            onClick={() => handleDash(2)}
            className={classes["reviews__dash"]}
            initial="inactive"
            animate={reviewIndex === 2 ? "active" : "inactive"}
            variants={dashVariant}
          ></motion.span>
          <motion.span
            onClick={() => handleDash(3)}
            className={classes["reviews__dash"]}
            initial="inactive"
            animate={reviewIndex === 3 ? "active" : "inactive"}
            variants={dashVariant}
          ></motion.span>
          <motion.span
            onClick={() => handleDash(4)}
            className={classes["reviews__dash"]}
            initial="inactive"
            animate={reviewIndex === 4 ? "active" : "inactive"}
            variants={dashVariant}
          ></motion.span>
        </div>
      </div>
    </SlideInSection>
  )
}
