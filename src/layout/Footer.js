import classes from "./Footer.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
    <footer>
      <p className={classes["footer__text"]}>Created by Jess Pates</p>
      <div className={classes["footer__links"]}>
        <a href="https://www.linkedin.com/in/jess-pates/" target="_blank" rel="noreferrer"><i className={`${classes["footer__link"]}`}><FontAwesomeIcon icon={faLinkedin} /></i></a>
        <a href="https://github.com/jpates2/bros-pizza" target="_blank" rel="noreferrer"><i className={`${classes["footer__link"]}`}><FontAwesomeIcon icon={faGithubSquare} /></i></a>
      </div>
    </footer>
  )
}
