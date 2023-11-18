import { motion } from 'framer-motion';
import styles from "../styles/forms.module.css";

export default function LoginFormButton() {
  return (
    <div className={styles["form__submit-container"]}>
      <motion.button
        className={styles["form__submit"]}
        whileHover={{
          scale: 1.1,
          transition: {
            duration: 0.3
          }
        }}
        whileTap={{
          scale: 0.9,
        }}
      >Submit</motion.button>
    </div>
  )
}
